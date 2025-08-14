import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

interface LoginDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const LoginDialog = ({ open, onOpenChange }: LoginDialogProps) => {
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!phone || !code) {
      toast({
        title: "请填写完整信息",
        description: "请输入手机号和验证码",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    const success = await login(phone, code);
    
    if (success) {
      toast({
        title: "登录成功",
        description: "欢迎来到咪咕声空"
      });
      onOpenChange(false);
      navigate('/studio');
    } else {
      toast({
        title: "登录失败",
        description: "手机号或验证码错误",
        variant: "destructive"
      });
    }
    setIsLoading(false);
  };

  const fillDemo = () => {
    setPhone('13583983899');
    setCode('1234');
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold">登录 / 注册</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="phone">手机号</Label>
            <Input
              id="phone"
              placeholder="请输入手机号"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              maxLength={11}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="code">验证码</Label>
            <div className="flex gap-2">
              <Input
                id="code"
                placeholder="请输入验证码"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                maxLength={4}
              />
              <Button variant="outline" size="sm" disabled>
                获取验证码
              </Button>
            </div>
          </div>

          <Button 
            variant="ghost" 
            size="sm" 
            onClick={fillDemo}
            className="w-full text-muted-foreground"
          >
            点击填入演示数据
          </Button>
          
          <Button 
            onClick={handleLogin} 
            className="w-full"
            disabled={isLoading}
          >
            {isLoading ? "登录中..." : "登录"}
          </Button>
          
          <p className="text-xs text-muted-foreground text-center">
            登录即表示同意《用户协议》和《隐私政策》
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};
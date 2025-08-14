import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Music, Menu, User, Sparkles, LogOut } from "lucide-react";
import { LoginDialog } from './LoginDialog';
import { useAuth } from '@/hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [showLoginDialog, setShowLoginDialog] = useState(false);
  const { isLoggedIn, logout, user } = useAuth();
  const navigate = useNavigate();

  const handleLoginClick = () => {
    if (isLoggedIn) {
      navigate('/studio');
    } else {
      setShowLoginDialog(true);
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
              <Music className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                咪咕声空
              </span>
              <span className="text-xs text-muted-foreground -mt-1">Migu Sonic</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-foreground hover:text-primary transition-colors">
              功能特色
            </a>
            <a href="#studio" className="text-foreground hover:text-primary transition-colors">
              创作工作室
            </a>
            <a href="#community" className="text-foreground hover:text-primary transition-colors">
              创作者社区
            </a>
            <a href="#ecosystem" className="text-foreground hover:text-primary transition-colors">
              生态融合
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {isLoggedIn ? (
              <>
                <span className="text-foreground text-sm hidden sm:inline">
                  {user?.phone}
                </span>
                <Button 
                  variant="hero" 
                  size="sm" 
                  onClick={handleLoginClick}
                  className="flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  创作台
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={handleLogout}
                  className="hidden md:flex"
                >
                  <LogOut className="w-4 h-4" />
                </Button>
              </>
            ) : (
              <>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="hidden md:flex"
                  onClick={() => setShowLoginDialog(true)}
                >
                  登录
                </Button>
                <Button 
                  variant="hero" 
                  size="sm" 
                  className="flex items-center gap-2"
                  onClick={handleLoginClick}
                >
                  <Sparkles className="w-4 h-4" />
                  立即创作
                </Button>
              </>
            )}
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </header>

      <LoginDialog 
        open={showLoginDialog} 
        onOpenChange={setShowLoginDialog} 
      />
    </>
  );
};

export default Header;
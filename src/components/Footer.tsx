import { Music, Heart, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center">
                <Music className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold">咪咕声空</span>
                <span className="text-sm text-background/70">Migu Sonic</span>
              </div>
            </div>
            <p className="text-background/80 text-sm leading-relaxed mb-6">
              AI驱动的音乐创作平台，让每个人都能轻松创作属于自己的原创歌曲。
              深度融合中国移动与咪咕生态，连接亿万用户。
            </p>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm" className="bg-transparent border-background/30 text-background hover:bg-background/10">
                关注我们
              </Button>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold mb-4 text-background">产品功能</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">一语成曲</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">纯音乐生成</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">多轨编辑器</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">歌词编辑</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">AI混音</a></li>
            </ul>
          </div>

          {/* Ecosystem */}
          <div>
            <h3 className="font-semibold mb-4 text-background">生态服务</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">一键设彩铃</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">发布至咪咕音乐</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">创作者社区</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">版权保护</a></li>
              <li><a href="#" className="text-background/80 hover:text-background transition-colors">商业授权</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-background">联系我们</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-background/60" />
                <span className="text-background/80">support@migusonic.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-background/60" />
                <span className="text-background/80">400-xxx-xxxx</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-background/60 mt-0.5" />
                <span className="text-background/80">北京市朝阳区中国移动大厦</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-background/60 text-center md:text-left">
              © 2024 咪咕声空 (Migu Sonic). All rights reserved. | 
              <span className="ml-2">中国移动通信集团有限公司</span>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-background/60 hover:text-background transition-colors">隐私政策</a>
              <a href="#" className="text-background/60 hover:text-background transition-colors">服务条款</a>
              <a href="#" className="text-background/60 hover:text-background transition-colors">版权声明</a>
            </div>
          </div>
          <div className="text-center mt-4">
            <p className="text-xs text-background/50 flex items-center justify-center gap-1">
              Made with <Heart className="w-3 h-3 text-red-400" /> by Migu AI Team
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
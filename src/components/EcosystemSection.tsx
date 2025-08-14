import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Smartphone, 
  Music, 
  Share2, 
  Users, 
  Zap,
  ArrowRight,
  Star,
  Headphones
} from "lucide-react";

const EcosystemSection = () => {
  return (
    <section id="ecosystem" className="py-20 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              深度融合
            </span>
            咪咕生态
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            与中国移动、咪咕音乐深度打通，让你的原创作品直达亿万用户
          </p>
        </div>

        {/* Main Ecosystem Features */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Ringtone Feature */}
          <Card className="p-8 shadow-glow bg-gradient-card hover:scale-105 transition-all duration-300">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center flex-shrink-0">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="text-2xl font-bold">一键设为彩铃</h3>
                  <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full font-medium">
                    热门
                  </span>
                </div>
                <p className="text-muted-foreground mb-6 text-lg">
                  与中国移动深度合作，你的原创歌曲可以一键设置为手机彩铃，
                  让朋友每次给你打电话都能听到你的专属音乐
                </p>
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">1.9亿</div>
                    <div className="text-sm text-muted-foreground">移动用户</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-accent">99.9%</div>
                    <div className="text-sm text-muted-foreground">成功率</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary-glow">3秒</div>
                    <div className="text-sm text-muted-foreground">设置时间</div>
                  </div>
                </div>
                <Button variant="hero" className="w-full">
                  立即设为我的彩铃
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </Card>

          {/* Migu Music Publishing */}
          <Card className="p-8 shadow-feature bg-gradient-card hover:scale-105 transition-all duration-300">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center flex-shrink-0">
                <Music className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <h3 className="text-2xl font-bold">发布至咪咕音乐</h3>
                  <span className="bg-accent text-accent-foreground text-xs px-2 py-1 rounded-full font-medium">
                    独家
                  </span>
                </div>
                <p className="text-muted-foreground mb-6 text-lg">
                  优秀作品可直接发布到咪咕音乐平台，获得专业推广资源，
                  成为签约音乐人，开启你的音乐事业
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <Star className="w-5 h-5 text-yellow-500" />
                    <span>专业音乐推广</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-blue-500" />
                    <span>音乐人扶持计划</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Zap className="w-5 h-5 text-green-500" />
                    <span>版权收益分成</span>
                  </div>
                </div>
                <Button variant="feature" className="w-full">
                  申请入驻咪咕音乐
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Ecosystem Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <Card className="p-6 text-center hover:shadow-card transition-all duration-300">
            <Headphones className="w-8 h-8 text-primary mx-auto mb-3" />
            <div className="text-2xl font-bold mb-1">6.8亿</div>
            <div className="text-sm text-muted-foreground">咪咕音乐用户</div>
          </Card>
          <Card className="p-6 text-center hover:shadow-card transition-all duration-300">
            <Share2 className="w-8 h-8 text-accent mx-auto mb-3" />
            <div className="text-2xl font-bold mb-1">1000万+</div>
            <div className="text-sm text-muted-foreground">日分享次数</div>
          </Card>
          <Card className="p-6 text-center hover:shadow-card transition-all duration-300">
            <Music className="w-8 h-8 text-primary-glow mx-auto mb-3" />
            <div className="text-2xl font-bold mb-1">5000万</div>
            <div className="text-sm text-muted-foreground">版权曲库</div>
          </Card>
          <Card className="p-6 text-center hover:shadow-card transition-all duration-300">
            <Users className="w-8 h-8 text-primary mx-auto mb-3" />
            <div className="text-2xl font-bold mb-1">10万+</div>
            <div className="text-sm text-muted-foreground">签约音乐人</div>
          </Card>
        </div>

        {/* Integration Benefits */}
        <Card className="p-8 bg-gradient-hero text-white shadow-glow">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">为什么选择咪咕声空？</h3>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div>
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold mb-2">技术领先</h4>
                <p className="text-white/80">
                  业界最先进的AI音乐生成技术，生成质量媲美专业制作
                </p>
              </div>
              <div>
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold mb-2">生态优势</h4>
                <p className="text-white/80">
                  深度融合中国移动生态，直达9亿移动用户群体
                </p>
              </div>
              <div>
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold mb-2">版权保障</h4>
                <p className="text-white/80">
                  完整的版权保护体系，让你安心创作和商用
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default EcosystemSection;
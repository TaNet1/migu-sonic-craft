import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sparkles, Play, Mic2, Music, ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-primary/30" />
      <div className="absolute inset-0 bg-black/20" />
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary-glow/20 rounded-full blur-2xl animate-ping" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-2 mb-8">
            <Sparkles className="w-4 h-4 text-white" />
            <span className="text-white font-medium">中国移动 × 咪咕音乐生态</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-primary-glow to-white bg-clip-text text-transparent">
              一语成曲
            </span>
            <br />
            <span className="text-4xl md:text-5xl text-white/90">
              让创意瞬间成为旋律
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            AI驱动的音乐创作平台，无论是一句话的灵感，还是完整的歌词创意，
            都能在几秒钟内生成属于你的原创歌曲
          </p>

          {/* Create Input */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 mb-8 max-w-2xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <Input 
                  placeholder="描述你想要的音乐，比如：一首关于星空的抒情民谣..."
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/60 text-lg h-12"
                />
              </div>
              <Button variant="hero" size="lg" className="md:w-auto w-full">
                <Mic2 className="w-5 h-5 mr-2" />
                开始创作
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-white">1M+</div>
              <div className="text-white/70">创作歌曲</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">50+</div>
              <div className="text-white/70">音乐风格</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">100K+</div>
              <div className="text-white/70">活跃创作者</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center max-w-md mx-auto">
            <Button variant="glass" size="lg" className="flex items-center gap-2">
              <Play className="w-5 h-5" />
              体验Demo
            </Button>
            <Button variant="outline" size="lg" className="bg-white text-foreground hover:bg-white/90">
              了解更多
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
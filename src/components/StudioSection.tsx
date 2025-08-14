import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Sliders, 
  Volume2, 
  Music2, 
  FileText, 
  Play,
  Pause,
  SkipForward,
  Download,
  Share2
} from "lucide-react";
import studioIllustration from "@/assets/studio-illustration.png";

const StudioSection = () => {
  return (
    <section id="studio" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            专业级
            <span className="bg-gradient-accent bg-clip-text text-transparent ml-2">
              创作工作室
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            内置强大的多轨编辑器，让你像专业音乐人一样精细调节每一个音轨，
            打造完美的音乐作品
          </p>
        </div>

        {/* Studio Interface Mockup */}
        <div className="mb-16">
          <Card className="p-8 shadow-card bg-gradient-card">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <img 
                  src={studioIllustration} 
                  alt="Studio Interface" 
                  className="w-full rounded-xl shadow-feature"
                />
              </div>
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">可视化音轨控制</h3>
                
                {/* Audio Tracks */}
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 border border-border/50">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-sm">主人声</span>
                      <div className="flex items-center gap-2">
                        <button className="w-6 h-6 bg-primary rounded text-white text-xs">M</button>
                        <button className="w-6 h-6 bg-accent rounded text-white text-xs">S</button>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Volume2 className="w-4 h-4 text-muted-foreground" />
                      <div className="flex-1 bg-muted rounded-full h-2 relative">
                        <div className="bg-primary h-full w-3/4 rounded-full"></div>
                        <div className="absolute right-1/4 top-0 w-3 h-3 bg-primary rounded-full -mt-0.5 border-2 border-white"></div>
                      </div>
                      <span className="text-sm text-muted-foreground">-3dB</span>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4 border border-border/50">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-sm">背景伴奏</span>
                      <div className="flex items-center gap-2">
                        <button className="w-6 h-6 bg-muted rounded text-muted-foreground text-xs">M</button>
                        <button className="w-6 h-6 bg-muted rounded text-muted-foreground text-xs">S</button>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Volume2 className="w-4 h-4 text-muted-foreground" />
                      <div className="flex-1 bg-muted rounded-full h-2 relative">
                        <div className="bg-accent h-full w-1/2 rounded-full"></div>
                        <div className="absolute right-1/2 top-0 w-3 h-3 bg-accent rounded-full -mt-0.5 border-2 border-white"></div>
                      </div>
                      <span className="text-sm text-muted-foreground">-6dB</span>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-4 border border-border/50">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-sm">鼓点节拍</span>
                      <div className="flex items-center gap-2">
                        <button className="w-6 h-6 bg-muted rounded text-muted-foreground text-xs">M</button>
                        <button className="w-6 h-6 bg-muted rounded text-muted-foreground text-xs">S</button>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Volume2 className="w-4 h-4 text-muted-foreground" />
                      <div className="flex-1 bg-muted rounded-full h-2 relative">
                        <div className="bg-primary-glow h-full w-2/3 rounded-full"></div>
                        <div className="absolute right-1/3 top-0 w-3 h-3 bg-primary-glow rounded-full -mt-0.5 border-2 border-white"></div>
                      </div>
                      <span className="text-sm text-muted-foreground">-2dB</span>
                    </div>
                  </div>
                </div>

                {/* Controls */}
                <div className="flex items-center justify-center gap-4 pt-4">
                  <button className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                    <Play className="w-5 h-5" />
                  </button>
                  <button className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                    <Pause className="w-5 h-5" />
                  </button>
                  <button className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                    <SkipForward className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Studio Features */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="p-6 text-center hover:shadow-feature transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
              <Sliders className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold mb-2">精细调节</h3>
            <p className="text-sm text-muted-foreground">
              独立控制每个音轨的音量、平衡和效果
            </p>
          </Card>

          <Card className="p-6 text-center hover:shadow-feature transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center mx-auto mb-4">
              <Music2 className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold mb-2">音轨分离</h3>
            <p className="text-sm text-muted-foreground">
              AI自动分离人声、伴奏、鼓点等音轨
            </p>
          </Card>

          <Card className="p-6 text-center hover:shadow-feature transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold mb-2">歌词编辑</h3>
            <p className="text-sm text-muted-foreground">
              实时编辑歌词，AI重新生成匹配人声
            </p>
          </Card>

          <Card className="p-6 text-center hover:shadow-feature transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mx-auto mb-4">
              <Download className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold mb-2">专业导出</h3>
            <p className="text-sm text-muted-foreground">
              支持WAV、分轨等专业格式导出
            </p>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="hero" size="lg" className="mr-4">
            进入创作工作室
          </Button>
          <Button variant="outline" size="lg">
            观看教程视频
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StudioSection;
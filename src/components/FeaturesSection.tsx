import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Mic2, 
  Music, 
  Wand2, 
  Users, 
  Download, 
  Smartphone,
  Headphones,
  Sparkles,
  ArrowRight
} from "lucide-react";
import musicAiIcon from "@/assets/music-ai-icon.png";

const features = [
  {
    icon: Wand2,
    title: "一语成曲",
    description: "输入自然语言描述，AI瞬间生成完整歌曲",
    color: "bg-gradient-primary",
    highlight: true
  },
  {
    icon: Music,
    title: "纯音乐生成",
    description: "专业级背景音乐，满足各种场景配乐需求",
    color: "bg-gradient-accent"
  },
  {
    icon: Headphones,
    title: "多轨编辑器",
    description: "可视化音轨控制，人声伴奏自由调节",
    color: "bg-primary"
  },
  {
    icon: Users,
    title: "创作者社区",
    description: "分享作品，发现灵感，与音乐人交流",
    color: "bg-accent"
  },
  {
    icon: Download,
    title: "多格式导出",
    description: "MP3、WAV、分轨文件，满足专业需求",
    color: "bg-gradient-primary"
  },
  {
    icon: Smartphone,
    title: "一键设彩铃",
    description: "直连中国移动，作品秒变个性彩铃",
    color: "bg-gradient-accent",
    highlight: true
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-4">
            <Sparkles className="w-4 h-4" />
            <span className="font-medium">核心功能</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              强大功能
            </span>
            ，轻松上手
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            从灵感到成品，从创作到分享，咪咕声空为每一个音乐梦想提供专业工具
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index}
                className={`p-6 hover:shadow-feature transition-all duration-300 transform hover:scale-105 cursor-pointer group ${
                  feature.highlight ? 'ring-2 ring-primary/20 shadow-glow' : 'shadow-card'
                }`}
              >
                <div className="flex flex-col items-start">
                  <div className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                  {feature.highlight && (
                    <div className="mt-4 text-sm font-medium text-primary flex items-center gap-1">
                      特色功能
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  )}
                </div>
              </Card>
            );
          })}
        </div>

        {/* AI Power Section */}
        <div className="bg-gradient-card rounded-3xl p-8 md:p-12 shadow-card">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-accent/20 text-accent rounded-full px-4 py-2 mb-4">
                <img src={musicAiIcon} alt="AI Music" className="w-4 h-4" />
                <span className="font-medium">AI 驱动</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                最先进的
                <span className="bg-gradient-accent bg-clip-text text-transparent ml-2">
                  AI音乐技术
                </span>
              </h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <div className="font-semibold mb-1">深度学习音乐理解</div>
                    <div className="text-muted-foreground">理解音乐结构、和声、节奏，生成专业水准作品</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <div className="font-semibold mb-1">多风格智能适配</div>
                    <div className="text-muted-foreground">支持流行、摇滚、民谣、电子等50+音乐风格</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-primary-glow rounded-full flex items-center justify-center mt-0.5">
                    <span className="text-white text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <div className="font-semibold mb-1">秒级生成速度</div>
                    <div className="text-muted-foreground">强大算力支持，从灵感到成品只需几秒钟</div>
                  </div>
                </div>
              </div>
              <Button variant="feature" size="lg">
                立即体验AI创作
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-xl opacity-20"></div>
              <img 
                src={musicAiIcon} 
                alt="AI Music Creation" 
                className="relative w-full max-w-md mx-auto drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
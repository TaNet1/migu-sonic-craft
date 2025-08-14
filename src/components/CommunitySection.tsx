import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { 
  Heart, 
  Play, 
  Share2, 
  MessageCircle, 
  TrendingUp,
  Users,
  Music,
  Star
} from "lucide-react";

const featuredWorks = [
  {
    id: 1,
    title: "星空下的梦想",
    artist: "音乐小白",
    avatar: "MW",
    genre: "民谣",
    likes: 2341,
    plays: 15420,
    description: "一首关于追逐梦想的温馨民谣",
    duration: "3:42",
    trending: true
  },
  {
    id: 2,
    title: "城市夜晚",
    artist: "创作者Luna",
    avatar: "LN",
    genre: "电子",
    likes: 1876,
    plays: 12890,
    description: "都市夜景的电子音乐诠释",
    duration: "4:15",
    trending: false
  },
  {
    id: 3,
    title: "童年回忆",
    artist: "怀旧者",
    avatar: "HJ",
    genre: "轻音乐",
    likes: 3102,
    plays: 20550,
    description: "温暖的童年时光音乐盒",
    duration: "2:58",
    trending: true
  }
];

const CommunitySection = () => {
  return (
    <section id="community" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-accent bg-clip-text text-transparent">
              创作者社区
            </span>
            ，灵感无限
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            加入活跃的音乐创作者社区，分享你的作品，发现他人的创意，
            在这里每个人都是音乐人
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <Card className="p-6 text-center hover:shadow-feature transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-primary mb-1">100K+</div>
            <div className="text-sm text-muted-foreground">活跃创作者</div>
          </Card>
          
          <Card className="p-6 text-center hover:shadow-feature transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center mx-auto mb-4">
              <Music className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-accent mb-1">1M+</div>
            <div className="text-sm text-muted-foreground">原创作品</div>
          </Card>
          
          <Card className="p-6 text-center hover:shadow-feature transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-primary mb-1">500万</div>
            <div className="text-sm text-muted-foreground">日播放量</div>
          </Card>
          
          <Card className="p-6 text-center hover:shadow-feature transition-all duration-300 hover:scale-105">
            <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mx-auto mb-4">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-accent mb-1">8万+</div>
            <div className="text-sm text-muted-foreground">日点赞数</div>
          </Card>
        </div>

        {/* Featured Works */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold">精选作品</h3>
            <Button variant="outline">
              查看更多
            </Button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredWorks.map((work) => (
              <Card key={work.id} className="p-6 hover:shadow-feature transition-all duration-300 hover:scale-105 group cursor-pointer">
                <div className="flex items-start gap-4 mb-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src="" />
                    <AvatarFallback className="bg-gradient-primary text-white font-semibold">
                      {work.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold truncate group-hover:text-primary transition-colors">
                        {work.title}
                      </h4>
                      {work.trending && (
                        <Badge variant="secondary" className="bg-primary/10 text-primary">
                          <TrendingUp className="w-3 h-3 mr-1" />
                          热门
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">by {work.artist}</p>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground mb-4">
                  {work.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <Badge variant="outline">{work.genre}</Badge>
                  <span>{work.duration}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Play className="w-4 h-4" />
                      <span>{work.plays.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart className="w-4 h-4" />
                      <span>{work.likes.toLocaleString()}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button size="icon" variant="ghost" className="w-8 h-8">
                      <Play className="w-4 h-4" />
                    </Button>
                    <Button size="icon" variant="ghost" className="w-8 h-8">
                      <Heart className="w-4 h-4" />
                    </Button>
                    <Button size="icon" variant="ghost" className="w-8 h-8">
                      <Share2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Community Features */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="p-8 shadow-card bg-gradient-card">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center flex-shrink-0">
                <Star className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">创作者榜单</h3>
                <p className="text-muted-foreground mb-6 text-lg">
                  热门榜、新歌榜、原创榜，多维度展示优秀作品，
                  让好音乐被更多人发现
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">本周热门榜</span>
                    <Badge>1,234首歌曲</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">原创新歌榜</span>
                    <Badge>856首歌曲</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">创作者推荐</span>
                    <Badge>2,341位音乐人</Badge>
                  </div>
                </div>
                <Button variant="hero">
                  查看完整榜单
                </Button>
              </div>
            </div>
          </Card>

          <Card className="p-8 shadow-card bg-gradient-card">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">互动交流</h3>
                <p className="text-muted-foreground mb-6 text-lg">
                  点赞、评论、关注，与其他创作者深度交流，
                  分享创作心得，共同成长
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">今日新增评论</span>
                    <Badge>12,456条</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">活跃讨论话题</span>
                    <Badge>89个</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">新增关注</span>
                    <Badge>3,421次</Badge>
                  </div>
                </div>
                <Button variant="feature">
                  加入讨论
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">成为咪咕声空创作者</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            无论你是初学者还是资深音乐人，都能在这里找到属于你的舞台。
            立即开始你的音乐创作之旅吧！
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center max-w-md mx-auto">
            <Button variant="hero" size="lg">
              立即加入社区
            </Button>
            <Button variant="outline" size="lg">
              查看社区指南
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
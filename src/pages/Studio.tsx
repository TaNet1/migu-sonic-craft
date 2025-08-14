import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { useAuth } from "@/hooks/useAuth";
import { Navigate } from "react-router-dom";
import { 
  Music, 
  Mic, 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Download,
  Shuffle,
  Settings,
  FileText,
  Layers,
  Sparkles
} from 'lucide-react';

export default function Studio() {
  const { isLoggedIn, user } = useAuth();
  const [prompt, setPrompt] = useState('');
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [currentTrack, setCurrentTrack] = useState<string | null>(null);

  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  const genres = [
    '流行', '国风', '摇滚', '说唱', '电子', '民谣', 
    '儿童歌曲', '古典', '爵士', 'R&B', '乡村', '朋克'
  ];

  const inspirations = [
    '写一首关于梦想的励志歌曲',
    '创作一首描述雨夜心情的抒情歌',
    '制作一首充满活力的晨跑BGM',
    '谱写一首温馨的亲情主题歌曲',
    '创造一首科幻感十足的电子音乐'
  ];

  const mockTracks = [
    { id: 1, name: '主声', type: 'vocal', volume: 80, muted: false, solo: false },
    { id: 2, name: '伴奏', type: 'instrumental', volume: 70, muted: false, solo: false },
    { id: 3, name: '鼓点', type: 'drums', volume: 65, muted: false, solo: false },
    { id: 4, name: '贝斯', type: 'bass', volume: 60, muted: false, solo: false }
  ];

  const mockProjects = [
    { id: 1, title: '梦想之光', status: '已完成', date: '2024-01-15', cover: '/placeholder.svg' },
    { id: 2, title: '雨夜随想', status: '草稿', date: '2024-01-14', cover: '/placeholder.svg' },
    { id: 3, title: '晨跑节拍', status: '已完成', date: '2024-01-13', cover: '/placeholder.svg' }
  ];

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    // 模拟生成过程
    setTimeout(() => {
      setIsGenerating(false);
      setCurrentTrack('新生成的歌曲');
    }, 3000);
  };

  const getRandomInspiration = () => {
    const random = inspirations[Math.floor(Math.random() * inspirations.length)];
    setPrompt(random);
  };

  const toggleGenre = (genre: string) => {
    setSelectedGenres(prev => 
      prev.includes(genre) 
        ? prev.filter(g => g !== genre)
        : [...prev, genre]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-primary">
      {/* Header */}
      <header className="border-b bg-white/10 backdrop-blur-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Music className="w-8 h-8 text-primary" />
              <h1 className="text-2xl font-bold text-white">咪咕声空 · 创作台</h1>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-white/80">欢迎，{user?.phone}</span>
              <Badge variant="secondary">剩余 50 点数</Badge>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="create" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-white/10 backdrop-blur-md">
            <TabsTrigger value="create" className="text-white data-[state=active]:bg-white data-[state=active]:text-primary">
              音乐创作
            </TabsTrigger>
            <TabsTrigger value="studio" className="text-white data-[state=active]:bg-white data-[state=active]:text-primary">
              工作台
            </TabsTrigger>
            <TabsTrigger value="projects" className="text-white data-[state=active]:bg-white data-[state=active]:text-primary">
              我的作品
            </TabsTrigger>
            <TabsTrigger value="community" className="text-white data-[state=active]:bg-white data-[state=active]:text-primary">
              社区广场
            </TabsTrigger>
          </TabsList>

          {/* 音乐创作 */}
          <TabsContent value="create" className="space-y-6">
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  一语成曲
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Textarea
                    placeholder="描述你想要的音乐：风格、主题、情绪、场景... 比如：创作一首充满活力的流行歌曲，主题是关于追逐梦想"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    className="min-h-[100px] bg-white/10 border-white/20 text-white placeholder:text-white/60"
                  />
                  <div className="flex gap-2">
                    <Button variant="outline" onClick={getRandomInspiration} size="sm">
                      <Shuffle className="w-4 h-4 mr-2" />
                      随机灵感
                    </Button>
                  </div>
                </div>

                {/* 风格标签 */}
                <div className="space-y-3">
                  <h4 className="text-white font-medium">选择风格</h4>
                  <div className="flex flex-wrap gap-2">
                    {genres.map(genre => (
                      <Badge
                        key={genre}
                        variant={selectedGenres.includes(genre) ? "default" : "outline"}
                        className="cursor-pointer"
                        onClick={() => toggleGenre(genre)}
                      >
                        {genre}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* 生成选项 */}
                <div className="flex gap-4">
                  <Button 
                    onClick={handleGenerate}
                    disabled={isGenerating || !prompt.trim()}
                    className="flex-1"
                  >
                    <Music className="w-4 h-4 mr-2" />
                    {isGenerating ? '生成中...' : '生成歌曲'}
                  </Button>
                  <Button variant="outline" disabled={isGenerating || !prompt.trim()}>
                    <Mic className="w-4 h-4 mr-2" />
                    纯音乐
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* 工作台 */}
          <TabsContent value="studio" className="space-y-6">
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Layers className="w-5 h-5" />
                  多轨编辑器
                </CardTitle>
              </CardHeader>
              <CardContent>
                {currentTrack ? (
                  <div className="space-y-4">
                    <div className="text-white mb-4">
                      当前作品: {currentTrack}
                    </div>
                    
                    {/* 音轨控制 */}
                    <div className="space-y-2">
                      {mockTracks.map(track => (
                        <div key={track.id} className="flex items-center gap-4 p-3 bg-white/5 rounded-lg">
                          <div className="w-20 text-white text-sm">{track.name}</div>
                          <Button size="sm" variant="outline">
                            {track.muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                          </Button>
                          <Button size="sm" variant="outline">Solo</Button>
                          <div className="flex-1 px-4">
                            <Slider
                              value={[track.volume]}
                              max={100}
                              step={1}
                              className="w-full"
                            />
                          </div>
                          <span className="text-white text-sm w-8">{track.volume}</span>
                        </div>
                      ))}
                    </div>

                    {/* 播放控制 */}
                    <div className="flex items-center justify-center gap-4 mt-6">
                      <Button size="lg">
                        <Play className="w-5 h-5" />
                      </Button>
                      <Button size="lg" variant="outline">
                        <Pause className="w-5 h-5" />
                      </Button>
                      <Button variant="outline">
                        <Settings className="w-4 h-4 mr-2" />
                        AI混音
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center text-white/60 py-12">
                    请先在"音乐创作"页面生成音乐
                  </div>
                )}
              </CardContent>
            </Card>

            {/* 歌词编辑器 */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  歌词编辑器
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="歌词将在这里显示，您可以进行编辑..."
                  className="min-h-[200px] bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
                <Button className="mt-4">
                  重新生成人声
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* 我的作品 */}
          <TabsContent value="projects" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockProjects.map(project => (
                <Card key={project.id} className="bg-white/10 backdrop-blur-md border-white/20">
                  <CardContent className="p-4">
                    <div className="aspect-square bg-white/10 rounded-lg mb-4 flex items-center justify-center">
                      <Music className="w-12 h-12 text-white/40" />
                    </div>
                    <h3 className="text-white font-medium mb-2">{project.title}</h3>
                    <div className="flex items-center justify-between text-sm text-white/60 mb-4">
                      <Badge variant={project.status === '已完成' ? 'default' : 'secondary'}>
                        {project.status}
                      </Badge>
                      <span>{project.date}</span>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1">
                        <Play className="w-4 h-4 mr-2" />
                        播放
                      </Button>
                      <Button size="sm" variant="outline">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* 社区广场 */}
          <TabsContent value="community" className="space-y-6">
            <Card className="bg-white/10 backdrop-blur-md border-white/20">
              <CardHeader>
                <CardTitle className="text-white">发现优秀作品</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center text-white/60 py-12">
                  社区功能即将上线，敬请期待...
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
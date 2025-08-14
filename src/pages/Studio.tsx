import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { ResizablePanelGroup, ResizablePanel, ResizableHandle } from "@/components/ui/resizable";
import { useAuth } from "@/hooks/useAuth";
import { Navigate, useNavigate } from "react-router-dom";
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
  Sparkles,
  Plus,
  Heart,
  Share2,
  MoreVertical,
  Headphones,
  Repeat,
  SkipBack,
  SkipForward,
  Clock,
  User,
  Home,
  Library,
  Search,
  TrendingUp,
  AudioWaveform,
  Upload,
  Crown,
  Zap,
  Music4,
  Mic2,
  ListMusic,
  History
} from 'lucide-react';

// Import cover images
import galaxyWalkCover from '@/assets/cover-galaxy-walk.jpg';
import ancientAlleyCover from '@/assets/cover-ancient-alley.jpg';
import futureVoiceCover from '@/assets/cover-future-voice.jpg';
import swingingYouthCover from '@/assets/cover-swinging-youth.jpg';

export default function Studio() {
  const { isLoggedIn, user } = useAuth();
  const navigate = useNavigate();
  const [prompt, setPrompt] = useState('');
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [currentTrack, setCurrentTrack] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('create');
  const [isPlaying, setIsPlaying] = useState(false);

  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  const genres = [
    '流行', '国风', '摇滚', '说唱', '电子', '民谣', 
    '儿童歌曲', '古典', '爵士', 'R&B', '乡村', '朋克',
    '金属', '蓝调', '嘻哈', '雷鬼', '放克', '迪斯科'
  ];

  const inspirations = [
    '写一首关于夜晚城市的抒情歌曲，融合电子和流行元素',
    '创作一首描述春天来临的清新民谣',
    '制作一首充满节拍感的健身音乐',
    '谱写一首温馨的家庭聚会背景音乐',
    '创造一首带有中国古典风味的现代流行歌',
    '制作一首适合咖啡厅播放的爵士乐',
    '创作一首激励人心的企业宣传配乐'
  ];

  const mockTracks = [
    { 
      id: 1, 
      title: '梦想之光', 
      artist: '用户创作', 
      duration: '3:42', 
      genre: '流行',
      status: '已完成',
      date: '2024-01-15',
      plays: 1250,
      likes: 89,
      cover: '/placeholder.svg'
    },
    { 
      id: 2, 
      title: '雨夜随想', 
      artist: '用户创作', 
      duration: '2:58', 
      genre: '抒情',
      status: '草稿',
      date: '2024-01-14',
      plays: 856,
      likes: 67,
      cover: '/placeholder.svg'
    },
    { 
      id: 3, 
      title: '晨跑节拍', 
      artist: '用户创作', 
      duration: '4:15', 
      genre: '电子',
      status: '已完成',
      date: '2024-01-13',
      plays: 2103,
      likes: 156,
      cover: '/placeholder.svg'
    }
  ];

  const trendingTracks = [
    { id: 1, title: '星河漫步', artist: '创作者A', genre: '电子', plays: 15600, trending: true, cover: galaxyWalkCover, duration: '3:45', likes: 892 },
    { id: 2, title: '古巷情怀', artist: '创作者B', genre: '国风', plays: 12300, trending: true, cover: ancientAlleyCover, duration: '4:12', likes: 687 },
    { id: 3, title: '未来之声', artist: '创作者C', genre: '科幻', plays: 9800, trending: true, cover: futureVoiceCover, duration: '3:33', likes: 543 },
    { id: 4, title: '摇摆青春', artist: '创作者D', genre: '摇滚', plays: 8700, trending: true, cover: swingingYouthCover, duration: '3:58', likes: 421 },
    { id: 5, title: '深夜咖啡', artist: '创作者E', genre: '爵士', plays: 7650, trending: false, cover: galaxyWalkCover, duration: '4:25', likes: 334 },
    { id: 6, title: '都市节拍', artist: '创作者F', genre: '嘻哈', plays: 6890, trending: false, cover: ancientAlleyCover, duration: '3:21', likes: 287 }
  ];

  const discoverCategories = [
    { 
      id: 'featured', 
      title: '精选推荐', 
      tracks: [
        { id: 1, title: '夜幕降临', artist: '音乐人A', genre: '抒情', plays: 5400, cover: futureVoiceCover, featured: true },
        { id: 2, title: '城市律动', artist: '音乐人B', genre: '电子', plays: 4200, cover: swingingYouthCover, featured: true },
        { id: 3, title: '温柔时光', artist: '音乐人C', genre: '民谣', plays: 3800, cover: galaxyWalkCover, featured: true }
      ]
    },
    { 
      id: 'newrelease', 
      title: '新作发布', 
      tracks: [
        { id: 4, title: '晨光序曲', artist: '新星创作者', genre: '古典', plays: 1200, cover: ancientAlleyCover, isNew: true },
        { id: 5, title: '数字梦境', artist: '科技音乐人', genre: '合成器', plays: 980, cover: futureVoiceCover, isNew: true },
        { id: 6, title: '街头故事', artist: '独立音乐人', genre: '说唱', plays: 756, cover: swingingYouthCover, isNew: true }
      ]
    },
    { 
      id: 'genre', 
      title: '风格分类', 
      genres: [
        { id: 'pop', name: '流行', count: 1245, color: 'bg-blue-500' },
        { id: 'electronic', name: '电子', count: 892, color: 'bg-purple-500' },
        { id: 'folk', name: '民谣', count: 678, color: 'bg-green-500' },
        { id: 'rock', name: '摇滚', count: 543, color: 'bg-red-500' },
        { id: 'jazz', name: '爵士', count: 432, color: 'bg-yellow-500' },
        { id: 'classical', name: '古典', count: 321, color: 'bg-indigo-500' }
      ]
    }
  ];

  const audioTracks = [
    { id: 1, name: '主声', type: 'vocal', volume: 80, muted: false, solo: false },
    { id: 2, name: '伴奏', type: 'instrumental', volume: 70, muted: false, solo: false },
    { id: 3, name: '鼓点', type: 'drums', volume: 65, muted: false, solo: false },
    { id: 4, name: '贝斯', type: 'bass', volume: 60, muted: false, solo: false },
    { id: 5, name: '和声', type: 'harmony', volume: 55, muted: false, solo: false }
  ];

  const navigationItems = [
    { id: 'home', label: '首页', icon: Home, action: () => navigate('/') },
    { id: 'create', label: '创作', icon: Plus, action: () => setActiveTab('create') },
    { id: 'library', label: '音乐库', icon: Library, action: () => setActiveTab('library') },
    { id: 'discover', label: '发现', icon: Search, action: () => setActiveTab('discover') },
    { id: 'trending', label: '热门', icon: TrendingUp, action: () => setActiveTab('trending') }
  ];

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    // 模拟生成过程
    setTimeout(() => {
      setIsGenerating(false);
      setCurrentTrack('新生成的歌曲 - ' + new Date().getTime());
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
    <div className="min-h-screen bg-background">
      {/* Main Layout */}
      <ResizablePanelGroup direction="horizontal" className="min-h-screen">
        {/* Left Sidebar */}
        <ResizablePanel defaultSize={20} minSize={15} maxSize={25}>
          <div className="h-full bg-card border-r flex flex-col">
            {/* Header */}
            <div className="p-6 border-b">
              <div className="flex items-center gap-3">
                <Music className="w-8 h-8 text-primary" />
                <h1 className="text-xl font-bold">咪咕声空</h1>
              </div>
              <div className="flex items-center gap-2 mt-4">
                <span className="text-sm text-muted-foreground">欢迎，{user?.phone}</span>
                <Badge variant="secondary" className="ml-auto">
                  <Crown className="w-3 h-3 mr-1" />
                  50 点数
                </Badge>
              </div>
            </div>

            {/* Navigation */}
            <div className="p-4 space-y-2">
              {navigationItems.map(item => (
                <Button
                  key={item.id}
                  variant={activeTab === item.id ? "secondary" : "ghost"}
                  className="w-full justify-start"
                  onClick={item.action}
                >
                  <item.icon className="w-4 h-4 mr-3" />
                  {item.label}
                </Button>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="p-4 border-t mt-auto space-y-2">
              <Button variant="outline" size="sm" className="w-full justify-start">
                <History className="w-4 h-4 mr-2" />
                创作历史
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start">
                <Settings className="w-4 h-4 mr-2" />
                设置
              </Button>
            </div>
          </div>
        </ResizablePanel>

        <ResizableHandle withHandle />

        {/* Main Content Area */}
        <ResizablePanel defaultSize={80}>
          <ResizablePanelGroup direction="horizontal">
            {/* Center Panel - Creation Area */}
            <ResizablePanel defaultSize={60} minSize={50}>
              <div className="h-full overflow-auto">
                {activeTab === 'create' && (
                  <div className="p-6 space-y-6">
                    {/* Creation Header */}
                    <div className="flex items-center justify-between">
                      <div>
                        <h2 className="text-2xl font-bold flex items-center gap-2">
                          <Sparkles className="w-6 h-6 text-primary" />
                          AI 音乐创作工厂
                        </h2>
                        <p className="text-muted-foreground mt-1">
                          用文字描述，让AI为你创作独特的音乐作品
                        </p>
                      </div>
                      <Button variant="outline" onClick={getRandomInspiration}>
                        <Shuffle className="w-4 h-4 mr-2" />
                        随机灵感
                      </Button>
                    </div>

                    {/* Main Creation Card */}
                    <Card className="border-2 border-dashed border-primary/20 hover:border-primary/40 transition-colors">
                      <CardContent className="p-6 space-y-6">
                        <div className="space-y-4">
                          <Textarea
                            placeholder="描述你想要的音乐：风格、主题、情绪、场景... 
例如：创作一首融合古典与现代元素的抒情歌曲，主题是关于故乡的思念，带有温暖而忧郁的情绪"
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                            className="min-h-[120px] text-base resize-none"
                          />
                          
                          {/* Style Tags */}
                          <div className="space-y-3">
                            <h4 className="font-medium flex items-center gap-2">
                              <Music4 className="w-4 h-4" />
                              选择风格标签
                            </h4>
                            <div className="flex flex-wrap gap-2 max-h-32 overflow-auto">
                              {genres.map(genre => (
                                <Badge
                                  key={genre}
                                  variant={selectedGenres.includes(genre) ? "default" : "outline"}
                                  className="cursor-pointer hover:scale-105 transition-transform"
                                  onClick={() => toggleGenre(genre)}
                                >
                                  {genre}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          {/* Advanced Options */}
                          <Card className="bg-muted/50">
                            <CardContent className="p-4">
                              <h5 className="font-medium mb-3">高级选项</h5>
                              <div className="grid grid-cols-2 gap-4">
                                <div className="flex items-center justify-between">
                                  <label className="text-sm">包含人声</label>
                                  <Switch defaultChecked />
                                </div>
                                <div className="flex items-center justify-between">
                                  <label className="text-sm">器乐版本</label>
                                  <Switch />
                                </div>
                                <div className="flex items-center justify-between">
                                  <label className="text-sm">延长版本</label>
                                  <Switch />
                                </div>
                                <div className="flex items-center justify-between">
                                  <label className="text-sm">立体声</label>
                                  <Switch defaultChecked />
                                </div>
                              </div>
                            </CardContent>
                          </Card>

                          {/* Generation Buttons */}
                          <div className="flex gap-3">
                            <Button 
                              onClick={handleGenerate}
                              disabled={isGenerating || !prompt.trim()}
                              className="flex-1 h-12"
                              size="lg"
                            >
                              {isGenerating ? (
                                <>
                                  <div className="animate-spin w-4 h-4 mr-2 border-2 border-white border-t-transparent rounded-full" />
                                  生成中...
                                </>
                              ) : (
                                <>
                                  <Zap className="w-4 h-4 mr-2" />
                                  生成歌曲
                                </>
                              )}
                            </Button>
                            <Button 
                              variant="outline" 
                              disabled={isGenerating || !prompt.trim()}
                              className="h-12"
                              size="lg"
                            >
                              <Mic2 className="w-4 h-4 mr-2" />
                              纯音乐
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Current Generation Status */}
                    {currentTrack && (
                      <Card className="border-primary/50 bg-primary/5">
                        <CardContent className="p-4">
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                              <Music className="w-6 h-6 text-primary" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-medium">{currentTrack}</h4>
                              <p className="text-sm text-muted-foreground">生成完成，可以进行编辑</p>
                            </div>
                            <div className="flex gap-2">
                              <Button size="sm" onClick={() => setIsPlaying(!isPlaying)}>
                                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                              </Button>
                              <Button size="sm" variant="outline">
                                <Download className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    )}

                    {/* Publishing Workflow */}
                    {currentTrack && (
                      <Card className="border-green-500/50 bg-green-500/5">
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2 text-green-700">
                            <Upload className="w-5 h-5" />
                            发布作品
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="text-sm font-medium mb-2 block">作品标题</label>
                              <input 
                                type="text" 
                                placeholder="为你的作品起个名字"
                                className="w-full px-3 py-2 border rounded-md text-sm"
                                defaultValue={currentTrack}
                              />
                            </div>
                            <div>
                              <label className="text-sm font-medium mb-2 block">艺术家名称</label>
                              <input 
                                type="text" 
                                placeholder="你的艺术家名称"
                                className="w-full px-3 py-2 border rounded-md text-sm"
                                defaultValue={user?.phone}
                              />
                            </div>
                          </div>
                          <div>
                            <label className="text-sm font-medium mb-2 block">作品描述</label>
                            <Textarea
                              placeholder="描述你的作品创作灵感、风格特色等..."
                              className="min-h-[80px] text-sm"
                            />
                          </div>
                          <div className="flex gap-3">
                            <Button className="flex-1">
                              <Music className="w-4 h-4 mr-2" />
                              发布到咪咕音乐
                            </Button>
                            <Button variant="outline" className="flex-1">
                              <Share2 className="w-4 h-4 mr-2" />
                              分享到社区
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    )}
                    {/* Multi-track Editor */}
                    {currentTrack && (
                      <Card>
                        <CardHeader>
                          <CardTitle className="flex items-center gap-2">
                            <Layers className="w-5 h-5" />
                            多轨编辑器
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          {audioTracks.map(track => (
                            <div key={track.id} className="flex items-center gap-4 p-3 bg-muted/50 rounded-lg">
                              <div className="w-16 text-sm font-medium">{track.name}</div>
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
                              <span className="text-sm w-8">{track.volume}</span>
                            </div>
                          ))}
                          
                          <div className="flex items-center justify-center gap-4 pt-4 border-t">
                            <Button size="sm" variant="outline">
                              <SkipBack className="w-4 h-4" />
                            </Button>
                            <Button size="lg">
                              <Play className="w-5 h-5" />
                            </Button>
                            <Button size="sm" variant="outline">
                              <SkipForward className="w-4 h-4" />
                            </Button>
                            <Button variant="outline">
                              <Settings className="w-4 h-4 mr-2" />
                              AI混音
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    )}
                  </div>
                )}

                {activeTab === 'discover' && (
                  <div className="p-6 space-y-6">
                    <div className="flex items-center justify-between">
                      <h2 className="text-2xl font-bold flex items-center gap-2">
                        <Search className="w-6 h-6 text-primary" />
                        发现音乐
                      </h2>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Shuffle className="w-4 h-4 mr-2" />
                          随机播放
                        </Button>
                        <Button size="sm">
                          <Plus className="w-4 h-4 mr-2" />
                          创建歌单
                        </Button>
                      </div>
                    </div>

                    {discoverCategories.map(category => (
                      <div key={category.id} className="space-y-4">
                        <h3 className="text-lg font-semibold">{category.title}</h3>
                        
                        {category.tracks && (
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {category.tracks.map(track => (
                              <Card key={track.id} className="hover:shadow-md transition-shadow">
                                <CardContent className="p-4">
                                  <div className="flex items-center gap-3">
                                    <img 
                                      src={track.cover} 
                                      alt={track.title}
                                      className="w-12 h-12 rounded-lg object-cover"
                                    />
                                    <div className="flex-1 min-w-0">
                                      <h4 className="font-medium truncate">{track.title}</h4>
                                      <p className="text-sm text-muted-foreground">{track.artist} • {track.genre}</p>
                                      <p className="text-xs text-muted-foreground">{track.plays.toLocaleString()} 播放</p>
                                    </div>
                                    <div className="flex items-center gap-1">
                                      {track.featured && (
                                        <Badge variant="secondary" className="text-xs">精选</Badge>
                                      )}
                                      {track.isNew && (
                                        <Badge variant="default" className="text-xs">新</Badge>
                                      )}
                                      <Button size="sm" variant="ghost">
                                        <Play className="w-4 h-4" />
                                      </Button>
                                    </div>
                                  </div>
                                </CardContent>
                              </Card>
                            ))}
                          </div>
                        )}

                        {category.genres && (
                          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                            {category.genres.map(genre => (
                              <Card key={genre.id} className="hover:shadow-md transition-shadow cursor-pointer">
                                <CardContent className="p-4">
                                  <div className={`w-full h-20 ${genre.color} rounded-lg mb-3 flex items-center justify-center`}>
                                    <Music className="w-8 h-8 text-white" />
                                  </div>
                                  <h4 className="font-medium">{genre.name}</h4>
                                  <p className="text-sm text-muted-foreground">{genre.count} 首歌曲</p>
                                </CardContent>
                              </Card>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'library' && (
                  <div className="p-6 space-y-6">
                    <div className="flex items-center justify-between">
                      <h2 className="text-2xl font-bold">我的音乐库</h2>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Upload className="w-4 h-4 mr-2" />
                          上传
                        </Button>
                        <Button size="sm">
                          <Plus className="w-4 h-4 mr-2" />
                          新建
                        </Button>
                      </div>
                    </div>

                    <div className="grid gap-4">
                      {mockTracks.map(track => (
                        <Card key={track.id} className="hover:shadow-md transition-shadow">
                          <CardContent className="p-4">
                            <div className="flex items-center gap-4">
                              <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center">
                                <Music className="w-8 h-8 text-muted-foreground" />
                              </div>
                              <div className="flex-1">
                                <h3 className="font-medium">{track.title}</h3>
                                <p className="text-sm text-muted-foreground">{track.artist} • {track.genre}</p>
                                <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                                  <span className="flex items-center gap-1">
                                    <Clock className="w-3 h-3" />
                                    {track.duration}
                                  </span>
                                  <span className="flex items-center gap-1">
                                    <Headphones className="w-3 h-3" />
                                    {track.plays}
                                  </span>
                                  <span className="flex items-center gap-1">
                                    <Heart className="w-3 h-3" />
                                    {track.likes}
                                  </span>
                                  <Badge variant={track.status === '已完成' ? 'default' : 'secondary'} className="text-xs">
                                    {track.status}
                                  </Badge>
                                </div>
                              </div>
                              <div className="flex items-center gap-2">
                                <Button size="sm" variant="outline">
                                  <Play className="w-4 h-4" />
                                </Button>
                                <Button size="sm" variant="outline">
                                  <Share2 className="w-4 h-4" />
                                </Button>
                                <Button size="sm" variant="outline">
                                  <MoreVertical className="w-4 h-4" />
                                </Button>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'trending' && (
                  <div className="p-6 space-y-6">
                    <div className="flex items-center justify-between">
                      <h2 className="text-2xl font-bold flex items-center gap-2">
                        <TrendingUp className="w-6 h-6 text-primary" />
                        热门榜单
                      </h2>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Repeat className="w-4 h-4 mr-2" />
                          刷新
                        </Button>
                        <Button variant="outline" size="sm">
                          <ListMusic className="w-4 h-4 mr-2" />
                          创建歌单
                        </Button>
                      </div>
                    </div>

                    {/* Top Charts */}
                    <div className="grid gap-4">
                      <h3 className="text-lg font-semibold">本周热门</h3>
                      {trendingTracks.map((track, index) => (
                        <Card key={track.id} className="hover:shadow-md transition-shadow">
                          <CardContent className="p-4">
                            <div className="flex items-center gap-4">
                              <div className="w-10 text-center">
                                <span className={`text-xl font-bold ${index < 3 ? 'text-primary' : 'text-muted-foreground'}`}>
                                  {index + 1}
                                </span>
                              </div>
                              <img 
                                src={track.cover} 
                                alt={track.title}
                                className="w-16 h-16 rounded-lg object-cover"
                              />
                              <div className="flex-1">
                                <h3 className="font-medium">{track.title}</h3>
                                <p className="text-sm text-muted-foreground">{track.artist} • {track.genre}</p>
                                <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                                  <span className="flex items-center gap-1">
                                    <Clock className="w-3 h-3" />
                                    {track.duration}
                                  </span>
                                  <span className="flex items-center gap-1">
                                    <Headphones className="w-3 h-3" />
                                    {track.plays.toLocaleString()}
                                  </span>
                                  <span className="flex items-center gap-1">
                                    <Heart className="w-3 h-3" />
                                    {track.likes}
                                  </span>
                                </div>
                              </div>
                              <div className="text-right flex items-center gap-2">
                                {track.trending && (
                                  <Badge variant="secondary" className="text-xs">
                                    <TrendingUp className="w-3 h-3 mr-1" />
                                    热门
                                  </Badge>
                                )}
                                <Button size="sm" variant="outline">
                                  <Play className="w-4 h-4" />
                                </Button>
                                <Button size="sm" variant="ghost">
                                  <Heart className="w-4 h-4" />
                                </Button>
                                <Button size="sm" variant="ghost">
                                  <MoreVertical className="w-4 h-4" />
                                </Button>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>

                    {/* Genre Charts */}
                    <div className="grid md:grid-cols-2 gap-6 mt-8">
                      <Card>
                        <CardHeader>
                          <CardTitle>电子音乐榜</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          {trendingTracks.slice(0, 3).map((track, index) => (
                            <div key={track.id} className="flex items-center gap-3">
                              <span className="w-6 text-center font-medium">{index + 1}</span>
                              <img src={track.cover} alt={track.title} className="w-10 h-10 rounded object-cover" />
                              <div className="flex-1">
                                <p className="font-medium text-sm">{track.title}</p>
                                <p className="text-xs text-muted-foreground">{track.artist}</p>
                              </div>
                              <Button size="sm" variant="ghost">
                                <Play className="w-3 h-3" />
                              </Button>
                            </div>
                          ))}
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader>
                          <CardTitle>国风音乐榜</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          {trendingTracks.slice(1, 4).map((track, index) => (
                            <div key={track.id} className="flex items-center gap-3">
                              <span className="w-6 text-center font-medium">{index + 1}</span>
                              <img src={track.cover} alt={track.title} className="w-10 h-10 rounded object-cover" />
                              <div className="flex-1">
                                <p className="font-medium text-sm">{track.title}</p>
                                <p className="text-xs text-muted-foreground">{track.artist}</p>
                              </div>
                              <Button size="sm" variant="ghost">
                                <Play className="w-3 h-3" />
                              </Button>
                            </div>
                          ))}
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                )}
              </div>
            </ResizablePanel>

            <ResizableHandle withHandle />

            {/* Right Panel - Only show on Create tab */}
            {activeTab === 'create' && (
              <ResizablePanel defaultSize={40} minSize={30}>
                <div className="h-full border-l bg-card/50 overflow-auto">
                  <div className="p-6 space-y-6">
                    {/* Lyrics Editor */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <FileText className="w-5 h-5" />
                          歌词编辑器
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <Textarea
                          placeholder={currentTrack ? "歌词将在这里显示，您可以进行编辑..." : "请先生成音乐"}
                          className="min-h-[200px] resize-none"
                          disabled={!currentTrack}
                        />
                        <div className="flex gap-2 mt-4">
                          <Button size="sm" disabled={!currentTrack}>
                            重新生成人声
                          </Button>
                          <Button size="sm" variant="outline" disabled={!currentTrack}>
                            导出歌词
                          </Button>
                        </div>
                      </CardContent>
                    </Card>

                    {/* AI Tools */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <AudioWaveform className="w-5 h-5" />
                          AI 工具箱
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <Button variant="outline" className="w-full justify-start" disabled={!currentTrack}>
                          <Mic className="w-4 h-4 mr-2" />
                          AI 人声优化
                        </Button>
                        <Button variant="outline" className="w-full justify-start" disabled={!currentTrack}>
                          <Layers className="w-4 h-4 mr-2" />
                          智能分轨
                        </Button>
                        <Button variant="outline" className="w-full justify-start" disabled={!currentTrack}>
                          <Settings className="w-4 h-4 mr-2" />
                          自动混音
                        </Button>
                        <Button variant="outline" className="w-full justify-start" disabled={!currentTrack}>
                          <Volume2 className="w-4 h-4 mr-2" />
                          音质增强
                        </Button>
                      </CardContent>
                    </Card>

                    {/* Export Options */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Download className="w-5 h-5" />
                          导出选项
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-3">
                        <Button variant="outline" className="w-full justify-start" disabled={!currentTrack}>
                          <Download className="w-4 h-4 mr-2" />
                          MP3 (标准音质)
                        </Button>
                        <Button variant="outline" className="w-full justify-start" disabled={!currentTrack}>
                          <Crown className="w-4 h-4 mr-2" />
                          WAV (无损音质)
                        </Button>
                        <Button variant="outline" className="w-full justify-start" disabled={!currentTrack}>
                          <Layers className="w-4 h-4 mr-2" />
                          分轨文件包
                        </Button>
                        <Button className="w-full" disabled={!currentTrack}>
                          <Headphones className="w-4 h-4 mr-2" />
                          设为彩铃
                        </Button>
                      </CardContent>
                    </Card>

                    {/* Inspiration Corner */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Sparkles className="w-5 h-5" />
                          创作灵感
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          {inspirations.slice(0, 3).map((inspiration, index) => (
                            <Button
                              key={index}
                              variant="ghost"
                              size="sm"
                              className="w-full text-left h-auto p-2 whitespace-normal"
                              onClick={() => setPrompt(inspiration)}
                            >
                              <span className="text-xs">{inspiration}</span>
                            </Button>
                          ))}
                        </div>
                        <Button 
                          variant="outline" 
                          size="sm" 
                          className="w-full mt-3"
                          onClick={getRandomInspiration}
                        >
                          <Shuffle className="w-4 h-4 mr-2" />
                          更多灵感
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </ResizablePanel>
            )}
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
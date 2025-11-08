import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Loader2, Sparkles, BookOpen, PenTool, Library, Search } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import dhadIcon from "@/assets/dhad-icon.png";

const Index = () => {
  const [inputText, setInputText] = useState("");
  const [correctedText, setCorrectedText] = useState("");
  const [analysis, setAnalysis] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const { toast } = useToast();

  const handleCorrection = async () => {
    if (!inputText.trim()) {
      toast({
        title: "تنبيه",
        description: "الرجاء إدخال نص للتصحيح",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    setCorrectedText("");
    setAnalysis("");

    try {
      // سيتم إضافة استدعاء API هنا لاحقاً
      toast({
        title: "قريباً",
        description: "سيتم تفعيل خدمة التصحيح بالذكاء الاصطناعي قريباً",
      });
    } catch (error) {
      toast({
        title: "خطأ",
        description: "حدث خطأ أثناء التصحيح",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen islamic-pattern" dir="rtl">
      {/* Header */}
      <header className="border-b border-border/40 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-gradient-islamic flex items-center justify-center shadow-gold">
                <BookOpen className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">مُصَحِّح</h1>
                <p className="text-sm text-muted-foreground">مساعدك الذكي للغة العربية</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto space-y-6">
          {/* Hero Section */}
          <Card className="border-primary/20 bg-gradient-subtle shadow-gold overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-islamic"></div>
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <img src={dhadIcon} alt="حرف الضاد" className="w-16 h-16 object-contain drop-shadow-lg animate-pulse" />
              </div>
              <CardTitle className="text-4xl font-bold text-foreground mb-2 font-arabic">
                مُصَحِّح اللغة العربية بالذكاء الاصطناعي
              </CardTitle>
              <CardDescription className="text-lg text-muted-foreground leading-relaxed">
                تصحيح القواعد النحوية والإملائية، تحليل الشعر، والمعجم اللغوي
              </CardDescription>
            </CardHeader>
          </Card>

          {/* Main Tool */}
          <Tabs defaultValue="correction" className="w-full">
            <TabsList className="grid w-full grid-cols-4 bg-muted/50 backdrop-blur-sm">
              <TabsTrigger value="correction" className="gap-2 data-[state=active]:bg-gradient-islamic data-[state=active]:text-primary-foreground">
                <PenTool className="w-4 h-4" />
                تصحيح النصوص
              </TabsTrigger>
              <TabsTrigger value="grammar" className="gap-2 data-[state=active]:bg-gradient-islamic data-[state=active]:text-primary-foreground">
                <BookOpen className="w-4 h-4" />
                القواعد النحوية
              </TabsTrigger>
              <TabsTrigger value="poetry" className="gap-2 data-[state=active]:bg-gradient-islamic data-[state=active]:text-primary-foreground">
                <Sparkles className="w-4 h-4" />
                تحليل الشعر
              </TabsTrigger>
              <TabsTrigger value="dictionary" className="gap-2 data-[state=active]:bg-gradient-islamic data-[state=active]:text-primary-foreground">
                <Library className="w-4 h-4" />
                المعجم اللغوي
              </TabsTrigger>
            </TabsList>

            <TabsContent value="correction" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>تصحيح الأخطاء الإملائية والنحوية</CardTitle>
                  <CardDescription>
                    اكتب أو الصق النص الذي تريد تصحيحه
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Textarea
                    placeholder="اكتب النص هنا..."
                    className="min-h-[200px] text-lg resize-none"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                  />
                  <Button
                    onClick={handleCorrection}
                    disabled={isLoading}
                    className="w-full bg-gradient-islamic hover:opacity-90 text-primary-foreground shadow-gold"
                    size="lg"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="ml-2 h-5 w-5 animate-spin" />
                        جارٍ التصحيح...
                      </>
                    ) : (
                      <>
                        <Sparkles className="ml-2 h-5 w-5" />
                        صحّح النص
                      </>
                    )}
                  </Button>

                  {correctedText && (
                    <Card className="bg-secondary/5 border-secondary/20">
                      <CardHeader>
                        <CardTitle className="text-lg text-secondary">النص المصحح</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-lg leading-relaxed whitespace-pre-wrap">
                          {correctedText}
                        </p>
                      </CardContent>
                    </Card>
                  )}

                  {analysis && (
                    <Card className="bg-accent/5 border-accent/20">
                      <CardHeader>
                        <CardTitle className="text-lg text-accent">التحليل والملاحظات</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-base leading-relaxed whitespace-pre-wrap">
                          {analysis}
                        </p>
                      </CardContent>
                    </Card>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="grammar" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>تحليل القواعد النحوية</CardTitle>
                  <CardDescription>
                    تحليل شامل للإعراب والقواعد النحوية
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Textarea
                    placeholder="اكتب النص لتحليل قواعده النحوية..."
                    className="min-h-[200px] text-lg resize-none"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                  />
                  <Button
                    onClick={handleCorrection}
                    disabled={isLoading}
                    className="w-full bg-gradient-islamic hover:opacity-90 text-primary-foreground shadow-gold"
                    size="lg"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="ml-2 h-5 w-5 animate-spin" />
                        جارٍ التحليل...
                      </>
                    ) : (
                      <>
                        <BookOpen className="ml-2 h-5 w-5" />
                        حلّل القواعد
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="poetry" className="space-y-4">
              <Card className="border-accent/30 shadow-lg">
                <CardHeader>
                  <CardTitle>تحليل الشعر العربي</CardTitle>
                  <CardDescription>
                    تحليل الوزن والقافية والبحر الشعري
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Textarea
                    placeholder="اكتب أو الصق الأبيات الشعرية..."
                    className="min-h-[200px] text-lg resize-none font-arabic"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                  />
                  <Button
                    onClick={handleCorrection}
                    disabled={isLoading}
                    className="w-full bg-gradient-islamic hover:opacity-90 text-primary-foreground shadow-gold"
                    size="lg"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="ml-2 h-5 w-5 animate-spin" />
                        جارٍ التحليل...
                      </>
                    ) : (
                      <>
                        <Sparkles className="ml-2 h-5 w-5" />
                        حلّل الشعر
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="dictionary" className="space-y-4">
              <Card className="border-primary/30 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Library className="w-6 h-6 text-primary" />
                    المعجم اللغوي
                  </CardTitle>
                  <CardDescription>
                    ابحث عن معاني الكلمات ومرادفاتها وأصلها اللغوي
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="relative">
                    <Search className="absolute right-3 top-3 h-5 w-5 text-muted-foreground" />
                    <Input
                      placeholder="ابحث عن كلمة في المعجم..."
                      className="pr-10 text-lg h-12"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>

                  {searchTerm && (
                    <Card className="bg-secondary/10 border-secondary/30">
                      <CardHeader>
                        <CardTitle className="text-xl text-secondary font-arabic">
                          {searchTerm}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-2">
                          <h4 className="font-semibold text-foreground">المعنى:</h4>
                          <p className="text-muted-foreground leading-relaxed">
                            سيتم عرض معنى الكلمة هنا عند تفعيل الخدمة
                          </p>
                        </div>
                        
                        <div className="space-y-2">
                          <h4 className="font-semibold text-foreground">المرادفات:</h4>
                          <div className="flex flex-wrap gap-2">
                            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                              مرادف ١
                            </span>
                            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                              مرادف ٢
                            </span>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <h4 className="font-semibold text-foreground">الأصل اللغوي:</h4>
                          <p className="text-muted-foreground leading-relaxed">
                            معلومات عن أصل الكلمة واشتقاقها
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {['بلاغة', 'نحو', 'صرف', 'عروض', 'أدب', 'لغة'].map((category) => (
                      <Button
                        key={category}
                        variant="outline"
                        className="h-auto py-3 border-primary/30 hover:bg-gradient-islamic hover:text-primary-foreground"
                      >
                        <Library className="ml-2 w-4 h-4" />
                        {category}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Features Grid */}
          <div className="grid md:grid-cols-4 gap-4 mt-8">
            <Card className="border-primary/20 hover:shadow-gold hover:scale-105 transition-all duration-300 bg-gradient-to-br from-background to-primary/5">
              <CardHeader>
                <PenTool className="w-10 h-10 text-primary mb-2" />
                <CardTitle className="text-lg font-arabic">تصحيح دقيق</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  تصحيح الأخطاء الإملائية والنحوية بدقة عالية باستخدام الذكاء الاصطناعي
                </p>
              </CardContent>
            </Card>

            <Card className="border-secondary/20 hover:shadow-gold hover:scale-105 transition-all duration-300 bg-gradient-to-br from-background to-secondary/5">
              <CardHeader>
                <BookOpen className="w-10 h-10 text-secondary mb-2" />
                <CardTitle className="text-lg font-arabic">قواعد شاملة</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  تحليل متقدم للإعراب والقواعد النحوية والصرفية
                </p>
              </CardContent>
            </Card>

            <Card className="border-accent/20 hover:shadow-gold hover:scale-105 transition-all duration-300 bg-gradient-to-br from-background to-accent/5">
              <CardHeader>
                <Sparkles className="w-10 h-10 text-accent mb-2" />
                <CardTitle className="text-lg font-arabic">تحليل أدبي</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  تحليل الشعر والنصوص الأدبية بكافة أنواعها وأوزانها
                </p>
              </CardContent>
            </Card>

            <Card className="border-primary/20 hover:shadow-gold hover:scale-105 transition-all duration-300 bg-gradient-to-br from-background to-primary/5">
              <CardHeader>
                <Library className="w-10 h-10 text-primary mb-2" />
                <CardTitle className="text-lg font-arabic">معجم شامل</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  معجم لغوي متكامل للبحث عن معاني الكلمات ومرادفاتها
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-background/80 backdrop-blur-sm mt-16">
        <div className="container mx-auto px-4 py-6 text-center">
          <p className="text-muted-foreground">
            مُصَحِّح - مساعدك الذكي للغة العربية | بالذكاء الاصطناعي
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

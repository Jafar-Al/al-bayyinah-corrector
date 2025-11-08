import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Loader2, Sparkles, BookOpen, PenTool } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [inputText, setInputText] = useState("");
  const [correctedText, setCorrectedText] = useState("");
  const [analysis, setAnalysis] = useState("");
  const [isLoading, setIsLoading] = useState(false);
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
          <Card className="border-primary/20 bg-gradient-subtle shadow-gold">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <Sparkles className="w-12 h-12 text-primary animate-pulse" />
              </div>
              <CardTitle className="text-3xl font-bold text-foreground">
                مُصَحِّح اللغة العربية بالذكاء الاصطناعي
              </CardTitle>
              <CardDescription className="text-lg text-muted-foreground">
                تصحيح القواعد النحوية والإملائية، وتحليل الشعر والنصوص الأدبية
              </CardDescription>
            </CardHeader>
          </Card>

          {/* Main Tool */}
          <Tabs defaultValue="correction" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-muted/50">
              <TabsTrigger value="correction" className="gap-2">
                <PenTool className="w-4 h-4" />
                تصحيح النصوص
              </TabsTrigger>
              <TabsTrigger value="grammar" className="gap-2">
                <BookOpen className="w-4 h-4" />
                القواعد النحوية
              </TabsTrigger>
              <TabsTrigger value="poetry" className="gap-2">
                <Sparkles className="w-4 h-4" />
                تحليل الشعر
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
              <Card>
                <CardHeader>
                  <CardTitle>تحليل الشعر العربي</CardTitle>
                  <CardDescription>
                    تحليل الوزن والقافية والبحر الشعري
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Textarea
                    placeholder="اكتب أو الصق الأبيات الشعرية..."
                    className="min-h-[200px] text-lg resize-none font-serif"
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
          </Tabs>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-4 mt-8">
            <Card className="border-primary/20 hover:shadow-gold transition-all">
              <CardHeader>
                <PenTool className="w-8 h-8 text-primary mb-2" />
                <CardTitle className="text-lg">تصحيح دقيق</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  تصحيح الأخطاء الإملائية والنحوية بدقة عالية باستخدام الذكاء الاصطناعي
                </p>
              </CardContent>
            </Card>

            <Card className="border-secondary/20 hover:shadow-gold transition-all">
              <CardHeader>
                <BookOpen className="w-8 h-8 text-secondary mb-2" />
                <CardTitle className="text-lg">قواعد شاملة</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  تحليل متقدم للإعراب والقواعد النحوية والصرفية
                </p>
              </CardContent>
            </Card>

            <Card className="border-accent/20 hover:shadow-gold transition-all">
              <CardHeader>
                <Sparkles className="w-8 h-8 text-accent mb-2" />
                <CardTitle className="text-lg">تحليل أدبي</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  تحليل الشعر والنصوص الأدبية بكافة أنواعها وأوزانها
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

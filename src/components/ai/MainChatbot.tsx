import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { getGeminiApiKey } from "@/lib/keys";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import Sidebar from "../layout/Sidebar";
import { Loader2, MessageSquare } from "lucide-react";

export type ChatMessage = { role: "user" | "model"; content: string };

const MainChatbot = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "model",
      content: "👋 Hello! What would you like to explore from your last lesson?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [language, setLanguage] = useState<"en" | "my">("en");
  const scrollerRef = useRef<HTMLDivElement>(null);

  const latestLesson = useSelector((state: RootState) => state.latestLesson);

  useEffect(() => {
    scrollerRef.current?.scrollTo({
      top: scrollerRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  const getSystemPrompt = () => {
    if (language === "en") {
      return `
You are StudyBuddy — a friendly, helpful, and human-sounding AI tutor.

The student is currently learning **"${latestLesson.title}"** from Chapter ${latestLesson.chapter} in **${latestLesson.subject}**.

Respond in friendly, natural English. Start with detailed explanations and continue with concise, solid guidance.

Avoid sounding robotic. Be like a helpful mentor. Assume the student is learning this for the first time. Break concepts into simple ideas.
`;
    } else {
      return `
သင်သည် StudyBuddy ဖြစ်သည်။ သင်သည် ကျောင်းသားတစ်ဦးကို မြန်မာဘာသာဖြင့် သဘောပေါက်လွယ်အောင် ဖော်ပြပေးသော လူစုံအဖြစ် တာဝန်ယူထားပါသည်။

ကျောင်းသားသည် လတ်တလောသင်ကြားနေသော "${latestLesson.title}" ကို Chapter ${latestLesson.chapter} မှာ၊ **${latestLesson.subject}** ခေါင်းစဉ်အောက်မှာ သင်ယူနေပါသည်။

သင်၏ အဖြေများသည် မြန်မာဘာသာဖြင့် ဖြစ်ရမည်။ ပထမဆုံးအကြိမ်အဖြေမှာ အသေးစိတ်ဖော်ပြထားရမည်။ ဆက်လက်အဖြေများမှာ တိတိကျကျနဲ့ တိုတိုအကျဉ်းဖြစ်ရမည်။

ကျောင်းသားသည် ပထမဆုံးအကြိမ်တင်သင်ယူနေသည်ဟုယူဆ၍ ပညာပေးသူတစ်ဦးအဖြစ် သဘောတူဖော်ပြပါ။
`;
    }
  };

  const send = async (customPrompt?: string) => {
    const apiKey = getGeminiApiKey();
    if (!apiKey || !apiKey.startsWith("AIza")) {
      toast({ title: "Invalid or missing API key" });
      return;
    }

    const prompt = customPrompt || input.trim();
    if (!prompt) return;

    const userMsg: ChatMessage = { role: "user", content: prompt };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

      const firstUserIndex = messages.findIndex((m) => m.role === "user");
      const chatHistory =
        firstUserIndex === -1
          ? []
          : messages.slice(firstUserIndex).map((m) => ({
              role: m.role,
              parts: [{ text: m.content }],
            }));

      const chat = model.startChat({
        history: chatHistory,
        generationConfig: {
          temperature: 0.8,
          topP: 1,
        },
        systemInstruction: {
          role: "system",
          parts: [{ text: getSystemPrompt() }],
        },
      });

      const result = await chat.sendMessage(prompt);
      const response = await result.response;
      const replyText = response.text();

      setMessages((prev) => [...prev, { role: "model", content: replyText }]);
    } catch (error: any) {
      toast({
        title: "AI Error",
        description: error?.message || "Something went wrong.",
      });
    } finally {
      setLoading(false);
    }
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  const handleTopicClick = (topic: string) => {
    send(topic);
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "my" : "en"));
  };

  return (
    <div className="flex h-screen bg-muted/20">
      {/* Sidebar */}
      <div className="hidden md:block w-64 bg-card border-r shadow-sm">
        <Sidebar />
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col p-4">
        <Card className="flex-1 shadow-lg border-muted flex flex-col rounded-2xl overflow-hidden">
          <CardHeader className="bg-primary/10 px-6 py-4 border-b flex justify-between items-center">
            <CardTitle className="flex items-center gap-2 text-xl font-semibold text-primary">
              <MessageSquare className="w-5 h-5" />
              StudyBuddy AI Assistant
            </CardTitle>
            <Button variant="outline" size="sm" onClick={toggleLanguage}>
              {language === "en" ? "Switch to မြန်မာ" : "Switch to English"}
            </Button>
          </CardHeader>

          <CardContent className="flex-1 flex flex-col p-4 space-y-3 overflow-hidden">
            {/* Chat history */}
            <div
              ref={scrollerRef}
              className="flex-1 overflow-auto space-y-4 pr-2 rounded-lg border p-4 bg-background"
            >
              {messages.map((m, index) => (
                <div
                  key={index}
                  className={`flex ${
                    m.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[75%] px-4 py-2 rounded-2xl text-sm shadow-sm whitespace-pre-line ${
                      m.role === "user"
                        ? "bg-primary text-primary-foreground rounded-br-sm"
                        : "bg-accent text-accent-foreground rounded-bl-sm"
                    }`}
                  >
                    {m.content}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Loader2 className="animate-spin w-4 h-4" /> Thinking…
                </div>
              )}
            </div>

            {/* Suggested Topics */}
            {latestLesson?.topic?.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {latestLesson.topic.map((topic: string, idx: number) => (
                  <Button
                    key={idx}
                    onClick={() => handleTopicClick(topic)}
                    className="text-sm px-3 py-1.5 rounded-full"
                    variant="secondary"
                  >
                    {topic}
                  </Button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="flex gap-2 pt-2">
              <Input
                placeholder={
                  language === "en"
                    ? "Type your question..."
                    : "မေးချင်တာရေးပါ..."
                }
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onKeyDown}
                className="flex-1 rounded-full px-4"
                disabled={loading}
              />
              <Button
                onClick={() => send()}
                disabled={loading}
                className="rounded-full px-6"
              >
                {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Send"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MainChatbot;

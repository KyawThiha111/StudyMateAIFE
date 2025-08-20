import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { getGeminiApiKey } from "@/lib/keys";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store"; // Adjust path accordingly

export type ChatMessage = { role: "user" | "model"; content: string };

export const GeminiChat2 = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: "model", content: "Hi! I'm your study buddy. How can I help today?" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollerRef = useRef<HTMLDivElement>(null);

  // Access latest lesson from Redux state
  const latestLesson = useSelector((state: RootState) => state.latestLesson);

  useEffect(() => {
    scrollerRef.current?.scrollTo({
      top: scrollerRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages]);

  const send = async () => {
    const apiKey = getGeminiApiKey();
    if (!apiKey) {
      toast({ title: "Gemini key missing", description: "Click Gemini API Key to add your key." });
      return;
    }
    if (!apiKey.startsWith("AIza")) {
      toast({
        title: "Invalid Gemini API key",
        description: "Please double-check your key in the top bar (should start with AIza…).",
      });
      return;
    }

    const prompt = input.trim();
    if (!prompt) return;

    const userMsg: ChatMessage = { role: "user", content: prompt };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      // --- FIX: history must start with a user message ---
      const firstUserIndex = messages.findIndex((m) => m.role === "user");
      const safeHistory =
        firstUserIndex === -1
          ? [] // no prior user turns; start a fresh chat
          : messages.slice(firstUserIndex).map((m) => ({ role: m.role, parts: [{ text: m.content }] }));
      // ---------------------------------------------------

      const chat = model.startChat({ history: safeHistory });
      const result = await chat.sendMessage(prompt);
      const response = await result.response;
      const text = response.text();

      setMessages((m) => [...m, { role: "model", content: text }]);
    } catch (e: any) {
      toast({
        title: "Gemini error",
        description: e?.message || "Failed to get response",
      });
    } finally {
      setLoading(false);
    }
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      void send();
    }
  };

  // Handle button click to trigger specific topic response
  const handleTopicClick = (topic: string) => {
    setInput(topic); // Set the clicked topic as the input
    send(); // Trigger the send function to get the AI's response
  };

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>AI Assistant</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col h-[480px]">
        <div ref={scrollerRef} className="flex-1 overflow-auto space-y-3 pr-1">
          {messages.map((m, i) => (
            <div key={i} className={m.role === "user" ? "flex justify-end" : "flex justify-start"}>
              <div
                className={
                  m.role === "user"
                    ? "max-w-[80%] rounded-lg bg-primary text-primary-foreground px-3 py-2"
                    : "max-w-[80%] rounded-lg bg-accent text-accent-foreground px-3 py-2"
                }
              >
                {m.content}
              </div>
            </div>
          ))}
          {loading && <div className="text-sm text-muted-foreground">Thinking…</div>}
        </div>

        {/* Dynamic Buttons based on the latest lesson's topics */}
        <div className="flex gap-2 mt-3 flex-col">
          {latestLesson.topic.map((topic:string, index:number) => (
            <Button className="text-[10px] px-2 inline-block text-wrap" key={index} onClick={() => handleTopicClick(topic)}>
             {topic}
            </Button>
          ))}
         
        </div>

        <div className="mt-3 flex gap-2">
          <Input
            placeholder="Ask anything…"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKeyDown}
          />
          <Button onClick={send} variant="hero" disabled={loading}>
            Send
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default GeminiChat2;


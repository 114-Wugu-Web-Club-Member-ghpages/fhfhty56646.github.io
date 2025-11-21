import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Send, User } from "lucide-react";
import { format } from "date-fns";
import { zhTW } from "date-fns/locale";

interface Message {
  id: string;
  name: string;
  message: string;
  createdAt: Date;
}

export default function GuestbookSection() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      name: "小明",
      message: "很佩服你的運動精神！繼續加油！",
      createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
    },
    {
      id: "2",
      name: "阿華",
      message: "看到你的成長真的很激勵人心，希望有機會能一起打球！",
      createdAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
    },
    {
      id: "3",
      name: "Amy",
      message: "你的毅力讓我很感動，學業和運動都能兼顧真的不容易！",
      createdAt: new Date(Date.now() - 5 * 60 * 60 * 1000),
    },
  ]);

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    setIsSubmitting(true);
    
    setTimeout(() => {
      const newMessage: Message = {
        id: Date.now().toString(),
        name: name.trim(),
        message: message.trim(),
        createdAt: new Date(),
      };
      
      setMessages([newMessage, ...messages]);
      setName("");
      setMessage("");
      setIsSubmitting(false);
      console.log('Message submitted:', newMessage);
    }, 500);
  };

  return (
    <section id="guestbook" className="py-20 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-5xl md:text-6xl mb-4">留言板</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-4" />
          <p className="text-muted-foreground">
            歡迎留下您的想法與鼓勵
          </p>
          <Badge variant="secondary" className="mt-4" data-testid="badge-message-count">
            <MessageSquare className="w-4 h-4 mr-1" />
            {messages.length} 則留言
          </Badge>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <Card className="lg:col-span-2 p-6" data-testid="card-message-form">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Send className="w-5 h-5 text-primary" />
              寫下留言
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="text-sm font-medium mb-2 block">
                  您的名字
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="請輸入名字"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  data-testid="input-name"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-sm font-medium mb-2 block">
                  留言內容
                </label>
                <Textarea
                  id="message"
                  placeholder="分享您的想法..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={6}
                  required
                  data-testid="input-message"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full" 
                disabled={isSubmitting}
                data-testid="button-submit"
              >
                {isSubmitting ? '送出中...' : '送出留言'}
              </Button>
            </form>
          </Card>

          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xl font-semibold mb-4">最新留言</h3>
            <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
              {messages.length === 0 ? (
                <Card className="p-8 text-center">
                  <p className="text-muted-foreground">還沒有留言，成為第一個留言的人吧！</p>
                </Card>
              ) : (
                messages.map((msg, index) => (
                  <Card 
                    key={msg.id} 
                    className="p-6 border-l-4 border-l-primary hover-elevate"
                    data-testid={`card-message-${index}`}
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <User className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <h4 className="font-semibold" data-testid={`text-message-name-${index}`}>{msg.name}</h4>
                          <span className="text-xs text-muted-foreground" data-testid={`text-message-time-${index}`}>
                            {format(msg.createdAt, 'PPp', { locale: zhTW })}
                          </span>
                        </div>
                        <p className="text-foreground/90" data-testid={`text-message-content-${index}`}>{msg.message}</p>
                      </div>
                    </div>
                  </Card>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Card } from "@/components/ui/card";
import { Mail, Instagram, Facebook, MessageCircle } from "lucide-react";
import { SiLine } from "react-icons/si";

export default function ContactSection() {
  const contacts = [
    {
      icon: Mail,
      label: "Email",
      value: "student@example.com",
      href: "mailto:student@example.com",
      color: "text-red-500",
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@student_athlete",
      href: "https://instagram.com",
      color: "text-pink-500",
    },
    {
      icon: Facebook,
      label: "Facebook",
      value: "學生運動員",
      href: "https://facebook.com",
      color: "text-blue-500",
    },
    {
      icon: SiLine,
      label: "LINE",
      value: "@studentathlete",
      href: "https://line.me",
      color: "text-green-500",
      isReactIcon: true,
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-background relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'repeating-linear-gradient(45deg, hsl(var(--primary)) 0px, hsl(var(--primary)) 10px, transparent 10px, transparent 20px)',
        }}
      />
      
      <div className="max-w-4xl mx-auto relative">
        <div className="text-center mb-12">
          <h2 className="font-display text-5xl md:text-6xl mb-4">聯絡我</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-4" />
          <p className="text-muted-foreground text-lg">
            隨時歡迎交流與合作
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {contacts.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <a
                key={index}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                data-testid={`link-contact-${index}`}
              >
                <Card className="p-8 hover-elevate active-elevate-2 transition-all duration-300 text-center group">
                  <div className="flex flex-col items-center gap-4">
                    <div className={`p-4 bg-card rounded-xl ${contact.color} transition-transform group-hover:scale-110`}>
                      {contact.isReactIcon ? (
                        <Icon className="w-8 h-8" />
                      ) : (
                        <Icon className="w-8 h-8" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1" data-testid={`text-contact-label-${index}`}>{contact.label}</h3>
                      <p className="text-sm text-muted-foreground" data-testid={`text-contact-value-${index}`}>{contact.value}</p>
                    </div>
                  </div>
                </Card>
              </a>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Card className="p-8 bg-primary/5 border-primary/20">
            <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">期待與您交流</h3>
            <p className="text-muted-foreground">
              無論是運動話題、學習心得，或是任何想法，都歡迎與我聯繫！
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Calendar, Target } from "lucide-react";
import profileImage from "@assets/generated_images/Student_profile_photo_c195a53a.png";

export default function AboutSection() {
  const stats = [
    { icon: Calendar, label: "年級", value: "高中三年級" },
    { icon: Trophy, label: "專長運動", value: "籃球 / 游泳" },
    { icon: Target, label: "運動年資", value: "8 年" },
  ];

  const sports = [
    { name: "籃球", description: "校隊成員，擔任控球後衛", level: "進階" },
    { name: "游泳", description: "自由式、蛙式專項訓練", level: "中級" },
    { name: "跑步", description: "晨跑愛好者，半馬完賽", level: "中級" },
    { name: "健身", description: "重量訓練與體能強化", level: "初階" },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-transparent rounded-xl transform -rotate-3" />
              <img
                src={profileImage}
                alt="個人照片"
                className="relative rounded-xl w-full aspect-square object-cover shadow-xl"
              />
            </div>

            <div className="grid grid-cols-1 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="p-6 hover-elevate" data-testid={`card-stat-${index}`}>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <stat.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                      <p className="text-lg font-semibold" data-testid={`text-stat-value-${index}`}>{stat.value}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="font-display text-5xl md:text-6xl mb-4 text-foreground">
                關於我
              </h2>
              <div className="h-1 w-20 bg-primary mb-6" />
            </div>

            <div className="space-y-4 text-foreground/90 leading-relaxed">
              <p>
                大家好！我是一名熱愛運動的高三學生。從小學開始接觸籃球，這項運動教會我團隊合作的重要性，也培養了我永不放棄的精神。
              </p>
              <p>
                除了籃球，我也熱衷於游泳和跑步。每週固定的訓練讓我保持最佳狀態，運動不僅強健我的體魄，更磨練了我的意志力。
              </p>
              <p>
                在學業與運動之間找到平衡是我一直在努力的目標。我相信運動帶給我的紀律與毅力，能幫助我在人生的各個領域都取得成功。
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">興趣愛好</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" data-testid="badge-interest-0">運動競技</Badge>
                <Badge variant="secondary" data-testid="badge-interest-1">健身訓練</Badge>
                <Badge variant="secondary" data-testid="badge-interest-2">戶外活動</Badge>
                <Badge variant="secondary" data-testid="badge-interest-3">閱讀學習</Badge>
                <Badge variant="secondary" data-testid="badge-interest-4">音樂欣賞</Badge>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="font-display text-4xl mb-8 text-center">專長項目</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sports.map((sport, index) => (
              <Card 
                key={index} 
                className="p-6 hover-elevate transition-all duration-300 border-l-4 border-l-primary"
                data-testid={`card-sport-${index}`}
              >
                <h4 className="text-xl font-bold mb-2" data-testid={`text-sport-name-${index}`}>{sport.name}</h4>
                <p className="text-sm text-muted-foreground mb-3">{sport.description}</p>
                <Badge variant="outline" data-testid={`badge-sport-level-${index}`}>{sport.level}</Badge>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

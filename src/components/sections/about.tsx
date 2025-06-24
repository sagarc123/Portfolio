import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { SectionWrapper } from '@/components/shared/section-wrapper';
import { skills } from '@/lib/constants';

export function AboutSection() {
  return (
    <SectionWrapper id="about">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="slide-in-left">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground mb-6 text-lg">
          I’m Sagar Chavan, a final-year B.E. student in Artificial Intelligence and Data Science.I focus on machine learning, natural language processing, and data analysis projects.I’ve built intelligent systems and created interactive dashboards for data-driven insights.Skilled in C++, Java, Python, and SQL, I enjoy solving real-world problems through technology.
          </p>
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <div key={skill.name} className="fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="flex justify-between items-center mb-1">
                  <p className="font-medium flex items-center gap-2"><skill.Icon className="h-5 w-5 text-primary" /> {skill.name}</p>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <Progress value={skill.level} className="h-3 border-2 border-primary/30 bg-primary/10 p-0.5" />
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center fade-in">
          <Card className="w-full max-w-sm hud-card bg-card/80 backdrop-blur-sm">
            <div className="relative z-10 p-1">
              <CardHeader className="items-center text-center">
                <Image
                  src="https://placehold.co/150x150.png"
                  alt="Sagar Chavan"
                  width={150}
                  height={150}
                  data-ai-hint="profile picture"
                  className="rounded-full border-4 border-primary mb-4 shadow-lg"
                />
                <CardTitle className="text-2xl">Sagar Chavan</CardTitle>
                <CardDescription className="text-secondary">Full-Stack Developer</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-center text-sm text-muted-foreground">
                    Based in a digital realm near you, turning coffee into code and ideas into reality.
                </p>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
    </SectionWrapper>
  );
}

import { socialLinks } from '@/lib/constants';
import { Code } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Footer() {
  return (
    <footer className="w-full py-8 border-t border-border/50">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
            <div className="flex justify-center items-center gap-2 mb-4">
                <Code className="h-5 w-5 text-primary" />
                <p>Crafted by Sagar Chavan</p>
            </div>
            <div className="flex justify-center space-x-2 mb-4">
                {socialLinks.map((link) => (
                    <Button key={link.name} asChild variant="ghost" size="icon">
                        <Link href={link.url} target="_blank" aria-label={link.name} className="hover:text-primary transition-colors">
                            <link.Icon className="h-5 w-5" />
                        </Link>
                    </Button>
                ))}
            </div>
            <p className="text-sm">&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</p>
        </div>
    </footer>
  );
}

"use client"

import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { SectionWrapper } from "@/components/shared/section-wrapper"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { socialLinks } from "@/lib/constants"
import Link from "next/link"
import { useToast } from "@/hooks/use-toast"
import { Send } from "lucide-react"

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

export function ContactSection() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: "", email: "", message: "" },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    })
    form.reset()
  }

  return (
    <SectionWrapper id="contact">
        <div className="grid md:grid-cols-2 gap-12">
            <div className="fade-in-up">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">Get In Touch</h2>
                <p className="text-muted-foreground mb-8">
                    Have a project in mind, a question, or just want to say hi? My inbox is always open.
                </p>
                <div className="flex space-x-4">
                    {socialLinks.map(({ name, url, Icon }) => (
                        <Button key={name} asChild variant="outline" size="icon" className="hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors duration-300">
                            <Link href={url} target="_blank" aria-label={name}>
                                <Icon />
                            </Link>
                        </Button>
                    ))}
                </div>
            </div>

            <div className="fade-in-up" style={{ animationDelay: '200ms' }}>
                 <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Your Name" {...field} className="focus:border-primary transition-colors" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                         <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input type="email" placeholder="your.email@example.com" {...field} className="focus:border-primary transition-colors" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                         <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Message</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="Tell me about your project or idea..." {...field} className="min-h-[120px] focus:border-primary transition-colors" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit" className="w-full hologram-button text-foreground">
                            <Send className="mr-2 h-4 w-4"/> Submit Message
                        </Button>
                    </form>
                </Form>
            </div>
        </div>
    </SectionWrapper>
  )
}

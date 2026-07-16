import { useState } from 'react';
import { Github, Linkedin, Mail, Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
 const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch('https://formspree.io/f/mblpkqvo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        toast({
          title: 'Message Sent!',
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        toast({
          title: 'Send failed',
          description: data?.error || 'There was an error sending your message.',
        });
      }
    } catch (error) {
      toast({
        title: 'Network error',
        description: 'Unable to send message. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 lg:py-28 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-14 md:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-gradient">
            Get In Touch
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 sm:gap-8">
          <Card className="p-6 sm:p-8 animate-fade-in border hover:border-primary/30 transition-all duration-300 bg-card">
            <h3 className="text-xl sm:text-2xl font-bold mb-5 sm:mb-6 flex items-center gap-2">
              <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
              Send a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              <div>
                <Input
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-background border-border focus:border-primary"
                />
              </div>
              <div>
                <Input
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-background border-border focus:border-primary"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Tell me about your needs"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-background border-border focus:border-primary"
                />
              </div>
              <Button type="submit" className="w-full gradient-primary text-white hover:opacity-90 shadow-glow min-h-[44px]">
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </Button>
            </form>
          </Card>

          <div className="space-y-5 sm:space-y-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Card className="p-6 sm:p-8 border hover:border-primary/20 transition-all duration-300 bg-card">
              <h3 className="text-xl sm:text-2xl font-bold mb-2">Connect</h3>
              <p className="text-sm text-muted-foreground mb-5 sm:mb-6">Find me on these platforms</p>
              <div className="space-y-4">
                <a
                  href="https://github.com/sofonias-dawit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 group"
                >
                  <Github className="h-6 w-6 text-primary" />
                  <div>
                    <p className="font-semibold group-hover:text-primary transition-smooth">GitHub</p>
                    <p className="text-sm text-muted-foreground">View my code</p>
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/in/sofoniasdawit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 group"
                >
                  <Linkedin className="h-6 w-6 text-primary" />
                  <div>
                    <p className="font-semibold group-hover:text-primary transition-smooth">LinkedIn</p>
                    <p className="text-sm text-muted-foreground">Connect professionally</p>
                  </div>
                </a>
                <a
                  href="mailto:sofoniasdawit00@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 group"
                >
                  <Mail className="h-6 w-6 text-primary" />
                  <div>
                    <p className="font-semibold group-hover:text-primary transition-smooth">Email</p>
                    <p className="text-sm text-muted-foreground">sofoniasdawit00@gmail.com</p>
                  </div>
                </a>
                <a
                  href="https://t.me/sofoniasdawit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg border border-border hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 group"
                >
                  <Send className="h-6 w-6 text-primary" />
                  <div>
                    <p className="font-semibold group-hover:text-primary transition-smooth">Telegram</p>
                    <p className="text-sm text-muted-foreground">Connect on Telegram</p>
                  </div>
                </a>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

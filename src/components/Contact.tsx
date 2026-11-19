import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Github, Linkedin, Mail, Send, Copy, Check, Loader2, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const shouldReduceMotion = useReducedMotion();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);

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
          title: 'Message Sent Successfully',
          description: "Thank you for reaching out. I'll get back to you within 24 hours.",
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        toast({
          title: 'Send failed',
          description: data?.error || 'There was an error sending your message.',
        });
      }
    } catch {
      toast({
        title: 'Network error',
        description: 'Unable to send message. Please try again later or email directly.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText('sofoniasdawit00@gmail.com');
    setCopied(true);
    toast({
      title: 'Email Copied to Clipboard',
      description: 'sofoniasdawit00@gmail.com is ready to paste.',
    });
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 sm:py-24 border-t border-border/60 relative scroll-mt-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-10 sm:mb-12">
            <span className="font-mono text-xs font-medium text-primary tracking-widest uppercase block mb-2">
              // 05. Contact
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Let's build something together.
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground mt-2 max-w-xl">
              Looking for a freelance developer for your next web platform, redesign, or custom build? Let's discuss your timeline and goals.
            </p>
          </div>

          <div className="grid md:grid-cols-12 gap-8 items-start">
            {/* Contact Form - 7 cols */}
            <Card className="md:col-span-7 p-5 sm:p-8 rounded-xl border border-border/80 bg-card card-surface hover:border-primary/40 transition-colors">
              <h3 className="text-lg font-bold text-foreground mb-4">
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-1.5 block">
                    Your Name
                  </label>
                  <Input
                    name="name"
                    placeholder="e.g. John Thomas"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-secondary/40 border-border focus:border-primary focus:ring-1 focus:ring-primary/20 font-sans"
                  />
                </div>
                <div>
                  <label className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-1.5 block">
                    Email Address
                  </label>
                  <Input
                    name="email"
                    type="email"
                    placeholder="e.g. john@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-secondary/40 border-border focus:border-primary focus:ring-1 focus:ring-primary/20 font-sans"
                  />
                </div>
                <div>
                  <label className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-1.5 block">
                    Your Message
                  </label>
                  <Textarea
                    name="message"
                    placeholder="Tell me about your project, timeline, or idea..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-secondary/40 border-border focus:border-primary focus:ring-1 focus:ring-primary/20 font-sans"
                  />
                </div>
                <motion.div
                  whileHover={shouldReduceMotion ? {} : { scale: 1.01 }}
                  whileTap={shouldReduceMotion ? {} : { scale: 0.98 }}
                >
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full gradient-primary text-white hover:opacity-90 shadow-glow font-medium min-h-[44px] transition-all"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </motion.div>
              </form>
            </Card>

            {/* Direct Channels - 5 cols */}
            <div className="md:col-span-5 space-y-4">
              <Card className="p-5 sm:p-6 rounded-xl border border-border/80 bg-card card-surface hover:border-primary/40 transition-colors">
                <h3 className="text-base font-bold text-foreground mb-1">Direct Channels</h3>
                <p className="text-xs text-muted-foreground mb-4">Reach out through your preferred platform</p>

                {/* Turnaround Pill */}
                <div className="flex items-center gap-2 p-3 rounded-lg bg-primary/5 border border-primary/20 text-xs text-foreground/80 mb-4 font-mono">
                  <Clock className="h-3.5 w-3.5 text-primary flex-shrink-0" />
                  <span>Response time: usually within 24 hours</span>
                </div>

                <div className="space-y-2">
                  {/* Email with 1-click Copy */}
                  <motion.div
                    whileHover={shouldReduceMotion ? {} : { x: 4 }}
                    transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                    className="flex items-center justify-between p-3 rounded-lg border border-border/70 hover:border-primary/40 hover:bg-primary/5 transition-colors"
                  >
                    <a
                      href="mailto:sofoniasdawit00@gmail.com"
                      className="flex items-center gap-3 min-w-0 flex-1"
                    >
                      <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                      <div className="min-w-0">
                        <p className="font-medium text-xs text-foreground">Email</p>
                        <p className="text-xs text-muted-foreground font-mono truncate">sofoniasdawit00@gmail.com</p>
                      </div>
                    </a>
                    <button
                      onClick={handleCopyEmail}
                      className="p-1.5 rounded hover:bg-secondary text-muted-foreground hover:text-foreground transition-colors"
                      title="Copy email to clipboard"
                      type="button"
                    >
                      {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
                    </button>
                  </motion.div>

                  {/* LinkedIn */}
                  <motion.a
                    whileHover={shouldReduceMotion ? {} : { x: 4 }}
                    transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                    href="https://www.linkedin.com/in/sofoniasdawit/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg border border-border/70 hover:border-primary/40 hover:bg-primary/5 transition-colors"
                  >
                    <Linkedin className="h-4 w-4 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-medium text-xs text-foreground">LinkedIn</p>
                      <p className="text-xs text-muted-foreground font-mono">sofoniasdawit</p>
                    </div>
                  </motion.a>

                  {/* GitHub */}
                  <motion.a
                    whileHover={shouldReduceMotion ? {} : { x: 4 }}
                    transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                    href="https://github.com/sofonias-dawit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg border border-border/70 hover:border-primary/40 hover:bg-primary/5 transition-colors"
                  >
                    <Github className="h-4 w-4 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-medium text-xs text-foreground">GitHub</p>
                      <p className="text-xs text-muted-foreground font-mono">github.com/sofonias-dawit</p>
                    </div>
                  </motion.a>

                  {/* Telegram */}
                  <motion.a
                    whileHover={shouldReduceMotion ? {} : { x: 4 }}
                    transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                    href="https://t.me/SofoniasDawit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg border border-border/70 hover:border-primary/40 hover:bg-primary/5 transition-colors"
                  >
                    <Send className="h-4 w-4 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-medium text-xs text-foreground">Telegram</p>
                      <p className="text-xs text-muted-foreground font-mono">t.me/SofoniasDawit</p>
                    </div>
                  </motion.a>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

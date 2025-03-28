import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Mail, Phone, Github, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

// Form validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(2, { message: "Subject is required" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(data: ContactFormValues) {
    setIsSubmitting(true);
    try {
      // Send form data to the API
      await apiRequest("POST", "/api/contact", data);
      toast({
        title: "Message sent successfully!",
        description: "I'll get back to you as soon as possible.",
        variant: "default",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section id="contact" className="py-20 bg-slate-100 dark:bg-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
          <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-xl mx-auto">
            Feel free to contact me for any work or suggestions. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-white dark:bg-slate-700 shadow-md dark:shadow-slate-900/50">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-slate-900 dark:text-white">
                  Send Me a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your Name" 
                              {...field} 
                              className="w-full px-4 py-2 rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200"
                            />
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
                            <Input 
                              placeholder="your@email.com" 
                              {...field} 
                              className="w-full px-4 py-2 rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Subject" 
                              {...field} 
                              className="w-full px-4 py-2 rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200"
                            />
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
                            <Textarea 
                              placeholder="Your message here..." 
                              rows={5} 
                              {...field} 
                              className="w-full px-4 py-2 rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button 
                      type="submit" 
                      className="w-full px-4 py-3 bg-primary hover:bg-primary/90 text-white font-medium rounded-md"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-white dark:bg-slate-700 shadow-md dark:shadow-slate-900/50 h-full">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-slate-900 dark:text-white">
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary-100 dark:bg-primary/20 rounded-full flex items-center justify-center text-primary">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Email
                      </h4>
                      <a
                        href="mailto:avantikakodape16@gmail.com"
                        className="text-slate-800 dark:text-slate-200 hover:text-primary dark:hover:text-primary-400 transition-colors"
                      >
                        avantikakodape16@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary-100 dark:bg-primary/20 rounded-full flex items-center justify-center text-primary">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        Phone
                      </h4>
                      <a
                        href="tel:+919370749369"
                        className="text-slate-800 dark:text-slate-200 hover:text-primary dark:hover:text-primary-400 transition-colors"
                      >
                        +91-9370749369
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary-100 dark:bg-primary/20 rounded-full flex items-center justify-center text-primary">
                      <Linkedin className="h-5 w-5" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        LinkedIn
                      </h4>
                      <a
                        href="https://www.linkedin.com/in/avantika-kodape-b01051204/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-800 dark:text-slate-200 hover:text-primary dark:hover:text-primary-400 transition-colors"
                      >
                        linkedin.com/in/avantika-kodape
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary-100 dark:bg-primary/20 rounded-full flex items-center justify-center text-primary">
                      <Github className="h-5 w-5" />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">
                        GitHub
                      </h4>
                      <a
                        href="https://github.com/AvantikaKodape16"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-800 dark:text-slate-200 hover:text-primary dark:hover:text-primary-400 transition-colors"
                      >
                        github.com/AvantikaKodape16
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-600">
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-4">
                    Follow Me
                  </h4>
                  <div className="flex space-x-4">
                    <a
                      href="https://github.com/AvantikaKodape16"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-slate-100 dark:bg-slate-600 hover:bg-primary-100 dark:hover:bg-primary/20 rounded-full flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary-400 transition-colors"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/avantika-kodape-b01051204/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-slate-100 dark:bg-slate-600 hover:bg-primary-100 dark:hover:bg-primary/20 rounded-full flex items-center justify-center text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary-400 transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

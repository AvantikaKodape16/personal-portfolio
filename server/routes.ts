import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import { validate } from "email-validator";

const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().min(2),
  message: z.string().min(10),
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate the request body
      const result = contactFormSchema.safeParse(req.body);
      
      if (!result.success) {
        return res.status(400).json({ 
          message: "Invalid form data", 
          errors: result.error.format() 
        });
      }
      
      const { name, email, subject, message } = result.data;
      
      // Validate email additionally with email-validator
      if (!validate(email)) {
        return res.status(400).json({ 
          message: "Invalid email address" 
        });
      }

      // In a real application, you would send an email here
      // For now, just log the message and return success
      console.log("Contact form submission:", {
        name,
        email,
        subject,
        message,
        timestamp: new Date().toISOString()
      });
      
      return res.status(200).json({ 
        message: "Message received successfully!" 
      });
    } catch (error) {
      console.error("Error processing contact form:", error);
      return res.status(500).json({ 
        message: "Server error processing your message. Please try again later." 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}

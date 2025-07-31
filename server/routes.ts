import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactRequestSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactRequestSchema.parse(req.body);
      const contactRequest = await storage.createContactRequest(validatedData);
      
      res.status(201).json({ 
        success: true, 
        message: "Solicitud de contacto enviada correctamente",
        id: contactRequest.id 
      });
    } catch (error) {
      console.error("Error creating contact request:", error);
      res.status(400).json({ 
        success: false, 
        message: "Error al procesar la solicitud" 
      });
    }
  });

  // Get all contact requests (for admin use)
  app.get("/api/contact-requests", async (req, res) => {
    try {
      const requests = await storage.getContactRequests();
      res.json(requests);
    } catch (error) {
      console.error("Error fetching contact requests:", error);
      res.status(500).json({ 
        success: false, 
        message: "Error al obtener las solicitudes" 
      });
    }
  });

  // Get specific contact request
  app.get("/api/contact-requests/:id", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const request = await storage.getContactRequest(id);
      
      if (!request) {
        return res.status(404).json({ 
          success: false, 
          message: "Solicitud no encontrada" 
        });
      }
      
      res.json(request);
    } catch (error) {
      console.error("Error fetching contact request:", error);
      res.status(500).json({ 
        success: false, 
        message: "Error al obtener la solicitud" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}

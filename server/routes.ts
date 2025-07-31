import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactRequestSchema, insertWhatsAppContactSchema } from "@shared/schema";

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

  // WhatsApp contact endpoint
  app.post("/api/whatsapp-contact", async (req, res) => {
    try {
      const validatedData = insertWhatsAppContactSchema.parse(req.body);
      const contactRequest = await storage.createContactRequest(validatedData);
      
      res.status(201).json({ 
        success: true, 
        message: "Contacto de WhatsApp registrado correctamente",
        id: contactRequest.id 
      });
    } catch (error) {
      console.error("Error creating WhatsApp contact:", error);
      res.status(400).json({ 
        success: false, 
        message: "Error al procesar el contacto de WhatsApp" 
      });
    }
  });

  // Update contact status
  app.patch("/api/contact-requests/:id/status", async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      const { status } = req.body;
      
      if (!["pending", "contacted", "completed"].includes(status)) {
        return res.status(400).json({
          success: false,
          message: "Estado inválido. Debe ser: pending, contacted o completed"
        });
      }
      
      const updated = await storage.updateContactStatus(id, status);
      
      if (!updated) {
        return res.status(404).json({ 
          success: false, 
          message: "Solicitud no encontrada" 
        });
      }
      
      res.json({ 
        success: true, 
        message: "Estado actualizado correctamente",
        data: updated 
      });
    } catch (error) {
      console.error("Error updating contact status:", error);
      res.status(500).json({ 
        success: false, 
        message: "Error al actualizar el estado" 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}

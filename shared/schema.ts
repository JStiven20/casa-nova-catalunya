import { pgTable, text, serial, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const contactRequests = pgTable("contact_requests", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email"),
  phone: text("phone").notNull(),
  city: text("city"),
  service: text("service").notNull(),
  message: text("message"),
  source: text("source").notNull().default("web"), // "web" or "whatsapp"
  status: text("status").notNull().default("pending"), // "pending", "contacted", "completed"
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertContactRequestSchema = createInsertSchema(contactRequests).omit({
  id: true,
  createdAt: true,
});

export const insertWhatsAppContactSchema = createInsertSchema(contactRequests).omit({
  id: true,
  createdAt: true,
  email: true,
  city: true,
}).extend({
  source: z.literal("whatsapp"),
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;
export type InsertContactRequest = z.infer<typeof insertContactRequestSchema>;
export type InsertWhatsAppContact = z.infer<typeof insertWhatsAppContactSchema>;
export type ContactRequest = typeof contactRequests.$inferSelect;

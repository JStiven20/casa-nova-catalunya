import { users, contactRequests, type User, type InsertUser, type ContactRequest, type InsertContactRequest, type InsertWhatsAppContact } from "@shared/schema";
import { db } from "./db";
import { eq, desc } from "drizzle-orm";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactRequest(request: InsertContactRequest | InsertWhatsAppContact): Promise<ContactRequest>;
  getContactRequests(): Promise<ContactRequest[]>;
  getContactRequest(id: number): Promise<ContactRequest | undefined>;
  updateContactStatus(id: number, status: string): Promise<ContactRequest | undefined>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db
      .insert(users)
      .values(insertUser)
      .returning();
    return user;
  }

  async createContactRequest(request: InsertContactRequest | InsertWhatsAppContact): Promise<ContactRequest> {
    const [contactRequest] = await db
      .insert(contactRequests)
      .values(request)
      .returning();
    return contactRequest;
  }

  async updateContactStatus(id: number, status: string): Promise<ContactRequest | undefined> {
    const [updated] = await db
      .update(contactRequests)
      .set({ status })
      .where(eq(contactRequests.id, id))
      .returning();
    return updated || undefined;
  }

  async getContactRequests(): Promise<ContactRequest[]> {
    return await db.select().from(contactRequests).orderBy(desc(contactRequests.createdAt));
  }

  async getContactRequest(id: number): Promise<ContactRequest | undefined> {
    const [request] = await db.select().from(contactRequests).where(eq(contactRequests.id, id));
    return request || undefined;
  }
}

export const storage = new DatabaseStorage();

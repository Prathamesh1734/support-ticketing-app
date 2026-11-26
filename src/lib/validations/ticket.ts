import { z } from "zod";

export const createTicketSchema = z.object({
  subject: z.string().min(5).max(120),
  description: z.string().min(10).max(5000),
  priority: z.enum(["LOW", "MEDIUM", "HIGH", "URGENT"]).default("MEDIUM"),
  category: z.string().max(50).optional(),
});

export type CreateTicketInput = z.infer<typeof createTicketSchema>;

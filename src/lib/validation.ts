import sanitizeHTML from "sanitize-html";
import { z } from "zod";

export const contactFormValidationSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(1, "Nome muito curto")
    .regex(/^[\p{L} '-]+$/u, "Nome inválido"),
  lastName: z
    .string()
    .trim()
    .min(1, "Sobrenome muito curto")
    .regex(/^[\p{L} '-]+$/u, "Sobrenome inválido"),
  email: z.string().trim().toLowerCase().email("Email inválido"),
  phone: z
    .string()
    .trim()
    .regex(/^\d{9}$/, "Telefone inválido"),
  message: z
    .string()
    .trim()
    .min(5, "Mensagem muito curta")
    .max(500, "Mensagem muito longa")
    .transform((message) =>
      sanitizeHTML(message, {
        allowedTags: [],
        allowedAttributes: {},
      }).trim(),
    ),
});

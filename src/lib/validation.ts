import { z } from "zod";

export const contactFormValidationSchema = z.object({
  firstName: z.string().min(1, "Nome muito curto"),
  lastName: z.string().min(1, "Sobrenome muito curto"),
  email: z.string().email("Email inválido"),
  phone: z
    .string()
    .min(1, "Telefone muito curto")
    .regex(/^\+244\d{9}$/, "Telefone inválido"),
  message: z
    .string()
    .min(5, "Mensagem muito curta")
    .max(500, "Mensagem muito longa"),
});

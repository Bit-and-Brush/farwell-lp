import { sendMessage } from "@/api";
import { contactFormValidationSchema } from "@/lib/validation";
import { ActionError, defineAction } from "astro:actions";

export const server = {
  sendMessage: defineAction({
    input: contactFormValidationSchema,
    handler: async (input) => {
      try {
        const response = await sendMessage(input);
        return { success: true, data: response };
      } catch (error) {
        console.log("Action error for sending message:", error);
        throw new ActionError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to send message. Please try again later.",
        });
      }
    },
  }),
};

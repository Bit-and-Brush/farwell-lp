import { s as sendMessage } from './chunks/index_BQo0B-NX.mjs';
import { c as contactFormValidationSchema } from './chunks/_astro_actions_C8uNxyjB.mjs';
import { d as defineAction } from './chunks/server_CULBtqt1.mjs';
import { A as ActionError } from './chunks/astro-designed-error-pages_CQGlNsb_.mjs';

const server = {
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
          message: "Failed to send message. Please try again later."
        });
      }
    }
  })
};

export { server };

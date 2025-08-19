import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contactFormValidationSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { actions } from "astro:actions";
import { useForm } from "react-hook-form";
import { toast, Toaster } from "sonner";
import { z } from "zod";
import Spinner from "../spinner";

type ContactFormData = z.infer<typeof contactFormValidationSchema>;

export default function ContactForm() {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormValidationSchema),
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
      message: "",
      phone: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    const result = await actions.sendMessage(data);
    if (result.error) {
      toast.error("Ocorreu um erro ao enviar a mensagem.", {
        description: "Por favor, tente novamente mais tarde.",
      });
      return;
    }
    toast.success("Mensagem enviada com sucesso!", {
      description: "Em breve, retornaremos o contato.",
    });
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="bg-background space-y-4 rounded-xl border p-6 shadow-xs"
      >
        <>
          <h3 className="text-secondary mb-2 text-2xl font-bold">
            Envie-nos uma mensagem
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Primeiro nome</FormLabel>
                  <FormControl>
                    <Input placeholder="Seu primeiro nome" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Último nome</FormLabel>
                  <FormControl>
                    <Input placeholder="Seu último nome" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    autoComplete="email"
                    placeholder="seu@email.com"
                    type="email"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Telefone</FormLabel>
                <FormControl>
                  <Input
                    autoComplete="tel"
                    placeholder="+244 XXX XXX XXX"
                    maxLength={9}
                    type="tel"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mensagem</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Como podemos ajudar?"
                    maxLength={500}
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  {form.getValues("message").length} / 500
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            disabled={form.formState.isSubmitting}
            className="w-full"
          >
            <Spinner show={form.formState.isSubmitting} />
            Enviar mensagem
          </Button>
        </>
        <Toaster position="bottom-right" richColors />
      </form>
    </Form>
  );
}

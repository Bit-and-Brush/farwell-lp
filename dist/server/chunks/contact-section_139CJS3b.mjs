import { c as createAstro, a as createComponent, m as maybeRenderHead, b as renderComponent, d as renderTemplate } from './astro/server_DRQd-RgF.mjs';
import 'kleur/colors';
import { $ as $$Image } from './_astro_assets_CTJtQqK3.mjs';
import { $ as $$SectionHeader } from './section-header_F1gyPAny.mjs';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { c as cn, B as Button } from './main-layout_DUNOsHRB.mjs';
import { Slot } from '@radix-ui/react-slot';
import * as React from 'react';
import { FormProvider, Controller, useFormContext, useFormState, useForm } from 'react-hook-form';
import * as LabelPrimitive from '@radix-ui/react-label';
import { c as contactFormValidationSchema, a as actions } from './_astro_actions_C8uNxyjB.mjs';
import { zodResolver } from '@hookform/resolvers/zod';
import { Toaster, toast } from 'sonner';

const $$Astro$2 = createAstro("https://farwell.co.ao");
const $$ContactCardItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ContactCardItem;
  const { title, content, iconUrl } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="flex items-start gap-4 rounded-xl border p-6 shadow-xs"> ${iconUrl && renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": iconUrl, "alt": "", "width": 24, "height": 24 })}`} <div class="flex-1 space-y-1"> <h3 class="text-secondary font-bold">${title}</h3> <p class="text-sm">${content}</p> </div> </li>`;
}, "/Users/k3lm4n/Documents/GitHub/farwell-lp/src/components/common/contact-card-item.astro", void 0);

const $$Astro$1 = createAstro("https://farwell.co.ao");
const $$Contacts = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Contacts;
  const { contacts } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul class="space-y-6"> ${contacts.map(({ title, value, icon }) => renderTemplate`${renderComponent($$result, "ContactCardItem", $$ContactCardItem, { "title": title, "content": value, "iconUrl": icon })}`)} </ul>`;
}, "/Users/k3lm4n/Documents/GitHub/farwell-lp/src/components/common/contacts.astro", void 0);

function Label({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    LabelPrimitive.Root,
    {
      "data-slot": "label",
      className: cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      ),
      ...props
    }
  );
}

const Form = FormProvider;
const FormFieldContext = React.createContext(
  {}
);
const FormField = ({
  ...props
}) => {
  return /* @__PURE__ */ jsx(FormFieldContext.Provider, { value: { name: props.name }, children: /* @__PURE__ */ jsx(Controller, { ...props }) });
};
const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext);
  const itemContext = React.useContext(FormItemContext);
  const { getFieldState } = useFormContext();
  const formState = useFormState({ name: fieldContext.name });
  const fieldState = getFieldState(fieldContext.name, formState);
  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }
  const { id } = itemContext;
  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState
  };
};
const FormItemContext = React.createContext(
  {}
);
function FormItem({ className, ...props }) {
  const id = React.useId();
  return /* @__PURE__ */ jsx(FormItemContext.Provider, { value: { id }, children: /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "form-item",
      className: cn("grid gap-1", className),
      ...props
    }
  ) });
}
function FormLabel({
  className,
  ...props
}) {
  const { error, formItemId } = useFormField();
  return /* @__PURE__ */ jsx(
    Label,
    {
      "data-slot": "form-label",
      "data-error": !!error,
      className: cn(
        "data-[error=true]:text-destructive text-secondary text-xs",
        className
      ),
      htmlFor: formItemId,
      ...props
    }
  );
}
function FormControl({ ...props }) {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField();
  return /* @__PURE__ */ jsx(
    Slot,
    {
      "data-slot": "form-control",
      id: formItemId,
      "aria-describedby": !error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`,
      "aria-invalid": !!error,
      ...props
    }
  );
}
function FormDescription({ className, ...props }) {
  const { formDescriptionId } = useFormField();
  return /* @__PURE__ */ jsx(
    "p",
    {
      "data-slot": "form-description",
      id: formDescriptionId,
      className: cn("text-secondary/50 text-xs", className),
      ...props
    }
  );
}
function FormMessage({ className, ...props }) {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message ?? "") : props.children;
  if (!body) {
    return null;
  }
  return /* @__PURE__ */ jsx(
    "p",
    {
      "data-slot": "form-message",
      id: formMessageId,
      className: cn("text-destructive text-xs", className),
      ...props,
      children: body
    }
  );
}

function Input({ className, type, ...props }) {
  return /* @__PURE__ */ jsx(
    "input",
    {
      type,
      "data-slot": "input",
      className: cn(
        "file:text-foreground placeholder:text-foreground/75 selection:bg-primary selection:text-primary-foreground flex h-10 w-full min-w-0 rounded-md border bg-transparent px-3 py-2.5 text-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-xs disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      ),
      ...props
    }
  );
}

function Textarea({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "textarea",
    {
      "data-slot": "textarea",
      className: cn(
        "placeholder:text-foreground/75 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive flex field-sizing-content min-h-10 w-full rounded-md border bg-transparent px-3 py-2.5 text-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props
    }
  );
}

function Spinner({ show = false }) {
  if (!show) return null;
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "inline-flex h-6 w-6 items-center justify-center",
      role: "status",
      "aria-live": "polite",
      "aria-busy": "true",
      children: [
        /* @__PURE__ */ jsx("span", { className: "border-t-background h-6 w-6 animate-spin rounded-full border-2 border-transparent" }),
        /* @__PURE__ */ jsx("span", { className: "sr-only", children: "A carregar…" })
      ]
    }
  );
}

function ContactForm() {
  const form = useForm({
    resolver: zodResolver(contactFormValidationSchema),
    defaultValues: {
      email: "",
      firstName: "",
      lastName: "",
      message: "",
      phone: ""
    }
  });
  const onSubmit = async (data) => {
    const result = await actions.sendMessage(data);
    if (result.error) {
      toast.error("Ocorreu um erro ao enviar a mensagem.", {
        description: "Por favor, tente novamente mais tarde."
      });
      return;
    }
    toast.success("Mensagem enviada com sucesso!", {
      description: "Em breve, retornaremos o contato."
    });
  };
  return /* @__PURE__ */ jsx(Form, { ...form, children: /* @__PURE__ */ jsxs(
    "form",
    {
      onSubmit: form.handleSubmit(onSubmit),
      className: "bg-background space-y-4 rounded-xl border p-6 shadow-xs h-fit",
      children: [
        /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx("h3", { className: "text-secondary mb-2 text-2xl font-bold", children: "Envie-nos uma mensagem" }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsx(
              FormField,
              {
                control: form.control,
                name: "firstName",
                render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
                  /* @__PURE__ */ jsx(FormLabel, { children: "Primeiro nome" }),
                  /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Input, { placeholder: "Seu primeiro nome", ...field }) }),
                  /* @__PURE__ */ jsx(FormMessage, {})
                ] })
              }
            ),
            /* @__PURE__ */ jsx(
              FormField,
              {
                control: form.control,
                name: "lastName",
                render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
                  /* @__PURE__ */ jsx(FormLabel, { children: "Último nome" }),
                  /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(Input, { placeholder: "Seu último nome", ...field }) }),
                  /* @__PURE__ */ jsx(FormMessage, {})
                ] })
              }
            )
          ] }),
          /* @__PURE__ */ jsx(
            FormField,
            {
              control: form.control,
              name: "email",
              render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
                /* @__PURE__ */ jsx(FormLabel, { children: "Email" }),
                /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(
                  Input,
                  {
                    autoComplete: "email",
                    placeholder: "seu@email.com",
                    type: "email",
                    ...field
                  }
                ) }),
                /* @__PURE__ */ jsx(FormMessage, {})
              ] })
            }
          ),
          /* @__PURE__ */ jsx(
            FormField,
            {
              control: form.control,
              name: "phone",
              render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
                /* @__PURE__ */ jsx(FormLabel, { children: "Telefone" }),
                /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(
                  Input,
                  {
                    autoComplete: "tel",
                    placeholder: "+244 XXX XXX XXX",
                    maxLength: 9,
                    type: "tel",
                    ...field
                  }
                ) }),
                /* @__PURE__ */ jsx(FormMessage, {})
              ] })
            }
          ),
          /* @__PURE__ */ jsx(
            FormField,
            {
              control: form.control,
              name: "message",
              render: ({ field }) => /* @__PURE__ */ jsxs(FormItem, { children: [
                /* @__PURE__ */ jsx(FormLabel, { children: "Mensagem" }),
                /* @__PURE__ */ jsx(FormControl, { children: /* @__PURE__ */ jsx(
                  Textarea,
                  {
                    placeholder: "Como podemos ajudar?",
                    maxLength: 500,
                    ...field
                  }
                ) }),
                /* @__PURE__ */ jsxs(FormDescription, { children: [
                  form.getValues("message").length,
                  " / 500"
                ] }),
                /* @__PURE__ */ jsx(FormMessage, {})
              ] })
            }
          ),
          /* @__PURE__ */ jsxs(
            Button,
            {
              type: "submit",
              disabled: form.formState.isSubmitting,
              className: "w-full",
              children: [
                /* @__PURE__ */ jsx(Spinner, { show: form.formState.isSubmitting }),
                "Enviar mensagem"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsx(Toaster, { position: "bottom-right", richColors: true })
      ]
    }
  ) });
}

const $$Astro = createAstro("https://farwell.co.ao");
const $$ContactSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ContactSection;
  const { isHomePage = false, contactUs, description, title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="bg-grey-950/30"> <div class="container space-y-16 py-20"> ${isHomePage && renderTemplate`${renderComponent($$result, "SectionHeader", $$SectionHeader, { "title": title, "description": description })}`} <div class="grid gap-4 lg:grid-cols-2"> ${renderComponent($$result, "ContactForm", ContactForm, { "client:visible": true, "client:component-hydration": "visible", "client:component-path": "@/components/interactive/forms/contact-form", "client:component-export": "default" })} ${contactUs && renderTemplate`${renderComponent($$result, "Contacts", $$Contacts, { "contacts": contactUs.map(({ fields: { value, icon }, title: title2 }) => ({
    title: title2,
    value,
    icon
  })) })}`} </div> </div> </section>`;
}, "/Users/k3lm4n/Documents/GitHub/farwell-lp/src/components/common/contact-section.astro", void 0);

export { $$ContactSection as $ };

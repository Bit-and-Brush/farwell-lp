import { c as createAstro, a as createComponent, m as maybeRenderHead, b as renderComponent, d as renderTemplate } from '../chunks/astro/server_DRQd-RgF.mjs';
import 'kleur/colors';
import { a as getPageData } from '../chunks/index_BQo0B-NX.mjs';
import { $ as $$ContactSection } from '../chunks/contact-section_139CJS3b.mjs';
import { $ as $$CardListItem } from '../chunks/card-list-item_DyjlT3NL.mjs';
import { $ as $$SectionHeader } from '../chunks/section-header_F1gyPAny.mjs';
import { a as $$ButtonLink, $ as $$MainLayout } from '../chunks/main-layout_DUNOsHRB.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_CTJtQqK3.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$3 = createAstro("https://farwell.co.ao");
const $$AboutSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$AboutSection;
  const { description, ourServices, title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="bg-grey-950/30"> <div class="container space-y-16 py-20"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, { "title": title, "description": description })} ${ourServices && renderTemplate`<ul class="grid gap-6 md:grid-cols-2 lg:grid-cols-4"> ${ourServices.map(
    ({ fields: { description: description2, icon: iconUrl }, title: title2 }) => renderTemplate`${renderComponent($$result, "CardListItem", $$CardListItem, { "description": description2, "title": title2, "iconUrl": iconUrl })}`
  )} </ul>`} </div> </section>`;
}, "/Users/k3lm4n/Documents/GitHub/farwell-lp/src/components/sections/home/about-section.astro", void 0);

const $$Astro$2 = createAstro("https://farwell.co.ao");
const $$HomeHero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$HomeHero;
  const {
    description,
    highlight,
    image: imageUrl,
    title,
    catalogUrl
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="primary-gradient text-background"> <div class="container grid items-center gap-12 py-20 lg:grid-cols-2"> <div class="space-y-6"> <h1 class="text-grey-950 text-3xl font-bold"> ${title}<br><span class="">${highlight}</span> </h1> <p class="text-lg"> ${description} </p> <div class="flex flex-col gap-4 md:flex-row"> ${renderComponent($$result, "ButtonLink", $$ButtonLink, { "class": "bg-background text-secondary hover:text-background", "href": catalogUrl, "download": true, "target": "_blank" }, { "default": ($$result2) => renderTemplate`Ver Catálogo` })} </div> </div> ${imageUrl && renderTemplate`${renderComponent($$result, "Image", $$Image, { "width": 660, "height": 322, "alt": "", "src": imageUrl, "class": "shadow-primary/60 rounded-xl object-cover shadow-lg", "loading": "eager", "fetchpriority": "high" })}`} </div> </section>`;
}, "/Users/k3lm4n/Documents/GitHub/farwell-lp/src/components/sections/home/home-hero.astro", void 0);

const $$Astro$1 = createAstro("https://farwell.co.ao");
const $$ServiceListItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ServiceListItem;
  const { title, description, iconUrl } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="space-y-6 rounded-xl border p-6 shadow-xs"> <div class="flex items-center gap-4"> ${iconUrl && renderTemplate`<div class="bg-primary/10 flex size-12 items-center justify-center rounded-xl"> ${renderComponent($$result, "Image", $$Image, { "src": iconUrl, "alt": title, "width": 24, "height": 24 })} </div>`} <h3 class="text-secondary mt-4 mb-3 text-lg leading-6 font-bold"> ${title} </h3> </div> <p class="text-sm">${description}</p> </li>`;
}, "/Users/k3lm4n/Documents/GitHub/farwell-lp/src/components/sections/home/service-list-item.astro", void 0);

const $$Astro = createAstro("https://farwell.co.ao");
const $$ServicesSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ServicesSection;
  const { description, services, title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="container space-y-16 py-20"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, { "title": title, "description": description })} ${services && renderTemplate`<ul class="grid gap-8 md:grid-cols-2"> ${services.map(({ fields: { description: description2, icon: iconUrl }, title: title2 }) => renderTemplate`${renderComponent($$result, "ServiceListItem", $$ServiceListItem, { "description": description2, "title": title2, "iconUrl": iconUrl })}`)} </ul>`} </section>`;
}, "/Users/k3lm4n/Documents/GitHub/farwell-lp/src/components/sections/home/services-section.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const [homePageData, headerData, footerData] = await Promise.all([
    getPageData("home"),
    getPageData("common"),
    getPageData("footer")
  ]);
  const { aboutUs, contactUs, hero, ourServices } = homePageData;
  const { areaClient, catalogFile } = headerData;
  const { services, description, contact } = footerData;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "footer": {
    services: services.map(({ title }) => title),
    description,
    contacts: contact.map(({ fields: { icon, value } }) => ({ icon, value })) ?? []
  }, "headerLinks": { catalog: catalogFile, clientArea: areaClient } }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${hero && renderTemplate`${renderComponent($$result2, "HomeHero", $$HomeHero, { ...hero, "catalogUrl": catalogFile })}`} ${aboutUs && renderTemplate`${renderComponent($$result2, "AboutSection", $$AboutSection, { ...aboutUs })}`} ${ourServices && renderTemplate`${renderComponent($$result2, "ServicesSection", $$ServicesSection, { ...ourServices })}`} ${contactUs && renderTemplate`${renderComponent($$result2, "ContactSection", $$ContactSection, { ...contactUs, "isHomePage": true })}`} </main> ` })}`;
}, "/Users/k3lm4n/Documents/GitHub/farwell-lp/src/pages/index.astro", void 0);

const $$file = "/Users/k3lm4n/Documents/GitHub/farwell-lp/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

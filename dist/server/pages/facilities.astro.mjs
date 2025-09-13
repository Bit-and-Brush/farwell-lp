import { c as createAstro, a as createComponent, m as maybeRenderHead, b as renderComponent, d as renderTemplate } from '../chunks/astro/server_DRQd-RgF.mjs';
import 'kleur/colors';
import { g as getPageDataWithLayoutData } from '../chunks/index_BQo0B-NX.mjs';
import { $ as $$PageHero } from '../chunks/page-hero_DqQ5_eCd.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_CTJtQqK3.mjs';
import { $ as $$MainLayout } from '../chunks/main-layout_DUNOsHRB.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro("https://farwell.co.ao");
const $$FacilityFeatureItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$FacilityFeatureItem;
  const { icon, title, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="space-y-6 rounded-xl border p-6 shadow-xs"> <div class="flex items-center gap-3"> ${icon && renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": icon, "alt": title, "width": 24, "height": 24 })}`} <p class="text-secondary text-xl font-bold">${title}</p> </div> <p class="text-sm"> ${description} </p> </li>`;
}, "/Users/k3lm4n/Documents/GitHub/farwell-lp/src/components/sections/facilities/facility-feature-item.astro", void 0);

const $$Astro = createAstro("https://farwell.co.ao");
const $$FeaturesSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$FeaturesSection;
  const { facilities } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="container my-10 lg:py-16"> <ul class="grid grid-cols-1 gap-6 lg:grid-cols-3"> ${facilities.map((facility) => renderTemplate`${renderComponent($$result, "FacilityFeatureItem", $$FacilityFeatureItem, { ...facility })}`)} </ul> </section>`;
}, "/Users/k3lm4n/Documents/GitHub/farwell-lp/src/components/sections/facilities/features-section.astro", void 0);

const $$Facilities = createComponent(async ($$result, $$props, $$slots) => {
  const [facilitiesData, headerData, footerData] = await getPageDataWithLayoutData("facilities");
  const { areaClient, catalogFile } = headerData;
  const { services, description, contact } = footerData;
  const { facilitiesSection, header } = facilitiesData;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "extendedTitle": header.title, "footer": {
    services: services.map(({ title }) => title),
    description,
    contacts: contact.map(({ fields: { value, icon } }) => ({ value, icon })) ?? []
  }, "headerLinks": { catalog: catalogFile, clientArea: areaClient } }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "PageHero", $$PageHero, { "title": header.title, "subtitle": header.description })} ${renderComponent($$result2, "FeaturesSection", $$FeaturesSection, { "facilities": facilitiesSection.facilities ?? [] })} ${facilitiesSection.capabilities && facilitiesSection.capabilities.length > 0 && renderTemplate`<section class="container mt-10 mb-12 space-y-4"> <h2 class="text-secondary text-xl font-bold">Capacidades</h2> <ul class="grid grid-cols-1 gap-2 lg:grid-cols-2"> ${facilitiesSection.capabilities.map(({ text }) => renderTemplate`<li class="text-sm">${text}</li>`)} </ul> </section>`} </main> ` })}`;
}, "/Users/k3lm4n/Documents/GitHub/farwell-lp/src/pages/facilities.astro", void 0);

const $$file = "/Users/k3lm4n/Documents/GitHub/farwell-lp/src/pages/facilities.astro";
const $$url = "/facilities";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Facilities,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

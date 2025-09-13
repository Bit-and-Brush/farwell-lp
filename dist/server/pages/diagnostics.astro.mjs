import { c as createAstro, a as createComponent, m as maybeRenderHead, b as renderComponent, d as renderTemplate } from '../chunks/astro/server_DRQd-RgF.mjs';
import 'kleur/colors';
import { g as getPageDataWithLayoutData } from '../chunks/index_BQo0B-NX.mjs';
import { $ as $$PageHero } from '../chunks/page-hero_DqQ5_eCd.mjs';
import { $ as $$ProsedContent } from '../chunks/prosed-content_09D2kfXx.mjs';
import { $ as $$BrandsSection } from '../chunks/brands-section_BbhFgMvk.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_CTJtQqK3.mjs';
import { $ as $$MainLayout } from '../chunks/main-layout_DUNOsHRB.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://farwell.co.ao");
const $$MainSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MainSection;
  const { brandsAndProducts, diagnostics } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="container max-w-6xl pt-24"> <div class="space-y-6 text-center"> <h2 class="text-secondary text-4xl leading-10 font-semibold"> ${brandsAndProducts.title} </h2> <hr class="text-primary mx-auto h-1 w-24"> <p class="text-primary text-2xl leading-8"> ${brandsAndProducts.subtitle} </p> <p class="text-lg leading-7"> ${brandsAndProducts.description} </p> </div> ${renderComponent($$result, "BrandsSection", $$BrandsSection, { "brands": brandsAndProducts.brandSection.brands.map(
    ({ logo, brandName }) => ({ brandName, logo: logo || "" })
  ) ?? [] })} <div class="mt-12 mb-44 space-y-8"> <h2 class="text-secondary text-center text-2xl leading-8"> ${diagnostics.title} </h2> <p class="text-center text-lg leading-7"> ${diagnostics.description} </p> <ul class="grid grid-cols-1 gap-6 md:grid-cols-3"> ${diagnostics.diagnostics && diagnostics.diagnostics.map(
    ({ name, icon }) => icon && renderTemplate`<li class="hover:bg-primary/20 space-y-4 rounded-xl border p-6 text-center duration-300 hover:scale-105"> ${renderComponent($$result, "Image", $$Image, { "src": icon, "alt": name, "class": "mx-auto", "width": 48, "height": 48 })} <p>${name}</p> </li>`
  )} </ul> </div> </section>`;
}, "/Users/k3lm4n/Documents/GitHub/farwell-lp/src/components/sections/diagnostics/main-section.astro", void 0);

const $$Diagnostics = createComponent(async ($$result, $$props, $$slots) => {
  const [diagnosticsData, headerData, footerData] = await getPageDataWithLayoutData(
    "diagnostics"
  );
  const { areaClient, catalogFile } = headerData;
  const { services, description, contact } = footerData;
  const { clientSection, header, brandsAndProducts, diagnostics } = diagnosticsData;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "extendedTitle": header.title, "footer": {
    services: services.map(({ title }) => title),
    description,
    contacts: contact.map(({ fields: { value, icon } }) => ({ icon, value })) ?? []
  }, "headerLinks": { catalog: catalogFile, clientArea: areaClient } }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "PageHero", $$PageHero, { "title": header.title, "subtitle": header.description })} ${renderComponent($$result2, "MainSection", $$MainSection, { "brandsAndProducts": brandsAndProducts, "diagnostics": diagnostics })} <section class="bg-grey-950/30"> <div class="container mx-auto max-w-4xl space-y-6 py-20 text-center"> <h2 class="text-secondary text-4xl leading-10"> ${clientSection.title} </h2> <hr class="text-primary mx-auto h-1 w-24"> <p class="text-primary text-2xl leading-8"> ${clientSection.subtitle} </p> ${renderComponent($$result2, "ProsedContent", $$ProsedContent, { "content": clientSection.descripiton })} </div> </section> </main> ` })}`;
}, "/Users/k3lm4n/Documents/GitHub/farwell-lp/src/pages/diagnostics.astro", void 0);

const $$file = "/Users/k3lm4n/Documents/GitHub/farwell-lp/src/pages/diagnostics.astro";
const $$url = "/diagnostics";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Diagnostics,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

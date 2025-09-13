import { c as createAstro, a as createComponent, m as maybeRenderHead, r as renderSlot, b as renderComponent, d as renderTemplate } from '../chunks/astro/server_DRQd-RgF.mjs';
import 'kleur/colors';
import { g as getPageDataWithLayoutData } from '../chunks/index_BQo0B-NX.mjs';
import { $ as $$PageHero } from '../chunks/page-hero_DqQ5_eCd.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_CTJtQqK3.mjs';
import { $ as $$ProsedContent } from '../chunks/prosed-content_09D2kfXx.mjs';
import { $ as $$QualityStandardItem } from '../chunks/quality-standard-item_Cl-kNTcq.mjs';
import { $ as $$SectionHeader } from '../chunks/section-header_F1gyPAny.mjs';
import { $ as $$CardListItem } from '../chunks/card-list-item_DyjlT3NL.mjs';
import { $ as $$MainLayout } from '../chunks/main-layout_DUNOsHRB.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$4 = createAstro("https://farwell.co.ao");
const $$KpiListItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$KpiListItem;
  const { metric, label, imageURL } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="flex flex-col items-center text-center"> ${imageURL && renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": imageURL, "alt": label, "width": 48, "height": 48 })}`} ${renderSlot($$result, $$slots["icon"])} <p class="text-secondary mt-4 mb-2 text-2xl leading-9 font-bold">${metric}</p> <p class="text-sm">${label}</p> </li>`;
}, "/Users/k3lm4n/Documents/GitHub/farwell-lp/src/components/sections/about/kpi-list-item.astro", void 0);

const $$Astro$3 = createAstro("https://farwell.co.ao");
const $$KpiSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$KpiSection;
  const { keyPoints } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul class="container grid items-center gap-8 py-20 md:grid-cols-2 lg:grid-cols-4"> ${keyPoints.map(({ description, title, iconUrl }) => renderTemplate`${renderComponent($$result, "KpiListItem", $$KpiListItem, { "metric": title, "label": description, "imageURL": iconUrl })}`)} </ul>`;
}, "/Users/k3lm4n/Documents/GitHub/farwell-lp/src/components/sections/about/kpi-section.astro", void 0);

const $$Astro$2 = createAstro("https://farwell.co.ao");
const $$MissionAndVisionSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$MissionAndVisionSection;
  const { mission, vision, values } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section id="mission" class="container grid items-start gap-12 py-20 lg:grid-cols-3"> ${mission && renderTemplate`<div> <h2 class="text-secondary mb-6 text-2xl leading-9 font-bold">
A Nossa Missão
</h2> ${renderComponent($$result, "ProsedContent", $$ProsedContent, { "className": "text-base", "content": mission })} </div>`} ${vision && renderTemplate`<div class="bg-grey-950/30 rounded-xl p-8"> <h2 class="text-secondary mb-6 text-2xl leading-9 font-bold">
A Nossa Visão
</h2> ${renderComponent($$result, "ProsedContent", $$ProsedContent, { "className": "text-base", "content": vision })} </div>`} ${values && renderTemplate`<div class="bg-grey-950/30 rounded-xl p-8"> <h2 class="text-secondary mb-6 text-2xl leading-9 font-bold">
A Nossa Proposta de Valor
</h2> ${renderComponent($$result, "ProsedContent", $$ProsedContent, { "content": values, "className": "text-base prose-ul:list-disc prose-ul:space-y-3 marker:text-primary" })} </div>`} </section>`;
}, "/Users/k3lm4n/Documents/GitHub/farwell-lp/src/components/sections/about/mission-and-vision-section.astro", void 0);

const $$Astro$1 = createAstro("https://farwell.co.ao");
const $$QualityAssuranceSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$QualityAssuranceSection;
  const { title, description, keyPoints } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="container space-y-6 py-20"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, { "title": title, "description": description })} ${keyPoints && renderTemplate`<ul class="mx-auto grid max-w-4xl gap-8 lg:grid-cols-3"> ${keyPoints.map((keyPoint) => renderTemplate`${renderComponent($$result, "QualityStandardItem", $$QualityStandardItem, { ...keyPoint })}`)} </ul>`} </section>`;
}, "/Users/k3lm4n/Documents/GitHub/farwell-lp/src/components/sections/about/quality-assurance-section.astro", void 0);

const $$Astro = createAstro("https://farwell.co.ao");
const $$WhyUsSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$WhyUsSection;
  const { title, description, keyPoints } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="bg-grey-950/30"> <div class="container space-y-16 py-20"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, { "title": title, "description": description })} <ul class="grid gap-6 md:grid-cols-2 lg:grid-cols-4"> ${keyPoints.map(({ description: description2, title: title2, iconUrl }) => renderTemplate`${renderComponent($$result, "CardListItem", $$CardListItem, { "description": description2, "iconUrl": iconUrl, "title": title2 })}`)} </ul> </div> </section>`;
}, "/Users/k3lm4n/Documents/GitHub/farwell-lp/src/components/sections/about/why-us-section.astro", void 0);

const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const [aboutPageData, headerData, footerData] = await getPageDataWithLayoutData("about");
  const { areaClient, catalogFile } = headerData;
  const { services, description, contact } = footerData;
  const { header, principles, whySection, qualityAssurance } = aboutPageData;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "extendedTitle": "Sobre a FARWELL", "footer": {
    services: services.map(({ title }) => title),
    description,
    contacts: contact.map(({ fields: { value, icon } }) => ({ value, icon })) ?? []
  }, "headerLinks": { catalog: catalogFile, clientArea: areaClient } }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "PageHero", $$PageHero, { "title": header.title, "subtitle": header.description })} ${renderComponent($$result2, "MissionAndVisionSection", $$MissionAndVisionSection, { "mission": principles.mission, "vision": principles.vision, "values": principles.values })} ${whySection && renderTemplate`${renderComponent($$result2, "WhyUsSection", $$WhyUsSection, { "title": whySection.title, "keyPoints": whySection.services.map(
    ({ description: description2, icon, title }) => ({
      description: description2,
      title,
      iconUrl: icon
    })
  ), "description": whySection.description })}`} ${renderComponent($$result2, "QualityAssuranceSection", $$QualityAssuranceSection, { "title": qualityAssurance.title, "description": qualityAssurance.description, "keyPoints": qualityAssurance.keyPoints.map(({ icon, ...rest }) => ({
    iconUrl: icon,
    ...rest
  })) })} ${renderComponent($$result2, "KPISection", $$KpiSection, { "keyPoints": whySection.keyValues.map(({ description: description2, icon, title }) => ({
    description: description2,
    title,
    iconUrl: icon
  })) })} </main> ` })}`;
}, "/Users/k3lm4n/Documents/GitHub/farwell-lp/src/pages/about.astro", void 0);

const $$file = "/Users/k3lm4n/Documents/GitHub/farwell-lp/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

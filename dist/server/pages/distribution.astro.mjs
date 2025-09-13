import { c as createAstro, a as createComponent, m as maybeRenderHead, b as renderComponent, d as renderTemplate } from '../chunks/astro/server_DRQd-RgF.mjs';
import 'kleur/colors';
import { g as getPageDataWithLayoutData } from '../chunks/index_BQo0B-NX.mjs';
import { $ as $$BrandsSection } from '../chunks/brands-section_BbhFgMvk.mjs';
import { $ as $$PageHero } from '../chunks/page-hero_DqQ5_eCd.mjs';
import { $ as $$SectionHeader } from '../chunks/section-header_F1gyPAny.mjs';
import { MapPinIcon } from 'lucide-react';
import { $ as $$Image } from '../chunks/_astro_assets_CTJtQqK3.mjs';
import { $ as $$QualityStandardItem } from '../chunks/quality-standard-item_Cl-kNTcq.mjs';
import { $ as $$MainLayout } from '../chunks/main-layout_DUNOsHRB.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$4 = createAstro("https://farwell.co.ao");
const $$CoverageSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$CoverageSection;
  const { title, description, areas, stats } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="bg-grey-950/30"> <div class="container py-20"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, { "title": title, "description": description })} <div class="mx-auto mt-12 grid max-w-4xl gap-12 md:grid-cols-2 items-start"> ${areas && areas.length > 0 && renderTemplate`<div class="space-y-6"> <div class="flex items-center gap-2"> ${renderComponent($$result, "MapPinIcon", MapPinIcon, { "className": "text-primary", "size": 32 })} <h3 class="text-secondary text-xl leading-8 font-bold">
Áreas de Cobertura
</h3> </div> <ul class="grid grid-cols-2 gap-4"> ${areas.map((area) => renderTemplate`<li class="bg-background flex items-center gap-2 rounded-xl border p-3"> <div class="bg-primary size-3 rounded-full"></div> <span class="flex-1">${area}</span> </li>`)} </ul> </div>`} ${stats && stats.length > 0 && renderTemplate`<div class="bg-background rounded-xl border p-8"> <h3 class="text-secondary text-xl leading-8 font-bold">
Estatisticas de Distribuição
</h3> <div class="*:even:text-primary mt-7 grid grid-cols-2 items-center gap-y-4 *:even:text-right *:even:text-lg *:even:font-bold"> ${stats.map(({ title: title2, description: description2 }) => renderTemplate`<p>${title2}</p>
                <p>${description2}</p>`)} </div> </div>`} </div> </div> </section>`;
}, "/Users/k3lm4n/Documents/GitHub/farwell-lp/src/components/sections/distribution/coverage-section.astro", void 0);

const $$Astro$3 = createAstro("https://farwell.co.ao");
const $$CardItemWithBulletPoints = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$CardItemWithBulletPoints;
  const { title, description, bulletPoints, iconUrl } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="bg-background space-y-6 rounded-xl border p-8 px-7 shadow-xs"> <div class="flex items-center gap-4"> ${iconUrl && renderTemplate`<div class="bg-primary/10 flex size-12 items-center justify-center rounded-xl"> ${renderComponent($$result, "Image", $$Image, { "src": iconUrl, "alt": title, "loading": "lazy", "width": 24, "height": 24 })} </div>`} <h3 class="text-secondary text-xl font-bold">${title}</h3> </div> <p class="text-sm leading-6">${description}</p> <ul class="list-inside list-disc space-y-2"> ${bulletPoints.map((bulletPoint) => renderTemplate`<li class="text-sm leading-6">${bulletPoint}</li>`)} </ul> </li>`;
}, "/Users/k3lm4n/Documents/GitHub/farwell-lp/src/components/common/card-item-with-bullet-points.astro", void 0);

const $$Astro$2 = createAstro("https://farwell.co.ao");
const $$DistributionServicesSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$DistributionServicesSection;
  const { title, description, services } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="container space-y-16 py-20"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, { "title": title, "description": description })} ${services && renderTemplate`<ul class="grid gap-8 md:grid-cols-2"> ${services.map(({ description: description2, title: title2, bulletPoints, iconUrl }) => renderTemplate`${renderComponent($$result, "CardItemWithBulletPoints", $$CardItemWithBulletPoints, { "title": title2, "description": description2, "bulletPoints": bulletPoints || [], "iconUrl": iconUrl })}`)} </ul>`} </section>`;
}, "/Users/k3lm4n/Documents/GitHub/farwell-lp/src/components/sections/distribution/distribution-services-section.astro", void 0);

const $$Astro$1 = createAstro("https://farwell.co.ao");
const $$QualityStandards = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$QualityStandards;
  const { title, description, keyPoints } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="container space-y-6 py-20"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, { "title": title, "description": description })} ${keyPoints && renderTemplate`<ul class="mx-auto grid max-w-4xl gap-8 lg:grid-cols-3"> ${keyPoints.map(({ description: description2, title: title2, iconUrl }) => renderTemplate`${renderComponent($$result, "QualityStandardItem", $$QualityStandardItem, { "title": title2, "description": description2, "iconUrl": iconUrl })}`)} </ul>`} </section>`;
}, "/Users/k3lm4n/Documents/GitHub/farwell-lp/src/components/sections/distribution/quality-standards.astro", void 0);

const $$Astro = createAstro("https://farwell.co.ao");
const $$WhyOurServicesSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$WhyOurServicesSection;
  const { title, description, keyPoints } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="bg-grey-950/30"> <div class="container space-y-16 py-20"> ${renderComponent($$result, "SectionHeader", $$SectionHeader, { "title": title, "description": description })} ${keyPoints && renderTemplate`<ul class="grid gap-8 lg:grid-cols-3"> ${keyPoints.map(({ description: description2, title: title2, iconUrl }) => renderTemplate`${renderComponent($$result, "QualityStandardItem", $$QualityStandardItem, { "title": title2, "description": description2, "iconUrl": iconUrl })}`)} </ul>`} </div> </section>`;
}, "/Users/k3lm4n/Documents/GitHub/farwell-lp/src/components/sections/distribution/why-our-services-section.astro", void 0);

const $$Distribution = createComponent(async ($$result, $$props, $$slots) => {
  const [distributionData, headerData, footerData] = await getPageDataWithLayoutData(
    "distribution"
  );
  const { areaClient, catalogFile } = headerData;
  const { services, description, contact } = footerData;
  const {
    areaCoverage,
    header,
    ourDistributionServices,
    qualityAndComplianceStandards,
    whyChooseOurServices,
    brands
  } = distributionData;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "extendedTitle": "Distribui\xE7\xE3o Farmac\xEAutica", "footer": {
    services: services.map(({ title }) => title),
    description,
    contacts: contact.map(({ fields: { value, icon } }) => ({ value, icon })) ?? []
  }, "headerLinks": { catalog: catalogFile, clientArea: areaClient } }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "PageHero", $$PageHero, { "title": header.title, "subtitle": header.description })} ${ourDistributionServices && renderTemplate`${renderComponent($$result2, "DistributionServicesSection", $$DistributionServicesSection, { "title": ourDistributionServices.title, "description": ourDistributionServices.description, "services": ourDistributionServices.distributionServices.map(
    ({ fields: { bulletPoints, description: description2, icon }, title }) => ({
      title,
      iconUrl: icon,
      description: description2,
      bulletPoints: typeof bulletPoints === "object" ? bulletPoints?.map(({ description: description3 }) => description3) : []
    })
  ) })}`} ${areaCoverage && renderTemplate`${renderComponent($$result2, "CoverageSection", $$CoverageSection, { "title": areaCoverage.title, "description": areaCoverage.description, "areas": areaCoverage.coverageArea.map(({ areaName }) => areaName), "stats": areaCoverage.distributionStats })}`} ${qualityAndComplianceStandards && renderTemplate`${renderComponent($$result2, "QualityStandards", $$QualityStandards, { "title": qualityAndComplianceStandards.title, "description": qualityAndComplianceStandards.description, "keyPoints": qualityAndComplianceStandards.keyValues.map(
    ({ description: description2, title, icon }) => ({
      description: description2,
      title,
      iconUrl: icon
    })
  ) })}`} ${whyChooseOurServices && renderTemplate`${renderComponent($$result2, "WhyOurServicesSection", $$WhyOurServicesSection, { "title": whyChooseOurServices.title, "description": whyChooseOurServices.description, "keyPoints": whyChooseOurServices.keyPoints.map(
    ({ title, description: description2, icon }) => ({
      title,
      description: description2,
      iconUrl: icon
    })
  ) })}`} ${brands && brands.length > 0 && renderTemplate`<div class="container max-w-6xl"> ${renderComponent($$result2, "BrandsSection", $$BrandsSection, { "brands": brands })} </div>`} </main> ` })}`;
}, "/Users/k3lm4n/Documents/GitHub/farwell-lp/src/pages/distribution.astro", void 0);

const $$file = "/Users/k3lm4n/Documents/GitHub/farwell-lp/src/pages/distribution.astro";
const $$url = "/distribution";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Distribution,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

import { a as createComponent, b as renderComponent, d as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DRQd-RgF.mjs';
import 'kleur/colors';
import { g as getPageDataWithLayoutData } from '../chunks/index_BQo0B-NX.mjs';
import { $ as $$PageHero } from '../chunks/page-hero_DqQ5_eCd.mjs';
import { $ as $$ProsedContent } from '../chunks/prosed-content_09D2kfXx.mjs';
import { $ as $$MainLayout } from '../chunks/main-layout_DUNOsHRB.mjs';
export { renderers } from '../renderers.mjs';

const $$QualityPolicy = createComponent(async ($$result, $$props, $$slots) => {
  const [qualityPolicyData, headerData, footerData] = await getPageDataWithLayoutData(
    "qualityPolicy"
  );
  const { areaClient, catalogFile } = headerData;
  const { services, description, contact } = footerData;
  const { header, qualityPolicyContent } = qualityPolicyData;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "extendedTitle": header.title, "footer": {
    services: services.map(({ title }) => title),
    description,
    contacts: contact.map(({ fields: { value, icon } }) => ({ value, icon })) ?? []
  }, "headerLinks": { catalog: catalogFile, clientArea: areaClient } }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "PageHero", $$PageHero, { "title": header.title, "subtitle": header.description })} ${renderComponent($$result2, "ProsedContent", $$ProsedContent, { "className": "prose-p:leading-6 prose-h3:text-secondary prose-h3:text-2xl prose-h3:font-bold marker:text-primary container max-w-4xl space-y-8 py-10 text-base lg:py-16", "content": qualityPolicyContent })} </main> ` })}`;
}, "/Users/k3lm4n/Documents/GitHub/farwell-lp/src/pages/quality-policy.astro", void 0);

const $$file = "/Users/k3lm4n/Documents/GitHub/farwell-lp/src/pages/quality-policy.astro";
const $$url = "/quality-policy";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$QualityPolicy,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

import { a as createComponent, b as renderComponent, d as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_DRQd-RgF.mjs';
import 'kleur/colors';
import { g as getPageDataWithLayoutData } from '../chunks/index_BQo0B-NX.mjs';
import { $ as $$PageHero } from '../chunks/page-hero_DqQ5_eCd.mjs';
import { $ as $$MainLayout } from '../chunks/main-layout_DUNOsHRB.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_CTJtQqK3.mjs';
export { renderers } from '../renderers.mjs';

const $$Team = createComponent(async ($$result, $$props, $$slots) => {
  const [teamData, headerData, footerData] = await getPageDataWithLayoutData("team");
  const { areaClient, catalogFile } = headerData;
  const { services, description, contact } = footerData;
  const { header, ourTeam } = teamData;
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "extendedTitle": header.title, "footer": {
    services: services.map(({ title }) => title),
    description,
    contacts: contact.map(({ fields: { value, icon } }) => ({ value, icon })) ?? []
  }, "headerLinks": { catalog: catalogFile, clientArea: areaClient } }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "PageHero", $$PageHero, { "title": header.title, "subtitle": header.description })} <section class="container py-10 md:grid-cols-2 lg:py-16"> ${ourTeam && renderTemplate`<ul class="grid grid-cols-1 gap-6 lg:grid-cols-3"> ${ourTeam.map(({ image, name }) => renderTemplate`${renderComponent($$result2, "Image", $$Image, { "src": image, "alt": name, "width": 440, "height": 330, "class": "max-h-[330px] w-full rounded-xl object-cover object-center shadow" })}`)} </ul>`} </section> </main> ` })}`;
}, "/Users/k3lm4n/Documents/GitHub/farwell-lp/src/pages/team.astro", void 0);

const $$file = "/Users/k3lm4n/Documents/GitHub/farwell-lp/src/pages/team.astro";
const $$url = "/team";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Team,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };

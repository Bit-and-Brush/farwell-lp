import { c as createAstro, a as createComponent, m as maybeRenderHead, b as renderComponent, d as renderTemplate } from './astro/server_DRQd-RgF.mjs';
import 'kleur/colors';
import { $ as $$Image } from './_astro_assets_CTJtQqK3.mjs';

const $$Astro = createAstro("https://farwell.co.ao");
const $$BrandsSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BrandsSection;
  const { brands } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="mt-16 mb-12 space-y-6 rounded-xl border p-6"> <h3 class="text-secondary text-2xl leading-8">Marcas Certificadas</h3> <p>A Farwell representa várias marcas certificadas, incluindo:</p> <ul class="flex flex-wrap items-center justify-center gap-12"> ${brands.map(({ brandName, logo }) => renderTemplate`<li> ${renderComponent($$result, "Image", $$Image, { "src": logo, "alt": brandName, "width": 72, "height": 72, "loading": "lazy", "class": "object-cover" })} </li>`)} </ul> </div>`;
}, "/Users/k3lm4n/Documents/GitHub/farwell-lp/src/components/common/brands-section.astro", void 0);

export { $$BrandsSection as $ };

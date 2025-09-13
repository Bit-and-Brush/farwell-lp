import { c as createAstro, a as createComponent, m as maybeRenderHead, b as renderComponent, d as renderTemplate } from './astro/server_DRQd-RgF.mjs';
import 'kleur/colors';
import { $ as $$Image } from './_astro_assets_CTJtQqK3.mjs';

const $$Astro = createAstro("https://farwell.co.ao");
const $$QualityStandardItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$QualityStandardItem;
  const { title, description, iconUrl } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="flex flex-col items-center text-center"> ${iconUrl && renderTemplate`<div class="bg-primary/10 flex size-16 items-center justify-center rounded-full"> ${renderComponent($$result, "Image", $$Image, { "src": iconUrl, "alt": title, "loading": "lazy", "width": 32, "height": 32 })} </div>`} <h3 class="text-secondary mt-4 mb-2 text-xl font-bold">${title}</h3> <p class="text-sm">${description}</p> </li>`;
}, "/Users/k3lm4n/Documents/GitHub/farwell-lp/src/components/common/quality-standard-item.astro", void 0);

export { $$QualityStandardItem as $ };

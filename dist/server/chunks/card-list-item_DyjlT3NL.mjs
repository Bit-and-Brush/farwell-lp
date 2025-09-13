import { c as createAstro, a as createComponent, m as maybeRenderHead, b as renderComponent, d as renderTemplate } from './astro/server_DRQd-RgF.mjs';
import 'kleur/colors';
import { $ as $$Image } from './_astro_assets_CTJtQqK3.mjs';

const $$Astro = createAstro("https://farwell.co.ao");
const $$CardListItem = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CardListItem;
  const { title, description, iconUrl } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li class="bg-background flex h-56 flex-col items-center justify-center rounded-xl border px-7 text-center shadow-xs"> ${iconUrl && renderTemplate`${renderComponent($$result, "Image", $$Image, { "loading": "lazy", "src": iconUrl, "alt": title, "width": 48, "height": 48 })}`} <h3 class="text-secondary mt-4 mb-3 text-lg font-bold">${title}</h3> <p class="text-sm">${description}</p> </li>`;
}, "/Users/k3lm4n/Documents/GitHub/farwell-lp/src/components/common/card-list-item.astro", void 0);

export { $$CardListItem as $ };

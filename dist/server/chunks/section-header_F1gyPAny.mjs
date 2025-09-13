import { c as createAstro, a as createComponent, m as maybeRenderHead, d as renderTemplate } from './astro/server_DRQd-RgF.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://farwell.co.ao");
const $$SectionHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SectionHeader;
  const { title, description } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="mx-auto max-w-3xl space-y-4 text-center"> <h2 class="text-secondary text-3xl font-bold">${title}</h2> <p class="text-lg"> ${description} </p> </div>`;
}, "/Users/k3lm4n/Documents/GitHub/farwell-lp/src/components/common/section-header.astro", void 0);

export { $$SectionHeader as $ };

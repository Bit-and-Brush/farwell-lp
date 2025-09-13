import { c as createAstro, a as createComponent, m as maybeRenderHead, d as renderTemplate } from './astro/server_DRQd-RgF.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://farwell.co.ao");
const $$PageHero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PageHero;
  const { title, subtitle } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="primary-gradient text-background"> <div class="mx-auto max-w-3xl space-y-6 px-4 pt-20 pb-36 text-center"> <h1 class="text-grey-950 text-4xl font-bold">${title}</h1> <p class="text-lg"> ${subtitle} </p> </div> </section>`;
}, "/Users/k3lm4n/Documents/GitHub/farwell-lp/src/components/common/page-hero.astro", void 0);

export { $$PageHero as $ };

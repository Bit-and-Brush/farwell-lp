import { c as createAstro, a as createComponent, m as maybeRenderHead, e as addAttribute, u as unescapeHTML, d as renderTemplate } from './astro/server_DRQd-RgF.mjs';
import 'kleur/colors';
import 'clsx';
import { c as cn, s as sanitizeHTMLFromCMS } from './main-layout_DUNOsHRB.mjs';

const $$Astro = createAstro("https://farwell.co.ao");
const $$ProsedContent = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProsedContent;
  const { content, className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(cn("prose max-w-none text-lg prose-p:leading-7", className), "class")}>${unescapeHTML(sanitizeHTMLFromCMS(content))}</div>`;
}, "/Users/k3lm4n/Documents/GitHub/farwell-lp/src/components/common/prosed-content.astro", void 0);

export { $$ProsedContent as $ };

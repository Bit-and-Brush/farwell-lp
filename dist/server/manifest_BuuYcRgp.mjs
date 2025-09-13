import 'kleur/colors';
import { p as decodeKey } from './chunks/astro/server_DRQd-RgF.mjs';
import 'clsx';
import 'cookie';
import './chunks/astro-designed-error-pages_CQGlNsb_.mjs';
import 'es-module-lexer';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/noop-middleware_C53vqKBY.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/k3lm4n/Documents/GitHub/farwell-lp/","cacheDir":"file:///Users/k3lm4n/Documents/GitHub/farwell-lp/node_modules/.astro/","outDir":"file:///Users/k3lm4n/Documents/GitHub/farwell-lp/dist/","srcDir":"file:///Users/k3lm4n/Documents/GitHub/farwell-lp/src/","publicDir":"file:///Users/k3lm4n/Documents/GitHub/farwell-lp/public/","buildClientDir":"file:///Users/k3lm4n/Documents/GitHub/farwell-lp/dist/client/","buildServerDir":"file:///Users/k3lm4n/Documents/GitHub/farwell-lp/dist/server/","adapterName":"@astrojs/node","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.DCTgdEH6.js"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/node.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.DCTgdEH6.js"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_actions/[...path]","pattern":"^\\/_actions(?:\\/(.*?))?\\/?$","segments":[[{"content":"_actions","dynamic":false,"spread":false}],[{"content":"...path","dynamic":true,"spread":true}]],"params":["...path"],"component":"node_modules/astro/dist/actions/runtime/route.js","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.DCTgdEH6.js"}],"styles":[{"type":"external","src":"/_astro/about.BVBgyTbV.css"}],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.DCTgdEH6.js"}],"styles":[{"type":"external","src":"/_astro/about.BVBgyTbV.css"}],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.DCTgdEH6.js"}],"styles":[{"type":"external","src":"/_astro/about.BVBgyTbV.css"}],"routeData":{"route":"/diagnostics","isIndex":false,"type":"page","pattern":"^\\/diagnostics\\/?$","segments":[[{"content":"diagnostics","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/diagnostics.astro","pathname":"/diagnostics","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.DCTgdEH6.js"}],"styles":[{"type":"external","src":"/_astro/about.BVBgyTbV.css"}],"routeData":{"route":"/distribution","isIndex":false,"type":"page","pattern":"^\\/distribution\\/?$","segments":[[{"content":"distribution","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/distribution.astro","pathname":"/distribution","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.DCTgdEH6.js"}],"styles":[{"type":"external","src":"/_astro/about.BVBgyTbV.css"}],"routeData":{"route":"/facilities","isIndex":false,"type":"page","pattern":"^\\/facilities\\/?$","segments":[[{"content":"facilities","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/facilities.astro","pathname":"/facilities","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.DCTgdEH6.js"}],"styles":[{"type":"external","src":"/_astro/about.BVBgyTbV.css"}],"routeData":{"route":"/quality-policy","isIndex":false,"type":"page","pattern":"^\\/quality-policy\\/?$","segments":[[{"content":"quality-policy","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/quality-policy.astro","pathname":"/quality-policy","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.DCTgdEH6.js"}],"styles":[],"routeData":{"route":"/robots.txt","isIndex":false,"type":"endpoint","pattern":"^\\/robots\\.txt\\/?$","segments":[[{"content":"robots.txt","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/robots.txt.ts","pathname":"/robots.txt","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.DCTgdEH6.js"}],"styles":[{"type":"external","src":"/_astro/about.BVBgyTbV.css"}],"routeData":{"route":"/team","isIndex":false,"type":"page","pattern":"^\\/team\\/?$","segments":[[{"content":"team","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/team.astro","pathname":"/team","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.DCTgdEH6.js"}],"styles":[{"type":"external","src":"/_astro/about.BVBgyTbV.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://farwell.co.ao","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/k3lm4n/Documents/GitHub/farwell-lp/src/pages/about.astro",{"propagation":"none","containsHead":true}],["/Users/k3lm4n/Documents/GitHub/farwell-lp/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["/Users/k3lm4n/Documents/GitHub/farwell-lp/src/pages/diagnostics.astro",{"propagation":"none","containsHead":true}],["/Users/k3lm4n/Documents/GitHub/farwell-lp/src/pages/distribution.astro",{"propagation":"none","containsHead":true}],["/Users/k3lm4n/Documents/GitHub/farwell-lp/src/pages/facilities.astro",{"propagation":"none","containsHead":true}],["/Users/k3lm4n/Documents/GitHub/farwell-lp/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/k3lm4n/Documents/GitHub/farwell-lp/src/pages/quality-policy.astro",{"propagation":"none","containsHead":true}],["/Users/k3lm4n/Documents/GitHub/farwell-lp/src/pages/team.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000astro-internal:actions":"_astro-internal_actions.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/node@_@js":"pages/_image.astro.mjs","\u0000@astro-page:node_modules/astro/dist/actions/runtime/route@_@js":"pages/_actions/_---path_.astro.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/diagnostics@_@astro":"pages/diagnostics.astro.mjs","\u0000@astro-page:src/pages/distribution@_@astro":"pages/distribution.astro.mjs","\u0000@astro-page:src/pages/facilities@_@astro":"pages/facilities.astro.mjs","\u0000@astro-page:src/pages/quality-policy@_@astro":"pages/quality-policy.astro.mjs","\u0000@astro-page:src/pages/robots.txt@_@ts":"pages/robots.txt.astro.mjs","\u0000@astro-page:src/pages/team@_@astro":"pages/team.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_BuuYcRgp.mjs","/Users/k3lm4n/Documents/GitHub/farwell-lp/node_modules/unstorage/drivers/fs-lite.mjs":"chunks/fs-lite_COtHaKzy.mjs","/Users/k3lm4n/Documents/GitHub/farwell-lp/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_w_FN-2Ka.mjs","@/components/interactive/forms/contact-form":"_astro/contact-form.BYzfOdWy.js","/Users/k3lm4n/Documents/GitHub/farwell-lp/src/components/interactive/desktop-nav-menu":"_astro/desktop-nav-menu.DOGHoN3X.js","/Users/k3lm4n/Documents/GitHub/farwell-lp/src/components/interactive/mobile-nav-menu":"_astro/mobile-nav-menu.4rrgzcWt.js","@astrojs/react/client.js":"_astro/client.CIOrUTSW.js","/Users/k3lm4n/Documents/GitHub/farwell-lp/src/components/common/scroll-to-top-button.astro?astro&type=script&index=0&lang.ts":"_astro/scroll-to-top-button.astro_astro_type_script_index_0_lang.BA0WqSx6.js","astro:scripts/page.js":"_astro/page.DCTgdEH6.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/k3lm4n/Documents/GitHub/farwell-lp/src/components/common/scroll-to-top-button.astro?astro&type=script&index=0&lang.ts","const t=document.getElementById(\"scroll-to-top-button\");t?.addEventListener(\"click\",()=>{window.scrollTo({top:0,behavior:\"smooth\"})});window.addEventListener(\"scroll\",()=>{t&&(window.pageYOffset>1e3?(t.classList.add(\"opacity-100\"),t.classList.remove(\"opacity-0\")):(t.classList.remove(\"opacity-100\"),t.classList.add(\"opacity-0\")))});"]],"assets":["/_astro/poppins-latin-ext-700-normal.cby-RkWa.woff2","/_astro/poppins-latin-ext-400-normal.by3JarPu.woff2","/_astro/poppins-latin-700-normal.Qrb0O0WB.woff2","/_astro/poppins-devanagari-700-normal.O-jipLrW.woff2","/_astro/poppins-devanagari-400-normal.CJDn6rn8.woff2","/_astro/poppins-latin-400-normal.cpxAROuN.woff2","/_astro/poppins-devanagari-700-normal.fHs-vx92.woff","/_astro/poppins-latin-700-normal.BVuQR_eA.woff","/_astro/poppins-latin-ext-400-normal.DaBSavcJ.woff","/_astro/poppins-latin-ext-700-normal.DctTR6Tg.woff","/_astro/poppins-latin-400-normal.BOb3E3N0.woff","/_astro/poppins-devanagari-400-normal.CqVvlrh5.woff","/_astro/footer-logo.BcTJOeEs.png","/_astro/header-logo.BTmsCiS5.svg","/_astro/about.BVBgyTbV.css","/apple-touch-icon.png","/favicon-96x96.png","/favicon.ico","/favicon.svg","/web-app-manifest-192x192.png","/web-app-manifest-512x512.png","/_astro/button.CYGVCxuS.js","/_astro/client.CIOrUTSW.js","/_astro/constants.Dk50pxkh.js","/_astro/contact-form.BYzfOdWy.js","/_astro/desktop-nav-menu.DOGHoN3X.js","/_astro/index.Bpn8Ox_Z.js","/_astro/index.D06LF_tj.js","/_astro/mobile-nav-menu.4rrgzcWt.js","/_astro/page.DCTgdEH6.js","/_astro/page.DCTgdEH6.js"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"MkMGN+xNcGCIHjQS1Wr6QIlcdjaDisrRs8tFgJMyM38=","sessionConfig":{"driver":"fs-lite","options":{"base":"/Users/k3lm4n/Documents/GitHub/farwell-lp/node_modules/.astro/sessions"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/fs-lite_COtHaKzy.mjs');

export { manifest };

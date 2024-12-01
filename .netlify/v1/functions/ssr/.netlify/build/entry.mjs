import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_znIlYWtl.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/certamen.astro.mjs');
const _page2 = () => import('./pages/detalle_escultor.astro.mjs');
const _page3 = () => import('./pages/detalle_evento.astro.mjs');
const _page4 = () => import('./pages/error.astro.mjs');
const _page5 = () => import('./pages/eventos.astro.mjs');
const _page6 = () => import('./pages/validar.astro.mjs');
const _page7 = () => import('./pages/votar.astro.mjs');
const _page8 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/.pnpm/astro@4.16.16_rollup@2.79.2_terser@5.36.0_typescript@5.7.2/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/certamen.astro", _page1],
    ["src/pages/detalle_escultor.astro", _page2],
    ["src/pages/detalle_evento.astro", _page3],
    ["src/pages/error.astro", _page4],
    ["src/pages/eventos.astro", _page5],
    ["src/pages/validar.astro", _page6],
    ["src/pages/votar.astro", _page7],
    ["src/pages/index.astro", _page8]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "bf82a045-89a7-4c16-bfc9-db2ce3a13ecd"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };

/// <reference path="../.astro/types.d.ts" />
declare const __API_URL__: string;
interface ImportMetaEnv {
	readonly API_URL: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}


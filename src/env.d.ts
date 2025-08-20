interface ImportMetaEnv {
  readonly API_ENDPOINT: string;
  readonly ADAPTER: "cloudflare" | "node";
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

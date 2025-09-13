declare module "astro:actions" {
	type Actions = typeof import("/Users/k3lm4n/Documents/GitHub/farwell-lp/src/actions/index.ts")["server"];

	export const actions: Actions;
}
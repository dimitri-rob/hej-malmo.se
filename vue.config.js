const releases = require("./src/assets/releases.json");

const SITE_URL = "https://hej-malmo.se";

// Les robots de partage (X, Facebook, Bluesky, iMessage…) n'exécutent pas le
// JS : ils ne verraient que l'index.html générique. On génère donc au build un
// `<slug>/index.html` par sortie, qui porte ses propres balises Open Graph et
// Twitter Card. Netlify sert ce fichier pour `/<slug>` avant de tomber sur la
// règle SPA de `_redirects`, et l'appli Vue démarre ensuite normalement.
function socialMeta(slug, release) {
	// Pochette carrée : on prend la plus grande variante disponible.
	const width = Math.max(600, ...(release.widths || []));
	const file = width === 600 ? `${slug}.jpg` : `${slug}-${width}.jpg`;

	return {
		title: `Listen to ${release.name} by ${release.artist}`,
		ogTitle: `${release.artist} — ${release.name}`,
		url: `${SITE_URL}/${slug}`,
		image: `${SITE_URL}/assets/artworks/${file}`,
		imageSize: width,
		imageAlt: `${release.artist} — ${release.name}`,
	};
}

module.exports = {
	chainWebpack: (config) => {
		const html = config.plugin("html");
		const HtmlWebpackPlugin = html.get("plugin");
		const [options] = html.get("args");

		for (const [slug, release] of Object.entries(releases)) {
			config.plugin(`html-${slug}`).use(HtmlWebpackPlugin, [
				{
					...options,
					filename: `${slug}/index.html`,
					social: socialMeta(slug, release),
				},
			]);
		}
	},
};

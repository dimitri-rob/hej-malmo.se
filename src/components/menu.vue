<template>
	<nav class="font-home text-base lowercase">
		<ul class="
				sm:grid
				grid-flow-col
				auto-cols-max
				sm:space-x-8
				text-center
				sm:text-left
			">
			<template v-for="item in items">
				<li v-if="item.type === 'stream'" :key="item.name">
					<a
						:href="item.href"
						target="_blank"
						:class="item.highlight
							? 'text-sm inline-block bg-black text-white px-2 py-0.5 hover:underline'
							: 'text-sm hover:underline'"
						v-if="item.type === 'stream'"
						>{{ item.name }}</a
					>
				</li>
			</template>
		</ul>
		<ul class="
				sm:grid
				grid-flow-col
				auto-cols-max
				sm:space-x-8
				text-center
				sm:text-left
			">
			<template v-for="item in items">
				<li v-if="item.type === 'social'" :key="item.name">
					<a
						:href="item.href"
						target="_blank"
						class="text-sm hover:underline"
						>{{ item.name }}</a
					>
				</li>
			</template>
		</ul>
	</nav>
</template>

<script>
export default {
	data() {
		return {
			items: [
				// Mis en avant : seul item qui vend quelque chose, il ne doit pas se
				// fondre dans la liste des plateformes d'écoute.
				{
					name: "Merch",
					href: "https://hej-malmo.bandcamp.com/merch",
					type: "stream",
					highlight: true
				},
				{
					name: "Bandcamp",
					href: "https://hej-malmo.bandcamp.com/",
					type: "stream"
				},
				{
					name: "Apple Music",
					href: "https://music.apple.com/fr/artist/malm%C3%B6/1320952106",
					type: "stream"
				},
				{
					name: "Deezer",
					href: "https://www.deezer.com/fr/artist/100000432",
					type: "stream"
				},
				{
					name: "Qobuz",
					href: "https://www.qobuz.com/fr-fr/interpreter/malmo-1/7716329",
					type: "stream"
				},
				{
					name: "Spotify",
					href: "https://open.spotify.com/artist/6yBdtaTSKKjyUZI2xH052v",
					type: "stream"
				},
				{
					name: "Soundcloud",
					href: "https://soundcloud.com/hej-malmo",
					type: "stream"
				},
				{
					name: "Instagram",
					href: "https://www.instagram.com/hej_malmo/",
					type: "social"
				},
				{
					name: "Youtube",
					href: "https://www.youtube.com/channel/UCFkOfes-e0HMlL_dcKv4xVQ",
					type: "social"
				},
				{
					name: "Bluesky",
					href: "https://bsky.app/profile/hej-malmo.se",
					type: "social"
				},
				{
					name: "Stubo",
					href: "https://stubo.app/artist/708-malmo",
					type: "social"
				},
			],
		};
	},
};
</script>
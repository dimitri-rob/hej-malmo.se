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
						class="text-sm hover:underline"
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
				{
					name: "Bandcamp",
					href: "https://hej-malmo.bandcamp.com/",
					type: "stream"
				},
				{
					name: "Spotify",
					href: "https://open.spotify.com/artist/6yBdtaTSKKjyUZI2xH052v",
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
					name: "Facebook",
					href: "https://www.facebook.com/hejmalmo",
					type: "social"
				},
				{
					name: "Twitter",
					href: "https://twitter.com/hej_malmo",
					type: "social"
				},
				{
					name: "Merch",
					href: "https://hej-malmo.bandcamp.com/merch",
					type: "stream"
				},
			],
		};
	},
};
</script>
<template>
	<nav class="font-home text-base lowercase">
		<ul
			class="
				sm:grid
				grid-flow-col
				auto-cols-max
				sm:space-x-8
				text-center
				sm:text-left
			"
		>
			<li v-for="item in items" :key="item.name">
				<a
					:href="item.href"
					target="_blank"
					class="text-sm hover:underline"
					>{{ item.name }}</a
				>
			</li>
		</ul>
	</nav>
</template>

<script>
export default {
	data() {
		return {
			items: [
				{
					name: "Spotify",
					href: "https://open.spotify.com/artist/6yBdtaTSKKjyUZI2xH052v",
				},
				{
					name: "Bandcamp",
					href: "https://hej-malmo.bandcamp.com/",
				},
				{
					name: "Youtube",
					href: "https://www.youtube.com/channel/UCFkOfes-e0HMlL_dcKv4xVQ",
				},
				{
					name: "Soundcloud",
					href: "https://soundcloud.com/hej-malmo",
				},
				{
					name: "Instagram",
					href: "https://www.instagram.com/hej_malmo/",
				},
				{
					name: "Facebook",
					href: "https://www.facebook.com/hejmalmo",
				},
				{
					name: "Twitter",
					href: "https://twitter.com/hej_malmo",
				},
				{
					name: "Merch",
					href: "https://hej-malmo.bandcamp.com/merch",
				},
			],
		};
	},
};
</script>
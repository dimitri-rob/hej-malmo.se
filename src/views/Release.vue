<template>
	<div>
		<h1>{{ data[release].artist }}</h1>
		<h2>{{ data[release].name }}</h2>

		<ul>
			<li v-for="link in data[release].links" :key="link.item">
				<a :href="link.href" target="_blank">{{ link.item }}</a>
			</li>
		</ul>

		<img :src="`${publicPath}assets/artworks/${release}.jpg`" />
	</div>
</template>

<script>
import releaseData from "@/assets/releases.json";

export default {
	data() {
		return {
			publicPath: process.env.BASE_URL,
			release: this.$route.params.id,
			data: releaseData,
		};
	},
};
</script>
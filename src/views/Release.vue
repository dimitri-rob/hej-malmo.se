<template>
	<main class="p-10">
		<section class="max-w-xs mx-auto">
			<div class="container bg-white p-8 rounded-lg">
				<img :src="`${publicPath}assets/artworks/${release}.jpg`" />
				<h1>{{ data[release].artist }}</h1>
				<h2>{{ data[release].name }}</h2>

				<ul>
					<li
						v-for="link in data[release].links"
						:key="link.item"
						class="grid grid-cols-2"
					>
						<div class="flex justify-start items-center">
							<a :href="link.href" target="_blank" class="block">
								<img
									:src="`${publicPath}assets/logos/${link.item}.svg`"
									class="block"
								/>
							</a>
						</div>
						<div class="flex justify-end items-center">
							<a
								:href="link.href"
								target="_blank"
								class="
									bg-black
									text-white
									inline-block
									rounded-lg
									py-1
									px-4
								"
								>{{ link.text }}</a
							>
						</div>
					</li>
				</ul>
			</div>
		</section>
	</main>
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

<style lang="postcss" scoped>
main {
	background: #333;
}
</style>
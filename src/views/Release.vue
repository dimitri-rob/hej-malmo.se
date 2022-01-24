<template>
	<main class="p-10">
		<section class="max-w-sm mx-auto">
			<div class="container">
				<figure class="max-w-xs mx-auto drop-shadow-md">
					<img
						class="block"
						:src="`${publicPath}assets/artworks/${release}.jpg`"
					/>
				</figure>
				<section class="text-white py-6 text-center font-release">
					<h1 class="uppercase font-bold text-lg leading-6">
						{{ data[release].artist }}
					</h1>
					<h2 class="text-base leading-6">
						{{ data[release].name }}
					</h2>
				</section>

				<ul
					class="
						bg-white
						px-6
						rounded-lg
						grid grid-cols-1
						divide-y divide-gray-300
					"
				>
					<li
						v-for="link in data[release].links"
						:key="link.item"
						class="grid grid-cols-2 gap-4 py-5"
					>
						<div class="">
							<a :href="link.href" target="_blank" class="block">
								<img
									:src="`${publicPath}assets/logos/${link.item}.svg`"
									class="block w-full"
								/>
							</a>
						</div>
						<div class="flex justify-end items-center">
							<a
								:href="link.href"
								target="_blank"
								class="
									font-release
									bg-black
									text-white
									inline-block
									rounded-full
									py-2
									px-5
									w-24
									text-base text-center
									leading-5
									border-2 border-solid border-black
									transition-all
									duration-300
									ease-in-out
									hover:bg-white
									hover:text-black
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
	name: "Release",
	data() {
		return {
			publicPath: process.env.BASE_URL,
			release: this.$route.params.id,
			data: releaseData,
		};
	},
	created() {
		document.title =
			"Listen to " +
			this.data[this.release].name +
			" by " +
			this.data[this.release].artist;
	},
};
</script>

<style lang="postcss" scoped>
main {
	background: #191919;
}
</style>
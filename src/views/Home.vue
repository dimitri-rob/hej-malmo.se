<template>
	<main class="container p-10 font-home w-full h-screen flex items-center">
		<section class="max-w-screen-md mx-auto space-y-16">
			<header>
				<figure>
					<img src="" />
				</figure>
				<Menu />
			</header>

			<section class="container grid grid-cols-12 gap-12">
				<div class="col-span-8">
					<h1 class="text-3xl mb-2 font-semibold">{{ title }}</h1>
					<div
						v-html="description"
						class="text-xl flex flex-col space-y-4"
					></div>
				</div>
				<div class="col-span-4">
					<div class="aspect-w-1 aspect-h-1">
						<iframe
							class="w-full"
							style="border: 0"
							src="https://bandcamp.com/EmbeddedPlayer/album=1439854761/size=large/bgcol=ffffff/linkcol=333333/minimal=true/transparent=true/"
							seamless=""
						></iframe>
					</div>
				</div>
			</section>

			<footer class="text-sm">
				contact (booking/other):
				<a :href="'mailto:' + contact + ''" class="font-semibold">{{
					contact
				}}</a>
			</footer>
		</section>
	</main>
</template>

<script>
// @ is an alias to /src
import Menu from "@/components/menu.vue";

export default {
	name: "Home",
	components: {
		Menu,
	},
	data() {
		return {
			title: "Lost in north.",
			description:
				"<p>Inspired by the peaceful Scandinavian landscapes, the musical project Malmö takes its name from this famous Swedish city, a place of exchange and dialogue connecting Denmark via the Oresund detroit.</p><p>Through his compositions, the Parisian producer creates tactful melodies which are finely cadenced by wooly beats. Ambient, electronica, and felted techno are joined together to give life to evading tracks.</p>",
			contact: "contact@hej-malmo.se",
		};
	},
};
</script>

<style lang="postcss" scoped>
@import "/assets/fonts.css";
</style>
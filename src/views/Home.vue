<template>
	<main
		class="
			container
			p-8
			font-home
			w-full
			min-h-screen
			flex
			items-center
			sm:p-10
		"
	>
		<section class="max-w-screen-md mx-auto space-y-16">
			<header>
				<figure class="w-32 mb-5 mx-auto sm:mx-0">
					<svg class="w-full h-auto" width="392" height="74" viewBox="0 0 392 74" fill="none" xmlns="http://www.w3.org/2000/svg">
						<g clip-path="url(#clip0_1_2)">
						<path d="M57.42 18.68H82.11V72.61H63.51V45.4L50.11 69.12H33.3L18.6 43.37V72.61H0V18.68H25.83L41.67 46.46L57.43 18.68H57.42Z" fill="black"/>
						<path d="M140.03 72.61L136.7 65.38H110.47L107.14 72.61H87.32L114.77 18.6H132.4L159.85 72.61H140.03ZM116.56 52.06H130.61L123.63 36.87L116.56 52.06Z" fill="black"/>
						<path d="M183.98 56.12H216.55V72.61H165.06V18.68H183.98V56.12Z" fill="black"/>
						<path d="M282.1 18.68H306.79V72.61H288.19V45.4L274.79 69.12H257.98L243.28 43.37V72.61H224.68V18.68H250.51L266.35 46.46L282.11 18.68H282.1Z" fill="black"/>
						<path d="M317.04 48.41V42.89C317.04 26.16 328.74 17.39 354.24 17.31C379.66 17.39 391.36 26.16 391.36 42.89V48.41C391.36 65.14 379.66 73.99 354.24 73.91C328.74 73.99 317.04 65.14 317.04 48.41ZM334.02 7.31C334.02 2.52 336.94 0 342.79 0C348.64 0 351.56 2.52 351.56 7.31C351.56 12.1 348.72 14.62 342.79 14.62C336.86 14.62 334.02 12.02 334.02 7.31ZM371.63 47.35V43.94C371.63 36.3 366.27 33.95 354.25 33.95C342.23 33.95 336.79 36.39 336.79 43.94V47.35C336.79 54.82 342.23 57.34 354.25 57.34C366.27 57.34 371.63 54.82 371.63 47.35ZM356.93 7.31C356.93 2.52 359.85 0 365.78 0C371.71 0 374.47 2.52 374.47 7.31C374.47 12.1 371.63 14.62 365.78 14.62C359.93 14.62 356.93 12.02 356.93 7.31Z" fill="black"/>
						</g>
						<defs>
						<clipPath id="clip0_1_2">
						<rect width="391.35" height="73.91" fill="white"/>
						</clipPath>
						</defs>
					</svg>
				</figure>
				<Menu />
			</header>

			<section class="container sm:grid sm:grid-cols-12 sm:gap-12">
				<div class="col-span-8 mb-8 sm:mb-0 text-center sm:text-left">
					<h1 class="text-2xl mb-2 font-semibold">{{ title }}</h1>
					<div
						v-html="description"
						class="text-lg flex flex-col space-y-4"
					></div>
				</div>
				<div class="col-span-4 flex items-center">
					<div class="w-full aspect-w-1 aspect-h-1">
						<iframe
							class="w-full"
							style="border: 0"
							src="https://bandcamp.com/EmbeddedPlayer/album=1439854761/size=large/bgcol=ffffff/linkcol=333333/minimal=true/transparent=true/"
							seamless=""
						></iframe>
					</div>
				</div>
			</section>

			<footer class="text-sm text-center sm:text-left">
				contact (booking/other):
				<a
					:href="'mailto:' + contact + ''"
					class="font-semibold hover:underline"
					>{{ contact }}</a
				>
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
			contact: "malmo-music@proton.me",
		};
	},
};
</script>

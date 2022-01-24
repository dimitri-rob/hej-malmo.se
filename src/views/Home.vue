<template>
	<main class="container p-10 font-home w-full h-screen flex items-center">
		<section class="max-w-screen-md mx-auto space-y-16">
			<header>
				<figure class="w-36 mb-5">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						xmlns:xlink="http://www.w3.org/1999/xlink"
						viewBox="0 0 697.22 196.98"
						version="1.1"
						class="w-full"
					>
						<defs>
							<clipPath>
								<path
									d="M 573 0 L 697.21875 0 L 697.21875 196.980469 L 573 196.980469 Z M 573 0 "
								/>
							</clipPath>
						</defs>
						<g id="surface1">
							<path
								style="
									stroke: none;
									fill-rule: nonzero;
									fill: rgb(13.699341%, 12.199402%, 12.5%);
									fill-opacity: 1;
								"
								d="M 0 45.066406 L 37.875 45.066406 L 69.398438 118.277344 L 101.136719 45.066406 L 139.003906 45.066406 L 139.003906 194.863281 L 100.925781 194.863281 L 101.136719 151.703125 L 103.460938 121.445313 L 102.191406 121.238281 L 82.519531 172.648438 L 56.496094 172.648438 L 36.394531 121.238281 L 35.335938 121.445313 L 37.875 151.703125 L 37.875 194.863281 L 0 194.863281 L 0 45.066406 "
							/>
							<path
								style="
									stroke: none;
									fill-rule: nonzero;
									fill: rgb(13.699341%, 12.199402%, 12.5%);
									fill-opacity: 1;
								"
								d="M 230.433594 131.179688 L 220.066406 87.382813 L 219.003906 87.382813 L 208 131.179688 Z M 289.882813 194.863281 L 249.261719 194.863281 L 239.523438 164.816406 L 199.539063 164.816406 L 190.230469 194.863281 L 149.609375 194.863281 L 201.871094 45.066406 L 236.355469 45.066406 L 289.882813 194.863281 "
							/>
							<path
								style="
									stroke: none;
									fill-rule: nonzero;
									fill: rgb(13.699341%, 12.199402%, 12.5%);
									fill-opacity: 1;
								"
								d="M 299.84375 45.066406 L 337.929688 45.066406 L 337.929688 157.414063 L 398.859375 157.414063 L 398.859375 194.863281 L 299.84375 194.863281 L 299.84375 45.066406 "
							/>
							<path
								style="
									stroke: none;
									fill-rule: nonzero;
									fill: rgb(13.699341%, 12.199402%, 12.5%);
									fill-opacity: 1;
								"
								d="M 413.894531 45.066406 L 451.769531 45.066406 L 483.292969 118.277344 L 515.03125 45.066406 L 552.902344 45.066406 L 552.902344 194.863281 L 514.816406 194.863281 L 515.03125 151.703125 L 517.359375 121.445313 L 516.085938 121.238281 L 496.410156 172.648438 L 470.382813 172.648438 L 450.285156 121.238281 L 449.226563 121.445313 L 451.769531 151.703125 L 451.769531 194.863281 L 413.894531 194.863281 L 413.894531 45.066406 "
							/>
							<g clip-path="url(#clip1)" clip-rule="nonzero">
								<path
									style="
										stroke: none;
										fill-rule: nonzero;
										fill: rgb(
											13.699341%,
											12.199402%,
											12.5%
										);
										fill-opacity: 1;
									"
									d="M 660.40625 0 C 670.558594 0 678.390625 7.828125 678.390625 17.984375 C 678.390625 27.71875 670.558594 35.550781 660.40625 35.550781 C 650.039063 35.550781 642.632813 27.71875 642.632813 17.984375 C 642.632813 7.828125 650.039063 0 660.40625 0 Z M 610.894531 145.566406 C 610.894531 156.570313 623.164063 161.855469 635.230469 161.855469 C 647.28125 161.855469 659.351563 156.355469 659.351563 145.566406 L 659.351563 94.363281 C 659.351563 82.726563 646.863281 77.441406 634.59375 77.441406 C 622.742188 77.441406 610.894531 83.363281 610.894531 94.363281 Z M 609.414063 0 C 619.355469 0 627.1875 7.828125 627.1875 17.984375 C 627.1875 27.71875 619.355469 35.550781 609.414063 35.550781 C 599.46875 35.550781 591.640625 27.71875 591.640625 17.984375 C 591.640625 7.828125 599.46875 0 609.414063 0 Z M 573.023438 94.363281 C 573.023438 59.875 603.910156 42.953125 635.015625 42.953125 C 666.117188 42.953125 697.222656 60.089844 697.222656 94.363281 L 697.222656 145.566406 C 697.222656 179.847656 666.328125 196.980469 635.230469 196.980469 C 604.128906 196.980469 573.023438 179.847656 573.023438 145.566406 L 573.023438 94.363281 "
								/>
							</g>
						</g>
					</svg>
				</figure>
				<Menu />
			</header>

			<section class="container grid grid-cols-12 gap-12">
				<div class="col-span-8">
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

			<footer class="text-sm">
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
			contact: "contact@hej-malmo.se",
		};
	},
};
</script>
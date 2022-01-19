<template>
	<div class="home">
		<div>Logo</div>
		<Menu />

		<div>texte</div>
		<div>iframe bandcamp</div>
		<div>footer</div>
	</div>
</template>

<script>
// @ is an alias to /src
import Menu from "@/components/Menu.vue";

export default {
	name: "Home",
	components: {
		Menu,
	},
};
</script>

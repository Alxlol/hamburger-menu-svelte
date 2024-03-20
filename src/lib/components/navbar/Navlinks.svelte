<script lang="ts">
	import type { Route } from "$lib/data/routes";

    export let route: Route
</script>

<a class="hover:text-blue-300 font-bold text-lg" href={route.href}>{route.name}</a>
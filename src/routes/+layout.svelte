<script>
	import Navbar from '$lib/components/navbar/Navbar.svelte';
	import '../app.pcss';
</script>

<div class="min-h-screen bg-neutral-900 text-white flex flex-col">
    <Navbar />
    <slot />
</div>

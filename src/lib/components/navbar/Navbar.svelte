<script lang="ts">
    import { routes } from "$lib/data/routes";
	import { fly } from "svelte/transition";
	import Logo from "../Logo.svelte";
	import HamburgerButton from "./HamburgerButton.svelte";
	import Navlinks from "./Navlinks.svelte";

    let open: boolean = true;
</script>

<nav class="bg-neutral-800 px-10 md:px-40 py-6 flex items-center justify-between z-10">
    <Logo />
    <!-- At larger breakpoints -->
    <ul class="hidden md:flex gap-6">
        {#each routes as route }
            <Navlinks {route} />
        {/each}
    </ul>
    <!-- Hamburger button at smaller breakpoints -->
    <div class="md:hidden">
        <HamburgerButton bind:open />
    </div>
</nav>
<!-- Hamburger menu -->
{#if open}
    <div class="absolute w-full top-[6.5rem]" transition:fly={{duration: 400, y: -250}}>
        <ul class="md:hidden flex flex-col items-center bg-black">
            {#each routes as route }
                <span class="my-4">
                    <Navlinks {route} />
                </span>
            {/each}
        </ul>
    </div>
{/if}
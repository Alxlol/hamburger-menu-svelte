<script lang="ts">
    import '../navbar/hamburgers.css'

    
    function handleClick() {
        if (button.classList.contains('is-active')) {
            button.classList.remove('is-active')
            open = false;
        } else {
            button.classList.add('is-active')
            open = true;
        }
       
    }
    export let open: boolean;
    let button: HTMLButtonElement;
</script>


<button bind:this={button} on:click={handleClick} class="hamburger hamburger--squeeze" type="button">
    <span class="hamburger-box">
        <span class="hamburger-inner">

        </span>
    </span>
</button>

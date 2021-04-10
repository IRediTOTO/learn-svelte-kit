<script>
   import { createEventDispatcher } from "svelte";


   const dispatch = createEventDispatcher();

   function openModal() {
      dispatch("modal", {
         show: true,
      });
   }
</script>

<button on:click={openModal}> Click me </button>

<script>
   export let showMenu = false;
   export let menus = [];

   import { clickOutside } from "$lib/func/click-outside";

   function handleClickOutside(e) {
      showMenu=false
   }

</script>

<div class="flex  flex-row text-xs justify-center content-center relative gap-0.5 cursor-pointer select-none">
   <img src="https://api.iconify.design/carbon:user-avatar-filled.svg" alt="avatar" />
   <p class="whitespace-nowrap  text-xs my-auto" on:click={() => (showMenu = !showMenu)}>DUC ANH</p>
   <img src="https://api.iconify.design/ic:sharp-arrow-drop-down.svg" alt="arrow down" />
   {#if showMenu && menus}
      <ul class="absolute w-12 min-h-24 bg-red-500 top-6 right-5" use:clickOutside={showMenu} on:click_outside={handleClickOutside}>
         {#each menus as menu (menu.id)}
            <li>{menu.title}</li>
         {/each}
      </ul>
   {/if}
</div>

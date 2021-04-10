<script>
   import { mainMenus } from "$lib/data/main-menu-data";
   import ParentNav from "./parent-nav.svelte";
   let showChild = false;

   function name(params) {}
</script>

<section class="border-gray-500 border-b ">
   <nav class="container mx-auto ">
      <ul class="flex flex-row justify-between items-center ">
         <li>
            <img src="https://api.iconify.design/ion:ios-home.svg" alt="home" />
         </li>
         <li class="font-bold text-xs">Mới nhất</li>
         {#each mainMenus as menu}
            <ParentNav {menu} />
            
         {/each}
         <li class="whitespace-nowrap flex flex-row gap-1 text-xs text-gray-400">
          Tất cả  <img src="https://api.iconify.design/la:hamburger.svg" alt="hamberger" />
         </li>
      </ul>
   </nav>
</section>

<script>
   export let cateName = {};
   export let economicCategories = [];
</script>

   <div class="flex flex-row justify-start gap-4 items-center">
      <h2 class="text-lg font-serif relative font-bold">
         <a class="" href={cateName.url}>{cateName.title}</a>
         <span class="absolute  h-2px bg-red-700 left-0  w-full top-8 "></span>
      </h2>
      {#if cateName.sub && cateName.sub.length}
         {#each cateName.sub as sub, index}
            <h4 class="text-sm">
               <a href={sub.url}>
                  {sub.title}
               </a>
            </h4>
         {/each}
      {/if}
   </div>
   

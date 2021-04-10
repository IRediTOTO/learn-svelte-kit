<script>
   export let economicCategories = [];
</script>

<div class="grid grid-flow-row grid-cols-3 gap-3">
   <article class="flex flex-row col-span-2 gap-2">
      <img class="w-1/2" src={economicCategories[0].img} alt="img" />
      <div class="flex flex-col">
         <h3 class="text-xl font-bold font-serif">{economicCategories[0].title}</h3>
         <p>
            {economicCategories[0].content}
         </p>
      </div>
   </article>
   <article class="col-span-1 flex flex-col">
      <h3 class="text-xl font-bold font-serif">{economicCategories[1].title}</h3>
      <p>
         {economicCategories[1].content}
      </p>
   </article>
   <span class="h-1px bg-gray-200 w-full col-span-3"></span>
   <div class="col-span-3 flex flex-row gap-4">
      {#each economicCategories as post, index}
         {#if index > 1}
            <article class="relative pl-15px pt-10px">
               <h3 class=" text-base font-bold font-serif">
                  <a href={post.url}>{post.title}</a>
               </h3>
               <span class="w-6px h-6px absolute left-0 top-18px bg-gray-300">

               </span>
            </article>
         {/if}
      {/each}
   </div>
   <span class="h-2px bg-gray-300 w-full col-span-3"></span>
</div>

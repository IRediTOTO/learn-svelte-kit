<script>
   import { streamHome } from "$lib/data/stream-home";
   import { economicCategories, subCategories } from "$lib/data/economic-cate";
   import BoxCateFeatured from "./box-cate-featured.svelte";
   import ContentBoxCategory from "./content-box-category.svelte";
</script>

<section class="relative">
   
   <div class="container mx-auto gap-4 grid grid-flow-row grid-cols-3 divide-x divide-gray-200">
    <span class="h-2px w-full col-span-3 bg-gray-100" />
      <div class="col-span-1 flex flex-col gap-4 divide-y justify-center items-center  divide-gray-200">
         {#each streamHome as post}
            <div class="pt-2">
               <h3 class="text-lg font-bold font-serif"><a href={post.url}>{post.title}</a></h3>
               <div class="flex flex-row gap-2">
                  {#if post.img}
                     <img src={post.img} class="w-1/3" />
                  {/if}
                  <p class="w-2/3">{post.content}</p>
               </div>
            </div>
         {/each}
      </div>
      <div class="col-span-2 px-4 flex flex-col gap-4 ">
         <BoxCateFeatured cateName={subCategories} {economicCategories} />
         <ContentBoxCategory {economicCategories} />
         <BoxCateFeatured cateName={subCategories} {economicCategories} />

         <ContentBoxCategory {economicCategories} />
      </div>
   </div>
</section>

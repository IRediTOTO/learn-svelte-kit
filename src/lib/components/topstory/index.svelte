<script>
   import { topstory } from "$lib/data/topstory";
</script>

<section class="py-6">
   <div class="container mx-auto ">
      <div class="grid grid-flow-row grid-cols-3 ">
         <div class="col-span-2 gap-4 grid grid-flow-row grid-cols-3 ">
            <article class="col-span-3 grid grid-flow-row grid-cols-3 ">
               <a href="#" class="col-span-2">
                  <img src={topstory[0].img} alt="topstory img" />
               </a>
               <a class="col-span-1 flex flex-col  p-4 bg-gray-100" href="/">
                  <h3 class="text-2xl font-serif">{topstory[0].title}</h3>
                  <p class="text-sm">{topstory[0].content}</p>
               </a>
            </article>
            <ul class="col-span-3 divide-x-5 divide-gray-100 grid grid-flow-row grid-cols-3 gap-4  ">
               {#each topstory as story, index}
                  {#if index > 0}
                     <li class="p-2 col-span-1">
                        <a class=" " href="/">
                           <h3 class="text-xl font-serif">{story.title}</h3>
                           <p class="text-sm">
                              {story.content}
                           </p>
                        </a>
                     </li>
                  {/if}
               {/each}
            </ul>
         </div>
         <div class="col-span-1">ads here please :)</div>
      </div>
   </div>
   
</section>

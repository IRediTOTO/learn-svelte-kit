<script>
   import ChildNav from "./child-nav.svelte";
   import { fade, fly,draw } from "svelte/transition";
   export let menu;
   let openChild = false;
   function onEnter() {
      openChild = true;
   }

   function onLeave() {
      openChild = false;
   }

</script>

<li class="cursor-pointer  relative group" on:mouseenter={onEnter} on:mouseleave={onLeave}>
   <a href="#" class="font-bold whitespace-nowrap text-xs py-16.5px block">
      {menu.title}
   </a>
   {#if openChild}
      <ul in:fly={{ y: 66, duration: 333 }} out:fly class="  w-190px bg-white border-t border-green-500 z-50 top-full  left-0  shadow  absolute px-15px py-10px" >
         {#if menu.child && menu.child.length}
            <ChildNav childMenu={menu.child} />
         {/if}
      </ul>
   {/if}
</li>

<script>
   export let childMenu = [];
</script>

{#each childMenu as child}
   <li>
      {child.title}
   </li>
{/each}

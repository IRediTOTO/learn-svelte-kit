<script>
   import MainMenu from "$lib/components/main-menu/index.svelte";
   import AvatarMenu from "$lib/header/avatar-menu.svelte";
   import Modal from "$lib/modal.svelte";
   import MyForm from "$lib/my-form.svelte";

   
   let showModal = false;
   let time;

   $: time = new Date();

   let menus = [
      {
         id: 1,
         title: "menu 1",
      },
      {
         id: 2,
         title: "menu 2",
      },
      {
         id: 3,
         title: "menu 3",
      },
   ];

   function handlerModal(e) {
      showModal = e.detail.show;
   }

   function toggleModal(params) {
      showModal = !showModal;
   }
</script>

<header>
   <div class="border-b-1">
      <div class="container flex flex-row mx-auto  justify-between content-center py-2">
         <div class="grid grid-cols-2 divide-x divide-gray-500">
            <img src="https://s1.vnecdn.net/vnexpress/restruct/i/v377/v2_2019/pc/graphics/logo.svg" alt="logo" class="w-28 text-center mx-auto my-auto" />

            <div class="text-center text-xs px-3 content-center my-auto">
               {time}
            </div>
         </div>
         <div class="flex flex-row gap-3">
            <button class="border rounded border-gray-200 px-2 py-1 flex flex-row content-center justify-center text-xs gap-0.5">
               <img src="https://api.iconify.design/mdi:clock-time-two-outline.svg" alt="clock" class="block" />Mới nhất
            </button>
            <button class="border rounded border-gray-200 px-2 py-1 flex flex-row content-center justify-center text-xs gap-0.5"> International </button>
            <div class="  relative px-2 text-xs flex flex-row content-center focus:ring">
               <input placeholder="Search" class="w-full rounded-full border rounded-full focus:border-non" />
               <img src="https://api.iconify.design/ic:outline-search.svg" alt="search" class="absolute right-4 top-1" />
            </div>
            <div class="flex  flex-row text-xs justify-center content-center relative gap-0.5 cursor-pointer select-none">
               <AvatarMenu {menus} />
               <img src="https://api.iconify.design/ic:baseline-notifications.svg" alt="notification" />
            </div>
         </div>
      </div>
   </div>
</header>

 <style global lang="postcss">
    @tailwind base;
  </style> 
<MainMenu />
<Modal message="Hello" {showModal} on:click={toggleModal}>
   <h3>My form</h3>
   <MyForm />
</Modal>
<slot />
<main />
<footer>This is footer</footer>

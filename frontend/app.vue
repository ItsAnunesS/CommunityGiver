<template>
  <div class="drawer">
    <input id="app-drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-col">
      <TheHeader />
      <NuxtPage />
      <TheFooter />
    </div>
    <div class="drawer-side">
      <label for="app-drawer" class="drawer-overlay"></label>
      <ul class="menu p-4 w-80 bg-black border-r border-primary">
        <li v-for="page in pages">
          <NuxtLink :href="localePath(page.path)" class="text-white scale-100 hover:text-primary">
            {{ page.name }}
          </NuxtLink>
        </li>
      </ul>
    </div>
    <ModalAddModals />
  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
const pages = usePages();
</script>

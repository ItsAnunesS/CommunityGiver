<template>
  <nav class="bg-black border-b border-primary sticky top-0 z-50">
    <div class="navbar container mx-auto">
      <div class="navbar-start">
        <label for="my-drawer-3" tabindex="0" class="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <a class="btn bg-white hover:bg-white btn-circle normal-case text-xl hidden lg:flex scale-100 hover:scale-125">
          <IconCG class="h-12 w-full mx-auto my-auto" />
        </a>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1">
          <li v-for="page in pages">
            <NuxtLink :href="localePath(page.path)" class="scale-100 hover:text-primary hover:scale-125">
              {{ page.name }}
            </NuxtLink>
          </li>
        </ul>
      </div>
      <div class="navbar-end">
        <MetamaskButton />
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const localePath = useLocalePath()
const pages = usePages();
</script>

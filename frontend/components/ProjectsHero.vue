<template>
  <div class="hero min-h-screen bg-gray-950">
    <div class="hero-content text-center">
      <div class="max-w-xl">
        <h1 class="text-5xl font-bold">{{ $t("project.hero.title") }}</h1>
        <p class="py-6">
          {{ $t("project.hero.description") }}
        </p>
        <div class="flex flex-col md:flex-row justify-center">
          <button class="btn btn-primary btn-outline rounded-full">{{ $t("project.hero.btn") }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

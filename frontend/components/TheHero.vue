<template>
  <div class="hero min-h-screen bg-black">
    <div class="hero-content text-center">
      <div class="max-w-xl">
        <h1 class="text-5xl font-bold">{{ $t("hero.title") }}</h1>
        <p class="py-6">
          {{ $t("hero.description") }}
        </p>
        <div class="flex flex-col md:flex-row justify-center gap-4">
          <button class="btn btn-primary btn-outline rounded-full">{{ $t("hero.btn1") }}</button>
          <label for="modal-discord" class="hidden md:flex btn btn-primary btn-outline rounded-full">{{ $t("hero.btn2") }}</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

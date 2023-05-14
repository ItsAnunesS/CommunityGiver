<template>
  <div v-if="store.getAddress()" class="container mx-auto">
    <div class="h-screen flex flex-col items-center justify-center">
      <div class="card w-96 bg-gray-950 border border-primary shadow-xl">
        <div class="card-body">
          <h2 class="card-title">{{ $t('profile.title', { address: store.getAddress(true) } ) }}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMetamaskStore } from '~/stores/metamask';
const store = useMetamaskStore();

</script>

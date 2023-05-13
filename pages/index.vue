<template>
  <div>
    {{ store.getAddress() }}
  </div>
</template>

<script setup lang="ts">
import { useMetamaskStore } from '~/stores/metamask';

const store = useMetamaskStore();
</script>

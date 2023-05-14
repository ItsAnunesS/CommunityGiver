<template>
  <footer class="footer footer-center p-4 bg-primary text-base-content">
    <div>
      <p class="text-white">Copyright © {{ year }} - {{ $t('copyright') }}</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <div>
    <TheHero />
    <ProjectsList />
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();

useSeoMeta({
  titleTemplate: t('app.title'),
})
</script>

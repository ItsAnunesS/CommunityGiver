<template>
  <div>
    <ProjectsHero />
    <ProjectsList />
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();

useSeoMeta({
  title: t('pages.projects.title'),
  description: t('pages.projects.description'),
  ogDescription: t('pages.projects.description'),
  ogTitle: t('pages.projects.title'),
  ogImage: '',
  twitterCard: 'summary_large_image',
});

useServerSeoMeta({
  title: t('pages.projects.title'),
  description: t('pages.projects.description'),
  ogDescription: t('pages.projects.description'),
  ogTitle: t('pages.projects.title'),
  ogImage: '',
  twitterCard: 'summary_large_image',
});
</script>

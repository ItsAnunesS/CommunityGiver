<template>
  <Html :lang="head.htmlAttrs?.lang" :dir="head.htmlAttrs?.dir">
    <Head>
      <Title>{{ $t('app.title') }}</Title>
      <template v-for="link in head.link" :key="link.id">
        <Link :id="link.id" :rel="link.rel" :href="link.href" :hreflang="link.hreflang" />
      </template>
      <template v-for="meta in head.meta" :key="meta.id">
        <Meta :id="meta.id" :property="meta.property" :content="meta.content" />
      </template>
    </Head>
    <Body>
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
    </Body>
  </Html>
</template>

<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath()
const pages = usePages();

const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true
})
</script>

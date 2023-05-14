<template>
  <div>
    <input type="checkbox" id="modal-profile" class="modal-toggle" />
    <label class="modal modal-bottom sm:modal-middle cursor-pointer">
      <label class="modal-box bg-gray-900 border border-primary relative" for="modal-profile">
        <h3 class="font-bold text-lg text-center text-white">
          {{ $t('profile.title', { address: store.getAddress(true) } ) }}
        </h3>
        <p class="py-4 text-white">
          {{ $t("discord.description") }}
        </p>
        <div class="modal-action justify-center gap-5">
          <button class="btn btn-primary" disabled>
            {{ $t("profile.btn1") }}
          </button>
        </div>
      </label>
    </label>
  </div>
</template>

<script setup lang="ts">
import { useMetamaskStore } from '~/stores/metamask';

const localePath = useLocalePath();
const store = useMetamaskStore();
</script>

<template>
  <div>
    <input type="checkbox" id="modal-profile" class="modal-toggle" />
    <label class="modal modal-bottom sm:modal-middle cursor-pointer">
      <label class="modal-box bg-gray-900 border border-primary relative" for="modal-profile">
        <h3 class="font-bold text-lg text-white">
          {{ $t('profile.title', { address: store.getAddress(true) } ) }}
        </h3>
        <div class="py-4">
          <h2 class="text-lg mb-3">
            Donations Portfolio
          </h2>
          <div class="stats stats-vertical lg:stats-horizontal shadow">

            <div class="stat">
              <div class="stat-title">Donations</div>
              <div class="stat-value">4</div>
              <div class="stat-desc">2023</div>
            </div>

            <div class="stat">
              <div class="stat-title">G.I.V.E. Tokens</div>
              <div class="stat-value">32k</div>
              <div class="stat-desc">↗︎ 400 (22%)</div>
            </div>

            <div class="stat">
              <div class="stat-title">Donated (USD)</div>
              <div class="stat-value">12k</div>
              <div class="stat-desc">2023</div>
            </div>

          </div>
        </div>
        <div class="modal-action justify-center mx-auto">
          <button class="btn btn-primary text-center" disabled>
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

<template>
  <div>
    <input type="checkbox" id="modal-discord" class="modal-toggle" />
    <label class="modal modal-bottom sm:modal-middle cursor-pointer">
      <label class="modal-box bg-gray-900 border border-primary relative" for="modal-discord">
        <h3 class="font-bold text-lg text-center text-white">
          {{ $t("discord.title") }}
        </h3>
        <p class="py-4 text-white">
          {{ $t("discord.description") }}
        </p>
        <div class="modal-action">
          <label for="modal-discord" class="btn btn-primary">
            {{ $t("discord.btn") }}
          </label>
        </div>
      </label>
    </label>
  </div>
</template>

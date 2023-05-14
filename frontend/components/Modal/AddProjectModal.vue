<template>
 <div>
    <input type="checkbox" id="modal-add-project" class="modal-toggle" />
    <label class="modal modal-bottom sm:modal-middle cursor-pointer">
      <label class="modal-box bg-gray-900 border border-primary relative" for="modal-add-project">
        <label for="modal-add-project" class="btn btn-sm btn-primary btn-circle absolute right-2 top-2">✕</label>
        <div>
          <h3 class="font-bold text-lg text-center text-white">
            {{ $t("project.add.title") }}
          </h3>
          <h2 class="text-md text-center text-white">
            {{ $t("project.add.subtitle") }}
          </h2>
        </div>
        <form class="py-4 text-white">
          <div class="mb-6">
            <label for="email" class="block mb-2 text-sm font-medium text-white">Your email (optional)</label>
            <input type="email" id="email" class="input input-bordered w-full" placeholder="hello@myong.org">
          </div>
          <div class="mb-6">
            <label for="title" class="block mb-2 text-sm font-medium text-white">
              Project Title
            </label>
            <input type="title" id="title" class="input input-bordered w-full" placeholder="Helping animals and enviorment" required>
          </div>
          <div class="mb-6">
            <label for="message" class="block mb-2 text-sm font-medium text-white">Project Description</label>
            <textarea id="message" rows="4" class="w-full textarea" placeholder="Leave a description..."></textarea>
          </div>
          <div class="mb-6">
            <label class="block mb-2 text-sm font-medium text-white" for="project_logo">Upload logo</label>
            <input class="file-input w-full" id="project_logo" type="file">
            <div class="mt-1 text-sm text-gray-300" id="project_logo_help">Your project logo</div>
          </div>
        </form>
        <div class="modal-action">
          <label for="modal-add-project" class="btn btn-primary mx-auto w-full">
            {{ $t("project.add.btn") }}
          </label>
        </div>
      </label>
    </label>
  </div>
</template>

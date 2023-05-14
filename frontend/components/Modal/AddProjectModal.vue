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
            <input type="email" id="email" class="bg-gray-700 border border-gray-600 text-white placeholder-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="hello@myong.org">
          </div>
          <div class="mb-6">
            <label for="title" class="block mb-2 text-sm font-medium text-white">
              Project Title
            </label>
            <input type="title" id="title" class="bg-gray-700 border border-gray-600 text-white placeholder-gray-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Helping animals and enviorment" required>
          </div>
          <div class="mb-6">
            <label for="message" class="block mb-2 text-sm font-medium text-white">Project Description</label>
            <textarea id="message" rows="4" class="block p-2.5 w-full text-sm text-white bg-gray-700 rounded-lg border border-gray-600 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400" placeholder="Leave a description..."></textarea>
          </div>
          <div class="mb-6">
            <label class="block mb-2 text-sm font-medium text-white" for="project_logo">Upload logo</label>
            <input class="block w-full text-sm text-gray-400 border border-gray-600 rounded-lg cursor-pointer bg-gray-700 placeholder-gray-400 focus:outline-none" aria-describedby="project_logo_help" id="project_logo" type="file">
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

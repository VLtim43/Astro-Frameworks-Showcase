<template>
  <div
    @click="showToast"
    class="relative flex flex-col justify-between h-full w-full bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-800 text-gray-200 cursor-pointer"
  >
    <div class="flex justify-end px-2 pt-1">
      <h1 class="font-onest text-xs text-gray-300">Made with Vue</h1>
    </div>

    <div class="font-onest px-4">
      <h1 class="text-4xl text-left font-onest font-bold">Vue</h1>
      <h3 class="py-3">
        A Progressive framework for creating modern web interfaces.
      </h3>
      <a
        href="https://vuejs.org//"
        class="text-white hover:text-emerald-800 underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        View the documentation
      </a>
    </div>

    <div class="flex justify-end">
      <img src="/vueLogo.svg" alt="React Logo" class="w-7 h-7 m-1 p-0.5" />
    </div>
  </div>
</template>

<script>
import { useToast } from "vue-toastification";

export default {
  setup() {
    const toast = useToast();

    const showToast = () => {
      toast.success("Hello from Vue!");
    };

    return { showToast };
  },
};
</script>

<template>
  <div
    class="max-w-sm rounded overflow-hidden shadow-lg bg-green-500 p-4 border-l-4 border-gray-700"
  >
    <p class="text-gray-300 text-base">Hello from Vue!!</p>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    title: {
      type: String,
    },
  },
};
</script>

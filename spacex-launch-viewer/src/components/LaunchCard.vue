<script setup lang="ts">
defineProps({ launch: Object });
</script>

<template>
  <div class="p-4 bg-gray-800 rounded-lg shadow-lg cursor-pointer">
    <h3 class="cursor-pointer text-lg font-semibold">{{ launch.name }}</h3>
    <p>{{ new Date(launch.date_utc).toLocaleDateString() }}</p>
  </div>
</template>

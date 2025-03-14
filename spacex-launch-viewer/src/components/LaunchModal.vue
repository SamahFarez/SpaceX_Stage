
<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
  launch: Object,
});
const emit = defineEmits(['close']);

const showVideo = ref(false);
</script>

<template>
  <div class="bg-gray-800 p-6 rounded-lg shadow-lg max-w-3xl w-full">
    <h2 class="text-2xl font-bold">{{ launch.name }}</h2>
    <p class="text-sm">Date: {{ new Date(launch.date_utc).toLocaleDateString('fr-FR') }}</p>
    <p class="mt-2">{{ launch.details || 'No details available for this mission.' }}</p>
    
    <img v-if="launch.links?.patch?.small" :src="launch.links.patch.small" alt="Mission patch" class="my-4 w-32 h-32 mx-auto">
    
    <div><a :href="launch.links.article" target="_blank" class="text-blue-400 underline">Article de présentation</a></div>

    <div class="mt-4">
      <h3 class="text-lg font-semibold">Lieu de lancement</h3>
      <p>{{ launch.launchpad }}</p>
    </div>

    <div class="mt-4">
      <h3 class="text-lg font-semibold">Chargements</h3>
      <ul>
        <li v-for="payload in launch.payloads" :key="payload.id">
          {{ payload.name }} (Client : {{ payload.customers?.join(', ') }})
        </li>
      </ul>
    </div>

    <div class="mt-4">
      <label class="inline-flex items-center">
        <input type="checkbox" v-model="showVideo" class="form-checkbox h-5 w-5">
        <span class="ml-2">Afficher la vidéo YouTube</span>
      </label>
    </div>

    <div v-if="showVideo && launch.links?.webcast" class="mt-4">
      <iframe :src="launch.links.webcast.replace('watch?v=', 'embed/')" frameborder="0" allowfullscreen class="w-full h-64"></iframe>
    </div>

  </div>
</template>
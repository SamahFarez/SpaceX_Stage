<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { getUpcomingLaunch, getLaunches } from '../api';
import LaunchCard from '../components/LaunchCard.vue';
import LaunchModal from '../components/LaunchModal.vue';

const upcomingLaunch = ref(null);
const launches = ref([]);
const selectedLaunch = ref(null);

const openModal = (launch: any) => {
  selectedLaunch.value = launch;
};

const closeModal = () => {
  selectedLaunch.value = null;
};

onMounted(async () => {
  upcomingLaunch.value = await getUpcomingLaunch();
  launches.value = await getLaunches();
});
</script>

<template>
  <div class="container">
      <h1 class="title">SpaceX Launch Viewer</h1>
      
      <div v-if="upcomingLaunch" class="upcoming-launch">
        <h2>Prochain Lancement</h2>
        <p>{{ upcomingLaunch.name }} - {{ new Date(upcomingLaunch.date_utc).toLocaleString() }}</p>
      </div>

      <h2>Derniers Lancements</h2>
      <div class="launch-list">
        <LaunchCard v-for="launch in launches.slice(0, 10)" 
                    :key="launch.id" 
                    :launch="launch" 
                    @click="openModal(launch)" 
                    class="launch-card" />
      </div>

      <div v-if="selectedLaunch" class="modal-overlay">
        <div class="modal-content">
          <LaunchModal :launch="selectedLaunch" />
          <button @click="closeModal" class="close-button">X</button>
        </div>
      </div>
      <div v-else class="empty-message">
        Nothing to show, please choose a launch from the list.
      </div>
  </div>
</template>

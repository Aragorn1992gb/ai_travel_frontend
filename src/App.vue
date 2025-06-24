<!-- <template>
  <div class="p-6 max-w-xl mx-auto">
    <h1 class="text-2xl font-bold mb-4">Plan Your Perfect Vacation</h1>
    <form @submit.prevent="submitForm">
      <input v-model="destination" type="text" placeholder="Destination" class="input" required />
      <input v-model.number="duration" type="number" placeholder="Duration (days)" class="input" min="1" required />

      <div v-for="(value, key) in ratings" :key="key" class="my-2">
        <label :for="key" class="capitalize">{{ key }}</label>
        <input v-model.number="ratings[key]" type="range" min="1" max="5" />
        <span>{{ ratings[key] }}</span>
      </div>

      <input v-model="avoid" type="text" placeholder="Anything to avoid?" class="input" />
      <button type="submit" class="btn">Generate Itinerary</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

// Define type for ratings keys and form payload
type RatingsKeys = 'adventure' | 'fun' | 'sport' | 'culture' | 'music' | 'relax'

interface Ratings {
  adventure: number
  fun: number
  sport: number
  culture: number
  music: number
  relax: number
}

interface ItineraryPayload {
  destination: string
  duration: number
  ratings: Ratings
  avoid: string
}

// Reactive state
const destination = ref<string>('')
const duration = ref<number>(5)
const ratings = reactive<Ratings>({
  adventure: 3,
  fun: 3,
  sport: 3,
  culture: 3,
  music: 3,
  relax: 3,
})
const avoid = ref<string>('')

const submitForm = async () => {
  const payload: ItineraryPayload = {
    destination: destination.value,
    duration: duration.value,
    ratings: { ...ratings }, // spread reactive into a plain object
    avoid: avoid.value,
  }

  try {
    const response = await fetch('http://localhost:8000/api/itinerary', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const result = await response.json()
    console.log('Itinerary result:', result)
    // TODO: display the result on the page or handle as needed
  } catch (error) {
    console.error('Failed to fetch itinerary:', error)
  }
}
</script>

<style>
.input {
  display: block;
  margin-bottom: 1rem;
  padding: 0.5rem;
  width: 100%;
}
.btn {
  background: #3b82f6;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  cursor: pointer;
}
.btn:hover {
  background: #2563eb;
}
</style> -->

<!-- <template>
  <LandingPage />
</template> -->

<template>
  <router-view />
</template>


<script setup lang="ts">
import LandingPage from './pages/LandingPage.vue'
</script>
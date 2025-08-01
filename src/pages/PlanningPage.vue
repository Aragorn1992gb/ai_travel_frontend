<template>
  <PlanningForm 
    :fields="formFields" 
    map-image="src/public/map.png"
    button-text="Next"
    :current-step="1"
    :total-steps="4"
    step-label="STEP 1"
    step-title="Choose destination"
    next-page-url="/rating"
    @next="handleNext"
  />
</template>

<script setup lang="ts">
import PlanningForm from '../components/PlanningForm.vue'

const formFields = [
  {
    id: 'destination',
    label: 'Where do you want to go?',
    placeholder: 'Search for a destination',
    icon: '🔍',
    hasArrow: true
  },
  {
    id: 'days',
    label: 'How many days do you want to stay?',
    placeholder: 'Number of days',
    icon: '📅'
  },
]

const handleNext = (formData: Record<string, string>) => {
  console.log('Form data:', formData)
  // Handle form submission
}
</script>
<template>
  <PlanningForm 
    :fields="formFields" 
    map-image="src/public/map.png"
    button-text="Next"
    :current-step="2"
    :total-steps="4"
    step-label="STEP 2"
    step-title="Rate preferences"
    next-page-url="/dashboard"
    @next="handleNext"
  />
</template>

<script setup lang="ts">
import PlanningForm from '../components/PlanningForm.vue'

const formFieldsOld = [
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
  // Add more fields as needed
  {
    id: 'budget',
    label: 'What is your budget?',
    placeholder: 'Enter budget',
    icon: '💰'
  }
]

const formFields = [
  {
    id: 'ratings',
    label: 'Rate your interests',
    type: 'ratings',
    ratings: [
      { id: 'adventure-travel', label: 'Adventure Travel', value: 4 },
      { id: 'fun', label: 'Fun', value: 3 },
      { id: 'sport', label: 'Sport', value: 4 },
      { id: 'culture', label: 'Culture', value: 4 },
      { id: 'music', label: 'Music', value: 4 },
      { id: 'relax', label: 'Relax', value: 5 }
    ]
  }
]

const handleNext = (formData: Record<string, string>) => {
  console.log('Form data:', formData)
  // Handle form submission
}
</script>
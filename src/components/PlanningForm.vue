<template>
  <div class="planning-page">
    <main class="main-content">
      <TopBar />
      
      <section class="steps">
        <div class="step">
          <div class="step-circle">{{ stepLabel }}</div>
          <div class="step-title">{{ stepTitle }}</div>
        </div>
        <div class="steps-bar">
          <div 
            v-for="(step, index) in totalSteps" 
            :key="index"
            :class="index < currentStep ? 'step-bar-active' : 'step-bar-unactive'"
          ></div>
        </div>
      </section>

      <section class="planning-row">
        <div class="planning-form">
      <div v-for="(field, index) in fields" :key="index" class="form-group">
        <!-- Ratings field type (multiple ratings in one group) -->
        <div v-if="field.type === 'ratings'" class="ratings-group">
          <h3 class="ratings-title">{{ field.label }}</h3>
          <div v-for="rating in field.ratings" :key="rating.id" class="rating-field">
            <label class="rating-label">{{ rating.label }}</label>
            <div class="rating-stars">
              <span 
                v-for="star in 5" 
                :key="star"
                @click="updateRatingInGroup(field, rating, star)"
                :class="['star', { active: star <= rating.value }]"
              >
                ⭐
              </span>
            </div>
          </div>
        </div>
        
        <!-- Single rating field type -->
        <div v-else-if="field.type === 'rating'" class="rating-field">
          <label class="rating-label">{{ field.label }}</label>
          <div class="rating-stars">
            <span 
              v-for="star in (field.maxRating || 5)" 
              :key="star"
              @click="updateRating(field, star)"
              :class="['star', { active: star <= parseInt(field.value || '0') }]"
            >
              ⭐
            </span>
          </div>
        </div>
        
        <!-- Regular input field type -->
        <div v-else>
          <label :for="field.id"><b>{{ field.label }}</b></label>
          <div class="input-wrapper">
            <span class="input-icon">{{ field.icon }}</span>
            <input 
              :id="field.id" 
              :type="field.type || 'text'" 
              :placeholder="field.placeholder" 
              v-model="field.value"
            />
            <span v-if="field.hasArrow" class="input-arrow">⌄</span>
          </div>
        </div>
      </div>
      <div class="next-btn-container">
        <router-link :to="nextPageUrl" class="next-btn">
          <span class="next-btn-text">Next</span>
          <span class="next-btn-circle">
            <svg class="next-btn-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="10" r="10" fill="#3CD3AD"/>
              <path d="M7 10h6M11 7l3 3-3 3" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </span>
          </router-link>
        </div>
          <!-- <div class="next-btn-container">        
            <button class="next-btn" @click="$emit('next', getFormData())">
              <span class="next-btn-text">{{ buttonText }}</span>
              <span class="next-btn-circle">
                <svg class="next-btn-arrow" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="10" fill="#3CD3AD"/>
                  <path d="M7 10h6M11 7l3 3-3 3" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </span>
            </button>
          </div> -->
        </div>
        
        <div class="planning-map">
          <img :src="mapImage" :alt="mapAlt" style="border-radius:24px;" />
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import '../assets/global.css'
import TopBar from './TopBar.vue'
import { defineProps, defineEmits } from 'vue'

interface RatingItem {
  id: string
  label: string
  value: number
}

interface FormField {
  id: string
  label: string
  placeholder?: string
  icon?: string
  hasArrow?: boolean
  type?: string
  value?: string
  maxRating?: number
  ratings?: RatingItem[]
}

interface Props {
  fields: FormField[]
  mapImage: string
  mapAlt?: string
  buttonText?: string
  currentStep?: number      // Which step is currently active (1-based)
  totalSteps?: number       // Total number of steps
  stepLabel?: string        // "STEP 1", "STEP 2", etc.
  stepTitle?: string        // "Choose destination", "Select dates", etc.
  nextPageUrl?: string      // URL for the next page navigation
}

const props = withDefaults(defineProps<Props>(), {
  mapAlt: 'Map',
  buttonText: 'Next',
  currentStep: 1,
  totalSteps: 4,
  stepLabel: 'STEP 1',
  stepTitle: 'Choose destination',
  nextPageUrl: '/dashboard'
})

const emit = defineEmits<{
  next: [data: Record<string, string>]
}>()

const updateRating = (field: FormField, rating: number) => {
  field.value = rating.toString()
}

const updateRatingInGroup = (field: FormField, ratingItem: RatingItem, rating: number) => {
  if (field.ratings) {
    const item = field.ratings.find(r => r.id === ratingItem.id)
    if (item) {
      item.value = rating
    }
  }
}

const getFormData = () => {
  const data: Record<string, string> = {}
  props.fields.forEach(field => {
    data[field.id] = field.value || ''
  })
  return data
}
</script>

<style scoped>
.planning-page {
  font-family: 'Inter', sans-serif;
  min-height: 100vh;
  background: #f8fafc;
  width: 100vw;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
}

.logo {
  height: 40px;
  margin-bottom: 2rem;
}

.logout-btn {
  margin-top: auto;
  background: #f8fafc;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  padding: 0.5rem 1.2rem;
  cursor: pointer;
  font-weight: 600;
  color: #d32f2f;
  transition: background 0.2s;
}
.logout-btn:hover {
  background: #ffeaea;
}

.planning-row {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  width: 100%;
  margin-top: 1vw;
  order: 2;
  background: rgba(60, 211, 173, 0.06);
  border-radius: 32px;
  flex: 1;
  /* min-height: calc(100vh - 150px); */
}

.planning-form {
  flex: 1 1 0;
  width: 50vw;
  background: #f4fcfb;
  border-radius: 2vw;
  /* padding: 1.5vw; */
  display: flex;
  flex-direction: column;
  gap: 0.5vw;
  margin: 15px;
  padding-top: 30px;
  /* min-height: calc(100vh - 200px); */
}

.planning-map {
  flex: 1 1 0;
  max-width: 55vw;
  min-width: 25vw;
  display: flex;
  align-items: center;
  justify-content: center;
}

.planning-map img {
  max-width: 90%;
  height: auto;
  border-radius: 2vw;
  display: block;
  margin: 0 auto 24px auto;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  margin: 25px;
}

.input-wrapper {
  display: flex;
  align-items: center;
  background: #fff;
  border-radius: 999px;
  border: 1px solid #e0f0ee;
  padding: 0.75rem 1.5rem;
  gap: 1rem;
}

.input-icon {
  color: #005266;
  font-size: 1.2rem;
}

.input-arrow {
  margin-left: auto;
  color: #005266;
  font-size: 1.2rem;
}

input[type="text"] {
  border: none;
  outline: none;
  flex: 1;
  font-size: 1.1rem;
  background: transparent;
}

.rating-field {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(0, 82, 102, 0.1);
}

.ratings-group {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.ratings-title {
  font-size: 1.2rem;
  font-weight: 700;
  color: #222;
  margin: 0 0 1rem 0;
  padding-bottom: 0.3rem;
  border-bottom: 2px solid rgba(0, 82, 102, 0.2);
}

.rating-label {
  font-weight: 600;
  font-size: 1.1rem;
  color: #222;
  flex: 1;
}

.rating-stars {
  display: flex;
  gap: 0.2rem;
}

.star {
  font-size: 1.5rem;
  cursor: pointer;
  transition: all 0.2s;
  filter: grayscale(100%);
}

.star.active {
  filter: grayscale(0%);
}

.star:hover {
  transform: scale(1.1);
}


.steps {
  /* Auto layout */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 32px 0px 0px;
  gap: 30px;

  width: 100%;
  height: 34px;

  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 2vh;
}
.step {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  gap: 16px;
  margin: 0 auto;
}


.step-circle {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5em 1.2em;         /* Adjust as needed for pill size */
  background: #FFFFFF;
  border: 1px solid rgba(0, 82, 102, 0.4);
  border-radius: 999px;         /* Fully rounded for pill */
  font-weight: 600;
  font-size: 1rem;
  /* REMOVE width: 100%; and any fixed width/height! */
  flex-shrink: 0;               /* Prevent shrinking */
}

.step-title {
  flex: 1;                /* Allow it to grow and fill space */
  text-align: center;
  font-family: 'Segoe UI';
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 37px;
  color: #222222;
  /* Remove: flex: none; order: 1; flex-grow: 0; */
}

.steps-bar {
  /* Frame 1618872681 */

  /* Auto layout */
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 2px;

  margin: 0 auto;
  width: 45vw;
  height: 6px;
  margin-right: 5vw;


  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 0;

}

.step-bar-active {
  /* Rectangle 6 */

  /* width: 176.5px; */
  width: 10vw;
  height: 6px;

  background: #005266;
  border-radius: 200px;

  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 1;

}

.step-bar-unactive {
  /* Rectangle 7 */

  /* width: 176.5px; */
  width: 10vw;
  height: 6px;

  background: rgba(0, 82, 102, 0.12);
  border-radius: 200px;

  /* Inside auto layout */
  flex: none;
  order: 1;
  flex-grow: 1;
}

.next-btn-container {
  display: flex;
  justify-content: flex-end;
  width: 130px;
  margin-left: auto;
  margin-top: auto;
}

.next-btn {
  display: flex;
  align-items: center;
  gap: 0.7em;
  background: #003344;
  border: 1.5px solid #3CD3AD;
  border-radius: 2em;
  padding: 0.7em 1.5em 0.7em 1.5em;
  color: #fff;
  font-family: 'Segoe UI', 'Inter', sans-serif;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background 0.2s, border 0.2s;
  outline: none;
  text-decoration: none; 
  margin: 25px;
}

.next-btn:hover {
  background: #005266;
  border-color: #2bbf98;
  color: #fff;
}

.next-btn-text {
  margin-right: 0.5em;
}

.next-btn-circle {
  display: flex;
  align-items: center;
  justify-content: center;
}

.next-btn-arrow {
  display: block;
}

@media (max-width: 900px) {
  .dashboard {
    flex-direction: column;
  }
  .sidebar {
    flex-direction: row;
    width: 100%;
    border-right: none;
    border-bottom: 1px solid #e5e7eb;
    gap: 1rem;
    justify-content: space-between;
  }
  .itinerary-list {
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
  }
  
  .steps {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center; /* Center the .step horizontally */
    width: 100%;
    padding: 0 8px;
    gap: 0;
  }
  .step {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;   /* Fill the .steps container */
    margin: 0;
    gap: 0;
    position: relative;
  }
  .step-circle {
    flex-shrink: 0;
    padding: 0.3em 0.9em;
    font-size: 0.95rem;
  }
  .step-title {
    flex: 1;
    text-align: center;
    font-size: 1.1rem;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    width: max-content;
  }
  .steps-bar {
    display: none;
  }
  .planning-map {
    display: none;
  }
  .planning-row {
    min-height: calc(100vh - 135px); /* Replace 80px with your header's height */
  }

}

</style>
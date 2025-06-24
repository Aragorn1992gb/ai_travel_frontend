<template>
  <div class="planning-page">


    <main class="main-content">
      <TopBar />
      
      <section class="steps">
        <div class="step">
          <div class="step-circle">
            STEP 1
          </div>
          <div class="step-title">
            Choose destination
          </div>
        </div>
        <div class="steps-bar">
            <div class="step-bar-active"></div>
            <div class="step-bar-unactive"></div>
            <div class="step-bar-unactive"></div>
            <div class="step-bar-unactive"></div>
        </div>
      </section>
      <!-- <section class="details-card">
        <h3>Your Itineraries</h3>
        <div class="itinerary-list">
          <div class="itinerary-card">
            <div class="card-header">
              <span class="destination">Rome, Italy</span>
              <span class="dates">Jul 10 - Jul 15</span>
            </div>
            <div class="card-body">
              <p>3 days, 2 travelers</p>
              <button class="view-btn">View</button>
            </div>
          </div>
        </div>
      </section> -->

      <section class="planning-row">
      <div class="planning-form">
        <div class="form-group">
          <label for="destination"><b>Where do you want to go?</b></label>
          <div class="input-wrapper">
            <span class="input-icon">🔍</span>
            <input id="destination" type="text" placeholder="Search for a destination" />
            <span class="input-arrow">⌄</span>
          </div>
        </div>
        <div class="form-group">
          <label for="days"><b>How many days do you want to stay?</b></label>
          <div class="input-wrapper">
            <span class="input-icon">📅</span>
            <input id="days" type="text" placeholder="Number of days" />
          </div>
        </div>
      </div>
      <div class="planning-map">
        <img src="../public/map.png" alt="Map" style="border-radius:24px;" />
      </div>
    </section>
      <!-- <section class="planning-form">
      <div class="form">
        <div class="form-group">
          <label for="destination"><b>Where do you want to go?</b></label>
          <div class="input-wrapper">
            <span class="input-icon">🔍</span>
            <input id="destination" type="text" placeholder="Search for a destination" />
            <span class="input-arrow">⌄</span>
          </div>
        </div>
        <div class="form-group">
          <label for="days"><b>How many days do you want to stay?</b></label>
          <div class="input-wrapper">
            <span class="input-icon">📅</span>
            <input id="days" type="text" placeholder="Number of days" />
          </div>
        </div>
      </div>
      <div class="planning-map">
        <img src="../public/map.png" alt="Map" style="width:100%;border-radius:24px;" />
      </div>
    </section> -->
    </main>
  </div>
</template>

<script setup lang="ts">
import TopBar from '../components/TopBar.vue'

// Add logic as needed
</script>

<style scoped>
.planning-page {
  font-family: 'Inter', sans-serif;
  /* display: flex; */
  min-height: 100vh;
  background: #f8fafc;
  width: 100vw;
  overflow-x: hidden;
}

.sidebar {
  width: 220px;
  background: #fff;
  border-right: 1px solid #e5e7eb;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem 1rem 1rem;
  gap: 2rem;
}
.logo {
  height: 40px;
  margin-bottom: 2rem;
}
.sidebar nav {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
}
.sidebar nav a {
  color: #222;
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  transition: background 0.2s;
}
.sidebar nav a.active,
.sidebar nav a:hover {
  background: #e0f0ff;
  color: #1e90ff;
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
.main-content {
  flex: 1;
  /* padding: 2rem 3vw; */
  display: flex;
  flex-direction: column;
}
.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}
.user-info {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #1e90ff;
}

/* .planning-row {
  display: flex;
  flex-direction: row;
  gap: 2rem;
  align-items: flex-start;
  width: 100%;
  margin-top: 2rem;
  order: 2;
}

.planning-form {
  flex: 1 1 420px;
  max-width: 600px;
  background: #f4fcfb;
  border-radius: 32px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.planning-map {
  flex: 1 1 420px;
  max-width: 700px;
  min-width: 320px;
  display: flex;
  align-items: flex-start;
}

.planning-map img {
  width: 100%;
  height: auto;
  border-radius: 24px;
  display: block;
} */

.planning-row {
  display: flex;
  flex-direction: row;
  /* gap: 3vw; */
  align-items: flex-start;
  width: 100%;
  margin-top: 2vw;
  order: 2;
}

.planning-form {
  flex: 1 1 0;
  /* max-width: 40vw; */
  /* min-width: 25vw; */
  width: 50vw;
  background: #f4fcfb;
  border-radius: 2vw;
  padding: 2vw;
  display: flex;
  flex-direction: column;
  gap: 2vw;
}

.planning-map {
  flex: 1 1 0;
  max-width: 55vw;
  min-width: 25vw;
  display: flex;
  align-items: center;      /* vertical center */
  justify-content: center;  /* horizontal center */
}

.planning-map img {
  max-width: 90%;
  height: auto;
  border-radius: 2vw;
  display: block;
  margin: 0 auto;
}

/* .planning-form {
  background: #f4fcfb;
  border-radius: 32px;
  padding: 2rem;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 50vw;
  order: 2;
} */

.form-group {
  display: flex;
  flex-direction: column;
  gap: 1rem;
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

.planning-map {
  display: inline-block;
  vertical-align: top;
  /* margin-left: 2rem; */
  width: 40vw;
  /* Adjust width as needed */
}


.steps {
  /* Frame 1618872686 */

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
  /* Remove width: 45vw; */
  width: 100%;
  gap: 16px;
  margin: 0 auto;
}
/* .step {

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 16px;

  margin: 0 auto;


  width: 45vw;
  height: 100%;



  flex: none;
  order: 0;
  flex-grow: 0;

} */

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

/* .step-circle {
  
  box-sizing: border-box;


  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 20px;
  gap: 10px;

  width: 72px;
  height: 34px;

  background: #FFFFFF;
  border: 1px solid rgba(0, 82, 102, 0.4);
  border-radius: 200px;


  flex: none;
  order: 0;
  flex-grow: 0;


 }  */
.details-card {
  /* Frame 4 */

  /* Auto layout */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 32px;
  gap: 20px;
  isolation: isolate;

  /* width: 1380px;
  height: 780px; */
  width: 100%;
  height: 100%;

  background: rgba(60, 211, 173, 0.06);
  border-radius: 32px;

  /* Inside auto layout */
  flex: none;
  order: 2;
  flex-grow: 0;

}


/* .new-itinerary {
  font-size: 1.3rem;
  margin-top: 1rem;
  color: #222;
}
.itineraries h3 {
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: #222;
}
.itinerary-list {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 2rem;
}
.itinerary-card {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 12px rgba(30,144,255,0.06);
  padding: 1.5rem;
  min-width: 260px;
  max-width: 320px;
  flex: 1 1 260px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
} */
.card-header {
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  color: #1e90ff;
}
.card-body {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.view-btn {
  background: #1e90ff;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 0.5rem 1.2rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}
.view-btn:hover {
  background: #156fd1;
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
    /* padding: 1rem; */
    gap: 1rem;
    justify-content: space-between;
  }
  .main-content {
    /* padding: 1rem; */
  }
  .itinerary-list {
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
  }

   /* .steps {
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 8px;
    padding: 0 8px;
    width: 100%;
    height: auto;
  }
  .step {
    flex-direction: row;
    align-items: center;
    gap: 8px;
    width: 100vw;
    margin: 0;
  }
  .step-circle {
    font-size: 0.95rem;
    padding: 0.3em 0.9em;
    width: 10;
    flex-shrink: 0;   
  }
  .step-title {
    font-size: 1.1rem;
    width: auto;
    height: auto;
    margin: 0;
    width: 90vw;
    flex: 1;      
    text-align: center; 
  } */
  
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
}
</style>
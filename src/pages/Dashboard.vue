<template>
  <div class="dashboard">

    <!-- <aside class="sidebar">
      <img src="../public/logo.svg" alt="AITravel Logo" class="logo" />
      <nav>
        <a href="#" class="active">Dashboard</a>
        <a href="#">My Trips</a>
        <a href="#">Explore</a>
        <a href="#">Settings</a>
      </nav>
      <button class="logout-btn">Logout</button>
    </aside> -->
    <main class="main-content">
      <TopBar />
      <!-- <header class="topbar">
        <h2>Welcome back, User!</h2>
        <div class="user-info">
          <img src="../public/avatar.png" alt="User Avatar" class="avatar" />
        </div>
      </header> -->
      <section class="new-itinerary">
        <!-- <button class="view-btn">New Itinerary</button> -->
        <router-link to="/new-itinerary" class="cta-btn">New Itinerary</router-link>

      </section>
      <section class="itineraries">
        <h3>Your Itineraries</h3>
        <div class="itinerary-list">
          <!-- Example itinerary card -->
          <div class="itinerary-card">
            <div class="card-header">
              <span class="destination">Rome, Italy</span>
              <span class="dates">Jul 10 - Jul 15</span>
            </div>
            <div class="card-body">
              <p>3 days, 2 travelers</p>
              <button class="cta-btn">View</button>
            </div>
          </div>
          <!-- Add more itinerary cards here -->
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import '../assets/global.css'
import TopBar from '../components/TopBar.vue'

// Add logic as needed
</script>

<style scoped>
.dashboard {
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
/* .main-content {
  flex: 1;
  /* padding: 2rem 3vw; 
  display: flex;
  flex-direction: column;
  padding-top: 52px; /* Same as .top-bar height 
} */
/* .topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
} */
/* .user-info {
  display: flex;
  align-items: center;
  gap: 1rem;
} */
/* .avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #1e90ff;
} */
.new-itinerary {
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
}
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
.cta-btn {
  background: #1e90ff;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 0.5rem 1.2rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}
.cta-btn:hover {
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
  .itinerary-list {
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
  }
}
</style>
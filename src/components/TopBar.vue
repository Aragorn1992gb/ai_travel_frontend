<template>
  <header class="top-bar">
    <div class="logo-area">
      <img src="../public/logo2.svg" alt="Alter Logo" class="logo" />
      <!-- <span class="brand">AIter</span> -->
    </div>
    <div class="user-area">
      <img src="../public/avatar.png" alt="User" class="avatar" />
    </div>
  </header>
</template>

<script setup lang="ts">
// No logic needed for now
</script>

<style scoped>
.top-bar {
  width: 100%;
  height: 52px;
  /* height: 100px; */
  background: #005266;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;
  padding: 0 2rem;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
}
.logo-area {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.logo {
  height: 40px;
}
.brand {
  color: #fff;
  font-size: 2rem;
  font-weight: 700;
  font-family: 'Inter', sans-serif;
  letter-spacing: 1px;
}
.user-area {
  display: flex;
  align-items: center;
}
.avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #fff;
}
</style>
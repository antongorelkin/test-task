<template>
  <v-container fluid>
    <div id="app">
      <router-view />
    </div>
  </v-container>
</template>

<script>
// import MainPage from './pages/MainPage';



export default {
  name: 'App',
};
</script>

<style>
#app {
  width: 100%;
  max-width: 1920px;
}

.dark {
  background-color: #56698f;
}
</style>
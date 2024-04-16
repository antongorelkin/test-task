<template>
  <v-app>
    <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    <v-navigation-drawer v-model="drawer" absolute left temporary width="665">
      <ListNav />
    </v-navigation-drawer>
  </v-app>
</template>

<script>
import ListNav from '@/components/ListNav';
export default
  {
    data() {
      return {
        drawer: false,
        group: null,
      }
    },

    watch: {
      group() {
        this.drawer = false
      },
    },
    components: {
      ListNav,
    }
  }

</script>

<style>
.v-overlay__scrim {
  background-color: transparent !important
}

.theme--light.v-application {
  background: none;
}
</style>
<template>
  <button class="btn" v-on:click="toggleTheme">
    <v-switch>

    </v-switch>
  </button>
</template>

<script>
export default {
  name: 'BtnThemes',
  data() {
    return {
      currentTheme: 'light', // Начальная тема (может быть 'dark' или другой)
      availableThemes: ['light', 'dark'], // Список доступных тем
    };
  },
  methods: {
    toggleTheme() {
      // Переключение текущей темы
      this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';


      const containerApp = document.querySelector('#app');
      containerApp.classList = (this.currentTheme);
      const containerMenu = document.querySelector('#containerMenu');
      containerMenu.classList = (this.currentTheme);
    },
  },
}
</script>

<style>
/* Здесь определите стили для светлой и темной темы */
/* Например: */
.theme--light.v-input--switch .v-input--switch__track {
  background-color: #FFFFFF;
}

.dark {
  background-color: #56698f;
}

.v-input--switch__thumb {
  background-image: none;
  background-image: url('/Theme.svg');
  background-repeat: no-repeat;
  min-width: 79px;
  height: 79px;
  background-position: center center;
  border-radius: 0;
  border: none;
  top: -28px;
  left: -28px;
}

.btn {
  width: 80px;
  height: 80px
}

.v-input--selection-controls__ripple {
  display: none;
}

.v-input--selection-controls__input input[role=checkbox],
.v-input--selection-controls__input input[role=radio],
.v-input--selection-controls__input input[role=switch] {
  width: 60px;
}

.v-input--switch__track {
  width: 60px;
}

.v-application--is-ltr .v-input--switch.v-input--is-dirty .v-input--selection-controls__ripple,
.v-application--is-ltr .v-input--switch.v-input--is-dirty .v-input--switch__thumb {
  transform: translate(40px, 0);
}

.v-input--switch:not(.v-input--switch--flat):not(.v-input--switch--inset) .v-input--switch__thumb {
  box-shadow: none;
}

.v-input--switch__thumb.theme--light {
  width: 79px
}

.theme--light.v-input--switch .v-input--switch__thumb {
  color: inherit;
  background-color: transparent
}
</style>
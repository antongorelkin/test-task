<template>
  <div id='containerMenu' v-bind:style="{ width: 665 }">
    <header class="header">
      <div class="container-time">
        <span class="time">
          {{ formatedDate() }}
        </span>
        <span class="time">
          {{ currentTime }}
        </span>
      </div>
      <div class="exit">
        <router-link to="/exit">
          <h2 class="exit-title">
            Выход
            <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11.4444 47H42.5556C45.0067 47 47 45.0067 47 42.5556V33.6667H42.5556V42.5556H11.4444V11.4444H42.5556V20.3333H47V11.4444C47 8.99333 45.0067 7 42.5556 7H11.4444C8.99333 7 7 8.99333 7 11.4444V42.5556C7 45.0067 8.99555 47 11.4444 47Z"
                fill="#E6E6E6" />
              <path d="M29.1538 18L18 27L29.1538 36V29.2477H47V24.7477H29.1538V18Z" fill="#E6E6E6" />
            </svg>
          </h2>
        </router-link>
      </div>
    </header>
    <div class="btn-container">
      <Btn v-on:click="toggleTheme" />
    </div>
    <WorkerInfo />
    <div v-bind:style="{ width: 300 }">
      <StatisticList />
    </div>
  </div>

</template>

<script>
import WorkerInfo from '@/components/WorkerInfo';
import StatisticList from './Statistic/StatisticList';
import Btn from './Btn';
export default {
  data() {
    return {
      currentTime: ''
    };
  },
  created() {
    this.updateTime();
    setInterval(this.updateTime, 1000)
  },
  methods: {
    formatedDate: () => {
      const currentDate = new Date()
      return `${currentDate.getDate()}.${currentDate.getMonth() + 1}.${currentDate.getFullYear()}`;
    },
    updateTime() {
      const now = new Date();
      this.currentTime = now.toLocaleTimeString();
    },
    toggleTheme: function () {
      console.log('press')
    }
  },
  components: {
    WorkerInfo,
    StatisticList,
    Btn
  }
}
</script>

<style>
#containerMenu {
  height: 100%;
  padding: 20px 20px;
  overflow: auto;
}

.dark {
  background-color: #353D54;
}

.time {
  font-weight: 700;
  font-size: 20px;
  color: #f2f2f2;
}

.container-time {
  display: flex;
  flex-direction: column;
}

.header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 70px;
}

.exit-title {
  display: flex;
  align-items: center;
  color: #e6e6e6;
}

.exit-title svg {
  margin-left: 10px;
}

.exit a {
  text-decoration: none;
}

.btn-container {
  display: flex;
  justify-content: end;
  margin: 20px;
}
</style>
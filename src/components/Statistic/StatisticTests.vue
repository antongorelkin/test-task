<template>
  <div id="item">
    <div class="statistic-wrap">
      <div class="circle circle--static">
        <StatisticDiagram class-circle-front="green" :data-dasharray="[tests.done, tests.total]" radius="51%" />
        <span>
          {{ tests.done }}
        </span>
      </div>
      <br />
    </div>
  </div>
</template>

<script>
import StatisticDiagram from "../Diagramm/StatisticDiagramm";
// import InstructionsSvg from '/src/img/Istructions.svg';

export default {
  name: "App",
  components: {
    StatisticDiagram,
    // InstructionsSvg
  },
  data() {
    return {
      timer: {
        descriptor: undefined,
        minutes: 2,
        seconds: 0,
        total: 120000,
      },
      tests: {
        done: 0,
        total: 500,
      },
    };
  },
  computed: {
    time() {
      return `${this.timer.minutes}:${this.timer.seconds < 10 ? "0" + this.timer.seconds : this.timer.seconds
        }`;
    },
    timePassed() {
      const minutesInSeconds =
        this.timer.minutes !== 0 ? this.timer.minutes * 60 : 1;
      const passed =
        this.timer.total -
        (minutesInSeconds * 1000 + this.timer.seconds * 1000);
      return this.timer.total - passed;
    },
  },
  mounted() {
    setTimeout(() => {
      this.tests.done = 122;
    }, 100);
    this.timer.descriptor = window.setInterval(this.runTimer, 1000);
  },
  methods: {
    runTimer() {
      if (this.timer.seconds === 0 && this.timer.minutes === 0) {
        window.clearInterval(this.timer.descriptor);
        this.timer.descriptor = undefined;
        this.timerLost = true;
        return;
      }

      if (this.timer.seconds === 0) {
        this.timer.seconds = 59;
        this.timer.minutes--;
      } else {
        this.timer.seconds--;
      }
    },
  },
};
</script>

<style lang="scss">
#instructions {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #cac;
  margin-top: 20px;
  position: relative;
  background: #2c3e50;
  padding: 10px 0;
}

.statistic-wrap {
  display: flex;
  justify-content: space-between;
}

.circle {
  position: relative;
  width: 180px;
  height: 180px;
  margin: 0 auto;
  border-radius: 50%;
  color: #fff;

  &--static {
    display: inline-block;
    margin: 0;
    width: 140px;
    height: 140px;
    position: relative;
    left: 0;

    span {
      font-size: 16px !important;
      font-weight: normal !important;
      /* z-index: -1; */
    }

    circle {
      /* stroke-width: 100% !important; */
      stroke-width: 3px !important;
      /* transform: rotateZ(90deg) rotateY(-180deg) scale(0.5) !important; */
      transform: rotateZ(90deg) rotateY(-180deg) !important;
      transition-duration: 1.5s !important;
      z-index: 2;
    }
  }

  span {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 1;
    color: #fff;
    font-weight: bold;
    font-size: 24px;
    line-height: 25px;
  }

  .yellow {
    stroke: #ced105 !important;
  }

  .green {
    stroke: #00a323 !important;
  }

  .blue {
    stroke: #1d99ff !important;
  }

  .red {
    stroke: #920000 !important;
  }
}
</style>

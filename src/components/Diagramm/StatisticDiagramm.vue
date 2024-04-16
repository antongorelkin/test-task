<template>
  <svg class="diagram" viewBox="0 0 42 42">
    <circle :class="classCircleBack" :r="radius" cx="50%" cy="50%" />
    <circle ref="mainDiagram" class="front" :class="classCircleFront" :stroke-dasharray="dasharray"
      :stroke-dashoffset="dashoffset" :r="radius" cx="50%" cy="50%" />
    <circle v-if="satellite" class="satellite" r="1" cx="101%" cy="50%" :style="rotate" />
  </svg>
</template>

<script>
export default {
  name: "StatisticDiagram",
  props: {
   
    dataDasharray: {
      type: Array,
      required: true,
    },
    
    radius: {
      type: String,
      default: "18",
    },
   
    classCircleBack: {
      type: String,
      default: "",
    },
    
    classCircleFront: {
      type: String,
      default: "",
    },
   
    satellite: {
      type: Boolean,
      default: false,
    },
   
    isTimer: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      dasharray: "0 100", 
      dashoffset: "0", 
      radiusBaseVal: 0, 
      circumference: 0, 
    };
  },

 
  computed: {
    rotate() {
    
      return `transform: rotate(${this.degRotate}deg);`;
    },
    degRotate() {
      
      const percent = Number(
        ((this.dataDasharray[0] * 100) / this.dataDasharray[1]).toFixed(1)
      );
      return (-360 * (percent / 100) - 90).toFixed(1);
    },
  },
  mounted() {
    this.radiusBaseVal = this.$refs.mainDiagram.r.baseVal.value;
    this.circumference = 2 * Math.PI * this.radiusBaseVal;
  },
  watch: {
    dataDasharray: {
      handler() {
        
        const percent = (
          (this.dataDasharray[0] * 100) /
          this.dataDasharray[1]
        ).toFixed(1);
        
        this.setLengthDasharray(percent, this.circumference);
      },
      deep: true, 
      immediate: true,
    },
  },
  methods: {
    setLengthDasharray(percent, circumference) {
      const offset = circumference - (percent / 100) * circumference;
      this.dasharray = `${offset} ${circumference}`;
      this.dashoffset = this.isTimer ? 0 : circumference.toFixed(3);
    },
  },
};
</script>
<style lang="scss" scoped>
.diagram {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  overflow: visible;
}

circle {
  fill: transparent;
  stroke: rgb(255, 255, 255);
  stroke-width: 0.8px;
  transform-origin: center;
  transform: rotate(-90deg);
  transition: stroke-dasharray 1s ease;
  z-index: 10;

  &.front {
    stroke: rgb(255, 255, 255);
  }
}

.satellite {
  fill: #fff;
  will-change: transform;
  stroke-width: 0.4px;
  transition: transform 1s ease;
}
</style>

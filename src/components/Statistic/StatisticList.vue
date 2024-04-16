<template>
  <v-list height="540">
    <v-list-item>
      <StatisticInstructions />
    </v-list-item>
    <v-list-item>
      <StatisticExamenation />
    </v-list-item>
    <v-list-item>
      <StatisticTests />
    </v-list-item>
    <v-list-item>
      <StatisticAttestation />
    </v-list-item>
  </v-list>
</template>

<script>
import StatisticTests from "./StatisticTests";
import StatisticInstructions from "./StatisticInstructions";
import StatisticExamenation from "./StatisticExamenation";
import StatisticAttestation from "./StatisticAttestation";
export default {
  components: {
    StatisticTests,
    StatisticInstructions,
    StatisticExamenation,
    StatisticAttestation
  }
}
</script>

<style>
#item {
  background-color: #56698f;
  width: 280px;
  height: 260px;
  display: flex;
  align-items: center;

}

.v-list-item {
  flex-basis: 50%;
  max-width: 280px;
  background-color: linear-gradient(180deg, #56698f 0%, #5e729a 100%);
}

.v-list {
  background-color: transparent;
  display: flex;
  flex-wrap: wrap;
}
</style>
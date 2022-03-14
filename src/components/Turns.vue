<template>
  <div class="scores">
    <span :class="{ active: sign == xSign && !this.finished }"> X Turn</span>
    <span :class="{ active: sign == oSign && !this.finished}"> O Turn </span>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import '../assets/css/turns.css'

export default {
  name: "turns-component",
  computed: { ...mapGetters(["xSign", "oSign", "sign","finished"]) },
};
</script>

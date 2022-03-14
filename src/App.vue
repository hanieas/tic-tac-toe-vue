<template>
  <Message />
  <Turns />
  <Board />
</template>

<script>
import Message from "./components/Message.vue";
import Turns from "./components/Turns.vue";
import Board from "./components/Board.vue";
import "../src/assets/css/global.css";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    Message,
    Turns,
    Board,
  },
  watch: {
    cells: {
      handler(val) {
        const signedXValues = val.filter((v) => v.sign === this.xSign);
        const signedXOrders = signedXValues.map((s) => s.order);
        const signedOValues = val.filter((v) => v.sign === this.oSign);
        const signedOOrders = signedOValues.map((s) => s.order);
        if (this.winnerControl(signedXOrders)) {
          this.setMessage("The X wins");
          this.setMessageStatus('success');
          this.setFinish(true)
        } else if (this.winnerControl(signedOOrders)) {
          this.setMessage("The O wins");
          this.setMessageStatus('success')
          this.setFinish(true)
        } else {
          if (val.length >= 9) {
          this.setMessage('NoBody Wins')
          this.setMessageStatus('info')
          this.setFinish(true)
          }
        }
      },
      deep: true,
    },
  },
  computed: {
    ...mapGetters(["cells", "xSign", "oSign", "winningOrders"]),
  },
  methods: {
    ...mapActions(["setSign", "setMessage", "setMessageStatus","setFinish"]),
    winnerControl(orders) {
      return this.winningOrders.some((w) => {
        const result = w.every((value) => orders.includes(value));
        return result;
      });
    },
  },
};
</script>

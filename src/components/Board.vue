<template>
  <div class="board">
    <div
      v-for="order in [...Array(9).keys()]"
      :key="order"
      class="cell"
      @click="cellClicked(order)"
    >
      <span>
        {{ getCellSign(order) }}
      </span>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "boards-component",
  computed: {
    ...mapGetters([
      "xSign",
      "oSign",
      "finished",
      "cells",
      "started",
      "sign",
      "cells",
    ]),
  },
  methods: {
    ...mapActions(["addCell", "setSign"]),
    cellClicked(order) {
      if(!this.finished){
        this.addCell({ order: order, sign: this.sign });
        this.setSign(this.sign === this.xSign ? this.oSign : this.xSign);
      }
    },
    getCellSign(order) {
      const cell = this.cells.find((cell) => cell.order === order);
      if (cell) {
        return cell.sign;
      } else {
        return "";
      }
    },
  },
};
</script>
<style>
.board {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 420px;
  height: 420px;
  margin: 25px auto;
}

.cell {
  position: relative;
  width: 140px;
  height: 140px;
  outline: 1px solid whitesmoke;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 100px;
  color: rgb(19, 18, 18);
}

.cell-number {
  position: absolute;
  width: 100%;
  height: 100%;
}
.cell span:empty + .cell-number:after {
  display: flex;
  justify-content: center;
  content: attr(data-number);
  color: rgba(255, 255, 255, 0.05);
}
.cell-number {
  position: absolute;
  width: 100%;
  height: 100%;
}
.cell span:empty + .cell-number:after {
  display: flex;
  justify-content: center;
  content: attr(data-number);
  color: rgba(255, 255, 255, 0.05);
}
</style>

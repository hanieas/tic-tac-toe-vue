export default {
  state() {
    return {
      cells: [],
      finished: false,
      message: "",
      messageStatus: "danger",
      sign: "x",
      oSign: "o",
      xSign: "x",
      winningOrders: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 4, 8],
        [2, 4, 6],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
      ],
    };
  },
  getters: {
    message: (state) => state.message,
    messageStatus: (state) => state.messageStatus,
    xSign: (state) => state.xSign,
    oSign: (state) => state.oSign,
    sign: (state) => state.sign,
    finished: (state) => state.finished,
    cells: (state) => state.cells,
    winningOrders: (state) => state.winningOrders,
  },
  mutations: {
    addCell(state, cell) {
      state.cells.push(cell);
    },
    setFinish(state) {
      state.finished = true;
    },
    setMessage(state, payload) {
      state.message = payload;
    },
    setMessageStatus(state, payload) {
      state.messageStatus = payload;
    },
    setSign(state, payload) {
      state.sign = payload;
    },
    setWinnerOrder(state, payload) {
      state.winningOrder = payload;
    },
  },
  actions: {
    addCell(context, payload) {
      context.commit("addCell", payload);
    },
    setFinish(context, payload) {
      context.commit("setFinish", payload);
    },
    setMessage(context, payload) {
      context.commit("setMessage", payload);
    },
    setMessageStatus(context, payload) {
      context.commit("setMessageStatus", payload);
    },
    setSign(context, payload) {
      context.commit("setSign", payload);
    },
    setWinningOrder(context, payload) {
      context.commit("setWinningOrder", payload);
    },
  },
};

<template>
  <div
    v-if="message"
    class="message"
    :class="{
      'bg-danger': (messageStatus == 'danger'),
      'bg-success': (messageStatus == 'success'),
      'bg-info' : (messageStatus == 'info'),
    }"
  >
    {{ message }}
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import "../assets/css/message.css";
export default {
  name: "message-component",
  computed: {
    ...mapGetters(["message", "messageStatus"]),
  },
};
</script>

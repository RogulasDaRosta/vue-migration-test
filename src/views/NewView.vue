<template>
  <div class="container">
    <h1>This page contains the NEW content</h1>
    <NewButton @click="increment">Increase</NewButton>
    <NewButton @click="decrease">Decrease</NewButton>
    {{ counter }}
    <NewInput v-model="inputValue" />
    {{ inputValue }}
  </div>
</template>

<script setup>
import { ref } from "vue";
import NewButton from "@/components/New/NewButton.vue";
import NewInput from "@/components/New/NewInput.vue";

defineOptions({
  compatConfig: {
    INSTANCE_LISTENERS: false,
    COMPONENT_V_MODEL: false,
  },
});
const counter = ref(0);
const inputValue = ref("");

const increment = (event) => {
  console.log("incrementing", event);
  counter.value++;
};
const decrease = (event) => {
  console.log("decreasing", event);
  counter.value--;
};
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > * {
    max-width: 300px;
    margin-bottom: 20px;
  }
}
</style>

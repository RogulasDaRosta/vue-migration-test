<template>
  <div class="about">
    <h1>This page contains the OLD content</h1>
    <OldInput v-model="query" @input="onInput" />
    {{ query }}
  </div>
</template>
<script>
import OldInput from "@/components/Old/OldInput.vue";
import { configureCompat } from "vue";

configureCompat({
  INSTANCE_LISTENERS: true,
  COMPONENT_V_MODEL: true,
  RENDER_FUNCTION: true,
});

export default {
  name: "OldView",
  components: {
    OldInput,
  },
  data() {
    return {
      query: "",
    };
  },
  methods: {
    onInput(query) {
      console.log("onInput", query);
    },
  },
};
</script>

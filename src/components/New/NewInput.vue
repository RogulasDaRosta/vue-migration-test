<template>
  <div class="new-input">
    <input
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: "new-input",
  props: {
    modelValue: {
      type: String,
    },
  },
};
</script>

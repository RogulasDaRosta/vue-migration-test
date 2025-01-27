<template>
  <div class="old-input">
    <input :value="value" @input="$emit('input', $event.target.value)" />
  </div>
</template>

<script>
export default {
  name: "old-input",
  props: {
    value: {
      type: String,
    },
  },
};
</script>

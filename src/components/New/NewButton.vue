<template>
  <button
    :type="type"
    :class="classList"
    :id="id"
    :disabled="disabled || isLoading"
    :tabindex="tabindex"
    :aria-label="ariaLabel"
    @mouseenter="isHoveredOn = true"
    @mouseleave="isHoveredOn = false"
  >
    <slot />
  </button>
</template>

<script setup>
import { ref, computed, defineProps, defineEmits } from "vue";

const props = defineProps({
  type: {
    type: String,
    default: "button",
    validator: function (type) {
      return ["submit", "button", "reset"].includes(type);
    },
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  tabindex: {
    type: String,
    default: "0",
  },
  secondary: {
    type: Boolean,
  },
  tertiary: {
    type: Boolean,
  },
  isLoading: {
    type: Boolean,
    default: false,
  },
  ariaLabel: {
    type: String,
    default: "",
  },
  srLoadingMessage: {
    type: String,
    default: "",
  },
  fullWidth: {
    type: Boolean,
    default: false,
  },
  small: {
    type: Boolean,
    default: false,
  },
  id: {
    type: String,
  },
  rectangular: {
    type: Boolean,
  },
});

const buttonType = props.tertiary
  ? "tertiary"
  : props.secondary
  ? "secondary"
  : "primary";

const classList = computed(() => {
  const button = "button";
  return [
    button,
    `${button}--${buttonType}`,
    props.small && `${button}--small`,
    props.rectangular && `${button}--rectangular`,
    props.fullWidth && `${button}--full-width`,
    props.isLoading && `${button}--loading`,
  ];
});

const isHoveredOn = ref(false);
</script>

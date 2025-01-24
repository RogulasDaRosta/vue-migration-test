<template>
  <div class="old-input" :id="rootId">
    <label class="old-input__label" v-if="labelName" :for="id">{{
      labelName
    }}</label>
    <input
      :id="id"
      :type="computedType"
      :value="value"
      :placeholder="placeholder"
      :class="classList"
      :disabled="disabled"
      :tabindex="tabindex"
      :aria-required="required"
      :aria-invalid="invalid"
      :aria-errormessage="id + '-error'"
      :aria-autocomplete="ariaAutocomplete"
      :autocomplete="autocomplete"
      :aria-activedescendant="activedescendant"
      :aria-controls="ariaControls"
      @input="onInput"
      @change="onChange"
      @blur="onBlur"
      @focus="onFocus"
      @click="onClick"
      @keydown.down.prevent="onKeydownDown"
      @keydown.up.prevent="onKeydownUp"
      @keyup.esc="onKeyupEsc"
      @keydown.enter.prevent="onKeydownEnter"
      @keydown.delete="onKeydownDelete"
    />
  </div>
</template>

<script>
import { version } from "vue";
export default {
  name: "old-input",
  data() {
    return {
      localValue: this.value,
      showingPassword: false,
    };
  },
  props: {
    id: {
      type: String,
      default: "",
    },
    required: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: "text",
      validator: function (type) {
        return ["text", "number", "date", "tel", "password"].includes(type);
      },
    },
    placeholder: {
      type: String,
    },
    value: {
      default: null,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    tabindex: {
      type: String,
      default: "0",
    },
    invalid: {
      type: Boolean,
      default: false,
    },
    blur: {
      type: Function,
    },
    focus: {
      type: Function,
    },
    click: {
      type: Function,
    },
    input: {
      type: Function,
    },
    keydownDown: {
      type: Function,
    },
    keydownUp: {
      type: Function,
    },
    keyupEsc: {
      type: Function,
    },
    keydownEnter: {
      type: Function,
    },
    keydownDelete: {
      type: Function,
    },
    autocomplete: {
      type: String,
      default: "off",
    },
    isSearchable: {
      type: Boolean,
      default: false,
    },
    rootId: {
      type: String,
    },
    activedescendant: {
      type: String,
    },
    ariaControls: {
      type: String,
    },
    ariaAutocomplete: {
      type: String,
    },
    labelName: {
      type: String,
    },
  },

  computed: {
    isVue3() {
      return version && parseInt(version) === 3;
    },
    classList() {
      const input = "old-input__input-field";
      return [
        input,
        this.isSearchable && `${input}--is-searchable`,
        this.invalid && `${input}--is-invalid`,
      ];
    },
    computedType() {
      if (this.type === "password") {
        return this.showingPassword ? "text" : "password";
      } else {
        return "text";
      }
    },
  },

  watch: {
    value(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.localValue = newVal;
      }
    },
    localValue(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.$emit("input", newVal);
      }
    },
  },

  methods: {
    onInput(evt) {
      this.localValue = evt.target.value;
      if (this.input) this.input();
    },
    onChange(evt) {
      this.localValue = evt.target.value;
      if (!this.isVue3) this.$emit("change", this.localValue);
    },
    onBlur() {
      if (this.blur) this.blur();
    },
    onFocus() {
      if (this.focus) this.focus();
    },
    onClick() {
      if (this.click) this.click();
    },
    onKeydownDown() {
      this.$emit("keydownDown");
      //if (this.keydownDown) this.keydownDown();
    },
    onKeydownUp() {
      this.$emit("keydownUp");
      //if (this.keydownUp) this.keydownUp();
    },
    onKeyupEsc(event) {
      if (this.keyupEsc) {
        event.stopPropagation();
        this.keyupEsc();
      }
    },
    onKeydownDelete() {
      if (this.keydownDelete) this.keydownDelete();
    },
    onKeydownEnter() {
      if (this.keydownEnter) this.keydownEnter();
    },
  },
};
</script>

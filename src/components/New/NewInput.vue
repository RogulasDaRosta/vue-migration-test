<template>
  <div class="new-input" :id="rootId">
    <label class="new-input__label" v-if="labelName" :for="id">{{
      labelName
    }}</label>
    <div :class="classList">
      <input
        :id="id"
        :type="computedType"
        :value="modelValue"
        :placeholder="placeholder"
        class="new-input__container__input-field"
        :disabled="disabled"
        :tabindex="tabindex"
        :required="required"
        :aria-required="required"
        :aria-invalid="invalid"
        :aria-errormessage="ariaErrormessage"
        :aria-autocomplete="ariaAutocomplete"
        :autocomplete="autocomplete"
        :aria-activedescendant="ariaActivedescendant"
        :aria-controls="ariaControls"
        :aria-expanded="ariaExpanded"
        :role="role"
        :maxlength="maxLength"
        @blur="onBlur"
        @focus="onFocus"
        @input="$emit('update:modelValue', $event.target.value)"
        @keyup.esc="$emit('update:modelValue', '')"
      />
      <div class="new-input__container__component">
        <slot> </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "new-input",
  data() {
    return {
      localValue: this.value,
      showingPassword: false,
    };
  },
  props: {
    id: {
      type: String,
    },
    required: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: "text",
      validator: function (type) {
        return ["text", "number", "date", "tel", "password", "email"].includes(
          type
        );
      },
    },
    placeholder: {
      type: String,
    },
    modelValue: {
      type: String,
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
    autocomplete: {
      type: String,
      default: "off",
    },
    rootId: {
      type: String,
    },
    ariaActivedescendant: {
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
    ariaExpanded: {
      type: String,
    },
    role: {
      type: String,
    },
    ariaErrormessage: {
      type: String,
    },
    maxLength: {
      type: Number,
    },
  },

  computed: {
    classList() {
      const input = "input__container";
      return [
        input,
        this.invalid && `${input}--is-invalid`,
        this.disabled && `${input}--is-disabled`,
      ];
    },
    computedType() {
      if (this.type === "password") {
        return this.showingPassword ? "text" : "password";
      }
      return this.type;
    },
  },

  methods: {
    onBlur() {
      if (this.blur) this.blur();
    },
    onFocus() {
      if (this.focus) this.focus();
    },
  },
};
</script>

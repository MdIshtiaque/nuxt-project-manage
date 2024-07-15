<template>
  <div v-bind="$attrs">
    <FormLabel :LabelFor="labelFor" :class="labelClass">{{ label }}</FormLabel>
    <div class="mt-2">
      <FormInput v-model="model" :name="name" :type="type" :autocomplete="autocomplete" :required="required"
             :class="inputClass" :placeholder="placeholder" />
    </div>
    <p class="mt-2 text-sm text-red-600" v-if="errorMessage">{{ errorMessage }}</p>
  </div>
</template>

<script setup>
  import FormLabel from "~/components/Form/Label.vue";
  import FormInput from "~/components/Form/Input.vue";

  defineProps({
    label: String,
    labelFor: String,
    name: String,
    type: String,
    required: Boolean,
    placeholder: String,
    autocomplete: String,
    inputClass: String,
    labelClass: String,
    errorMessage: {
      type: String,
      default: '',
    },
  })

  const model = defineModel();
</script>
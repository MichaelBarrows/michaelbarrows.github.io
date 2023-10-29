<script>

export default {
  props: {
    type: {
      type: String
    },
    name: {
      type: String
    },
    placeholder: {
      type: String
    },
    styles: {
      type: String,
      default: ''
    },
  },
  data () {
    return {
      value: '',
    }
  },
  methods: {
    emitValue (value) {
      this.$emit('valueChanged', value)
    },
  }
}
</script>

<template>
  <textarea
    @change="emitValue(value)"
    @keyup.tab="emitValue(value)"
    @keyup.enter="emitValue(value)"
    :class="'w-full rounded-md my-2 border-2 border-pacific-blue-600 text-pacific-blue-600 text-center font-semibold ' + styles"
    :name="name"
    :placeholder="placeholder"
    rows="6"
    v-model="value"
    required
  >
  </textarea>
</template>

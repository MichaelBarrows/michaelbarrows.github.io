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
      default: 'border-pacific-blue-600'
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
  <input
    @change="emitValue(value)"
    @keyup.tab="emitValue(value)"
    @keyup.enter="emitValue(value)"
    :class="'w-full rounded-md my-2 border-2 text-pacific-blue-600 text-center font-semibold ' + styles"
    :type="type"
    :name="name"
    :placeholder="placeholder"
    v-model="value"
    required
  />
</template>

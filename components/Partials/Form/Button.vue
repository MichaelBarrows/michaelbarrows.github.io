<script>
import Input from '@/components/Partials/Form/Input.vue'

export default {
  components: { Input },
  props: {
    type: {
      type: String
    },
    name: {
      type: String
    },
    value: {
      type: String
    },
    styles: {
      type: String,
      default: ''
    },
  },
}
</script>

<template>
  <Input
    :type="type"
    :name="name"
    :placeholder="value"
    :styles="(type === 'submit' ? 'bg-emerald-500 border-emerald-600 text-white py-2' : 'bg-red-500 border-red-700 text-white py-2') + ' font-semibold'"
  />
</template>

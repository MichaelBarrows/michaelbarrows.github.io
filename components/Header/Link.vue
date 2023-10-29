<script>

export default {
  props: {
    url: {
      type: String
    },
    target: {
      type: Function,
      default: () => '_self',
    },
  }
}
</script>

<template>
  <li>
    <a class="text-white font-medium block px-4 py-1 md:p-2 lg:px-4 hover:bg-white hover:text-pacific-blue-600 md:hover:rounded-md" :href="url" :target="target()">
      <slot></slot>
    </a>
  </li>
</template>

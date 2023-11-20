<script>

export default {
  props: [
    'title',
    'show',
    'close',
    'width',
    'position',
  ],
  data () {
    return {
    }
  },
  computed: {

  },
  async mounted () {
    window.addEventListener('keydown', (e) => {
      if (e.key == 'Escape') this.close()
    })
  },
}
</script>

<style scoped>
  .gradient {
    @apply bg-gradient-to-br from-pacific-blue-600 to-pacific-blue-800;
  }
  .text-gradient {
    @apply bg-gradient-to-br from-pacific-blue-500 to-pacific-blue-900 bg-clip-text text-transparent;
  }
  * >>> h2:not(.modal-title) {
    @apply text-2xl text-gradient;
  }
  * >>> p, * >>> ul {
    @apply my-2;
  }
  * >>> ul {
    @apply list-disc list-outside marker:text-pacific-blue-600 ml-4;
  }
  * >>> p > a, * >>> li > a {
    @apply text-pacific-blue-600;
  }
</style>


<template>
  <div :class="(this.show ? '' : 'hidden ') + 'modal-container bg-slate-900 bg-opacity-70 overflow-y-auto h-full w-full z-50 fixed top-0 left-0 flex'">
    <div :class="(this.width || 'md:w-1/2') + ' my-auto modal mx-auto text-center bg-white rounded-lg w-11/12 ' + (this.position || 'relative')">
      <div class="rounded-t-lg bg-gradient-to-br from-pacific-blue-600 to-pacific-blue-800 text-white shadow-md pb-3">
        <h2 class="modal-title text-2xl pt-3 text-xl md:text-2xl">{{ title }}</h2>
        <span class="absolute right-0 top-3">
          <a @click.prevent="close" href="#" class="text-2xl p-5">
            <FontAwesomeIcon class="text-xl" :icon="['fas', 'xmark']" />
          </a>
        </span>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

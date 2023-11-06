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

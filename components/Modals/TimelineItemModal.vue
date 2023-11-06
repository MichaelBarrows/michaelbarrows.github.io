<script>
import BaseModal from '@/components/BaseModal.vue'


export default {
  components: { BaseModal },
  props: ['item'],
  data() {
    return {
      title: '',
      company: '',
      start_date: '',
      end_date: '',
      duration: {
        years: 0,
        months: 0,
      },
      description: '',
      tech_stack: []
    }
  },
  computed: {
    displayModal () {
      return this.$store.state.timelineModal.display
    }
  },
  methods: {
    closeModal () {
      this.$store.commit('timelineModal/hide');
    },
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
  * >>> h2 {
    @apply text-2xl text-gradient;
  }
  * >>> p {
    @apply my-2;
  }
  * >>> ul {
    @apply list-disc list-outside marker:text-pacific-blue-600 ml-4;
  }
  * >>> p > a {
    @apply text-pacific-blue-600;
  }
</style>

<template>
  <BaseModal :title="item.title + ' @ ' +  item.company" :show="displayModal" :close="closeModal" width="md:max-w-5xl">
    <div @submit.prevent="submit" class="p-5 text-left grid md:grid-cols-3">
      <div class="border-b mb-2 md:mb-0 md:border-r md:border-b-0 border-pacific-blue-600">
        <h1 class="text-3xl text-gradient pb-2">{{ item.title }}</h1>
        <h2 class="text-2xl text-gradient pb-2">{{ item.company }}</h2>
        <p class="pb-2">{{ item.start_date }} - {{ item.end_date }}</p>
        <div class="mt-2 pb-2" v-if="item.tech_stack">
          <span class="gradient text-white rounded-md p-2 mr-2 mb-2 inline-block text-xs" v-for="tech in item.tech_stack" :key="tech.id">
            {{ tech.name }}
          </span>
        </div>
      </div>
      <div class="md:col-span-2 md:ml-2 md:mt-2" v-html="item.description"></div>
    </div>
  </BaseModal>
</template>

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
      tech_stack: [],
      properties: {
        image: null,
      },
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

<template>
  <BaseModal :title="item.title + ' @ ' +  item.company" :show="displayModal" :close="closeModal" width="md:max-w-5xl">
    <div @submit.prevent="submit" class="p-3 text-left grid md:grid-cols-3">
      <div class="md:border-r md:border-b-0 border-pacific-blue-600">
        <div class="mb-2 md:mb-0 mr-2">
          <img v-if="item.properties?.image" :src="item.properties?.image" class="max-w-[50%] mx-auto">
          <h1 class="text-3xl text-gradient pb-2 text-center">{{ item.title }}</h1>
          <h2 class="text-xl text-gradient pb-2 text-center">{{ item.company }}</h2>
          <p class="pb-2 text-center">{{ item.start_date }} - {{ item.end_date }}</p>
          <div class="mt-2 pb-2 text-center" v-if="item.tech_stack">
            <span class="gradient text-white rounded-md p-2 mr-2 mb-2 inline-block text-xs" v-for="tech in item.tech_stack" :key="tech.id">
              {{ tech.name }}
            </span>
          </div>
        </div>
      </div>
      <div class="md:col-span-2 md:ml-2 md:mt-2" v-html="item.description"></div>
    </div>
  </BaseModal>
</template>

<script>
import BaseModal from '@/components/BaseModal.vue'


export default {
  components: { BaseModal },
  props: ['project'],
  computed: {
    displayModal () {
      return this.$store.state.projectModal.display
    }
  },
  methods: {
    closeModal () {
      this.$store.commit('projectModal/hide');
    },
  },
}

</script>

<template>
  <BaseModal :title="project.title" :show="displayModal" :close="closeModal" width="md:max-w-5xl">
    <div @submit.prevent="submit" class="p-5 text-left grid md:grid-cols-3">
      <div class="border-b mb-2 md:mb-0 md:border-r md:border-b-0 border-pacific-blue-600">
        <div class="aspect-square w-[50%] mx-auto text-center border border-white rounded-md gradient">
          <div class="relative top-[50%] -translate-y-2/4">
            <FontAwesomeIcon class="text-6xl text-white" :icon="['fas', project.icon ?? 'code']" />
          </div>
        </div>
        <h1 class="text-3xl text-gradient py-2 text-center">{{ project.title }}</h1>
        <div class="mt-2 pb-2 text-center" v-if="project.techStack">
          <span class="gradient text-white rounded-md p-2 mr-2 mb-2 inline-block text-xs" v-for="tech in project.techStack" :key="tech.id">
            {{ tech.name }}
          </span>
        </div>
        <!-- links -->
        <div v-for="link in project.links" :key="link.id" class="md:mr-4">
          <a v-bind:href="link.link" target="_blank" class="w-full text-pacific-blue-600 gradient p-1 block my-4">
            <span class="bg-white block text-md font-semibold p-2 text-center relative">
              <span class="text-center">{{ link.text }}</span>
              <FontAwesomeIcon class="text-xl text-pacific-blue-600 absolute left-2 top-[50%] -translate-y-2/4" :icon="link.icon" />
          </span>

          </a>
        </div>
      </div>
      <div class="md:col-span-2 md:ml-2 md:mt-2" v-html="project.description"></div>
    </div>
  </BaseModal>
</template>

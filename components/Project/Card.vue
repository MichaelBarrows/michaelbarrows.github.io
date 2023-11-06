<script>

export default {
  props: {
    project: {
      type: Object
    },
    clickAction: {
      type: Function
    }
  },
  methods: {
    handleClick (e) {
      const data = {
        title: this.project.name,
        icon: this.project.fa_icon_logo,
        techStack: this.project.tech_stack,
        slug: this.project.pretty_url,
        description: this.project.description,
        links: this.project.links,
      }
      this.clickAction(data)
    }
  },
}
</script>

<template>
  <div class="p-2 gradient p-4 rounded-md text-white shadow-lg" @click.prevent="handleClick()">
    <div class="grid md:grid-cols-4">
      <div class="aspect-square w-[25%] md:w-full mx-auto text-center border border-white rounded-md">
        <div class="relative top-[50%] -translate-y-2/4">
          <FontAwesomeIcon class="text-4xl" :icon="['fas', project.fa_icon_logo ?? 'code']" />
        </div>
      </div>
      <div class="md:col-span-3 text-center sm:text-left mt-2 md:mt-0">
        <p class="text-lg mx-2 text-ellipsis whitespace-nowrap overflow-hidden" :title="project.name">{{ project.name }}</p>
        <div class="m-2" v-if="project.tech_stack">
          <span class="border border-white text-white rounded-md p-1 mr-1 mb-1 inline-block text-xs" v-for="tech in project.tech_stack" :key="tech.id">
            {{ tech.is_long ? tech.short_name : tech.name }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

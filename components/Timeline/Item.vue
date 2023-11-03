<script>

export default {
  props: {
    organisation: {
      type: String
    },
    position: {
      type: String
    },
    type: {
      type: String,
      default: 'edu'
    },
    startDate: {
      type: String
    },
    endDate: {
      type: String
    },
    techStack: {
      type: Array,
      default: () => []
    },
    description: {
      type: String
    },
    clickAction: {
      type: Function
    }
  },
  methods: {
    handleClick (e) {
      const data = {
        title: this.position,
        company: this.organisation,
        start_date: this.startDate,
        end_date: this.endDate,
        tech_stack: this.techStack,
        description: this.description,
      }
      this.clickAction(data)
    }
  },
}
</script>

<template>
  <div class="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
    <div :class="(endDate == 'Present' ? 'bg-emerald-500' : 'gradient') + ' flex items-center justify-center w-10 h-10 rounded-full border border-white text-white shadow-xl shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2'">
      <FontAwesomeIcon class="text-xl" :icon="['fas', (type == 'edu' ? 'mortar-board' : 'building')]" />
    </div>
    <div :class="'w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border-2 shadow-xl cursor-pointer m-1 md:m-0 ' + (endDate == 'Present'  ? 'border-emerald-500' : 'border-pacific-blue-600')" @click.prevent="handleClick()">
      <div class="flex items-center justify-between space-x-2 mb-1">
        <div class="font-bold text-slate-900">{{ position }}</div>
        <p class="block md:hidden text-pacific-blue-700">{{ startDate }}</p>
      </div>
      <div class="text-pacific-blue-600 font-medium">{{ organisation }}</div>
      <div class="mt-2" v-if="techStack">
        <span class="gradient text-white rounded-md p-2 mr-2 mb-2 inline-block text-xs" v-for="tech in techStack" :key="tech.id">
          {{ tech.name }}
        </span>
      </div>
    </div>
    <div class="hidden md:block absolute md:group-odd:right-[54%] md:group-even:left-[54%] text-pacific-blue-700 font-semi-bold text-xl">
      {{ startDate }}
    </div>
  </div>
</template>

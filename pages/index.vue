<script>
import {
  getEmployment,
  getEducation,
  getProjects,
  getOpenToOpportunities
} from '@/api/portfolio'
import TimelineItemModal from '@/components/Modals/TimelineItemModal.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Item from '@/components/Timeline/Item.vue'
import Card from '@/components/Project/Card.vue'
import ProjectModal from '@/components/Modals/ProjectModal.vue'
import Form from '@/components/Contact/Form.vue'

export default {
  head() {
    return {
      script: [
        { src: "https://currentlyplaying.co/assets/widget.min.js" }
      ],
    }
  },
  components: { TimelineItemModal, FontAwesomeIcon, Item, Card, ProjectModal, Form },
  name: 'PortfolioPage',
  layout: 'auth',
  data () {
    return {
      employments: {},
      educations: {},
      projects: {},
      currentlySelectedTimelineItem: {
        duration: {}
      },
      currentlySelectedProject: {},
      openToOpportunities: false,
    }
  },
  computed: {
  },
  async mounted () {
    while (!this.$store) {
      // do nothing untill we can
    }

    const openToOpportunities = await getOpenToOpportunities();
    this.openToOpportunities = openToOpportunities?.data['open-to-opportunities'];

    const employmentRequest = await getEmployment();

    if (employmentRequest && employmentRequest.status) {
      this.employments = employmentRequest.data.data
    }

    const educationRequest = await getEducation();

    if (educationRequest && educationRequest.status) {
      this.educations = educationRequest.data.data
    }

    const projectRequest = await getProjects()
    if (projectRequest && projectRequest.status) {
      this.projects = projectRequest.data.data
    }
  },
  methods: {
    showTimelineItemModal (data) {
      this.currentlySelectedTimelineItem = data
      this.$store.commit('timelineModal/show')
    },
    showProjectModal (data) {
      this.currentlySelectedProject = data
      this.$store.commit('projectModal/show')
    },
  }
}
</script>

<style>
@keyframes chevron_bounce {
  0% {
    bottom: 5vh;
  }
  40% {
    bottom: 5vh;
  }
  60% {
    bottom: 20px;
  }
  100% {
    bottom: 5vh;
  }
}
@-webkit-keyframes chevron_bounce {
  0% {
    bottom: 5vh;
  }
  40% {
    bottom: 5vh;
  }
  60% {
    bottom: 20px;
  }
  100% {
    bottom: 5vh;
  }
}
.chevron a {
  bottom: 5vh;
  left: 50%;
  transform: translate(-50%);
  position: absolute;
  -webkit-animation: chevron_bounce 2s infinite;
  animation: chevron_bounce 2s infinite;
  transition: color 500ms;
}
</style>

<template>
  <div>
    <div class="md:min-h-[100vh] md:flex md:items-center md:place-content-center">
      <div>
        <h1 class="max-w-[95%] md:max-w-8xl text-center text-4xl md:text-6xl font-semibold text-gradient mt-16 md:mt-8 mb-16 2xl:mb-24 mx-auto">Hi, I'm Michael, a Software Engineer <br />in Colchester, Essex!</h1>

        <div class="max-w-[95%] md:max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-5 pb-10 md:pb-16 lg:pb-24 2xl:pb-32">
          <div class="lg:col-span-4 md:pb-2">
            <p class="text-center text-xl text-pacific-blue-700 pb-2 font-semibold">Working with</p>
            <div class="bg-gray-100 rounded-md shadow-md p-2 pt-4">
              <div class="grid grid grid-cols-2 bg-gray-100 rounded-md gap-5">
                <div class="text-center">
                  <a href="https://www.php.net/" target="_blank" title="PHP">
                    <FontAwesomeIcon class="text-3xl rounded-full aspect-square p-3 m-2 bg-[#777BB3] to-emerald-800 text-white" :icon="['fab', 'php']" />
                  </a>
                  <p class="text-[#777BB3] text-lg pt-0 font-semibold">PHP</p>
                </div>

                <div class="text-center">
                  <a href="https://laravel.com" target="_blank" title="Laravel">
                    <FontAwesomeIcon class="text-3xl rounded-full aspect-square p-3 m-2 bg-[#F05340] text-white" :icon="['fab', 'laravel']" />
                  </a>
                  <p class="text-[#F05340] text-lg pt-0 font-semibold">Laravel</p>
                </div>
              </div>
            </div>
          </div>

          <div class="lg:col-span-4 lg:col-span-4 md:pb-2">
            <p class="text-center text-xl text-pacific-blue-700 pb-2 font-semibold">Working at</p>
            <div class="text-center bg-gray-100 rounded-md shadow-md p-2 pt-4">
              <a href="https://wonde.com" target="_blank" title="Wonde">
                <FontAwesomeIcon class="text-3xl rounded-full aspect-square p-3 m-2 bg-[#446FF2] to-emerald-800 text-white" :icon="['fas', 'building']" />
              </a>
              <p class="text-[#446FF2] text-lg pt-0 font-semibold">Wonde</p>
            </div>
          </div>

          <div class="lg:col-span-4 md:pb-2">
            <p class="text-center text-xl text-pacific-blue-700 pb-2 font-semibold">Listening to</p>
            <div class="w-full">
              <div id="currently-playing-widget" data-user="michael"></div>
            </div>
          </div>

          <div class="lg:col-span-6 md:pb-2">
            <p class="text-center text-xl text-pacific-blue-700 pb-2 font-semibold">Playing with</p>
            <div class="bg-gray-100 rounded-md shadow-md p-2 pt-4">
              <div class="grid grid-cols-3 md:grid-cols-5 bg-gray-100 rounded-md gap-5">
                <div class="text-center">
                  <a href="https://nativephp.com" target="_blank" title="NativePHP">
                    <img class="max-w-[60px] mx-auto pb-3" src="https://avatars.githubusercontent.com/u/130286900?s=100&v=4">
                  </a>
                  <p class="text-[#111827] text-lg pt-0 font-semibold">NativePHP</p>
                </div>

                <div class="text-center">
                  <a href="https://livewire.laravel.com" target="_blank" title="Livewire">
                    <img class="w-[60px] mx-auto pb-3" src="https://avatars.githubusercontent.com/u/51960834?s=100&v=4">
                  </a>
                  <p class="text-[#EE5D99] text-lg pt-0 font-semibold">Livewire</p>
                </div>

                <div class="text-center">
                  <a href="https://filamentphp.com/" target="_blank" title="Filament">
                    <img class="w-[60px] mx-auto pb-3" src="https://avatars.githubusercontent.com/u/64450473?s=200&v=4">
                  </a>
                  <p class="text-[#FDAE4B] text-lg pt-0 font-semibold">Filament</p>
                </div>

                <div class="text-center">
                  <a href="https://vuejs.org/" target="_blank" title="Vue">
                    <img class="w-[60px] mx-auto pb-3" src="https://avatars.githubusercontent.com/u/6128107?s=200&v=4">
                  </a>
                  <p class="text-[#41b883] text-lg pt-0 font-semibold">Vue</p>
                </div>

                <div class="text-center">
                  <a href="https://developer.spotify.com/" target="_blank" title="Spotify API">
                    <FontAwesomeIcon class="text-3xl rounded-full aspect-square p-3 m-2 bg-[#1DB954] text-white" :icon="['fab', 'spotify']" />
                  </a>
                  <p class="text-[#1DB954] text-lg pt-0 font-semibold">Spotify <span class="lg:hidden xl:inline-block">API</span></p>
                </div>
              </div>
            </div>
          </div>

          <div class="lg:col-span-3 md:pb-2">
            <p class="text-center text-xl text-pacific-blue-700 pb-2 font-semibold">Other Links</p>
            <div class="bg-gray-100 rounded-md shadow-md p-2 pt-4">
              <div class="grid grid-cols-2 bg-gray-100 rounded-md gap-5">
                <div class="text-center">
                  <a href="https://github.com/MichaelBarrows/" target="_blank" title="GitHub/MichaelBarrows">
                    <FontAwesomeIcon class="text-3xl rounded-full aspect-square p-3 m-2 bg-[#171515] text-white" :icon="['fab', 'github']" />
                  </a>
                  <p class="text-[#171515] text-lg pt-0 font-semibold">GitHub</p>
                </div>
                <div class="text-center">
                  <a href="https://www.linkedin.com/in/michaelpbarrows/" target="_blank" title="LinkedIn/MichaelPBarrows">
                    <FontAwesomeIcon class="text-3xl rounded-full aspect-square p-3 m-2 bg-[#0077b5] text-white" :icon="['fab', 'linkedin']" />
                  </a>
                  <p class="text-[#0077b5] text-lg pt-0 font-semibold">LinkedIn</p>
                </div>
              </div>
            </div>
          </div>

          <div class="lg:col-span-3 md:pb-2">
            <p class="text-center text-xl text-pacific-blue-700 pb-2 font-semibold">Exploring opportunities</p>
            <div v-if="openToOpportunities" class="text-center bg-gray-100 rounded-md shadow-md p-2 pt-4">
              <FontAwesomeIcon class="text-3xl rounded-full py-3 px-3 m-2 bg-gradient-to-br from-emerald-400 to-emerald-800 text-white" :icon="['fas', 'circle-check']" />
              <p class="text-emerald-500 text-lg pt-0 font-semibold">Yes, get in touch</p>
            </div>

            <div v-else class="text-center bg-gray-100 rounded-md shadow-md p-2 pt-4">
              <FontAwesomeIcon class="text-3xl rounded-full py-3 px-3 m-2 bg-gradient-to-br from-red-400 to-red-800 text-white" :icon="['fas', 'circle-xmark']" />
              <p class="text-red-500 text-lg pt-0 font-semibold">Not at the moment</p>
            </div>
          </div>
        </div>

        <div class="hidden lg:block chevron mt-2">
          <a href="#about">
            <FontAwesomeIcon class="text-2xl rounded-full py-3 px-3 m-2 gradient text-white" :icon="['fas', 'chevron-down']" />
          </a>
        </div>
      </div>
    </div>

    <div class="max-w-[95%] md:max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 pb-8">
      <h2 id="about" class="text-3xl text-gradient text-center md:col-span-3 font-semibold">About Me</h2>
      <div class="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4 pb-5">
        <div class="border-2 border-pacific-blue-600 rounded-md shadow-lg text-center p-3">
          <FontAwesomeIcon class="aspect-square text-3xl rounded-full py-3 px-3 m-2 gradient text-white" :icon="['fas', 'mortar-board']" />
          <p class="md:text-lg">4 years of Web Development specific education</p>
        </div>
        <div class="border-2 border-pacific-blue-600 rounded-md shadow-lg text-center p-3">
          <FontAwesomeIcon class="aspect-square text-3xl rounded-full py-3 px-3 m-2 gradient text-white" :icon="['fas', 'building']" />
          <p class="md:text-lg">2 years of commercial experience</p>
        </div>
        <div class="border-2 border-pacific-blue-600 rounded-md shadow-lg text-center p-3">
          <FontAwesomeIcon class="aspect-square text-3xl rounded-full py-3 px-3 m-2 gradient text-white" :icon="['fas', 'code']" />
          <p class="md:text-lg">Full-stack, with a back-end focus</p>
        </div>
        <div class="border-2 border-pacific-blue-600 rounded-md shadow-lg text-center p-3">
          <FontAwesomeIcon class="aspect-square text-3xl rounded-full py-3 px-3 m-2 gradient text-white" :icon="['fab', 'php']" />
          <FontAwesomeIcon class="aspect-square text-3xl rounded-full py-3 px-3 m-2 gradient text-white" :icon="['fab', 'laravel']" />
          <p class="md:text-lg">Playing with PHP since 2013, Laravel since 2017</p>
        </div>
        <div class="border-2 border-pacific-blue-600 rounded-md shadow-lg text-center p-3">
          <FontAwesomeIcon class="aspect-square text-3xl rounded-full py-3 px-3 m-2 gradient text-white" :icon="['fas', 'mortar-board']" />
          <FontAwesomeIcon class="aspect-square text-3xl rounded-full py-3 px-3 m-2 gradient text-white" :icon="['fas', 'comments']" />
          <p class="md:text-lg">Published research around machine learning and natural language processing</p>
        </div>
        <div class="border-2 border-pacific-blue-600 rounded-md shadow-lg text-center p-3">
          <FontAwesomeIcon class="aspect-square text-3xl rounded-full py-3 px-3 m-2 gradient text-white" :icon="['fas', 'book']" />
          <p class="md:text-lg">Always trying to learn something new</p>
        </div>
      </div>

      <div class="border-2 border-pacific-blue-600 rounded-md shadow-lg p-2 text-center">
        <h3 class="text-gradient text-2xl text-center mb-2 font-semibold">Back-end Skills</h3>
        <span class="gradient text-white rounded-md p-2 mr-2 mb-2 inline-block text-sm">PHP</span>
        <span class="gradient text-white rounded-md p-2 mr-2 mb-2 inline-block text-sm">Laravel</span>
        <span class="gradient text-white rounded-md p-2 mr-2 mb-2 inline-block text-sm">MySQL</span>
        <span class="gradient text-white rounded-md p-2 mr-2 mb-2 inline-block text-sm">Database Design</span>
        <span class="gradient text-white rounded-md p-2 mr-2 mb-2 inline-block text-sm">Data Normalisation</span>
        <span class="gradient text-white rounded-md p-2 mr-2 mb-2 inline-block text-sm">Creating &amp; Integrating with API's</span>
        <span class="gradient text-white rounded-md p-2 mr-2 mb-2 inline-block text-sm">Python</span>
      </div>

      <div class="border-2 border-pacific-blue-600 rounded-md shadow-lg p-2 text-center">
        <h3 class="text-gradient text-2xl text-center mb-2 font-semibold">Front-end Skills</h3>
        <span class="gradient text-white rounded-md p-2 mr-2 mb-2 inline-block text-sm">JavaScript (vanilla)</span>
        <span class="gradient text-white rounded-md p-2 mr-2 mb-2 inline-block text-sm">Vue</span>
        <span class="gradient text-white rounded-md p-2 mr-2 mb-2 inline-block text-sm">Nuxt</span>
        <span class="gradient text-white rounded-md p-2 mr-2 mb-2 inline-block text-sm">React</span>
        <span class="gradient text-white rounded-md p-2 mr-2 mb-2 inline-block text-sm">Tailwind</span>
        <span class="gradient text-white rounded-md p-2 mr-2 mb-2 inline-block text-sm">Bootstrap</span>
        <span class="gradient text-white rounded-md p-2 mr-2 mb-2 inline-block text-sm">JQuery</span>
      </div>

      <div class="border-2 border-pacific-blue-600 rounded-md shadow-lg p-2 text-center">
        <h3 class="text-gradient text-2xl text-center mb-2 font-semibold">Other Skills</h3>
        <span class="gradient text-white rounded-md p-2 mr-2 mb-2 inline-block text-sm">Test Driven Development</span>
        <span class="gradient text-white rounded-md p-2 mr-2 mb-2 inline-block text-sm">Git</span>
        <span class="gradient text-white rounded-md p-2 mr-2 mb-2 inline-block text-sm">Agile</span>
        <span class="gradient text-white rounded-md p-2 mr-2 mb-2 inline-block text-sm">Machine Learning</span>
        <span class="gradient text-white rounded-md p-2 mr-2 mb-2 inline-block text-sm">Natural Language Processing</span>
        <span class="gradient text-white rounded-md p-2 mr-2 mb-2 inline-block text-sm">Automated Labelling</span>
        <span class="gradient text-white rounded-md p-2 mr-2 mb-2 inline-block text-sm">NLTK</span>
      </div>
    </div>

    <h2 id="experience" class="text-3xl text-gradient text-center font-semibold">My Experience</h2>
    <div class="max-w-[95%] md:max-w-7xl mx-auto mt-5 space-y-2 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-slate-300 mb-8">
      <Item
        v-for="employment in employments" :key="'emp-' + employment.id"
        :organisation="employment.company"
        :position="employment.title"
        type="emp"
        :startDate="employment.start_date"
        :endDate="employment.end_date"
        :techStack="employment.tech_stack"
        :description="employment.description"
        :properties="employment.properties"
        :clickAction="showTimelineItemModal"
      />

      <Item
        v-for="education in educations" :key="'edu-' + education.id"
        :organisation="education.institution_name"
        :position="education.course_name"
        type="edu"
        :startDate="education.start_date"
        :endDate="education.end_date"
        :techStack="education.tech_stack"
        :description="education.description"
        :properties="education.properties"
        :clickAction="showTimelineItemModal"
      />
    </div>

    <TimelineItemModal
      :item="currentlySelectedTimelineItem"
    />

    <div class="max-w-[95%] md:max-w-7xl mx-auto mb-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
      <h2 id="projects" class="md:col-span-2 lg:col-span-3 text-3xl text-gradient text-center font-semibold">Projects</h2>
      <Card
        v-for="project in projects" :key="'proj' + project.id"
        :project="project"
        :clickAction="showProjectModal"
      />
    </div>

    <ProjectModal
      :project="currentlySelectedProject"
    />

    <h2 id="contact" class="md:col-span-2 lg:col-span-3 text-3xl text-gradient text-center font-semibold">Get in Touch</h2>

    <Form></Form>
  </div>
</template>

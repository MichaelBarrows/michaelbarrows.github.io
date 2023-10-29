<script>
import {
  getEmployment,
  getEducation,
  getProjects
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
    }
  },
  computed: {
  },
  async mounted () {
    while (!this.$store) {
      // do nothing untill we can
    }

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

<template>
  <div>
    <div class="md:min-h-[100vh] md:flex md:items-center md:place-content-center">
      <div>
        <h1 class="max-w-[95%] md:max-w-8xl text-center text-4xl md:text-6xl font-semibold text-gradient mt-16 md:mt-5 mb-4 mx-auto">Michael Barrows</h1>
        <h2 class="max-w-[95%] md:max-w-8xl text-center text-3xl md:text-4xl font-semibold text-gradient mt-4 mb-4 mx-auto">Software Engineer</h2>
        <h3 class="max-w-[95%] md:max-w-8xl text-center text-2xl md:text-2xl font-semibold text-gradient mt-4 mb-16 2xl:mb-40 mx-auto">Colchester, Essex</h3>

        <div class="max-w-[95%] md:max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-5 pb-10 md:pb-16 2xl:pb-32">
          <div class="md:col-span-4 md:pb-2">
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

          <div class="md:col-span-4 md:pb-2">
            <p class="text-center text-xl text-pacific-blue-700 pb-2 font-semibold">Working at</p>
            <div class="text-center bg-gray-100 rounded-md shadow-md p-2 pt-4">
              <a href="https://wonde.com" target="_blank" title="Wonde">
                <FontAwesomeIcon class="text-3xl rounded-full aspect-square p-3 m-2 bg-[#446FF2] to-emerald-800 text-white" :icon="['fas', 'building']" />
              </a>
              <p class="text-[#446FF2] text-lg pt-0 font-semibold">Wonde</p>
            </div>
          </div>

          <div class="md:col-span-4 md:pb-2">
            <p class="text-center text-xl text-pacific-blue-700 pb-2 font-semibold">Listening to</p>
            <div class="w-full">
              <div id="currently-playing-widget" data-user="michael"></div>
            </div>
          </div>

          <div class="md:col-span-6 md:pb-2">
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
                  <p class="text-[#1DB954] text-lg pt-0 font-semibold">Spotify API</p>
                </div>
              </div>
            </div>
          </div>

          <div class="md:col-span-3 md:pb-2">
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

          <div class="md:col-span-3 md:pb-2">
            <p class="text-center text-xl text-pacific-blue-700 pb-2 font-semibold">Exploring opportunities</p>
            <div class="text-center bg-gray-100 rounded-md shadow-md p-2 pt-4">
              <!-- <FontAwesomeIcon class="text-3xl rounded-full py-3 px-3 m-2 bg-gradient-to-br from-emerald-400 to-emerald-800 text-white" :icon="['fas', 'circle-check']" />
              <p class="text-emerald-500 text-lg pt-0 font-semibold">Yes, get in touch</p> -->

              <FontAwesomeIcon class="text-3xl rounded-full py-3 px-3 m-2 bg-gradient-to-br from-red-400 to-red-800 text-white" :icon="['fas', 'circle-xmark']" />
              <p class="text-red-500 text-lg pt-0 font-semibold">Not at the moment</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- About me -->
    <!-- Turn these into bullet points -->
    <div class="max-w-[95%] md:max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 pb-8">
      <h2 class="text-3xl text-gradient text-center md:col-span-3 font-semibold">About Me</h2>
      <div class="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4 pb-5">
        <div class="border-2 border-pacific-blue-600 rounded-md text-center p-3">
          <FontAwesomeIcon class="aspect-square text-3xl rounded-full py-3 px-3 m-2 gradient text-white" :icon="['fas', 'mortar-board']" />
          <p class="md:text-lg">4 years of Web Development specific education</p>
        </div>
        <div class="border-2 border-pacific-blue-600 rounded-md text-center p-3">
          <FontAwesomeIcon class="aspect-square text-3xl rounded-full py-3 px-3 m-2 gradient text-white" :icon="['fas', 'building']" />
          <p class="md:text-lg">2 years of commercial experience</p>
        </div>
        <div class="border-2 border-pacific-blue-600 rounded-md text-center p-3">
          <FontAwesomeIcon class="aspect-square text-3xl rounded-full py-3 px-3 m-2 gradient text-white" :icon="['fas', 'code']" />
          <p class="md:text-lg">Full-stack, with a back-end focus</p>
        </div>
        <div class="border-2 border-pacific-blue-600 rounded-md text-center p-3">
          <FontAwesomeIcon class="aspect-square text-3xl rounded-full py-3 px-3 m-2 gradient text-white" :icon="['fab', 'php']" />
          <FontAwesomeIcon class="aspect-square text-3xl rounded-full py-3 px-3 m-2 gradient text-white" :icon="['fab', 'laravel']" />
          <p class="md:text-lg">Playing with PHP since 2013, Laravel since 2017</p>
        </div>
        <div class="border-2 border-pacific-blue-600 rounded-md text-center p-3">
          <FontAwesomeIcon class="aspect-square text-3xl rounded-full py-3 px-3 m-2 gradient text-white" :icon="['fas', 'mortar-board']" />
          <FontAwesomeIcon class="aspect-square text-3xl rounded-full py-3 px-3 m-2 gradient text-white" :icon="['fas', 'comments']" />
          <p class="md:text-lg">Published research around machine learning and natural language processing</p>
        </div>
        <div class="border-2 border-pacific-blue-600 rounded-md text-center p-3">
          <FontAwesomeIcon class="aspect-square text-3xl rounded-full py-3 px-3 m-2 gradient text-white" :icon="['fas', 'book']" />
          <p class="md:text-lg">Always trying to learn something new</p>
        </div>
      </div>
        <!-- <p class="my-2">I'm Michael, a web developer (back-end/full-stack) in Colchester with 4 years of experience (2 years commercially) specifically in web design and development.</p>
        <p class="my-2">I've recently completed a research master's at the University of Portsmouth in which I explored automated labelling and machine learning for sentiment and emotion. Before that, I studied a master of computing degree at Edge Hill University in web design and development.</p>
        <p class="my-2">Within the web development field, my interests are mainly in back-end development (PHP, Laravel, SQL).</p>
        <p class="my-2">I am currently looking for a remote back-end or full-stack developer role.</p>
        <p class="my-2">Want to know more? Get in touch.</p>
       -->

      <!-- My skills -->
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

    <h2 class="text-3xl text-gradient text-center font-semibold">My Experience</h2>
    <div class="max-w-[95%] md:max-w-7xl mx-auto mt-5 space-y-2 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-slate-300">
      <Item
        v-for="employment in employments" :key="'emp-' + employment.id"
        :organisation="employment.company"
        :position="employment.title"
        type="emp"
        :startDate="employment.start_date"
        :endDate="employment.end_date"
        :techStack="employment.tech_stack"
        :description="employment.description"
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
        :clickAction="showTimelineItemModal"
      />
    </div>

    <TimelineItemModal
      :item="currentlySelectedTimelineItem"
    />

    <div class="max-w-[95%] md:max-w-7xl mb-5 mx-auto grid md:grid-cols-2 lg:grid-cols-3 mt-8 gap-5" id="projects">
      <h2 class="md:col-span-2 lg:col-span-3 text-3xl text-gradient text-center font-semibold">Projects</h2>
      <Card
        v-for="project in projects" :key="'proj' + project.id"
        :project="project"
        :clickAction="showProjectModal"
      />
    </div>

    <ProjectModal
      :project="currentlySelectedProject"
    />

    <h2 class="md:col-span-2 lg:col-span-3 text-3xl text-gradient text-center font-semibold mt-8">Get in Touch</h2>
    <Form></Form>
  </div>
</template>

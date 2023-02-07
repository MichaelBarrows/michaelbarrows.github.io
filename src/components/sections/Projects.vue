<script>
import ProjectCard from "../partials/ProjectCard.vue";
import TechFilters from "../partials/TechFilters.vue";
import axios from 'axios';
import { getApiUrl } from "@/config/apiUrl";
    export default {
    data() {
        return {
            projects: []
        };
    },
    async mounted () {
        this.getProjects()
    },
    methods: {
        getProjects: async function () {
            return await axios.get(getApiUrl() + '/api/project/all')
                .then((response) => {
                    this.projects = response.data.data
                })
        }
    },
    components: { ProjectCard, TechFilters }
};
</script>

<template>
    <section id="projects">
        <div class="grid-container grid">
            <div class="all-12">
                <h2>Projects</h2>
            </div>
            <div class="all-12">
                <p class="tech-filters">
                    <TechFilters />
                </p>
            </div>
            <div class="all-12 grid">
                <ProjectCard v-for="(project, index) in projects" :project="project" :key="index"/>
            </div>
        </div>
    </section>
</template>

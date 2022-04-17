<script>
import ProjectCard from "../partials/ProjectCard.vue";
import TechFilters from "../partials/TechFilters.vue";
import Projects from "/json/projects.json";
    export default {
    data() {
        return {
            projects: Projects
        };
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
                <ProjectCard v-for="(project, index) in projects" :project="project"/>
            </div>
        </div>
    </section>
</template>

<script>
import ProjectCard from "../partials/ProjectCard.vue";
import TechFilters from "../partials/TechFilters.vue";
    export default {
    data() {
        return {
            projects: fetch("/json/projects.json")
                .then(response => response.json())
                .then(data => this.projects = data)
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
                    <a href="#" class="stack-filter active" data-tech-stack="all-active">All Projects</a>
                    <!-- @foreach ($technologies as $technology) -->
                    <TechFilters />
                    <!-- @endforeach -->
                </p>
                    </div>
                <div class="all-12 grid">
                    <ProjectCard v-for="(project, index) in projects" :project="project"/>
                    <!-- @endforeach -->
                </div>
            <!-- @endif -->
        </div>
    </section>
</template>

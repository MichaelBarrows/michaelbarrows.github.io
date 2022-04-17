<script>
    export default {
        props: {
            project: Object
        }
    };
</script>

<template>
    <div class="small-12 medium-6 large-4 xlarge-4 project-card grid" :data-tech-stack="project.tech_stack_list"><h3 class="all-12">{{ project.name }}</h3>
        <img v-if="project.image" class="all-12" :src="'img/' + project.image" :alt="project.name">
        <div v-if="project.text_logo" class="not-img all-12">
            <div class="text">
                <p>{{ project.text_logo }}</p>
            </div>
        </div>
        <div v-else-if="project.fa_icon_logo" class="not-img all-12">
            <div class="text">
                <p><i :class="'fas ' + project.fa_icon_logo"></i></p>
            </div>
        </div>
        <div v-else class="not-img all-12">
            <div class="text">
                <p><i class="fas fa-code"></i></p>
            </div>
        </div>
        <p v-if="project.short_description" class="short-description all-12">{{ project.short_description }}</p>
        <div class="all-12 tech-stack" v-if="project.tech_stack.length > 5">
            <p v-for="(tech, index) in project.tech_stack.slice(0,5)">{{ tech.name }}</p>
            <p>+{{ project.tech_stack.length - 5 }}</p>
        </div>
        <div class="all-12 tech-stack" v-else>
            <p v-for="(tech, index) in project.tech_stack">{{ tech.name }}</p>
        </div>
        <div class="link all-12">
            <p>
                <router-link class="rltest" :to="'/project/' + project.pretty_url">View Project</router-link>
            </p>
        </div>
    </div>
</template>

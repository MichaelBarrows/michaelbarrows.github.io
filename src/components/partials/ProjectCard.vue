<script>
    import Tech from '/public/json/techstacks.json';
    export default {
        props: {
            project: Object
        },
        data() {
            return {
                tech: Tech
            }
        }
    };
</script>

<template>
    <div class="small-12 medium-6 large-4 xlarge-4 project-card grid"><h3 class="all-12">{{ project.name }}</h3>
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
        <div class="tech-stack all-12">
            <div v-if="project.tech_stack.length > 5">
                <p v-for="(t, index) in project.tech_stack.slice(0,5)">{{ tech[t].name }}</p>
                <p>+{{ project.tech_stack.length - 5 }}</p>
            </div>
            <div v-else>
                <p v-for="value in project.tech_stack">{{ tech[value].name }}</p>
            </div>
        </div>
            <div class="link all-12">
                <!-- <p><a href="{{ route('project.show', ['pretty_url' => $project->pretty_url]) }}">View Project</a></p> -->
            </div>
        </div>
</template>

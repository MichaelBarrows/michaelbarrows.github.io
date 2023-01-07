<script>
import axios from 'axios';
import { getApiUrl } from '@/config/apiUrl';
export default {
    data() {
        return {
            project: []
        };
    },
    async mounted () {
        this.getProject()
    },
    methods: {
        getProject: async function () {
            return await axios.get(getApiUrl() + '/api/project/' + this.$route.params.pretty_url)
                .then((response) => {
                    this.project = response.data
                })
        }
    },
};
</script>

<template>
    <section id="project">
        <div class="grid-container grid">
            <div class="all-12">
                <h2>{{ project.name }}</h2>
            </div>
            <div class="all-12 grid">
                <div class="small-12 medium-12 large-3 xlarge-3 side slight-rounding grid">
                    <img v-if="project.image" class="all-12" :src="'img/' + project.image" :alt="project.name">
                    <div v-else-if="project.text_logo" class="not-img all-12">
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
                    <div class="all-12 tech-stack">
                        <p v-for="(tech, index) in project.tech_stack" :key="index">
                            {{ tech.name }}
                        </p>
                    </div>
                </div>
                <div class="small-12 medium-12 large-9 xlarge-9 semi-transparent-light-grey slight-rounding grid text" v-html="project.content">
                </div>

            </div>
        </div>
    </section>
</template>

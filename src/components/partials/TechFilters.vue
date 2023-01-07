<script>
import axios from 'axios';
import { getApiUrl } from '@/config/apiUrl';
    export default {
        data() {
            return {
                tech: []
            }
        },
        async mounted () {
            this.getTech()
        },
        methods: {
            filter(event) {
                event.preventDefault();
                let stack_filters = document.getElementsByClassName('stack-filter');
                for (let i = 0; i < stack_filters.length; i++) {
                    let stack = event.target.dataset.techStack;
                    let other_active = document.getElementsByClassName("active");
                    for (let j = 0; j < other_active.length; j ++) {
                        other_active[j].classList.remove("active");
                    }
                    event.target.classList.add("active");
                    this.stack_filter(stack);
                }
            },
            stack_filter (selected_stack) {
                let proj_cards = document.getElementsByClassName("project-card");
                for (let idx = 0; idx < proj_cards.length; idx++) {
                    let stack = proj_cards[idx].dataset.techStack;
                    stack = stack.split(" ");
                    if (selected_stack == "all-active") {
                        proj_cards[idx].style.display = "block";
                    } else {
                        if (!stack.includes(selected_stack)) {
                            proj_cards[idx].style.display = "none";
                        } else {
                            proj_cards[idx].style.display = "block";
                        }
                    }
                }
            },
            getTech: async function () {
                return await axios.get(getApiUrl() + '/api/tech-stack')
                    .then((response) => {
                        this.tech = response.data
                    })
            }
        }
    };
</script>

<template>
    <a href="#" class="stack-filter active" @click="filter" data-tech-stack="all-active">All Projects</a>
    <a
        v-for="(t, index) in tech"
        @click="filter"
        href="#"
        class="stack-filter"
        :data-tech-stack="t.identifier"
        :key="index"
    >
        {{ t.name }}
    </a>
</template>

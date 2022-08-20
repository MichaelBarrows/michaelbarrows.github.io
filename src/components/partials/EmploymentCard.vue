<script>
import Card from './Card.vue';
    export default {
    props: {
        job: Object
    },
    methods: {
        flag() {

        }
    },
    components: { Card }
};
</script>

<template>
    <Card :title="job.title" :subTitle="job.company">
        <template v-slot:content>
            <p class="align-center">{{ job.start_date }} - {{ job.end_date }}</p>
            <span class="tag" v-for="tag in job.tags">{{ tag }}</span>
        </template>
        <template v-if="job.end_date == 'Present'" v-slot:flag>
            <div class="flag-container">
                <span class="flag">Current</span>
            </div>
        </template>
    </Card>
</template>

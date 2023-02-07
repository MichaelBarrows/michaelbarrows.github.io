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
    computed: {
        duration() {
            const years = this.job.duration.years > 0 ? this.job.duration.years + ' Year ' : ''
            const months = this.job.duration.months > 0 ? this.job.duration.months + ' Months' : ''

            return years + months
        }
    },
    components: { Card }
};
</script>

<template>
    <Card :title="job.title" :subTitle="job.company">
        <template v-slot:content>
            <p class="align-center">
                {{ job.start_date }} - {{ job.end_date }}
            </p>
            <span class="tag" v-for="tag in job.tags" :key="tag">{{ tag }}</span>
        </template>
        <template v-if="job.end_date == 'Present'" v-slot:flag>
            <div class="flag-container">
                <span class="flag">Current</span>
            </div>
        </template>
    </Card>
</template>

<script>
import Dropdown from "../partials/Dropdown.vue";
import EmploymentCard from "../partials/EmploymentCard.vue";
import axios from 'axios';
    export default {
        data() {
            return {
                employment: [],
                education: []
            };
        },
        async mounted () {
            this.getEducation()
            this.getEmployment()
        },
        methods: {
            getEducation: async function () {
                return await axios.get('https://api.michaelbarrows.com/api/education/all')
                    .then((response) => {
                        this.education = response.data
                    })
            },
            getEmployment: async function () {
                return await axios.get('https://api.michaelbarrows.com/api/employment/all')
                    .then((response) => {
                        this.employment = response.data
                    })
            },
        },
        components: { Dropdown, EmploymentCard }
    };
</script>

<template>
    <section id="about">
        <div class="grid-container grid">
            <div class="all-12">
                <h2>About Me</h2>
            </div>
            <div class="all-12 grid img-text-container">
                <div class="small-12 medium-12 large-3 xlarge-3">
                    <img class="mb" src="/img/michaelbarrows.jpeg" alt="Picture of me">
                </div>
                <div class="small-12 medium-12 large-9 xlarge-9 semi-transparent-light-grey about-text slight-rounding">
                    <p>I'm Michael, a web developer (back-end/full-stack) in Colchester with 4 years of experience specifically in web design and development.</p>
                    <p>I've recently completed a research master's at the University of Portsmouth in which I explored automated labelling and machine learning for sentiment and emotion. Before that, I studied a master of computing degree at Edge Hill University in web design and development.</p>
                    <p>Within the web development field, my interests are mainly in back-end development (PHP, Laravel, SQL).</p>
                    <p>I am currently looking for a back-end or full-stack developer role in Colchester, Ipswich, Chelmsford, London or remote. I am also open to freelance projects.</p>
                    <p>Want to know more? <a href="#contact">Get in touch</a>.</p>
                </div>
            </div>
            <!-- Technical Skills -->
            <div class="small-12 medium-12 large-4 xlarge-4 skills align-center">
                <h3>Back-end Skills</h3>
                <p>PHP</p>
                <p>Laravel</p>
                <p>MySQL</p>
                <p>Database Design</p>
                <p>Data Normalisation</p>
                <p>Relational Databases</p>
                <p>Creating API's</p>
                <p>Python</p>
                <p>Test Driven Development (TDD)</p>
                <p>Behaviour Driven Development (BDD)</p>
            </div>
            <div class="small-12 medium-12 large-4 xlarge-4 skills align-center">
                <h3>Front-end Skills</h3>
                <p>HTML5</p>
                <p>CSS3</p>
                <p>Sass</p>
                <p>JavaScript</p>
                <p>JQuery</p>
                <p>Using API's</p>
                <p>Bootstrap</p>
                <p>Foundation</p>
                <p>JSON</p>
            </div>
            <div class="small-12 medium-12 large-4 xlarge-4 skills align-center">
                <h3>Other Skills</h3>
                <p>Git</p>
                <p>Machine Learning</p>
                <p>Numpy</p>
                <p>Pandas</p>
                <p>Scikit-Learn</p>
                <p>Automated Labelling</p>
                <p>Natural Language Processing (NLP)</p>
                <p>Natural Language Toolkit (NLTK)</p>
                <p>matplotlib</p>
            </div>

            <div class="all-12 grid">
                <h3 class="heading all-12">Employment</h3>

                <EmploymentCard v-for="(job, index) in employment" :job="job"></EmploymentCard>
            </div>
            <div class="all-12 grid">
                <h3 class="heading all-12">Education</h3>
                <div v-for="(edu, index) in education" class="all-12 education">
                    <Dropdown :subTitle="edu.institution_name">
                        <template v-slot:title>
                            <h3>{{ edu.course_name }} <span class="small">({{ edu.grade }})</span></h3>
                        </template>
                        <template v-slot:body>
                            <div slot="body">
                                <p>{{ edu.start_date }} - {{ edu.end_date }}</p>
                                <div v-html="edu.description"></div>
                            </div>

                        </template>
                    </Dropdown>
                </div>
            </div>
        </div>
    </section>
</template>

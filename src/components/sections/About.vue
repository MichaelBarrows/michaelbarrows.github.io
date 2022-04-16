<script>
    export default {
        data() {
            return {
                employment: fetch('/json/employment.json')
                    .then(response => response.json())
                    .then(data => this.employment = data),
                education: fetch('/json/education.json')
                    .then(response => response.json())
                    .then(data => this.education = data)
            }
        },
        methods: {
            dropdown(event) {
                event.preventDefault();
                let icon = event.target;
                let body = event.target.parentElement.parentElement.parentElement.lastElementChild;
                let header = event.target.parentElement.parentElement;
                if (icon.classList.contains("fa-chevron-down")) {
                    icon.classList.remove("fa-chevron-down");
                    icon.classList.add("fa-chevron-up");
                    header.classList.add("open");
                    header.classList.remove("closed");
                    body.style = "display: block;";
                } else {
                    icon.classList.remove("fa-chevron-up");
                    icon.classList.add("fa-chevron-down");
                    header.classList.add("closed");
                    header.classList.remove("open");
                    body.style = "display: none;";
                }
            }
        }
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
                <div v-for="(job, index) in employment" class="all-12 education">
                    <div class="header closed">
                        <h3>{{ job.title }}</h3>
                        <p>{{ job.company }}</p>
                        <a href="#" @click="dropdown"><i class="fas fa-chevron-down"></i></a>
                    </div>
                    <div class="body">
                        <p>{{ job.start }} - {{ job.end }}</p>
                    </div>
                </div>
            </div>
            <div class="all-12 grid">
                <h3 class="heading all-12">Education</h3>
                <div v-for="(edu, index) in education" class="all-12 education">
                    <div class="header closed">
                        <h3>{{ edu.course }} <span class="small">({{ edu.grade }})</span></h3>
                        <p>{{ edu.institution }}</p>
                        <a href="#" @click="dropdown"><i class="fas fa-chevron-down"></i></a>
                    </div>
                    <div class="body">
                        <p>{{ edu.start }} - {{ edu.end }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

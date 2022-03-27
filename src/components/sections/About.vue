<script>
    export default {
        data() {
            return {
                employment: [
                    {
                        company: "Accu Limited",
                        title: "PHP Developer",
                        start: "December 2021",
                        end: "Present",
                    },
                    {
                        company: "Accu Limited",
                        title: "Junior PHP Developer",
                        start: "March 2021",
                        end: "December 2021",
                    }
                ],
            }
        }
    }
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
                        <a href="#"><i class="fas fa-chevron-down"></i></a>
                    </div>
                    <div class="body">
                        <p>{{ job.start }} - {{ job.end }}</p>
                    </div>
                </div>
            </div>

            <div class="all-12 grid">
                <h3 class="heading all-12">Education</h3>
                <div class="all-12 education" id="">
                    <div class="header closed">
                        <h3>MRes Technology (Computer Science) <span class="small">(Distinction)</span></h3>
                        <p>University of Portsmouth</p>
                        <a href="#"><i class="fas fa-chevron-down"></i></a>
                    </div>
                    <div class="body">
                        <p>Grade: <span class="bold">Distinction</span> (January 2020 - January 2021)</p>
                        <p><span class="bold">Research Project:</span> Iranian State-Sponsored Propaganda on Twitter: Exploring Methods for Automatic Classification and Analysis</p>
                        <p>For my research project, I evaluated how well machine learning algorithms perform at identifying sentiment and emotion in Iranian state-sponsored propaganda on Twitter about the nuclear deal. This project has involved extracting the tweets using keywords, preprocessing the text of the tweets, labelling the tweets for sentiment and emotion automatically using a lexicon (SentiWordNet and NRC Emotion Lexicon) and evaluating five machine learning algorithms (K-Nearest Neighbours, Decision Tree, Random Forest, Linear SVM, and Naive Bayes) performance at sentiment analysis and emotion detection.</p>
                        <h4>Modules studied include:</h4>
                        <ul>
                            <li>Research Project</li>
                            <li>Research Preparation and Development</li>
                        </ul>

                    </div>
                </div>
                <div class="all-12 education" id="">
                    <div class="header closed">
                        <h3>MComp Web Design and Development <span class="small">(2.1)</span></h3>
                        <p>Edge Hill University</p>
                        <a href="#"><i class="fas fa-chevron-down"></i></a>
                    </div>
                    <div class="body">
                        <p>Grade: <span class="bold">2.1</span> (September 2015 - July 2019)</p>
                        <p><span class="bold">Research Project:</span> A chatbot to facilitate new undergraduate Computer Science students’ transition to university: is it technically feasible and would students find it useful?</p>
                        <p>For my dissertation, I investigated the technical feasibilty of implementing a chatbot for new students within Edge Hill University's department of Computer Science. This was completed by evaluating two chatbot implementation methods (Chatterbot - a Python paackage and BotMan Studio - a PHP framework). I then implemented a chatbot (and a FAQ's mobile website) and conducted a usability evaluation with a questionnaire to evaluate and compare the perceived usefulness of a chatbot and a FAQ's mobile website for new students (with first year Computer Science students). Results show that the chatbot was perceived to be more useful than the FAQ's mobile website.</p>
                        <div class="grid">
                            <div class="small-12 medium-12 large-6 xlarge-6">
                                <h4>Undergraduate modules studied:</h4>
                                <ul>
                                    <li>Forensic Computing</li>
                                    <li>Legal, Social, Ethical and Professional Issues in Computing</li>
                                    <li>Mobile Applications and Games Development</li>
                                    <li>Professional Portfolio</li>
                                    <li>Usability Testing and Data Analysis</li>
                                    <li>Research Pro-Seminar</li>
                                    <li>Research and Development Methods</li>
                                    <li>Fundamentals of Web Coding</li>
                                    <li>Server and Client-side Scripting</li>
                                    <li>Web Application Development</li>
                                    <li>Data Driven Design</li>
                                    <li>Fundamentals of User Experience Design</li>
                                </ul>
                            </div>
                            <div class="small-12 medium-12 large-6 xlarge-6">
                                <h4>Master's level modules studied include:</h4>
                                <ul>
                                    <li>Advanced Data Analysis</li>
                                    <li>Surveying the Field: Web Development</li>
                                    <li>Project Management</li>
                                    <li>Research and Development Project</li>
                                    <li>Research Methods</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="all-12 education" id="">
                    <div class="header closed">
                        <h3>BTEC Level 3 Extended Diploma in IT <span class="small">(Distinction x3)</span></h3>
                        <p>Colchester Institute</p>
                        <a href="#"><i class="fas fa-chevron-down"></i></a>
                    </div>
                    <div class="body">
                        <p>Grade: <span class="bold">Distinction x3</span> (September 2012 - June 2014)</p>
                        <h4>Units studied:</h4>
                        <ul>
                            <li>Communication and Employability Skills for IT</li>
                            <li>Computer Systems</li>
                            <li>Information Systems</li>
                            <li>Computer Networks</li>
                            <li>Procedural Programming</li>
                            <li>Computer Systems Architecture</li>
                            <li>Website Production</li>
                            <li>Computer Animation</li>
                            <li>Spreadsheet Modelling</li>
                            <li>Managing Networks</li>
                            <li>Systems Analysis &amp; Design</li>
                            <li>Event Driven Programming</li>
                            <li>Project Planning with IT</li>
                            <li>Database Design</li>
                            <li>Client-side Customisation of Web Pages</li>
                            <li>Developing Computer Games</li>
                            <li>Human Computer Interaction</li>
                            <li>Networked Systems Security</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios';
import { getApiUrl } from '@/config/apiUrl';
export default {
    data() {
        return {
            form: {
                name: '',
                email: '',
                phone: '',
                message: '',
            },
            success: false,
            error: false,
        };
    },
    methods: {
        submitForm () {
            this.error = false
            this.success = false

            axios.post(getApiUrl() + '/api/contact', {
                name: this.form.name,
                email: this.form.email,
                phone: this.form.phone,
                message: this.form.message,
            })
            .then((response) => {
                if (response && response.status == 201 ) {
                    this.resetForm()
                    this.success = true
                    this.error = false
                } else {
                    this.error = true
                    this.success = false
                }
            }).catch((response) => {
                this.error = true
                this.success = false
            })
        },

        resetForm () {
            this.form = {
                name: '',
                email: '',
                phone: '',
                message: '',
            }
        }
    },
};
</script>

<template>
    <section id="contact">
        <div class="grid-container grid">
            <div class="all-12">
                <h2>Contact Me</h2>
            </div>
            <div class="all-12">
                <div class="text semi-transparent-blue text-centre slight-rounding">
                    <p>Got a project you'd like some help with or a vacancy you think I'd be a good fit for? Get in touch!</p>
                    <p>If you'd rather email me, my email address is <a href="mailto:contact@michaelbarrows.com">contact@michaelbarrows.com</a>.</p>
                </div>
            </div>

            <div v-if="success" class="all-12 flash-message success">
                <p class="success">Message Sent Successfully.</p>
            </div>

            <div v-if="error" class="all-12 flash-message error">
                <p class="error">There was an error while sending your message. Please try again.</p>
            </div>

            <form v-if="! success" @submit.prevent="submitForm" id="contact-form" class="contact-form grid all-12">
                <div class="small-12 medium-12 large-4 xlarge-4">
                    <input type="text" name="name" placeholder="Name" v-model="form.name" required>
                </div>
                <div class="small-12 medium-12 large-4 xlarge-4">
                    <input type="email" name="email" placeholder="E-Mail Address" v-model="form.email" required>
                </div>
                <div class="small-12 medium-12 large-4 xlarge-4">
                    <input type="text" name="phone" placeholder="Phone Number" v-model="form.phone" required>
                </div>
                <div class="small-12 medium-12 large-12 xlarge-12">
                    <textarea name="message" placeholder="Your Message" class="message" rows="10" v-model="form.message" required></textarea>
                </div>
                <div class="small-12 medium-6 large-6 xlarge-6">
                    <input type="reset" value="Reset Form">
                </div>
                <div class="small-12 medium-6 large-6 xlarge-6">
                    <input type="submit" value="Send Message">
                </div>
            </form>
        </div>
    </section>
</template>

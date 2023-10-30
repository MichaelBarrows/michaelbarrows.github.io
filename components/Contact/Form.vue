<script>
import { submitForm } from '@/api/portfolio'
import Input from '@/components/Partials/Form/Input.vue'
import TextArea from '@/components/Partials/Form/TextArea.vue'
import Button from '@/components/Partials/Form/Button.vue'

export default {
  components: { Input, TextArea, Button },
  data () {
    return {
      name: '',
      email: '',
      phone: '',
      message: '',
      success: false,
      error: false,
    }
  },
  methods: {
    async submit () {
      this.error = false
      this.success = false

      const response = await submitForm({
        name: this.name,
        email: this.email,
        phone: this.phone,
        message: this.message,
      })

      console.log(response.data)
      this.success = response.status
      this.error = ! response.status

      this.resetForm()
    },
    resetForm () {
      this.name = ''
      this.email = ''
      this.phone = ''
      this.message = ''
    }
  }
}
</script>

<template>
  <div class="grid grid-cols-1 gap-4 max-w-[95%] md:max-w-7xl mx-auto pb-10">
    <form v-if="! success" @submit.prevent="submit" class="grid md:grid-cols-2 gap-5">
      <div v-if="success" class="bg-emerald-500 border-2 border-emerald-600 text-white rounded-md p-3 text-center">
        <p class="success">Message Sent Successfully.</p>
      </div>

      <div v-if="error" class="bg-red-500 border-2 border-red-700 text-white rounded-md p-3 text-center">
        <p class="error">There was an error while sending your message. Please try again.</p>
      </div>
      <div>
        <Input
          name="name"
          placeholder="Name"
          type="text"
          styles="border-pacific-blue-600 shadow-lg"
          @valueChanged="(value) => name = value"
        />
        <Input
          name="email"
          placeholder="Email"
          type="email"
          styles="border-pacific-blue-600 shadow-lg"
          @valueChanged="(value) => email = value"
        />
        <Input
          name="phone"
          placeholder="Phone Number"
          type="text"
          styles="border-pacific-blue-600 shadow-lg"
          @valueChanged="(value) => phone = value"
        />
      </div>
      <div class="small-12 medium-12 large-12 xlarge-12">
        <TextArea
          name="message"
          styles="border-pacific-blue-600 shadow-lg"
          placeholder="Your Message"
          @valueChanged="(value) => message = value"
        />
        <div class="small-12 medium-6 large-6 xlarge-6 grid grid-cols-2 gap-2">
          <Button
            name="reset"
            type="reset"
            value="Reset"
            styles="shadow-lg"
          />
          <Button
            name="submit"
            type="submit"
            value="Send Message"
            styles="shadow-lg"
          />
        </div>
      </div>
    </form>
  </div>
</template>

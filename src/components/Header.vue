<script setup>
    import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
    <header>
        <div class="grid-container grid">
            <div class="small-12 medium-12 large-6 xlarge-5">
                <h1><router-link to="/">Michael Barrows</router-link></h1>
            </div>
            <nav class="small medium small-12 medium-12 large-hidden xlarge-hidden grid bars">
                <router-link to="/" class="small-12 medium-12 hidden">Home</router-link>
                <a class="small-12 medium-12 hidden" href="{{ url('/#about') }}">About</a>
                <a class="small-12 medium-12 hidden" href="{{ url('/#projects') }}">Projects</a>
                <a class="small-12 medium-12 hidden" href="{{ url('/#contact') }}">Contact</a>
                <a class="small-12 medium-12 hidden" href="https://github.com/MichaelBarrows" target="_blank"><i class="fab fa-github"></i></a>
                <a class="small-12 medium-12 hidden" href="https://linkedin.com/in/michaelpbarrows" target="_blank"><i class="fab fa-linkedin"></i></a>
                <a class="small-12 medium-12 hidden" id="bars" href="#"><i class="fas fa-bars"></i></a>
            </nav>
            <div class="large-6 xlarge-7 small-hidden medium-hidden align-right">
                <nav class="large xlarge align-right flex-container flex-right">
                    <RouterLink to="/">Home</RouterLink>
                    <a href="{{ url('/#about') }}">About</a>
                    <a href="{{ url('/#projects') }}">Projects</a>
                    <a href="{{ url('/#contact') }}">Contact</a>
                    <a href="https://github.com/MichaelBarrows" target="_blank"><i class="fab fa-github"></i></a>
                    <a href="https://linkedin.com/in/michaelpbarrows" target="_blank"><i class="fab fa-linkedin"></i></a>
                </nav>
            </div>
        </div>
    </header>
</template>

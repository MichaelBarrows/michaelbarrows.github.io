<script>
    export default {
    data() {
        return {
            project: []
        };
    },
    mounted: function () {
        let that = this;
        fetch("/public/json/projects/" + that.$route.params.pretty_url + ".json")
                .then(response => response.json())
                .then(data => that.project = data)
    }
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
                    <div v-for="(tech, index) in project.tech_stack" class="all-12 tech-stack">
                        <p>{{ tech.name }}</p>
                    </div>

                    <!-- @if ($project->projectImages->count() != 0) -->
                    <!-- <a class="all-12" href="/images/{{ $project->projectImages[0]->id }}">View Images ({{ $project->projectImages->count() }}) <i class="fas fa-image"></i></a> -->
                    <!-- @endif -->
                    <!-- @if ($project->projectLinks->count() != 0) -->
                    <!-- @foreach ($project->projectLinks as $link) -->
                    <!-- <a class="all-12" href="{{ $link->link }}" target="_blank">{{ $link->text }} <i class="{{ $link->icon }}"></i></a> -->
                    <!-- @endforeach -->
                    <!-- @endif -->
                </div>
                <div class="small-12 medium-12 large-9 xlarge-9 semi-transparent-light-grey slight-rounding grid text" v-html="project.content">
                </div>

            </div>
            <!-- @endif -->
        </div>
    </section>
</template>

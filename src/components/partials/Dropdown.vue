<script>
    export default {
        props: {
            subTitle: String
        },
        methods: {
            dropdown(event) {
                event.preventDefault();
                let icon = event.target;
                let body = event.target.parentElement.parentElement.parentElement.lastElementChild;
                if (icon.classList.contains("fa-chevron-down")) {
                    icon.classList.remove("fa-chevron-down", "closed");
                    icon.classList.add("fa-chevron-up", "open");
                    body.style = "display: block;";
                } else {
                    icon.classList.remove("fa-chevron-up", "open");
                    icon.classList.add("fa-chevron-down", "closed");
                    body.style = "display: none;";
                }
            }
        }
    };
</script>

<template>
    <div class="all-12 education">
        <div class="header closed">
            <slot name="title"></slot>
            <p>{{ subTitle }}</p>
            <a href="#" @click="dropdown"><i class="fas fa-chevron-down"></i></a>
        </div>
        <div class="body">
            <slot name="body"></slot>
        </div>
    </div>
</template>

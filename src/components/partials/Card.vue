<script>
    export default {
        props: {
            title: String,
            subTitle: String
        }
    };
</script>

<template>
<div class="small-12 medium-6 large-4 xlarge-4 card">
    <slot name="flag"></slot>
    <h3 class="align-center">{{ title }}</h3>
    <h4 class="align-center">{{ subTitle }}</h4>
    <slot name="content"></slot>
    </div>
</template>

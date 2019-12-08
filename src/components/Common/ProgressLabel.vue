<template>
    <span
        class="label"
        :class="getLabelClass()"
    >
        <span
            class="glyphicon"
            :class="getArrowClass()"
            aria-hidden="true"
        >
        </span> {{ progress | no-sign }}%
    </span>
</template>

<script>
    export default {
        props: ['previous', 'current'],
        computed: {
            progress() {
                const decimal = (this.current - this.previous) / this.previous;

                return Math.round(100 * decimal);
            }
        },
        methods: {
            getLabelClass() {
                return {
                    'label-danger': this.progress < 0,
                    'label-success': this.progress >= 0,
                };
            },
            getArrowClass() {
                return {
                    'glyphicon-arrow-down': this.progress < 0,
                    'glyphicon-arrow-up': this.progress >= 0,
                };
            },
        },
    }
</script>


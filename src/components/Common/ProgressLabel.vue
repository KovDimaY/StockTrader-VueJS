<template>
    <span
        class="label"
        :class="{'label-danger': progress < 0, 'label-success': progress >= 0}"
    >
        <span
            class="glyphicon"
            :class="{'glyphicon-arrow-down': progress < 0, 'glyphicon-arrow-up': progress >= 0 }"
            aria-hidden="true"
        >
        </span> {{ progress | no-sign }}%
    </span>
</template>

<script>
  import { mapActions } from 'vuex';

  export default {
    props: ['previous', 'current'],
    computed: {
      progress() {
        const decimal = (this.current - this.previous) / this.previous;

        return Math.round(100 * decimal);
      }
    },
  }
</script>


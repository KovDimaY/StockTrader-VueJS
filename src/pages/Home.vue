<template>
  <v-fragment>
    <div class="cards-wrapper">
      <div class="card-container">
        <app-profile-data></app-profile-data>
      </div>
      <div class="card-container">
        <app-progress-data></app-progress-data>
      </div>
    </div>
    <div class="smart-quote">
      <p class="lead text-center">
        "The only thing standing between you and your goal
        is the bullshit story you keep telling yourself
        as to why you can't achieve it."
      </p>
      <p class="text-right">
        <strong>Jordan Belfort, The Wolf of Wall Street</strong>
      </p>
    </div>
  </v-fragment>
</template>

<script>
  import ProfileDataComponent from '../components/ProfileData';
  import ProgressDataComponent from '../components/ProgressData';

  export default {
    components: {
      appProfileData: ProfileDataComponent,
      appProgressData: ProgressDataComponent,
    },
  }
</script>

<style lang="scss" scoped>
  .cards-wrapper {
    display: flex;
    flex-direction: column;
    margin: 30px -15px 0;

    .card-container {
      margin: 0 15px;

      .panel {
        height: 100%;
      }
    }
  }

  @media (min-width: 768px) {
    .cards-wrapper {
      flex-direction: row;

      .card-container {
        width: calc(50% - 30px);
        margin: 0 15px;
      }
    }

    .smart-quote {
      max-width: 600px;
      margin: 50px auto auto;
    }
  }
</style>
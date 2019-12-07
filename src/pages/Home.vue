<template>
  <div class="cards-wrapper">
    <div class="card-container">
      <app-profile-data></app-profile-data>
    </div>
    <div class="card-container">
      <app-progress-data></app-progress-data>
    </div>
  </div>
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
  }
</style>
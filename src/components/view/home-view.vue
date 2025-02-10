<script setup lang="ts">
import LayerWelcome from '../svg/layer-welcome.vue'
</script>

<template>
  <div class="container">
    <div class="welcome-banner">
      <div class="welcome-banner__text-content">
        <h1 class="text-heading-xl">
          Мои <br />
          заметки
        </h1>
        <h2 class="text-heading-md">Не забывай о важном, храни его в облаке.</h2>
      </div>
      <div>
        <LayerWelcome class="welcome-banner__svg" />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '/src//assets/styles/base/mixins.scss';
@import '/src//assets/styles/base/vars.scss';
.welcome-banner {
  display: grid;
  text-align: center;
  gap: 17px;
  &__text-content {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
  &__svg {
    width: 100%;
    height: 100%;
  }

  @include bp($lg) {
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    text-align: left;
  }
}
</style>

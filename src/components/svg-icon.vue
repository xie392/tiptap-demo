<template>
  <svg class="icon" aria-hidden="true">
    <use :xlink:href="'#' + icon" />
  </svg>
</template>

<script setup lang="ts">
defineProps<{ icon: string }>()
</script>

<style scoped>
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>

<template>
  <div class="divider">
    <div class="divider-line"></div>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{ w?: string; h?: string; color?: string; margin?: string }>(), {
  w: () => '1px',
  h: () => '18px',
  color: () => '#e6e6e6',
  margin: () => '0 5px'
})
</script>

<style scoped>
.divider {
  width: v-bind(w);
  height: 100%;
  min-height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: v-bind(margin);
}

.divider-line {
  width: v-bind(w);
  height: v-bind(h);
  background-color: v-bind(color);
}
</style>

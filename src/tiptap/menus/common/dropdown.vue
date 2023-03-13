<template>
  <div class="dropdown" ref="target" :class="'dropdown-placement-' + placement">
    <div class="dropdown-btn">
      <div class="dropdown-btn-click" @click="open">
        <slot name="btn"></slot>
      </div>
      <div class="dropdown-content" v-show="visible">
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onClickOutside } from '@vueuse/core'

withDefaults(defineProps<{ placement?: string; w?: string }>(), {
  placement: () => 'bottom',
  w: () => '100%'
})

const target = ref<HTMLElement | null>(null)
const visible = ref<boolean>(false)

// click outside hidden
onClickOutside(target, (event) => {
  if (event.target !== target.value) {
    close()
  }
})

const close = () => {
  visible.value = false
}

const open = () => {
  visible.value = true
}

defineExpose({
  close
})
</script>

<style lang="less" scoped>
.dropdown {
  display: inline-block;
  width: v-bind(w);

  .dropdown-btn {
    display: inline-block;
    cursor: pointer;
    user-select: none;
    position: relative;
    display: flex;
    align-items: center;

    .dropdown-btn-click {
      display: flex;
      align-items: center;
    }
  }

  .dropdown-content {
    position: absolute;
    background-color: var(--bg-color, #fff);
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.2);
    z-index: 9;
    // top: 110%;
    // left: 50%;
    // transform: translateX(-50%);
    border-radius: 4px;
    max-height: 400px;
    overflow-y: auto;
    font-size: 16px;
    transition: all 0.5s;
    min-width: v-bind(w);

    &::-webkit-scrollbar {
      width: 4px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #ccc;
      border-radius: 2px;
    }

    &::-webkit-scrollbar-track {
      background-color: #fff;
    }

    &::-webkit-scrollbar-track-piece {
      background-color: #fff;
    }
  }

  &:hover .content {
    display: block;
  }
}

@distance: 5px;

.dropdown-placement-top {
  .dropdown-content {
    bottom: calc(100% + @distance);
    left: 50%;
    transform: translateX(-50%);
  }
}

.dropdown-placement-bottom {
  .dropdown-content {
    top: calc(100% + @distance);
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>

<template>
  <node-view-wrapper class="wrappers">
    callout
    <node-view-content />
  </node-view-wrapper>
</template>

<script setup lang="ts">
import { NodeViewContent, nodeViewProps, NodeViewWrapper } from '@tiptap/vue-3'
import type { Editor } from '@tiptap/core'

const props = defineProps(nodeViewProps)

// const { node, view, getPos, editor } = toRefs(props)
</script>

<style lang="less"></style>

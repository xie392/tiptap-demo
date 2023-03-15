<template>
  <node-view-wrapper class="block-wrapper">
    <slot></slot>
    <div class="block-content">
      <node-view-content />
    </div>
  </node-view-wrapper>
</template>

<script>
import { NodeViewContent, nodeViewProps, NodeViewWrapper } from '@tiptap/vue-3'

// const props = withDefaults(defineProps<{
//   node: any
//   updateAttributes: (attributes: any) => void
// }>(), nodeViewProps)

// const languages = props.extension.options.lowlight.listLanguages()

// const selectedLanguage = computed({
//   get() {
//     return props.node.attrs.language
//   },
//   set(language) {
//     props.updateAttributes({ language })
//   }
// })

export default {
  components: {
    NodeViewWrapper,
    NodeViewContent
  },

  props: nodeViewProps,

  data() {
    return {
      languages: this.extension.options.lowlight.listLanguages()
    }
  },

  computed: {
    selectedLanguage: {
      get() {
        return this.node.attrs.language
      },
      set(language) {
        this.updateAttributes({ language })
      }
    }
  }
}
</script>

<style lang="less">
.code-block {
  position: relative;
  background: var(--code-block-background, #333);
  color: var(--code-block-color, #fff);

  .code-header {
    width: 100%;
    height: 40px;
    background: #333;
  }

  select {
    position: absolute;
    top: 0;
    right: 0;
  }

  .language {
    padding: 0 10px;
  }
}
</style>

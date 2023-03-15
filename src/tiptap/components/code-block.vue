<template>
  <node-view-wrapper class="code-block">
    <select contenteditable="false" v-model="selectedLanguage">
      <option :value="null">auto</option>
      <option disabled>—</option>
      <option v-for="(language, index) in languages" :value="language" :key="index">
        {{ language }}
      </option>
    </select>
    <pre><code class="code"><node-view-content /></code></pre>
  </node-view-wrapper>
</template>

<script setup lang="ts">
import { NodeViewContent, nodeViewProps, NodeViewWrapper } from '@tiptap/vue-3'

const props = defineProps(nodeViewProps)
const languages = ref(props.extension.options.lowlight.listLanguages())

const selectedLanguage = computed({
  get() {
    return props.node.attrs.language
  },
  set(language) {
    props.updateAttributes({ language })
  }
})
</script>

<style lang="less">
.code-block {
  width: 100%;
  position: relative;
  font-size: 14px;
  margin: 15px 0;

  select {
    position: absolute;
    top: 0;
    right: 0rem;
    background: #fff;
    border: 1px solid #ccc;
    outline: none;
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;
    padding: 0 1rem;
  }

  pre {
    background: #0d0d0d;
    color: #fff;
    padding: 0.5rem 1rem;
    border-radius: 0.2rem;

    .code {
      color: inherit;
      padding: 0;
      background: none;
      font-size: 1rem;
      line-height: 1.6rem;
      background-color: rgba(#616161, 0.1);
      tab-size: 4;
      white-space: pre-wrap;
      word-break: break-word;
      color: var(--code-color, #fff);
    }

    .hljs-comment,
    .hljs-quote {
      color: #616161;
    }

    .hljs-variable,
    .hljs-template-variable,
    .hljs-attribute,
    .hljs-tag,
    .hljs-name,
    .hljs-regexp,
    .hljs-link,
    .hljs-name,
    .hljs-selector-id,
    .hljs-selector-class {
      color: #f98181;
    }

    .hljs-number,
    .hljs-meta,
    .hljs-built_in,
    .hljs-builtin-name,
    .hljs-literal,
    .hljs-type,
    .hljs-params {
      color: #fbbc88;
    }

    .hljs-string,
    .hljs-symbol,
    .hljs-bullet {
      color: #b9f18d;
    }

    .hljs-title,
    .hljs-section {
      color: #faf594;
    }

    .hljs-keyword,
    .hljs-selector-tag {
      color: #70cff8;
    }

    .hljs-emphasis {
      font-style: italic;
    }

    .hljs-strong {
      font-weight: 700;
    }
  }
}
</style>

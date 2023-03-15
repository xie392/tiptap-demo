import { Extension } from '@tiptap/core'
import BuiltInCode from '@tiptap/extension-code'
import codemark from 'prosemirror-codemark'

export const Code = BuiltInCode.extend({
  excludes: null,
  /**
   * 将代码标记的渲染优先级降低到 75，以确保它在粗体、斜体和删除线标记之后呈现。
   */
  priority: 75
})

export const CodeMarkPlugin = Extension.create({
  name: 'codemarkPlugin',
  addProseMirrorPlugins() {
    return codemark({ markType: this.editor.schema.marks.code })
  }
})

import BubbleMenu from "@tiptap/extension-bubble-menu"

export default BubbleMenu.configure({
  element: document.querySelector(".bubble-menu") as HTMLElement,
  shouldShow: ({ editor }) => {
    // only show the bubble menu for images and links
    // console.log("editor.isActive('paragraph')", editor.isActive("paragraph"));
    return editor.isActive("paragraph") || editor.isActive("link")
  },
})

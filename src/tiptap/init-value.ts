export const initValue = {
  type: "doc",
  content: [
    {
      type: "heading",
      attrs: {
        textAlign: "left",
        level: 1,
      },
      content: [
        {
          type: "text",
          text: "标题一",
        },
      ],
    },
    {
      type: "heading",
      attrs: {
        textAlign: "left",
        level: 2,
      },
      content: [
        {
          type: "text",
          text: "标题二",
        },
      ],
    },
    {
      type: "heading",
      attrs: {
        textAlign: "left",
        level: 3,
      },
      content: [
        {
          type: "text",
          text: "标题三",
        },
      ],
    },
    {
      type: "heading",
      attrs: {
        textAlign: "left",
        level: 4,
      },
      content: [
        {
          type: "text",
          text: "标题四",
        },
      ],
    },
    {
      type: "heading",
      attrs: {
        textAlign: "left",
        level: 5,
      },
      content: [
        {
          type: "text",
          text: "标题五",
        },
      ],
    },
    {
      type: "heading",
      attrs: {
        textAlign: "left",
        level: 6,
      },
      content: [
        {
          type: "text",
          text: "标题六",
        },
      ],
    },
    {
      type: "heading",
      attrs: {
        textAlign: "left",
        level: 1,
      },
      content: [
        {
          type: "text",
          text: "段落",
        },
      ],
    },
    {
      type: "paragraph",
      attrs: {
        textAlign: "left",
      },
      content: [
        {
          type: "text",
          text: "段落",
        },
      ],
    },
    {
      type: "heading",
      attrs: {
        textAlign: "left",
        level: 1,
      },
      content: [
        {
          type: "text",
          text: "代码块",
        },
      ],
    },
    {
      type: "paragraph",
      attrs: {
        textAlign: "left",
      },
      content: [
        {
          type: "text",
          marks: [
            {
              type: "code",
            },
          ],
          text: "代码块",
        },
      ],
    },
    {
      type: "heading",
      attrs: {
        textAlign: "left",
        level: 1,
      },
      content: [
        {
          type: "text",
          text: "无须列表",
        },
      ],
    },
    {
      type: "bulletList",
      content: [
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              attrs: {
                textAlign: "left",
              },
              content: [
                {
                  type: "text",
                  text: "无序列表",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              attrs: {
                textAlign: "left",
              },
              content: [
                {
                  type: "text",
                  text: "无须列表",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: "heading",
      attrs: {
        textAlign: "left",
        level: 1,
      },
      content: [
        {
          type: "text",
          text: "有序列表",
        },
      ],
    },
    {
      type: "orderedList",
      attrs: {
        start: 1,
      },
      content: [
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              attrs: {
                textAlign: "left",
              },
              content: [
                {
                  type: "text",
                  text: "有序列表",
                },
              ],
            },
          ],
        },
        {
          type: "listItem",
          content: [
            {
              type: "paragraph",
              attrs: {
                textAlign: "left",
              },
              content: [
                {
                  type: "text",
                  text: "有序列表",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: "heading",
      attrs: {
        textAlign: "left",
        level: 1,
      },
      content: [
        {
          type: "text",
          text: "斜体",
        },
      ],
    },
    {
      type: "paragraph",
      attrs: {
        textAlign: "left",
      },
      content: [
        {
          type: "text",
          marks: [
            {
              type: "italic",
            },
          ],
          text: "斜体",
        },
      ],
    },
    {
      type: "heading",
      attrs: {
        textAlign: "left",
        level: 1,
      },
      content: [
        {
          type: "text",
          text: "分割线",
        },
      ],
    },
    {
      type: "horizontalRule",
    },
    {
      type: "heading",
      attrs: {
        textAlign: "left",
        level: 1,
      },
      content: [
        {
          type: "text",
          text: "删除线",
        },
      ],
    },
    {
      type: "paragraph",
      attrs: {
        textAlign: "left",
      },
      content: [
        {
          type: "text",
          marks: [
            {
              type: "strike",
            },
          ],
          text: "这是删除线文本",
        },
      ],
    },
    {
      type: "heading",
      attrs: {
        textAlign: "left",
        level: 1,
      },
      content: [
        {
          type: "text",
          text: "链接",
        },
      ],
    },
    {
      type: "paragraph",
      attrs: {
        textAlign: "left",
      },
      content: [
        {
          type: "text",
          text: "[访问GitHub](",
        },
        {
          type: "text",
          marks: [
            {
              type: "link",
              attrs: {
                href: "https://github.com/",
                target: "_blank",
                class: null,
              },
            },
          ],
          text: "https://github.com/",
        },
        {
          type: "text",
          text: ")",
        },
      ],
    },
    {
      type: "heading",
      attrs: {
        textAlign: "left",
        level: 1,
      },
      content: [
        {
          type: "text",
          text: "代码块",
        },
      ],
    },
    {
      type: "codeBlock",
      attrs: {
        language: "js",
      },
      content: [
        {
          type: "text",
          text: "代码块",
        },
      ],
    },
    {
      type: "heading",
      attrs: {
        textAlign: "left",
        level: 1,
      },
      content: [
        {
          type: "text",
          text: "任务列表",
        },
      ],
    },
    {
      type: "paragraph",
      attrs: {
        textAlign: "left",
      },
      content: [
        {
          type: "text",
          text: "- [ ] 完成报告",
        },
      ],
    },
    {
      type: "paragraph",
      attrs: {
        textAlign: "left",
      },
      content: [
        {
          type: "text",
          text: "- [x] 发送邮件",
        },
      ],
    },
    {
      type: "paragraph",
      attrs: {
        textAlign: "left",
      },
      content: [
        {
          type: "text",
          text: "- [ ] 安排会议",
        },
      ],
    },
    {
      type: "heading",
      attrs: {
        textAlign: "left",
        level: 1,
      },
      content: [
        {
          type: "text",
          text: "表格",
        },
      ],
    },
    {
      type: "paragraph",
      attrs: {
        textAlign: "left",
      },
      content: [
        {
          type: "text",
          text: "| 列标题1 | 列标题2 | 列标题3 |",
        },
      ],
    },
    {
      type: "paragraph",
      attrs: {
        textAlign: "left",
      },
      content: [
        {
          type: "text",
          text: "|--------|--------|--------|",
        },
      ],
    },
    {
      type: "paragraph",
      attrs: {
        textAlign: "left",
      },
      content: [
        {
          type: "text",
          text: "| 单元格1 | 单元格2 | 单元格3 |",
        },
      ],
    },
    {
      type: "paragraph",
      attrs: {
        textAlign: "left",
      },
      content: [
        {
          type: "text",
          text: "| 单元格4 | 单元格5 | 单元格6 |",
        },
      ],
    },
    {
      type: "heading",
      attrs: {
        textAlign: "left",
        level: 1,
      },
      content: [
        {
          type: "text",
          text: "引用块",
        },
      ],
    },
    {
      type: "blockquote",
      content: [
        {
          type: "paragraph",
          attrs: {
            textAlign: "left",
          },
          content: [
            {
              type: "text",
              text: "引用",
            },
          ],
        },
      ],
    },
    {
      type: "heading",
      attrs: {
        textAlign: "left",
        level: 1,
      },
      content: [
        {
          type: "text",
          text: "加粗",
        },
      ],
    },
    {
      type: "paragraph",
      attrs: {
        textAlign: "left",
      },
      content: [
        {
          type: "text",
          marks: [
            {
              type: "bold",
            },
          ],
          text: " 加粗 ",
        },
      ],
    },
    {
      type: "paragraph",
      attrs: {
        textAlign: "left",
      },
    },
  ],
}

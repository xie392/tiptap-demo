import * as React from "react"
import { Divider } from "antd"
import {
  AlignCenterIcon,
  AlignJustifyIcon,
  AlignLeftIcon,
  AlignRightIcon,
  ArrowCaretDownIcon,
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  BackgroundColorIcon,
  BlockquoteIcon,
  BoldIcon,
  CheckIcon,
  CloseIcon,
  CodeBlockIcon,
  CodeIcon,
  CopyIcon,
  CutIcon,
  DownloadIcon,
  DragIcon,
  FontColorIcon,
  HeadingFiveIcon,
  HeadingFourIcon,
  HeadingOneIcon,
  HeadingSixIcon,
  HeadingThreeIcon,
  HeadingTwoIcon,
  HrIcon,
  ImageIcon,
  ItalicIcon,
  LeadingIcon,
  LinkIcon,
  LoadingIcon,
  MenuIcon,
  OneToOneIcon,
  OrderedListIcon,
  PasteIcon,
  PasteTextIcon,
  PlusCircleIcon,
  PlusIcon,
  RedoIcon,
  RotateLeftIcon,
  RotateRightIcon,
  StrikethroughIcon,
  SubIcon,
  SupIcon,
  TableIcon,
  TableMergeIcon,
  TableSplitIcon,
  TaskListIcon,
  UnLinkIcon,
  UnderlineIcon,
  UndoIcon,
  UnorderedListIcon,
  ZoomInIcon,
  ZoomOutIcon,
} from "./icon"

const EmptyIcon: React.FC<React.HTMLAttributes<SVGSVGElement>> = () => null

export const IconMap = {
  bold: BoldIcon,
  italic: ItalicIcon,
  underline: UnderlineIcon,
  strike: StrikethroughIcon,
  code: CodeIcon,
  subscript: SubIcon,
  superscript: SupIcon,
  check: CheckIcon,
  blockquote: BlockquoteIcon,
  bulletList: UnorderedListIcon,
  orderedList: OrderedListIcon,
  taskList: TaskListIcon,
  table: TableIcon,
  tableMerge: TableMergeIcon,
  tableSplit: TableSplitIcon,
  plus: PlusIcon,
  plusCircle: PlusCircleIcon,
  arrowDown: ArrowDownIcon,
  arrowUp: ArrowUpIcon,
  arrowLeft: ArrowLeftIcon,
  arrowRight: ArrowRightIcon,
  arrowCaretDown: ArrowCaretDownIcon,
  copy: CopyIcon,
  cut: CutIcon,
  paste: PasteIcon,
  pasteText: PasteTextIcon,
  drag: DragIcon,
  menu: MenuIcon,
  redo: RedoIcon,
  undo: UndoIcon,
  loading: LoadingIcon,
  headingOne: HeadingOneIcon,
  headingTwo: HeadingTwoIcon,
  headingThree: HeadingThreeIcon,
  headingFour: HeadingFourIcon,
  headingFive: HeadingFiveIcon,
  headingSix: HeadingSixIcon,
  link: LinkIcon,
  unLink: UnLinkIcon,
  image: ImageIcon,
  zoomIn: ZoomInIcon,
  zoomOut: ZoomOutIcon,
  oneToOne: OneToOneIcon,
  rotateLeft: RotateLeftIcon,
  rotateRight: RotateRightIcon,
  download: DownloadIcon,
  close: CloseIcon,
  horizontalRule: HrIcon,
  alignLeft: AlignLeftIcon,
  alignCenter: AlignCenterIcon,
  alignRight: AlignRightIcon,
  alignJustify: AlignJustifyIcon,
  leading: LeadingIcon,
  fontColor: FontColorIcon,
  backgroundColor: BackgroundColorIcon,
  codeBlock: CodeBlockIcon,
  divider: Divider,
  fontSize: EmptyIcon,
  fontFamily: EmptyIcon,
}

export type IconName = keyof typeof IconMap

const IconStyles = `leading-[0] inline-block text-center align-[-.125rem] text-inherit font-normal`

export const Icon: React.FC<React.HTMLAttributes<SVGSVGElement> & Record<"name", IconName>> = ({
  name,
  className,
  ...props
}) => {
  const IconComponent = IconMap[name]

  return (
    <span className={`${IconStyles} ${className}`}>
      <IconComponent {...props} className="inline-block align-[unset]" />
    </span>
  )
}

export const IconCustom: React.FC<React.HTMLAttributes<SVGSVGElement>> = ({
  className,
  children,
}) => {
  return <span className={`${IconStyles} ${className}`}>{children}</span>
}

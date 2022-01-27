import { ModalSizeVariant, ResponsiveVariant } from '@uicr/core'

export interface UiModalModel {
  title?: string
  body?: string
  animate?: boolean
  dismissible?: boolean
  disableBackdrop?: boolean
  disableEscKey?: boolean
  autoFocus?: boolean
  scrollable?: boolean
  verticalCenter?: boolean
  show?: boolean
  size?: ModalSizeVariant
  fullscreen?: ResponsiveVariant | boolean
  ['aria:role']?: string
  ['aria:buttonClose']?: string
  ['aria:title']?: string
  ['aria:description']?: string
}

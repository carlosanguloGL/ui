import { UiComponentAriaConfigModel } from '@uicr/core'

export interface UiModalAriaConfigModel extends UiComponentAriaConfigModel {
  buttonClose: string
  role: string
  title: string
  description: string
}

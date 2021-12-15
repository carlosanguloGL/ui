import { shallowMount } from '@vue/test-utils'
import { UiButtonClose } from '../../src'
import { bsUiButtonCloseThemeConfigDefaults } from '../../src/defaults/bs-ui-button-close-theme.config'

describe('ui-button-close.vue', () => {
  it('renders when props are set', () => {
    const wrapper = shallowMount(UiButtonClose, {
      props: {},
    })

    expect(wrapper.exists()).toBeTruthy()
  })

  it('should trigger onClick close', async () => {
    const wrapper = shallowMount(UiButtonClose, {
      props: {},
    })

    wrapper.trigger('click')
    await wrapper.vm.$nextTick()

    expect(wrapper.emitted().close).toBeTruthy()
  })

  it('should be inverted', () => {
    const theme = bsUiButtonCloseThemeConfigDefaults
    const wrapper = shallowMount(UiButtonClose, {
      props: {
        invert: true,
      },
    })

    expect(wrapper.classes()).toContain(theme.cssClass.inverted)
  })

  it('sholud be disabled', () => {
    const wrapper = shallowMount(UiButtonClose, {
      props: {
        disabled: true,
      },
    })

    expect(wrapper.attributes('disabled')).toBeDefined()
  })
})
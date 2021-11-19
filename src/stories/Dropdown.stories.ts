import { ControlDropdownModel } from '../components';
import { SizeVariants, ContextualVariants, Directions } from '../types';
import { action } from '@storybook/addon-actions'
import { MenuItem, MenuItemTypes, ControlDropdownComponent } from '../index';

export default {
  title: 'UI/Bootstrap/Dropdown',
  component: ControlDropdownComponent,
  argTypes: {
    arrowDirection: { control: { type: 'select'}, options: Object.values(Directions) },
    size: { control: { type: 'select' }, options: Object.values(SizeVariants) },
    variant: { control: { type: 'select' }, options: Object.values(ContextualVariants) },
  },
};

const datasource: MenuItem[] =
  [{
    type: MenuItemTypes.Header,
    content: 'This is a header item',
  },
  {
    type: MenuItemTypes.Text,
    content: 'This is a text item',
  },
  {
    type: MenuItemTypes.Divider,
  },
  {
    type: MenuItemTypes.Link,
    elementAttrs: { href: 'https://unicoderns.com/', target: '_blank' },
    content: 'This is a link item',
  },
  {
    type: MenuItemTypes.Button,
    content: 'This is a button item',
  },
  {
    type: MenuItemTypes.Divider,
  },
  {
    type: MenuItemTypes.Link,
    elementAttrs: { href: 'https://unicoderns.com/', target: '_blank' },
    content: 'This is an active link item',
    disabled: false,
  },
  {
    type: MenuItemTypes.Button,
    content: 'This is an active button item',
    disabled: false,
  },
  {
    type: MenuItemTypes.Divider,
  },
  {
    type: MenuItemTypes.Link,
    elementAttrs: { href: 'https://unicoderns.com/', target: '_blank' },
    content: 'This is a disabled link item',
    disabled: true,
  },
  {
    type: MenuItemTypes.Button,
    content: 'This is a disabled button item',
    disabled: true,
  },
  {
    type: MenuItemTypes.Raw,
    content: '<i>This is a <b>raw</b> item</i>',
  },
  ];
const Template = (args: ControlDropdownModel) => ({
  components: { ControlDropdownComponent, sisi: true },
  setup() {
    return { args };
  },
  methods: {
    show: action('show'),
    hide: action('hide'),
    select: action('select'),
  },
  template: `
    <control-dropdown-component v-bind="args" @show="show" @hide="hide" @select="select"></control-dropdown-component>
  `,
});

const baseArgs: ControlDropdownModel = {
  label: 'Label',
  variant: ContextualVariants.Primary,
  datasource,
  outline: false,
  anchor: false,
  invert: true,
  size: SizeVariants.Small,
  defaultSelectedIndex: -1,
  splitButton: true,
  arrowDirection: Directions.Down,
};


export const Primary = Template.bind({});
Primary.args = {
  ...baseArgs,
  variant: ContextualVariants.Primary,
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...baseArgs,
  variant: ContextualVariants.Secondary,
};

export const Success = Template.bind({});
Success.args = {
  ...baseArgs,
  variant: ContextualVariants.Success,
};

export const Danger = Template.bind({});
Danger.args = {
  ...baseArgs,
  variant: ContextualVariants.Danger,
};

export const Warning = Template.bind({});
Warning.args = {
  ...baseArgs,
  variant: ContextualVariants.Warning,
};

export const Info = Template.bind({});
Info.args = {
  ...baseArgs,
  variant: ContextualVariants.Info,
};

export const Light = Template.bind({});
Light.args = {
  ...baseArgs,
  variant: ContextualVariants.Light,
};

export const Dark = Template.bind({});
Dark.args = {
  ...baseArgs,
  variant: ContextualVariants.Dark,
};
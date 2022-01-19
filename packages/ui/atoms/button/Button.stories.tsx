import base, { filename } from 'paths.macro';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import svgIcons from 'ui/icons/svg-icons';
import storyPathTitle from 'ui/utils/storyPathTitle';

import { Button } from './Button';

export default {
  title: storyPathTitle(base, filename),
  component: Button,
  argTypes: {
    color: { control: `color` },
    children: { control: `text` },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => {
  const { children } = args;
  return <Button {...args}>{children}</Button>;
};

export const Default = Template.bind({});
Default.args = {
  width: 200,
  children: `Button`,
  onClick: () => console.log(`button has been clicked`),
};

export const BackButton = Template.bind({});
BackButton.args = {
  color: `#ff0063`,
  iconPosition: `left`,
  iconName: `back`,
  children: `Back`,
  width: `auto`,
};

export const NextButton = Template.bind({});
NextButton.args = {
  iconPosition: `right`,
  iconName: `next`,
  children: `Next`,
  width: `auto`,
};

export const SvgWalletButton = Template.bind({});
SvgWalletButton.args = {
  IconSvg: svgIcons.Phantom,
  children: `Phantom`,
  width: `auto`,
};

export const TopIconButton = Template.bind({});
TopIconButton.args = {
  IconSvg: svgIcons.Phantom,
  iconPosition: `top`,
  children: `Phantom`,
  width: `auto`,
};

export const BottomIconButton = Template.bind({});
BottomIconButton.args = {
  IconSvg: svgIcons.Phantom,
  iconPosition: `bottom`,
  children: `Phantom`,
  width: `auto`,
};

export const Loading = Template.bind({});
Loading.args = {
  children: `i should be loading`,
  isLoading: true,
  width: `auto`,
  color: `#ff0063`,
};

export const SharpCorners = Template.bind({});
SharpCorners.args = {
  color: `#ff0063`,
  iconPosition: `left`,
  iconName: `back`,
  children: `Back`,
  width: `auto`,
  borderTlRadius: 0,
  borderTrRadius: 0,
  borderBlRadius: 0,
  borderBrRadius: 0,
};

export const WithGradient = Template.bind({});
WithGradient.args = {
  gradientBg: true,
  width: 200,
  children: `Button`,
};

export const Chevron = Template.bind({});
Chevron.args = {
  IconSvg: svgIcons.Chevron,
  width: `auto`,
};

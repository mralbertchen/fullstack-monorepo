import base, { filename } from 'paths.macro';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import storyPathTitle from 'ui/utils/storyPathTitle';

import { Input } from './Input';

export default {
  title: storyPathTitle(base, filename),
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Email = Template.bind({});
Email.args = {
  placeholder: `Email`,
};

export const LeftBorderRadius = Template.bind({});
LeftBorderRadius.args = {
  placeholder: `Email`,
  borderTopLeftRadius: `20px`,
};

export const WithBgGradient = Template.bind({});
WithBgGradient.args = {
  placeholder: `Name`,
  gradientBg: true,
  // this is a prop inherited from Chakra-UI
  // bgGradient: `linear-gradient(308.45deg, rgba(0, 255, 200, 0.6) -94.97%,  rgba(0, 255, 200, 0.05) 70.06%)`,
};

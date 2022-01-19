import base, { filename } from 'paths.macro';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './ChakraButton';
import storyPathTitle from '../../utils/storyPathTitle';

export default {
  title: storyPathTitle(base, filename),
  component: Button,
  argTypes: {
    color: { control: `color` },
    children: { control: `text` },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const FirstStory = {
  args: {
    // 👇 The args you need here will depend on your component
    children: `click me`,
    colorScheme: `red`,
    variant: `outline`,
  },
};

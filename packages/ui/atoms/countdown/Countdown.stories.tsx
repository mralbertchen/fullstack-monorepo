import base, { filename } from 'paths.macro';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CustomCountdown } from './Countdown';
import storyPathTitle from '../../utils/storyPathTitle';

export default {
  title: storyPathTitle(base, filename),
  component: CustomCountdown,
} as ComponentMeta<typeof CustomCountdown>;

const Template: ComponentStory<typeof CustomCountdown> = (args) => (
  <CustomCountdown {...args} />
);

export const Default = {
  args: {
    // 👇 The args you need here will depend on your component
    colorScheme: `yellow`,
  },
};

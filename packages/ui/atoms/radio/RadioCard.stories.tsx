import base, { filename } from 'paths.macro';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import storyPathTitle from 'ui/utils/storyPathTitle';

import { RadioCard } from './RadioCard';

export default {
  title: storyPathTitle(base, filename),
  component: RadioCard,
} as ComponentMeta<typeof RadioCard>;

const Template: ComponentStory<typeof RadioCard> = (args) => (
  <RadioCard {...args} />
);

export const Email = Template.bind({});
Email.args = {
  justify: `left`,
  leftText: `A`,
  rightText: `Yes, I swear`,
};

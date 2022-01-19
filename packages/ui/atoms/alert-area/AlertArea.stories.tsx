import base, { filename } from 'paths.macro';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { AlertArea } from './AlertArea';
import storyPathTitle from '../../utils/storyPathTitle';

export default {
  title: storyPathTitle(base, filename),
  component: AlertArea,
} as ComponentMeta<typeof AlertArea>;

const Template: ComponentStory<typeof AlertArea> = (args) => (
  <AlertArea {...args} />
);

export const Default = Template.bind({});

Default.args = {
  children: `hello`,
};

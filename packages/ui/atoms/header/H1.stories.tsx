import base, { filename } from 'paths.macro';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import storyPathTitle from 'ui/utils/storyPathTitle';

import { H1 } from './H1';

export default {
  title: storyPathTitle(base, filename),
  component: H1,
} as ComponentMeta<typeof H1>;

const Template: ComponentStory<typeof H1> = ({ children }) => (
  <H1>{children}</H1>
);

export const Default = Template.bind({});
Default.args = {
  children: `Header`,
};

import base, { filename } from 'paths.macro';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import storyPathTitle from 'ui/utils/storyPathTitle';
import FacebookSvg from 'ui/icons/svg/FacebookSvg';

import { SvgLink } from './SvgLink';

export default {
  title: storyPathTitle(base, filename),
  component: SvgLink,
} as ComponentMeta<typeof SvgLink>;

const Template: ComponentStory<typeof SvgLink> = (args) => (
  <SvgLink {...args} />
);

export const FacebookLink = Template.bind({});
FacebookLink.args = {
  SvgIcon: FacebookSvg,
  label: `Facebook`,
  url: `https://www.facebook.com/Genopets.me/`,
  color: `#00ffc8`,
  size: `50px`,
};

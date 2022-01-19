import base, { filename } from 'paths.macro';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import storyPathTitle from 'ui/utils/storyPathTitle';
import { Text, Flex } from '@chakra-ui/react';
import { Button } from 'ui/atoms/button/Button';
import theme from 'ui/theme';
import { GodCommandsRaphaelText } from 'ui/atoms/text/EnochGodCommandsRaphaelText';
import { H1 } from '../header/H1';

import Panel from './Panel';

export default {
  title: storyPathTitle(base, filename),
  component: Panel,
  argTypes: {
    color: { control: `color` },
  },
} as ComponentMeta<typeof Panel>;

const Template: ComponentStory<typeof Panel> = (args) => {
  const { children } = args;
  return <Panel {...args}>{children}</Panel>;
};

export const Default = Template.bind({});
Default.args = {
  color: `#00ffc8`,
  children: (
    <>
      <h3>some title</h3>
      <p>some content</p>
    </>
  ),
};

export const NoCurvedBottomBorders = Template.bind({});
NoCurvedBottomBorders.args = {
  borderRadii: [20, 20, 0, 0],
  color: `#7b57ff`,
  width: 200,
  children: (
    <>
      <h3>some title</h3>
      <p>some content</p>
    </>
  ),
};

export const EyedBorders = Template.bind({});
EyedBorders.args = {
  topEye: true,
  bottomEye: true,
  children: (
    <>
      <h3>some title</h3>
      <p>some content</p>
    </>
  ),
};

export const WelcomeSignUp = () => (
  <Panel topEye bottomEye width={587} height={622} borderRadii={[20, 0, 20, 0]}>
    <Flex
      color="yellow.500"
      direction="column"
      justify="flex-end"
      height="full"
    >
      <H1 color="yellow.500">Welcome</H1>
      <GodCommandsRaphaelText />
      <Text mt={4} mb={4}>
        To join the Genopets Beta, we will need to collect some information to
        verify your eligibility. Priority access will be granted to Genesis
        Genopet owners, Discord DNA members, GENE Token stakers, and Guild
        Partners.
      </Text>
      <Button
        color={theme.colors.yellow[`500`]}
        iconName="next"
        iconPosition="right"
        justify="center"
        gradientBg
        borderTlRadius={0}
        borderTrRadius={0}
        borderBlRadius={0}
      >
        Begin
      </Button>
    </Flex>
  </Panel>
);

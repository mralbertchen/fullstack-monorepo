/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';

import styled from '@emotion/styled';

import {
  Box,
  BoxProps,
  useRadio,
  SystemProps,
  useCheckbox,
  UseCheckboxProps,
  Flex,
} from '@chakra-ui/react';
import hexToRGB from '../../utils/hexToRGB';

export interface RadioCardProps extends BoxProps {
  color?: string;
  children?: string | JSX.Element | string[];
  width?: number | 'auto';
  justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'left'
    | 'space-around'
    | 'space-between';
  type: string;
  value?: number;
  leftText: string;
  rightText: string;
}

interface StyledRadioCardProps extends BoxProps {
  red: number;
  green: number;
  blue: number;
}

const StyledRadioCard = styled(Box)<StyledRadioCardProps>`
  background: ${(props) =>
    props.gradientBg
      ? `linear-gradient(308.45deg, rgba(${props.red}, ${props.green}, ${props.blue}, 0.6) -94.97%,  rgba(${props.red}, ${props.green}, ${props.blue}, 0.05) 70.06%)`
      : `none`};

  position: relative;
  overflow: hidden;
  color: inherit;
  border: 1px solid
    ${(props) => `rgba(${props.red}, ${props.green}, ${props.blue}, 0.2)`};

  padding: 10px 16px;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  display: inline-flex;
  user-select: none;

  align-items: center;
  flex-direction: ${(props) => props.flexDirection};
  justify-content: ${(props) => props.justifyContent};
  gap: ${(props) => (props.flexDirection === `column` ? 0.3 : 1)}rem;

  width: ${(props) =>
    typeof props.width === `number`
      ? `${props.width}px`
      : props.width || `100%`};

  min-height: 50px;

  ${(props) => (props.disabled ? `opacity: 0.2;` : ``)}

  font-family: 'Avenir';
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 5px;
  font-weight: 100;

  color: ${(props) => `rgba(${props.red}, ${props.green}, ${props.blue}, 1)`};

  &:after {
    width: 100%;
    height: 100%;

    display: block;
    background-color: ${(props: StyledRadioCardProps) =>
      `rgba(${props.red}, ${props.green}, ${props.blue}, 0.1)`};

    content: ' ';
    position: absolute;
    top: 0;
    left: 0;

    @media (hover: hover) {
      transition: transform 0.5s linear;
    }

    transform: translateX(-100%);
  }

  &:hover {
    &:after {
      transform: translateX(0%);
    }
  }

  &:active {
    &:after {
      background-color: ${(props: StyledRadioCardProps) =>
        `rgba(${props.red}, ${props.green}, ${props.blue}, 0.2)`};
    }
  }
`;

const CardText = ({ leftText = ``, rightText = `` }) => (
  <Flex direction="row" justify="flex-end" alignItems="center" gap={1}>
    <Box
      letterSpacing="initial"
      paddingRight="10px"
      fontFamily="neon"
      fontSize="13px"
    >
      {leftText}
    </Box>

    <Box
      borderLeft="1px solid rgba(0, 255, 200, 0.2)"
      paddingLeft="12px"
      textTransform="none"
      fontSize="14px"
      lineHeight="25px"
      letterSpacing="initial"
    >
      {rightText}
    </Box>
  </Flex>
);

export const RadioCard = ({
  color = `#00ffc8`,
  width,
  justify,
  type = `radio`,
  leftText,
  rightText,
  ...rest
}: RadioCardProps) => {
  const [red, green, blue] = hexToRGB(color);
  const { getInputProps: getInputPropsRadio, getCheckboxProps: getRadioProps } =
    useRadio(rest);

  const { getInputProps, getCheckboxProps } = useCheckbox(
    rest as UseCheckboxProps,
  );

  const input = type === `radio` ? getInputPropsRadio() : getInputProps();
  const checkbox = type === `radio` ? getRadioProps() : getCheckboxProps();

  const flexDirection: SystemProps['flexDirection'] = `row`;
  let justifyContent = `center`;

  if (justify) justifyContent = justify;

  const styledProps = {
    red,
    green,
    blue,
    width,
    justifyContent,
    flexDirection,
  };

  return (
    <Box as="label">
      <input {...input} />
      <StyledRadioCard
        {...checkbox}
        {...styledProps}
        _checked={{
          color: `yellow`,
        }}
      >
        <CardText leftText={leftText} rightText={rightText} />
      </StyledRadioCard>
    </Box>
  );
};

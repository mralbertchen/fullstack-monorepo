import {
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  ThemingProps,
  Box,
} from '@chakra-ui/react';
import styled from '@emotion/styled';
import hexToRGB from 'ui/utils/hexToRGB';

export interface InputStyleProps extends ThemingProps<'Input'> {
  gradientBg?: boolean;
  color?: string;
}

interface InputProps extends ChakraInputProps {
  gradientBg?: boolean;
  color?: string;
  errorMessage?: string | ``;
}

const defaultColor = `#00ffc8`;
const errorColor = `#FF0063`;

// TODO: make colors customizable
const StyledInput = styled(ChakraInput)<InputStyleProps>`
  height: 80px;
  font-size: 14px;
  color: ${({ color }) => color || defaultColor};
  border-color: ${({ color = defaultColor }) => {
    const [red, green, blue] = hexToRGB(color);
    return `rgba(${red}, ${green}, ${blue}, 0.2)`;
  }};
  border-radius: 0;

  //override
  &[aria-invalid='true'],
  &[data-invalid] {
    box-shadow: none;
    border-color: ${({ color = defaultColor }) => {
      const [red, green, blue] = hexToRGB(color);
      return `rgba(${red}, ${green}, ${blue}, 0.2)`;
    }};
  }
  //We need a real placeholder text in input element to let :placeholder-shown works.
  //We then hide the native placeholder text
  &::placeholder {
    opacity: 0;
  }

  &:hover {
    border-color: ${({ color = defaultColor }) => {
      const [red, green, blue] = hexToRGB(color);
      return `rgba(${red}, ${green}, ${blue}, 0.4)`;
    }};
  }

  &:focus {
    border-color: ${({ color }) => color || defaultColor};
    box-shadow: none;
  }

  // Move the placeholder up
  &:focus,
  &:not(:placeholder-shown),
  &:-webkit-autofill {
    & + div.styled__placeholder {
      top: 16px;
      font-size: 8px;
      letter-spacing: 4px;
      opacity: 0.9;
    }
  }

  ${({ gradientBg, color = defaultColor }) => {
    if (!gradientBg) return ``;

    const [red, green, blue] = hexToRGB(color);
    return `background: linear-gradient(308.45deg, rgba(${red}, ${green}, ${blue}, 0.6) -94.97%,  rgba(${red}, ${green}, ${blue}, 0.05) 70.06%);`;
  }}

  ${({ borderTopLeftRadius }) =>
    borderTopLeftRadius
      ? `border-top-left-radius: ${borderTopLeftRadius};`
      : ``}

  ${({ borderTopRightRadius }) =>
    borderTopRightRadius
      ? `border-top-right-radius: ${borderTopRightRadius};`
      : ``}

${({ borderBottomLeftRadius }) =>
    borderBottomLeftRadius
      ? `border-Bottom-left-radius: ${borderBottomLeftRadius};`
      : ``}

${({ borderBottomRightRadius }) =>
    borderBottomRightRadius
      ? `border-bottom-right-radius: ${borderBottomRightRadius};`
      : ``}
`;

const StyledPlaceholder = styled(Box)`
  font-family: neon;
  position: absolute;
  pointer-events: none;
  font-size: 14px;
  left: 16px;
  top: 28px;
  letter-spacing: 5px;
  transition: 0.13s all;
  color: ${({ color }) => color || defaultColor};
`;

const StyledErrorMessage = styled(Box)`
  font-family: neon;
  position: absolute;
  font-size: 8px;
  letter-spacing: 4px;
  opacity: 0.9;
  left: 16px;
  bottom: 10px;
  color: ${({ color }) => color || defaultColor};
`;

export const Input = ({
  placeholder,
  color,
  errorMessage = ``,
  ...rest
}: InputProps) => {
  const inputBoxColor = errorMessage ? errorColor : color || defaultColor;

  return (
    <Box position="relative">
      <StyledInput placeholder={placeholder} color={inputBoxColor} {...rest} />
      <StyledPlaceholder className="styled__placeholder" color={inputBoxColor}>
        {placeholder}
      </StyledPlaceholder>
      {errorMessage && (
        <StyledErrorMessage color={errorColor}>
          {errorMessage}
        </StyledErrorMessage>
      )}
    </Box>
  );
};

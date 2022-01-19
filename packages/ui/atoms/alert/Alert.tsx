import styled from '@emotion/styled';
import SvgIcons from 'ui/icons/svg-icons';
import { Box } from '@chakra-ui/react';
import theme from 'ui/theme';
import hexToRGB from '../../utils/hexToRGB';

type BorderRadii = [number, number, number, number];

type StyledBoxProps = {
  color?: string;
  borderRadii?: BorderRadii;
  width?: number | string;
  height?: number | string;
};

const defaultBorderRadii: BorderRadii = [20, 20, 20, 20];
const defaultColor = theme.colors.teal[500];

export const StyledBox = styled(Box)<StyledBoxProps>`
  position: relative;

  font-family: Neon;
  font-size: 12px;
  line-height: 25px;
  letter-spacing: 3px;

  color: ${({ color }) => color};
  background: ${({ red, green, blue }) =>
    `linear-gradient(306.7deg, rgba(${red}, ${green}, ${blue}, 0.6) -89.7%, rgba(${red}, ${green}, ${blue}, 0.3) 102.04%)`};
  border: 1px solid
    ${({ red, green, blue }) => `rgba(${red}, ${green}, ${blue}, 0.2)`};
  border-radius: ${({ borderRadii = defaultBorderRadii }) =>
    `${borderRadii[0]}px ${borderRadii[1]}px ${borderRadii[2]}px ${borderRadii[3]}px`};
`;

const TopEye = styled.div`
  position: absolute;
  top: -3px;
  left: -1px;
  z-index: 1;
`;

const BottomEye = styled.div`
  position: absolute;
  right: -2px;
  bottom: -1px;
  z-index: 1;
`;

export interface AlertProps extends StyledBoxProps {
  children: React.ReactNode;
  borderRadii?: BorderRadii;
}

export const Alert = ({
  children,
  color = defaultColor,
  borderRadii = defaultBorderRadii,
  ...rest
}: AlertProps) => {
  const [red, green, blue] = hexToRGB(color);

  const styledProps = {
    red,
    green,
    blue,
    color,
  };

  return (
    <StyledBox {...{ ...styledProps, borderRadii, ...rest }}>
      <TopEye>
        <SvgIcons.CornerEye />
      </TopEye>
      <BottomEye>
        <SvgIcons.CornerEye />
      </BottomEye>
      <Box
        overflow="hidden"
        textAlign="center"
        margin="25px 40px"
        minHeight={25}
        maxHeight={175} // Max showing 5 lines of text
      >
        {/* <Box justifyContent="center" alignItems="center"> */}
        {children}
      </Box>
    </StyledBox>
  );
};

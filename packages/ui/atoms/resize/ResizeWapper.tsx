import React, { Children } from 'react';
import { Box, BoxProps } from '@chakra-ui/react';
import styled from '@emotion/styled';

interface ResizeWapperProps extends BoxProps {
  width: number;
  height: number;
  scale: number | 1;
  children?: string | JSX.Element | string[];
}

interface StyledWapperBoxProps {
  scaledwidth: number;
  scaledheight: number;
}

interface StyledBoxProps extends ResizeWapperProps {
  scaledwidth: number;
  scaledheight: number;
}

const StyledWapperBox = styled(Box)<StyledWapperBoxProps>`
  position: relative;

  width: ${(props) => props.scaledwidth}px;
  height: ${(props) => props.scaledheight}px;
`;

const StyledBox = styled(Box)<StyledBoxProps>`
  position: absolute;

  transform: translate(-50%, -50%) scale(${(props) => props.scale || `1`});

  left: ${(props) => props.scaledwidth / 2}px;
  top: ${(props) => props.scaledheight / 2}px;
`;

export const ResizeWapper = ({
  children,
  width,
  height,
  scale,
  ...rest
}: ResizeWapperProps) => {
  const scaledwidth: number = width * scale;
  const scaledheight: number = height * scale;

  return (
    <StyledWapperBox scaledwidth={scaledwidth} scaledheight={scaledheight}>
      <StyledBox
        height={height}
        width={width}
        scaledwidth={scaledwidth}
        scaledheight={scaledheight}
        scale={scale}
      >
        {children}
      </StyledBox>
    </StyledWapperBox>
  );
};

export default ResizeWapper;

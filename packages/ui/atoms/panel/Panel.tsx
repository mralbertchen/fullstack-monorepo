import React from 'react';
import styled from '@emotion/styled';
import hexToRGB from 'ui/utils/hexToRGB';
import SvgIcons from 'ui/icons/svg-icons';

type BorderRadii = [number, number, number, number];

type StyledSectionProps = {
  color?: string;
  borderRadii?: BorderRadii;
  width?: number | string;
  height?: number | string;
  // if true, height will be same as
  // given width.  Any padding will be removed.
  sameHeightWidth?: boolean;
};

const defaultBorderRadii: BorderRadii = [20, 20, 20, 20];
const defaultColor = `#00ffc8`;

const StyledSection = styled.section`
  position: relative;

  height: ${({ height }) =>
    typeof height === `number` ? `${height}px` : height || `100%`};

  width: ${({ width }) =>
    typeof width === `number` ? `${width}px` : width || `100%`};
  min-width: 96px;
  color: ${({ color }) => color};
  padding: 32px;
  border: 1px solid
    ${({ color = defaultColor }: StyledSectionProps) => {
      const [red, green, blue] = hexToRGB(color);
      return `rgba(${red}, ${green}, ${blue}, 0.2)`;
    }};
  border-radius: ${({ borderRadii = defaultBorderRadii }) =>
    `${borderRadii[0]}px ${borderRadii[1]}px ${borderRadii[2]}px ${borderRadii[3]}px`};

  ${({ sameHeightWidth }) =>
    // make height the same as the width
    // https://stackoverflow.com/a/13625843
    sameHeightWidth ? `height: 0; padding: 0; padding-bottom: 100%;` : ``}

  background: ${({ color = defaultColor }: StyledSectionProps) => {
    const [red, green, blue] = hexToRGB(color);
    return `linear-gradient(308.45deg, rgba(${red}, ${green}, ${blue}, 0.6) -94.97%,  rgba(${red}, ${green}, ${blue}, 0.05) 70.06%)`;
  }};

  > h3,
  h4 {
    font-family: neon-bold;
    font-style: normal;
    letter-spacing: 2px;
    line-height: 14px;
    color: ${({ color }) => color};
  }

  > h3 {
    font-size: 14px;
  }

  > h4 {
    font-size: 11px;
    margin: 0;
  }

  > p {
    color: white;
    font-size: 14px;
  }
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

export interface PanelProps extends StyledSectionProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  borderRadii?: BorderRadii;
  topEye?: boolean;
  bottomEye?: boolean;
}

const Panel = ({
  children,
  color = defaultColor,
  borderRadii = defaultBorderRadii,
  topEye = false,
  bottomEye = false,
  width,
  ...rest
}: PanelProps) => (
  <StyledSection {...{ color, borderRadii, width, ...rest }}>
    {topEye && (
      <TopEye>
        <SvgIcons.CornerEye />
      </TopEye>
    )}
    {bottomEye && (
      <BottomEye>
        <SvgIcons.CornerEye />
      </BottomEye>
    )}
    {children}
  </StyledSection>
);

export default Panel;

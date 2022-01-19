import { Text } from '@chakra-ui/react';
import React from 'react';
import ResizeWapper from "../resize/ResizeWapper";

export const GodCommandsRaphaelText = ({
  style,
}: {
  style?: React.CSSProperties;
}) => (
  <ResizeWapper
    width={370}
    height={120}
    scale={0.1}
  >
    <Text
      fontFamily="Optician Sans"
      fontSize="15px"
      lineHeight="20px"
      style={style}
      >
      And heal the earth which the angels have defiled, and announce the healing
      of the earth that I will heal it, and that not all the sons of men shall be
      destroyed through the mystery of all the things which the watchers have
      spoken and have taught their sons.
    </Text>
  </ResizeWapper>
);

export default GodCommandsRaphaelText;

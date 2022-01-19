/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import styled from '@emotion/styled';
import Countdown from 'react-countdown';
import hexToRGB from 'ui/utils/hexToRGB';
import { Flex, Box, Text } from '@chakra-ui/react';

interface CoundownRenderer {
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
}

// Random component
const Completionist = () => (
  <Box fontFamily="neon-bold" p="2">
    Beta is now live!
  </Box>
);

const padSingleDigit = (value: number): string => {
  if (value < 10) {
    return `0${value}`;
  }
  return `${value}`;
};

// Renderer callback with condition
const renderer = ({ hours, minutes, seconds, completed }: CoundownRenderer) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  }
  // Render a countdown
  return (
    <Flex
      color="yellow.500"
      fontFamily="neon-bold"
      direction="column"
      textAlign="center"
    >
      <Text casing="uppercase" fontSize="lg" letterSpacing="4px">
        Genopets Beta is Live In
      </Text>
      <Flex direction="row" justify="center">
        <Box p="2">
          <Flex direction="column" minWidth="75">
            <Box fontSize="7xl" fontFamily="morganite">
              {padSingleDigit(hours)}
            </Box>
            <Box mt="0">HR</Box>
          </Flex>
        </Box>
        <Box p="2">
          <Flex direction="column" minWidth="75">
            <Box fontSize="7xl" fontFamily="morganite">
              {padSingleDigit(minutes)}
            </Box>
            <Box>MIN</Box>
          </Flex>
        </Box>
        <Box p="2">
          <Flex direction="column" minWidth="75">
            <Box fontSize="7xl" fontFamily="morganite">
              {padSingleDigit(seconds)}
            </Box>
            <Box>SEC</Box>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};

export const CustomCountdown = ({
  date = Date.now() + 30000000,
}: {
  date?: number | Date;
}) => <Countdown date={date} renderer={renderer} />;

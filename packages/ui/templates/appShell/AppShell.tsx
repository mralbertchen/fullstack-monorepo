import { Box } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { atom, useAtom } from 'jotai';
import React, { useEffect, useState } from 'react';
import Nav from './nav/Nav';

const Wrapper = styled.div`
  overflow-y: auto;
  height: 100vh;
  width: 100vw;
  background-color: #181a1c;
`;

const Noise = styled.div`
  height: 100vh;
  width: 100vw;
  background: url('https://genopets-web-assets.s3.us-east-1.amazonaws.com/images/noise.png')
    repeat;
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  opacity: 1;
  z-index: 4;
`;

const GradientBg = styled.div`
  position: fixed;
  background-color: transparent;
  top: 0;
  left: 0;
  z-index: 1;
  pointer-events: none;
  background: linear-gradient(320deg, rgb(24, 26, 28) 50%, rgb(0, 57, 63) 100%);
  height: 100vh;
  height: 100vh;
  width: 100vw;
`;

const Content = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 3;
  overflow: auto;
`;

export interface AppShellProps {
  children?: React.ReactNode;
  LeftHeader?: React.FC<any>;
  noLeftHeaderBorder?: boolean;
  RightHeader?: React.FC<any>;
  NavContent?: React.FC<any>;
  Footer?: React.FC<any>;
}

export type OverlayConfig = {
  component: JSX.Element;
  background?: string;
};

// export const overlayAtom = atom<JSX.Element | null>(null);
export const overlayAtom = atom<OverlayConfig | null>(null);

const overlayTransitionTime = 300;

export const AppShell = ({
  children,
  LeftHeader,
  noLeftHeaderBorder,
  RightHeader,
  NavContent,
  Footer,
}: AppShellProps) => {
  const [overlay] = useAtom(overlayAtom);

  const [currentOverlay, setCurrentOverlay] = useState<OverlayConfig | null>(
    null,
  );

  // so that overlay content can fade out before being completely removed from the DOM.
  useEffect(() => {
    if (overlay) {
      setCurrentOverlay(overlay);
    } else {
      setTimeout(() => setCurrentOverlay(null), overlayTransitionTime);
    }
  }, [overlay]);

  return (
    <Wrapper>
      <Noise />
      <Nav
        noLeftHeaderBorder={noLeftHeaderBorder}
        LeftHeader={LeftHeader}
        RightHeader={RightHeader}
        NavContent={NavContent}
        Footer={Footer}
      />
      <GradientBg />
      <Content>{children}</Content>
      <Box
        zIndex={4}
        pos="fixed"
        h="100vh"
        w="100vw"
        backdropFilter="blur(10px)"
        transition={`all ${overlayTransitionTime / 1000}s ease-in-out`}
        opacity={overlay ? 1 : 0}
        visibility={overlay ? `visible` : `hidden`}
      >
        {currentOverlay && (
          <>
            <Box
              w="full"
              h="full"
              position="absolute"
              background={currentOverlay.background}
              opacity={0.9}
              zIndex={-1}
            />
            <Noise />
            <Content>{currentOverlay.component}</Content>
          </>
        )}
      </Box>
    </Wrapper>
  );
};

import {addDecorator} from '@storybook/react'
import React from 'react'
import {ChakraProvider, CSSReset} from '@chakra-ui/react'
import theme from 'ui/theme'
import GlobalStyle from '../styles/global-styles';

addDecorator(storyFn => (
  <ChakraProvider theme={theme}>
    <CSSReset />
    <GlobalStyle />
    {storyFn()}
  </ChakraProvider>
))

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
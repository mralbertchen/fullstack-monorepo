import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      'html, body': {
        color: `teal.500`,
      },
    },
  },
  fonts: {
    heading: `Neon`,
  },
  components: {
    // https://github.com/chakra-ui/chakra-ui/issues/2347#issuecomment-997215492
    Input: {
      baseStyle: {
        field: {
          fontFamily: `Avenir`,
          paddingY: `8`,
          letterSpacing: `5px`,
          borderRadius: `none`,

          // these props do not work.  will actually just take on
          // the color of parent element's color
          // color: `pink.500`,
          // borderColor: `yellow.500`,
          _placeholder: {
            fontFamily: `Neon`,
          },
        },
      },
    },
    defaultProps: {
      /**
       * Set either or both of these to null to use only what's in { baseStyle }
       */
      size: null,
      variant: null,
    },
  },

  colors: {
    default: {
      '50': `#FFE5EF`,
      '100': `#FFB8D3`,
      '200': `#FF8AB7`,
      '300': `#FF5C9B`,
      '400': `#FF2E7F`,
      '500': `#FF0063`,
      '600': `#CC004F`,
      '700': `#99003B`,
      '800': `#660028`,
      '900': `#330014`,
    },
    teal: {
      '50': `#E5FFF9`,
      '100': `#B8FFF0`,
      '200': `#8AFFE6`,
      '300': `#5CFFDC`,
      '400': `#2EFFD2`,
      '500': `#00FFC8`,
      '600': `#00CCA0`,
      '700': `#009978`,
      '800': `#006650`,
      '900': `#003328`,
    },
    yellow: {
      '50': `#FFFBE5`,
      '100': `#FFF4B8`,
      '200': `#FFEC8A`,
      '300': `#FFE55C`,
      '400': `#FFDD2E`,
      '500': `#FFD600`,
      '600': `#CCAB00`,
      '700': `#998000`,
      '800': `#665600`,
      '900': `#332B00`,
    },
    pink: {
      '50': `#FFE5EF`,
      '100': `#FFB8D3`,
      '200': `#FF8AB7`,
      '300': `#FF5C9B`,
      '400': `#FF2E7F`,
      '500': `#FF0063`,
      '600': `#CC004F`,
      '700': `#99003B`,
      '800': `#660028`,
      '900': `#330014`,
    },
    purple: {
      '50': `#F8E5FF`,
      '100': `#EBB8FF`,
      '200': `#DE8AFF`,
      '300': `#D15CFF`,
      '400': `#C42EFF`,
      '500': `#B700FF`,
      '600': `#9200CC`,
      '700': `#6E0099`,
      '800': `#490066`,
      '900': `#250033`,
    },
    blue: {
      '50': `#E5F8FF`,
      '100': `#B8EAFF`,
      '200': `#8ADDFF`,
      '300': `#5CCFFF`,
      '400': `#2EC2FF`,
      '500': `#00B4FF`,
      '600': `#0090CC`,
      '700': `#006C99`,
      '800': `#004866`,
      '900': `#002433`,
    },
    orange: {
      '50': `#FFF2E5`,
      '100': `#FFDAB8`,
      '200': `#FFC28A`,
      '300': `#FFAA5C`,
      '400': `#FF922E`,
      '500': `#FF7A00`,
      '600': `#CC6200`,
      '700': `#994900`,
      '800': `#663100`,
      '900': `#331800`,
    },
  },
});

export default theme;

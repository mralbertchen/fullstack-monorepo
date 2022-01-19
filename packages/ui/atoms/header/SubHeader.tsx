import { Heading, HeadingProps } from '@chakra-ui/react';

export const SubHeader = (props: HeadingProps) => (
  <Heading fontSize="sm" lineHeight="base" letterSpacing="5px" {...props} />
);

import type { NextPage } from 'next';

import Survey from '../components/Survey';
import { Box } from '@chakra-ui/react';

const Home: NextPage = () => {
  return (
    <Box padding="5rem">
      <Survey />
    </Box>
  );
};

export default Home;

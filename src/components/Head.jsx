import React from 'react';
import { Heading } from '@chakra-ui/react';

const Head = () => {
  return (
    <Heading
      mb="8"
      fontWeight="extrabold"
      size="2xl"
      bgGradient="linear(to-r, cyan.500, cyan.400, blue.500)"
      bgClip="text"
    >
      Session
    </Heading>
  );
};

export default Head;

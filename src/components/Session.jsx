import React from 'react';
import { Box, Heading, HStack, Text } from '@chakra-ui/react';

const Session = () => {
  const colorTheme = [
    'gray',
    'red',
    'orange',
    'yellow',
    'green',
    'teal',
    'blue',
    'cyan',
    'purple',
    'pink',
  ];

  const colorPalette = [
    '50',
    '100',
    '200',
    '300',
    '400',
    '500',
    '600',
    '700',
    '800',
    '900',
  ];

  const randomColor = () => {
    const random = Math.floor(Math.random() * 10);
    const color = colorTheme[random];
    const palette = colorPalette[random];
    return `${color}.${palette}`;
  };

  return (
    <>
      <HStack spacing={8}>
        <Box
          w="200px"
          h="200px"
          maxH="sm"
          maxW="sm"
          shadow="lg"
          borderWidth="2px"
          borderRadius="lg"
          overflow="hidden"
        >
          <Heading p="3" fontSize="2xl" textAlign="center" color={randomColor}>
            Session 1
          </Heading>
          <Text p="3">Content 1</Text>
        </Box>
      </HStack>
    </>
  );
};

export default Session;

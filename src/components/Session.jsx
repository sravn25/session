import React, { useState } from 'react';
import {
  Box,
  Heading,
  HStack,
  Text,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';

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

  // const activity = {
  // id: activityArr.length + 1,
  // title: title,
  // timer: minute + hour * 60,
  // input: date,
  // };

  const [minute, setMinute] = useState(0);
  const [hour, setHour] = useState(0);

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
      <Text justifySelf="flex-start">Timer (Minute / Hour)</Text>
      <HStack>
        <NumberInput
          min={0}
          value={minute}
          onChange={timer => setMinute(timer)}
        >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <NumberInput min={0} value={hour} onChange={timer => setHour(timer)}>
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </HStack>
    </>
  );
};

export default Session;

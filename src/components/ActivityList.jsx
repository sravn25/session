import React from 'react';
import {
  HStack,
  VStack,
  Text,
  IconButton,
  StackDivider,
  Spacer,
  Badge,
  Box,
} from '@chakra-ui/react';
import { FaInfo, FaTrash } from 'react-icons/fa';

const ActivityList = ({ activityArr, deleteActivity }) => {
  if (!activityArr.length) {
    return (
      <Badge colorScheme="blue" p="4" m="4" borderRadius="lg">
        No activities
      </Badge>
    );
  }

  return (
    <>
      <Box
        color="gray.500"
        fontWeight="semibold"
        letterSpacing="wide"
        fontSize="xs"
        textTransform="uppercase"
        ml="2"
      >
        {activityArr.length === 1 ? (
          <Text>{activityArr.length} activity</Text>
        ) : (
          <Text>{activityArr.length} activities</Text>
        )}
      </Box>
      <VStack
        divider={<StackDivider />}
        borderColor="gray.100"
        borderWidth="2px"
        p="4"
        borderRadius="lg"
        w="100%"
        maxW={{ base: '90vw', sm: '80vw', lg: '50vw', xl: '40vw' }}
        alignItems="stretch"
      >
        {activityArr.map(item => (
          <HStack key={item.id}>
            <Text overflow="hidden">{item.title}</Text>
            <Spacer />
            <IconButton
              icon={<FaInfo />}
              isRound="true"
              onClick={() => console.log('')}
            />
            <IconButton
              icon={<FaTrash />}
              isRound="true"
              onClick={() => deleteActivity(item.id)}
            />
          </HStack>
        ))}
      </VStack>
    </>
  );
};

export default ActivityList;

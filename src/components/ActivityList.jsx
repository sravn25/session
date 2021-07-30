import React from 'react';
import {
  HStack,
  VStack,
  Text,
  IconButton,
  StackDivider,
  Spacer,
  Badge,
} from '@chakra-ui/react';
import { FaTrash } from 'react-icons/fa';

const ActivityList = ({ activityArr, deleteActivity }) => {
  if (!activityArr.length) {
    return (
      <Badge colorScheme="blue" p="4" m="4" borderRadius="lg">
        No activities
      </Badge>
    );
  }

  return (
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
          <Text>{item.body}</Text>
          <Spacer />
          <IconButton
            icon={<FaTrash />}
            isRound="true"
            onClick={() => deleteActivity(item.id)}
          />
        </HStack>
      ))}
    </VStack>
  );
};

export default ActivityList;

import React, { useState } from 'react';
import { Button, HStack, Input, useToast } from '@chakra-ui/react';

const AddActivity = ({ activityArr, addActivity }) => {
  const toast = useToast();

  const handleSubmit = e => {
    e.preventDefault();
    if (!text) {
      toast({
        title: 'No content',
        description: 'Cannot be empty',
        status: 'error',
        duration: '2000',
        isClosable: true,
      });
      return;
    }

    const activity = {
      id: activityArr.length + 1,
      body: text,
    };

    addActivity(activity);
    setText('');
  };

  const [text, setText] = useState('');

  return (
    <form onSubmit={handleSubmit}>
      <HStack mt="8">
        <Input
          variant="filled"
          placeholder="Add Activity"
          value={text}
          onChange={e => setText(e.target.value)}
        ></Input>
        <Button colorscheme="teal" px="8" type="submit" onClick={() => {}}>
          Add
        </Button>
      </HStack>
    </form>
  );
};

export default AddActivity;

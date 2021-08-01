import React, { useState } from 'react';
import {
  Button,
  HStack,
  VStack,
  Text,
  Input,
  useDisclosure,
  useToast,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Center,
  Spacer,
} from '@chakra-ui/react';

const AddActivity = ({ activityArr, addActivity }) => {
  const toast = useToast();

  const handleSubmit = e => {
    e.preventDefault();
    if (!title || !desc) {
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
      title: title,
      body: desc,
    };

    addActivity(activity);
    setTitle('');
    setDesc('');
    toast({
      title: 'Added!',
      status: 'success',
      duration: '2000',
      isClosable: true,
    });
  };

  const clear = () => {
    setTitle('');
    setDesc('');
  };

  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef();

  return (
    <div>
      <br />
      <Center>
        <Button mt={4} onClick={onOpen}>
          Add Activity
        </Button>
      </Center>
      <form onSubmit={handleSubmit}>
        <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add Activity</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <VStack align="start" spacing={4}>
                <Text justifySelf="flex-start">Title</Text>
                <Input
                  variant="flushed"
                  placeholder="Title..."
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                />
                <Text justifySelf="flex-start">Description</Text>
                <Input
                  variant="flushed"
                  placeholder="Description..."
                  value={desc}
                  onChange={e => setDesc(e.target.value)}
                />
              </VStack>
            </ModalBody>

            <ModalFooter>
              <HStack mt="8">
                <Button
                  colorScheme="green"
                  px={8}
                  pl={4}
                  pr={4}
                  type="submit"
                  onClick={handleSubmit}
                >
                  Add
                </Button>
                <Spacer />
                <Button
                  colorScheme="red"
                  px={4}
                  onClick={() => {
                    onClose();
                    clear();
                  }}
                >
                  Close
                </Button>
              </HStack>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </form>
      {/*
      <form onSubmit={handleSubmit}>
        <HStack mt="8">
          <Input
            variant="filled"
            placeholder="Add Activity"
            value={title}
            onChange={e => setTitle(e.target.value)}
          ></Input>
          <Button px="8" type="submit" onClick={() => {}}>
            Add
          </Button>
        </HStack>
      </form>
      */}
    </div>
  );
};

export default AddActivity;

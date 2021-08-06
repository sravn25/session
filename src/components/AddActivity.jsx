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
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react';

const AddActivity = ({ activityArr, addActivity }) => {
  const d = new Date();
  const toast = useToast();

  const handleSubmit = e => {
    e.preventDefault();
    if (!title) {
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
      timer: minute + hour * 60,
      date: `${year}-${month}-${day}`,
    };

    addActivity(activity);
    setTitle('');
    toast({
      title: 'Added!',
      status: 'success',
      duration: '2000',
      isClosable: true,
    });
    clear();
  };

  const clear = () => {
    setTitle('');
    setMinute(0);
    setHour(0);
    setDay(d.getDate());
    setMonth(d.getMonth() + 1);
    setYear(d.getFullYear());
  };

  const [title, setTitle] = useState('');
  const [minute, setMinute] = useState(0);
  const [hour, setHour] = useState(0);
  const [day, setDay] = useState(d.getDate());
  const [month, setMonth] = useState(d.getMonth() + 1);
  const [year, setYear] = useState(d.getFullYear());

  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef();
  const finalRef = React.useRef();

  return (
    <div>
      <Center>
        <Button mt={4} onClick={onOpen}>
          Add Activity
        </Button>
      </Center>
      <form onSubmit={handleSubmit}>
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add Activity</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <VStack align="start" spacing={4}>
                <Text justifySelf="flex-start">Title</Text>
                <Input
                  ref={initialRef}
                  variant="flushed"
                  placeholder="Title..."
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                />
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
                  <NumberInput
                    min={0}
                    value={hour}
                    onChange={timer => setHour(timer)}
                  >
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </HStack>
                <Text justifySelf="flex-start">Due Date</Text>
                <HStack spacing={4}>
                  <Input
                    variant="filled"
                    placeholder="DD"
                    value={day}
                    onChange={e => setDay(e.target.value)}
                  />
                  <Input
                    variant="filled"
                    placeholder="MM"
                    value={month}
                    onChange={e => setMonth(e.target.value)}
                  />
                  <Input variant="filled" placeholder="YYYY" value={year} />
                  onChange={e => setYear(e.target.value)}
                </HStack>
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
    </div>
  );
};

export default AddActivity;

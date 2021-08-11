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
  const d = new Date();
  const toast = useToast();

  const today = () => {
    const zero = '0';
    let thisDay = d.getDate();
    const thisDayInt = parseInt(thisDay);
    if (thisDayInt < 10) {
      thisDay = zero + thisDay;
    }
    let thisMonth = d.getMonth() + 1;
    const thisMonthInt = parseInt(thisMonth);
    if (thisMonthInt < 10) {
      thisMonth = zero + thisMonth;
    }
    const thisYear = d.getFullYear();
    return `${thisYear}-${thisMonth}-${thisDay}`;
  };

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
      date: date,
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
    setDate(today);
  };

  const [title, setTitle] = useState('');
  const [date, setDate] = useState(today);

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
                <Text justifySelf="flex-start">Due Date</Text>
                <Input
                  type="date"
                  name="due-date"
                  min={today()}
                  max="2022-04-30"
                  onChange={e => setDate(e.target.value)}
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
    </div>
  );
};

export default AddActivity;

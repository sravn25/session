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
  Checkbox,
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

  const sameYear = () => {
    const a = parseInt(startDate.substring(0, 4));
    const b = parseInt(dueDate.substring(0, 4));
    if (a === b) return true;
    else return false;
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
      startDate: sameYear() ? startDate.substring(5, 10) : startDate,
      dueDate: sameYear() ? dueDate.substring(5, 10) : dueDate,
      sameDay: sameDate,
      year: startDate.substring(0, 4),
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
    setStartDate(today);
    setDueDate(today);
  };

  const [title, setTitle] = useState('');
  const [startDate, setStartDate] = useState(today);
  const [dueDate, setDueDate] = useState(today);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef();
  const finalRef = React.useRef();

  const [sameDate, setSameDate] = useState(true);

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
                <Text justifySelf="flex-start">Start Date</Text>
                <Input
                  type="date"
                  name="start-date"
                  min={today()}
                  max="2022-04-30"
                  onChange={e => setStartDate(e.target.value)}
                />
                <HStack>
                  <Text
                    justifySelf="flex-start"
                    fontSize="xs"
                    color="gray.300"
                    fontWeight="semibold"
                  >
                    Same Day
                  </Text>
                  <Checkbox
                    isChecked={sameDate}
                    onChange={e => setSameDate(!sameDate)}
                  />
                </HStack>
                {!sameDate ? (
                  <>
                    <Text justifySelf="flex-start">End Date</Text>
                    <Input
                      type="date"
                      name="end-date"
                      min={today()}
                      max="2022-04-30"
                      onChange={e => setDueDate(e.target.value)}
                    />
                  </>
                ) : null}
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

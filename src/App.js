import React, { useState, useEffect } from 'react';
import { ChakraProvider, VStack, Grid, theme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Head from './components/Head';
import ActivityList from './components/ActivityList';
import AddActivity from './components/AddActivity';

function App() {
  const initialActivities = [
    {
      id: 1,
      body: 'Programming',
    },
    {
      id: 2,
      body: 'Write a new chapter ',
    },
    {
      id: 3,
      body: 'Flower the plants',
    },
  ];

  const [activities, setActivities] = useState(initialActivities);

  const addActivity = (activity) => {
    setActivities([...activities, activity]);
  }

  const deleteActivity = id => {
    const newActivity = activities.filter(act => act.id !== id);
    setActivities(newActivity);
  };

  return (
    <ChakraProvider theme={theme}>
      <Grid p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <VStack spacing={4}>
          <Head />
          <ActivityList activityArr={activities} deleteActivity={deleteActivity}/>
          <AddActivity activityArr={activities} addActivity={addActivity} />
        </VStack>
      </Grid>
    </ChakraProvider>
  );
}

export default App;

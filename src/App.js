import React, { useState, useEffect } from 'react';
import { ChakraProvider, VStack, Grid, theme, Spacer } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Head from './components/Head';
import ActivityList from './components/ActivityList';
import AddActivity from './components/AddActivity';

function App() {
  const [activities, setActivities] = useState(
    () => JSON.parse(localStorage.getItem('activities')) || []
  );

  useEffect(() => {
    localStorage.setItem('activities', JSON.stringify(activities));
  }, [activities]);

  const addActivity = activity => {
    setActivities([...activities, activity]);
  };

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
          <ActivityList
            activityArr={activities}
            deleteActivity={deleteActivity}
          />
          <AddActivity activityArr={activities} addActivity={addActivity} />
          <Spacer />
          <Spacer />
          <Spacer />
        </VStack>
      </Grid>
    </ChakraProvider>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import { Box, Button, Flex, Skeleton, Text } from '@chakra-ui/core';
import { getARandomJoke } from '../services/jokeApi';

type ApiType = {
  categories: [];
  created_at: Date;
  id: string;
  updated_at: Date;
  value: string;
};

const Home = () => {
  const [joke, setJoke] = useState<ApiType>();
  const [loading, setLoading] = useState(false);

  const getARandom = async () => {
    setLoading(true);
    const data = await getARandomJoke();
    setLoading(false);
    return data;
  };

  const handleRefresh = async () => {
    const joke = await getARandomJoke();
    setJoke(joke);
  };

  useEffect(() => {
    getARandom().then((response) => setJoke(response));
  }, []);

  return (
    <Flex
      justify='center'
      alignItems='center'
      height='100vh'
      backgroundColor='#fff4da'
      data-testid='jokeContainer'
    >
      <Box d='flex' flexDirection={['column', 'row']} padding='1.2rem'>
        <Skeleton
          isLoaded={!loading}
          startColor='#000'
          endColor='#fff4da'
          height='40px'
          marginX='1rem'
        >
          <Text
            maxWidth='700px'
            as='p'
            alignSelf='center'
            fontSize='1.5rem'
            marginRight='1rem'
            textDecoration='underline'
            data-testid='jokeText'
          >
            {joke?.value}
          </Text>
        </Skeleton>
        <Button
          marginTop={['1.5rem', 0, 0, 0]}
          alignSelf='center'
          variant='outline'
          fontSize='1rem'
          onClick={() => handleRefresh()}
          disabled={loading}
          borderColor='#2a2c2e'
          borderRadius='0'
          _hover={{ backgroundColor: '#e8daba' }}
        >
          Refresh
        </Button>
      </Box>
    </Flex>
  );
};

export default Home;

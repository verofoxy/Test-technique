import { Stack } from '@chakra-ui/react'
import TopBar from './TopBar.js';
import React from 'react';

import MoviesPart from './MoviesPart.js';

export default function App() {

  return (
    <Stack w="100%" h="100vh" overflowX={"hidden"}>
      <TopBar />
      <MoviesPart />
    </Stack >
  );
}

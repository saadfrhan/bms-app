"use client";

import { Flex, Heading, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react'

const DashboardPage = () => {

  const DashboardBackground = useColorModeValue('white', 'gray.700');

  return (
    <Flex direction="column" background={DashboardBackground} p={9} rounded={9} marginTop={3}>
      <Heading size="md" fontWeight="bold" marginBottom={1.5}>Good Morning, name</Heading>
      <Text color="gray">{new Date().toDateString().slice(3, 15)}</Text>
      <Flex direction="column" marginTop={3}>
        <Heading size="md" fontWeight="bold" marginBottom={1.5}>Today's Tasks</Heading>
        <Text color="gray">No tasks for today</Text>
      </Flex>
    </Flex>
  )
}

export default DashboardPage
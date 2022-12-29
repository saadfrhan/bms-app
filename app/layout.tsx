"use client";

import Link from 'next/link';
import './global.css';
import { Button, ChakraProvider, IconButton, Text } from '@chakra-ui/react';
import { Flex, useColorModeValue } from '@chakra-ui/react';
import { FaSignOutAlt as SignOutIcon } from 'react-icons/fa';
import { MdOutlineSpaceDashboard as DashboardIcon } from 'react-icons/md'
import { GrNotes as RecordsIcon } from 'react-icons/gr'
import { IoMdCreate as CreateRecordIcon } from 'react-icons/io'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const NavBackground = useColorModeValue('#FBF7F4', 'gray.700');
  const FullBackground = useColorModeValue('#F9F7F5', 'gray.800');

  const navItems = [
    {
      name: 'Dashboard',
      NavIcon: DashboardIcon,
      href: '/',
    },
    {
      name: 'Records',
      NavIcon: RecordsIcon,
      href: '/records',
    },
    {
      name: 'Create Record',
      NavIcon: CreateRecordIcon,
      href: '/records/new',
    },
  ];


  return (
    <ChakraProvider>
      <Flex height="100vh" width={"max"} background={FullBackground}>
        <Flex direction="column" background={NavBackground} p={6} rounded={6}>
          {navItems.map(({ name, NavIcon, href }) => (
            <Button width="100%" size="lg" marginBlock={1} paddingRight="70" paddingLeft="5" textAlign="left" justifyContent="flex-start" gap="2" leftIcon={<NavIcon size={25} />} fontWeight="bold" _hover={{ bg: '#EEE6E2' }} backgroundColor="transparent">
              <Link href={href}>
                {name}
              </Link>
            </Button>
          ))}
          <Flex display={"flex"} marginTop="auto" alignItems="baseline">
            <IconButton
              aria-label="Logout"
              icon={<SignOutIcon color='white' />}
              colorScheme="black"
              backgroundColor="black"
              rounded="full"
            /> <Text fontSize="lg" fontWeight="bold">&nbsp;&nbsp;&nbsp;&nbsp;Logout</Text>
          </Flex>
        </Flex>
        {children}
      </Flex>
    </ChakraProvider>
  );
}
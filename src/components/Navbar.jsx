import { UnlockIcon, IconButton, HamburgerIcon } from "@chakra-ui/icons"
import {
  Box, Button, Flex, Text, Heading, Spacer, HStack, useToast,
} from "@chakra-ui/react"

const NavBar = () => {



  const usersName = JSON.parse(localStorage.getItem("name"))

  // console.log(usersName);

  return (
    <Flex as="nav" p="10px" alignItems={{ base: "start", lg: "Center" }} mb="40px" flexDirection={{ base: "column", md: "row" }} justifyContent="space-between">
      {/* right */}
      <Box display={"flex"} flexDirection={"column"} alignItems={"start"}>
        <Heading as="h6">Accessment Dashboard</Heading>
        <Text color={"gray.500"}>Welcome back! {usersName}</Text>

      </Box>
      {/* Create space */}
      {/* <Spacer /> */}

      {/* left */}
      <HStack spacing="20px">
        <Button colorScheme="purple" >Logout </Button>

      </HStack>
    </Flex>
  )
}

export default NavBar
import { Outlet, useLocation } from "react-router-dom"
import NavBar from "../components/Navbar"
import { Grid, GridItem, Text, Box, Card, CardHeader, Flex, CardBody, Divider, CardFooter, Heading, Button, HStack, } from "@chakra-ui/react"
import Sidebar from "../components/Sidebar"

export default function Dashboard() {


  const location = useLocation();

  const user = location.state?.user

  localStorage.setItem("name", JSON.stringify(user.name))

  console.log(user, 'users');
  return (
    <Box>
      <Card maxW={{ base: "100%", md: "50%", lg: "50%", xl: "38%" }} bg="white">
        <CardHeader>
          <Flex >
            <Box>
              <Heading as="h3" size="sm">Below are your details</Heading>
            </Box>
          </Flex>
        </CardHeader>
        {/* <CardBody color="gray.500">
         
          </CardBody> */}

        <Divider borderColor="gray.200" />

        <CardFooter>
          <HStack width={"100% !important"}>
            <Box display={"flex"} flexDirection={"row"} alignItems={"center"} width={"100%"} justifyContent={"space-between"}>
              <Box>
                <Text>{user.username}</Text>
                <Text color="gray.500">{user.email}</Text>

              </Box>

              <Box>
                <Text>{user.id}</Text>
              </Box>


            </Box>
          </HStack>

        </CardFooter>
      </Card>
    </Box>
  )
}

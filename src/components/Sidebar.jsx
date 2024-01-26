import { AtSignIcon, CalendarIcon, EditIcon, ExternalLinkIcon } from "@chakra-ui/icons"
import { List, ListIcon, ListItem, Heading, Box, Text, HStack, Divider, Avatar, AvatarBadge, Icon} from "@chakra-ui/react"
import { NavLink } from "react-router-dom"

const Sidebar = () => {


  const username = JSON.parse(localStorage.getItem("username"))
  const email = JSON.parse(localStorage.getItem("email"))

  return (
    <List  fontSize="1em" spacing={4} position={"relative"} height="100%">
        <ListItem>
            <NavLink to="/dashboard">
                
                <Box display={"flex"} flexDirection={"row"} alignItems="center" gap={1} p="15px">
                {/* <ListIcon as={CalendarIcon} color="black"/> */}
                    <Text fontSize="25px" fontWeight={"bold"} bg="purple.500" px="5px" py="1px" color="white" > U</Text>
                    <Text fontSize="22px">Untitled UI</Text>
                </Box>
            </NavLink>
        </ListItem>
        <ListItem cursor={"pointer"} borderRadius={"5px"} bg= "#f8f6ff" p="15px" color="#7f56d9" _hover={{ color: "white", cursor: "pointer", bg: "#aa97d4"}}>
            <NavLink to="/dashboard" >
            <ListIcon as={EditIcon} color="#7f56d9" />
                Home
            </NavLink>
        </ListItem>



        <Box display={{base: "none", md: "none", lg: "block"}}  position={"absolute"} bottom="0" p="10px" width="100%">
        <Divider borderColor="gray.500" />
        <HStack spacing="20px" py={"10px"} display={"flex"} justifyContent={"space-between"} alignItems={"center"}>
        <Box display={"flex"} flexDirection={"row"} gap={3} alignItems={"center"}>

        <Avatar src="/img/mario.png" height={"40px"} width={"40px"}>
          <AvatarBadge bg="teal.500" width="1.3em">
            <Text fontSize="xs" color="white">3</Text>
          </AvatarBadge>
        </Avatar>
        <Box fontSize={"10px"}>

        <Text>{username}</Text>
        <Text>{email}</Text>
        
        </Box>

            </Box>
            <Box>
                <Icon as={ExternalLinkIcon} color="gray.400"></Icon>
            </Box>
        </HStack>
        </Box>
    </List>
  )
}

export default Sidebar
import React from "react";
import { Outlet } from "react-router-dom"
import { Grid, GridItem, Flex, Heading, Text, Image } from "@chakra-ui/react"
// import { useLoaderData } from "react-router";


// form imports
import { Button } from "@chakra-ui/button";
import { Checkbox } from "@chakra-ui/checkbox";
import { FormControl, FormHelperText, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Box } from "@chakra-ui/layout";
import { Form, redirect, Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';


export default function Login() {


  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3005/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const res = await response.json();

      const user = res.data



      // console.log(res, 'from response');
      if (response.status !== 200) {
        return toast.error(res.message);
      }

      // console.log(data);
      navigate('/dashboard', { state: { user } });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <Grid templateColumns={{ base: "max-content", xl: "repeat(2, 1fr)" }} bg="gray.50" h='100%'>
      {/* h='calc(100vh)' */}
      <GridItem
        as="main"
        bg="white"
        colSpan={{ base: 2, xl: 1 }}
        // display={{base:"block"}}
        minHeight={{ base: "max-content", lg: "100vh", xl: "100%" }}
        padding={{ base: "20px" }}
        alignSelf="center"
      >
        <Box display={"flex"} flexDirection={"row"} alignItems="center" gap={1} p="15px">
          <Heading as="h4" bg="purple.500" px="5px" py="1px" color="white" > U</Heading>
          <Heading as="h4">Untitled UI</Heading>
        </Box>
        <Box maxW={{ base: "100%", xl: "70%" }} margin="auto">

          <Flex as="div" p={{ md: "40px", xl: "60px" }} flexDirection="column" justifyContent="center" maxW={{ base: "480px", md: "100%", lg: "100%", xl: "100%" }} >
            <Box mb="20px">
              <Heading as="h2" mb="10px">Log In</Heading>
              <Text color="gray.500">Welcome back! Please enter your details.</Text>
            </Box>
            <Form method="post" onSubmit={handleSubmit} >

              {/* Email */}
              <FormControl mb="40px" color="black">
                <FormLabel> Email:</FormLabel>
                <Input type="text" name="email" placeholder="Enter your email" onChange={handleChange}></Input>
              </FormControl>


              {/* Password */}
              <FormControl mb="40px">
                <FormLabel> Password:</FormLabel>
                <Input type="password" name="password" placeholder="Enter you password" onChange={handleChange}></Input>
                {/* <FormHelperText>Must be at least 8 characters</FormHelperText> */}
              </FormControl>

              <FormControl display="flex" alignItems="center" mb="40px" justifyContent={"space-between"}>
                <Box display="flex" alignItems="center">

                  <Checkbox
                    name="isPriority"
                    size="lg"
                    colorScheme="purple"
                    defaultChecked
                  />
                  <FormLabel mb="0 " ml="10px" fontSize="13px">Remember for 30 days </FormLabel>
                </Box>
                <FormLabel mb="0 " ml="10px" color={"#7f56d9"} fontSize="13px" cursor={"pointer"}>Forgot Password? </FormLabel>
              </FormControl>

              <Button type="submit" bg="#7f56d9" color="white" mb={{ base: "20px", lg: "1px" }} w="100%"> Sign In  </Button>

            </Form>
          </Flex>
        </Box>

        <Box display={"flex"} justifyContent={"center"} alignItems={"center"} my={{ base: "30px", lg: "5px", xl: "3px" }}>
          <Text>Don't have an account? <span style={{ color: "#7f56d9" }}><Link to="/signup">Sign up</Link></span> </Text>
        </Box>

        <Box display={"flex"} flexDirection={"row"} justifyContent={"space-between"} alignItems="center" gap={1} p="15px">
          <Text as="h6" color="gray.500" display={{ base: "none", xl: "block" }}> @ Untitled UI 2077</Text>
          {/* <Text as="h6" color="gray.500">help@untitledui.com</Text> */}
        </Box>
        <Toaster />
      </GridItem>
      <GridItem
        as="main"
        colSpan={{ xl: 1 }}
        display={{ base: "none", xl: "block" }}

      >
        <Box p="20px" >

          <Box width="100%" height="100%" py="70px" pl="70px" display={{ lg: "none", xl: "block" }}>

            <Image src="/img/dash.png" />
          </Box>

        </Box>
      </GridItem>
      <Outlet />
    </Grid>

  )
}


export const logInAction = async ({ request }) => {
  const data = await request.formData()

  const login = {

    email: data.get('email'),
    password: data.get('password'),
  }
  console.log(login)
  return redirect('/dashboard')

}


import React from "react";
import { Outlet, useActionData } from "react-router-dom"
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


export default function SignUp(props) {

  // const notify = () => toast('Here is your toast.')


  // const actionData = useActionData();




  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://utilityapi-byq0.onrender.com/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const res = await response.json();

      // console.log(res, 'from response');
      if (!response.ok) {
        toast.error(res.message);
      }


      const otpData = res.data
      // console.log(data);
      navigate('/verification', { state: { otpData } });
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
        <Box maxW={{ base: "100%", lg: "80%", xl: "70%" }} margin="auto">

          <Flex as="div" p={{ md: "40px", xl: "60px" }} flexDirection="column" justifyContent="center" maxW={{ base: "480px", md: "100%", lg: "100%", xl: "100%" }} >
            <Box mb="20px">
              <Heading as="h2" mb="10px">Sign Up</Heading>
              <Text color="gray.500">Start your 30-day free trial</Text>
            </Box>

            {/* Form Start */}
            <Form method="post" onSubmit={handleSubmit}>
              {/* onSubmit={handleSubmit} */}

              {/* name */}
              <FormControl isRequired mb="40px">
                <FormLabel> Name:</FormLabel>
                <Input type="text" name="name" placeholder="Enter your name" onChange={handleChange}></Input>
                {/* {actionData?.name && <small>{actionData?.name}</small>} */}
              </FormControl>

              {/* Username */}
              <FormControl isRequired mb="40px">
                <FormLabel> Username:</FormLabel>
                <Input type="text" name="username" placeholder="Enter your username" onChange={handleChange}></Input>
                {/* {actionData?.username && <small>{actionData?.username}</small>} */}

              </FormControl>

              {/* Email */}
              <FormControl isRequired mb="40px" color="black">
                <FormLabel> Email:</FormLabel>
                <Input type="text" name="email" placeholder="Enter your email" onChange={handleChange}></Input>
                {/* {actionData?.email && <small>{actionData?.email}</small>} */}

              </FormControl>


              {/* Password */}
              <FormControl isRequired mb="40px">
                <FormLabel> Password:</FormLabel>
                <Input type="password" name="password" placeholder="Create a password" onChange={handleChange}></Input>
                {/* {actionData?.password && <small>{actionData?.password}</small>} */}

                <FormHelperText>Must be at least 8 characters</FormHelperText>
              </FormControl>


              <Button type="submit" bg="#7f56d9" color="white" mb="20px" w="100%">  Submit  </Button>


              <Box display={"flex"} justifyContent={"center"}>
                <Text>Already have an account? <span style={{ color: "#7f56d9" }}><Link to="/login">Log in</Link></span> </Text>
              </Box>

            </Form>


          </Flex>
        </Box>

        <Box display={"flex"} flexDirection={"row"} justifyContent={"space-between"} alignItems="center" gap={1} p="15px">
          <Text as="h6" color="gray.500" display={{ base: "none", lg: " block" }}> @ Untitled UI 2077</Text>
          <Text as="h6" color="gray.500" display={{ base: "none", lg: " block" }}>help@untitledui.com</Text>
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

export const signUpAction = async ({ request }) => {



  const data = await request.formData()



  const signup = {
    name: data.get('name'),
    username: data.get('username'),
    email: data.get('email'),
    password: data.get('password'),
  }
  console.log(signup)


  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(signup),

  };

  let sendReq = await fetch("http://localhost:3005/register", requestOptions)
    .then(response => response.json()).catch(e => ({ error: e }));

  const otp = sendReq.data.otp

  if (sendReq.status === true) {
    return redirect('/verification', { state: otp })


  }


  return null

}

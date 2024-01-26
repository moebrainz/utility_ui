import React, { useState } from 'react';
// import OtpInput from 'react-otp-input';
import OtpInput from 'react18-input-otp'
import { PinInput, PinInputField, HStack } from '@chakra-ui/react'

import { List, ListIcon, ListItem, Heading, Box, Flex, Text, Button, Icon} from "@chakra-ui/react";



import { CheckCircleIcon } from "@chakra-ui/icons"
import { Link } from 'react-router-dom';

export default function AccountVerified() {
    return (
        <Box maxW={{ base: "100%", xl: "60%" }} margin="auto">
            <Flex w="100%" alignItems="center" flexDirection="column" justifyContent="center" mt={{ base: "25px", md: "70px", lg: "60px", xl: "60px" }} p={{ base: "15px", md: "80px", lg: "70px", xl: "70px" }}>
                <Heading as="h4" my="10px" px="5px" py="1px" color="white" > 
                <Icon as={CheckCircleIcon} color={'green.400'} />
                </Heading>
                <Heading as="h4" size="md" mb="2">Account verified</Heading>
                <Text color="gray.500" fontSize="13px" fontWeight="bold">click below to login</Text>



                <Box w={{ base: "100%", md: "48%", lg: "33%", xl: "41%" }} py="10px" display="flex" flexDirection="column" justifyContent="center" alignItems="center">



                    <Button type="submit" bg="#7f56d9" color="white" mb="20px" w="100%">
                        <Link to="/login" width="100%"> Continue </Link>  </Button>


                </Box>
            </Flex>
        </Box>



    )
}



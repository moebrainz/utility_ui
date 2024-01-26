import React, { useState } from 'react';
import OtpInput from 'react18-input-otp'
import { Form, redirect, Link, useLocation, useNavigate } from "react-router-dom";
import { PinInput, PinInputField, HStack } from '@chakra-ui/react'
import toast, { Toaster } from 'react-hot-toast';

import { List, ListIcon, ListItem, Heading, Box, Flex, Text, Button, Icon } from "@chakra-ui/react";



import { ArrowBackIcon } from "@chakra-ui/icons"


export default function VerificationPage() {

    const navigate = useNavigate();
    const [formData, setFormData] = React.useState({});


    const location = useLocation();

    const otp = location.state?.otpData


    const handleSubmit = async (e) => {
        e.preventDefault();


        const number = Object.values(formData).join('')

        // Redirect when successful
        try {

            if (number !== otp.otp) {
                toast.error('OTP does not matches');
            }

            if (otp.otp.length !== 6) {
                toast.error('OTP should be a 6-digit number');
            }
            toast.success('OTP is valid')

            return navigate('/accountverified')
        } catch (error) {
            error = error.message;
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <Box maxW={{ base: "100%", xl: "60%" }} margin="auto">
            <Flex w="100%" alignItems="center" flexDirection="column" justifyContent="center" mt={{ base: "25px", md: "70px", lg: "60px", xl: "60px" }} p={{ base: "15px", md: "80px", lg: "70px", xl: "70px" }}>
                <Heading as="h4" bg="purple.500" my="10px" px="5px" py="1px" color="white" > U</Heading>
                <Heading as="h4" size="md" mb="2">Enter your Verification code</Heading>
                <Text py="2px">Your OTP is <strong>{otp?.otp}</strong> Resets in 00:30</Text>



                <Form method="post" onSubmit={handleSubmit} >

                    <HStack py="10px">
                        <PinInput otp>
                            <PinInputField name='number1' onChange={handleChange} />
                            <PinInputField name='number2' onChange={handleChange} />
                            <PinInputField name='number3' onChange={handleChange} />

                            <span> - </span>

                            <PinInputField name='number4' onChange={handleChange} />
                            <PinInputField name='number5' onChange={handleChange} />
                            <PinInputField name='number6' onChange={handleChange} />
                        </PinInput>
                    </HStack>



                    <Box w={{ base: "100%", md: "100%", lg: "100%", xl: "100%" }} py="10px" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                        <Button type="submit" bg="#7f56d9" color="white" mb="20px" w="100%">  Submit  </Button>

                        <Link to="/signup">
                            <Text color="gray.500" fontSize="13px" fontWeight="bold">
                                <Icon as={ArrowBackIcon} color="#7f56d9" /> Back to sign-up
                            </Text>
                        </Link>
                    </Box>
                </Form>
                <Toaster />
            </Flex>
        </Box>



    )
}

export const verificationAction = async ({ request }) => {
    const data = await request.formData()

    const verification = {

        number1: data.get('number1'),
        number2: data.get('number2'),
        number3: data.get('number3'),
        number4: data.get('number4'),
        number5: data.get('number5'),
        number6: data.get('number6'),

    }

    const number = Object.values(verification).join('').toString()

    function verifyOTP(otp) {
        if (typeof otp !== 'string' || otp.length !== 6 || isNaN(otp)) {
            throw new Error('OTP should be a 6-digit number');
        }


        return true;
    }

    // Redirect when successful
    try {
        verifyOTP(number);
        console.log('OTP is valid');

        return redirect('/accountverified')
    } catch (error) {
        console.error(error.message);
    }

    return null

}
import { Outlet } from "react-router-dom"
// import { Grid, GridItem , Flex, Heading, Text, Image} from "@chakra-ui/react"
// // import { useLoaderData } from "react-router";


// // form imports
// import { Button } from "@chakra-ui/button";
// import { Checkbox } from "@chakra-ui/checkbox";
// import { FormControl, FormHelperText, FormLabel } from "@chakra-ui/form-control";
// import { Input } from "@chakra-ui/input";
// import { Box } from "@chakra-ui/layout";
// import { Textarea } from "@chakra-ui/textarea";
// import { Form, redirect, Link } from "react-router-dom";

export default function RootLayout() {
// const task = useLoaderData();

  return (
    <div>
        <Outlet />
    </div>
   
  )
}


// export const createAction = async ({ request }) => {
//     const data = await request.formData()
    
//     const task = {
//     title: data.get('title'), 
//     description: data.get('description'), 
//     isPriority: data.get('isPriority') === ''
//     }
//     console.log (task)
//     return redirect('/')
    
//     }
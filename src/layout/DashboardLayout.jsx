import { Outlet } from "react-router";
import { Grid, GridItem } from "@chakra-ui/react"
import NavBar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function DashboardLayout() {
  return (
    <Grid templateColumns="repeat(6, 1fr)" bg="gray.50">
      <GridItem
        as="aside"
        bg="white"
        colSpan={{ base: 6, lg: 2, xl: 1 }}
        minHeight={{ lg: "100vh" }}
        padding={{ base: "20px", lg: "30px" }}
        shadow={"2px"}
      >
        <Sidebar />
      </GridItem>
      <GridItem
        as="main"
        colSpan={{ base: 6, lg: 4, xl: 5 }}
        padding={{ base: "10px", lg: "40px" }}
      >
        <NavBar />
        <Outlet />
      </GridItem>
    </Grid>
  )
}

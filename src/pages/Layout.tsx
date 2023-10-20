import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

/* A layout component is a component that wraps other components and provides a common layout for them.
In this case, we want to wrap our NavBar component around all of our pages.
We can do this by using the Outlet component from react-router-dom.
The Outlet component is a placeholder for where the child routes will be rendered.
We can then render the NavBar component above the Outlet component.
This will render the NavBar component on every page that is rendered inside of the Outlet component. */
export const Layout = () => {
  return (
    <>
      <NavBar />
      <Box padding={5}>
        <Outlet />
      </Box>
    </>
  );
};

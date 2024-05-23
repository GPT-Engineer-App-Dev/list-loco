import { Box, Flex, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Navbar = () => (
  <Box bg="gray.200" px={4} py={2}>
    <Flex justify="space-between" align="center">
      <Link as={NavLink} to="/" px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "gray.300" }}>
        Home
      </Link>
      <Link as={NavLink} to="/about" px={2} py={1} rounded="md" _hover={{ textDecoration: "none", bg: "gray.300" }}>
        About
      </Link>
    </Flex>
  </Box>
);

export default Navbar;
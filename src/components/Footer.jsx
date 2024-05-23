import { Box, Text } from "@chakra-ui/react";

const Footer = () => (
  <Box as="footer" py={4} textAlign="center" bg="gray.200" mt={10}>
    <Text>&copy; {new Date().getFullYear()} Todo App. All rights reserved.</Text>
  </Box>
);

export default Footer;
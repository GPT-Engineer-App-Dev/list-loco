import { Box, Text, Heading, VStack, Flex } from "@chakra-ui/react";

const About = () => (
  <Box p={4}>
    <Flex direction="column" align="center" justify="center" p={10}>
      <Heading mb={4}>About This Todo App</Heading>
      <Text fontSize="lg" mb={6}>
        This Todo App is a simple and efficient way to manage your daily tasks. Built with React and Chakra UI, it offers a clean and intuitive interface for users to add, delete, and mark tasks as completed.
      </Text>
    </Flex>
    <Box bg="gray.100" p={10}>
      <Heading size="lg" textAlign="center" mb={4}>Features</Heading>
      <VStack spacing={5}>
        <Flex align="center">
          <Text ml={2}>Add new tasks easily</Text>
        </Flex>
        <Flex align="center">
          <Text ml={2}>Mark tasks as completed</Text>
        </Flex>
        <Flex align="center">
          <Text ml={2}>Delete tasks you no longer need</Text>
        </Flex>
      </VStack>
    </Box>
  </Box>
);

export default About;
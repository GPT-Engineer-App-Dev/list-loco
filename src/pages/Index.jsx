import { useState } from "react";
import { Container, VStack, HStack, Input, Button, Text, Box, Checkbox, IconButton } from "@chakra-ui/react";
import { FaTrash, FaEdit, FaSave } from "react-icons/fa";

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editTask, setEditTask] = useState("");

  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask("");
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const toggleTaskCompletion = (index) => {
    const newTasks = tasks.map((t, i) => 
      i === index ? { ...t, completed: !t.completed } : t
    );
    setTasks(newTasks);
  };

  const startEditing = (index) => {
    setEditIndex(index);
    setEditTask(tasks[index].text);
  };

  const saveTask = (index) => {
    const newTasks = tasks.map((t, i) => 
      i === index ? { ...t, text: editTask } : t
    );
    setTasks(newTasks);
    setEditIndex(null);
    setEditTask("");
  };

  return (
    <Container centerContent maxW="container.md" py={10}>
      <VStack spacing={4} w="100%">
        <HStack w="100%">
          <Input 
            placeholder="Add a new task" 
            value={task} 
            onChange={(e) => setTask(e.target.value)} 
          />
          <Button onClick={addTask} colorScheme="green">Add Task</Button>
        </HStack>
        <VStack w="100%" spacing={3}>
          {tasks.map((t, index) => (
            <HStack key={index} w="100%" p={2} borderWidth={1} borderRadius="md" justifyContent="space-between">
              <Checkbox 
                isChecked={t.completed} 
                onChange={() => toggleTaskCompletion(index)}
              >
                {editIndex === index ? (
                  <Input 
                    value={editTask} 
                    onChange={(e) => setEditTask(e.target.value)} 
                  />
                ) : (
                  <Text as={t.completed ? "s" : ""}>{t.text}</Text>
                )}
              </Checkbox>
              <HStack>
                {editIndex === index ? (
                  <IconButton 
                    aria-label="Save task" 
                    icon={<FaSave />} 
                    onClick={() => saveTask(index)} 
                  />
                ) : (
                  <IconButton 
                    aria-label="Edit task" 
                    icon={<FaEdit />} 
                    onClick={() => startEditing(index)} 
                  />
                )}
                <IconButton 
                  aria-label="Delete task" 
                  icon={<FaTrash />} 
                  onClick={() => deleteTask(index)} 
                />
              </HStack>
            </HStack>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;
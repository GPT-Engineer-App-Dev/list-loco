import { useState } from "react";
import { Container, VStack, HStack, Input, Button, Text, Box, Checkbox, IconButton } from "@chakra-ui/react";
import { FaTrash } from "react-icons/fa";

const Index = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editedTask, setEditedTask] = useState("");

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

  const editTask = (index) => {
    setEditingIndex(index);
    setEditedTask(tasks[index].text);
  };

  const saveTask = (index) => {
    const newTasks = tasks.map((t, i) => 
      i === index ? { ...t, text: editedTask } : t
    );
    setTasks(newTasks);
    setEditingIndex(null);
    setEditedTask("");
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
                {editingIndex === index ? (
                  <Input 
                    value={editedTask} 
                    onChange={(e) => setEditedTask(e.target.value)} 
                    onBlur={() => saveTask(index)}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") {
                        saveTask(index);
                      }
                    }}
                    autoFocus
                  />
                ) : (
                  <Text as={t.completed ? "s" : ""} onDoubleClick={() => editTask(index)}>
                    {t.text}
                  </Text>
                )}
              </Checkbox>
              <IconButton 
                aria-label="Delete task" 
                icon={<FaTrash />} 
                onClick={() => deleteTask(index)} 
              />
            </HStack>
          ))}
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;
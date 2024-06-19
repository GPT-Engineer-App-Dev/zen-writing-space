import { Container, Text, VStack, Heading, Box, Image, Link, HStack, Button, useToast } from "@chakra-ui/react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom"; // Import RouterLink

import { useState } from "react";

const Index = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: "First Post", content: "This is the first post." },
    { id: 2, title: "Second Post", content: "This is the second post." },
  ]);
  const toast = useToast();

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      setPosts(posts.filter(post => post.id !== id));
      toast({
        title: "Post deleted.",
        description: "The blog post has been deleted.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    }
  };
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to My Blog</Heading>
        <Box boxSize="sm">
          <Image src="/images/blog-banner.jpg" alt="Blog Banner" borderRadius="md" />
        </Box>
        <Text fontSize="lg" textAlign="center">
          Hi, I'm [Your Name], a passionate writer and tech enthusiast. Follow my journey as I share insights on technology, programming, and life.
        </Text>
        <HStack spacing={4}>
          <Link href="https://twitter.com" isExternal>
            <FaTwitter size="24px" />
          </Link>
          <Link href="https://linkedin.com" isExternal>
            <FaLinkedin size="24px" />
          </Link>
          <Link href="https://github.com" isExternal>
            <FaGithub size="24px" />
          </Link>
        </HStack>
        <Button as={RouterLink} to="/add-post" colorScheme="teal" size="md">Add New Post</Button> {/* Add button to navigate to AddPost */}
      {posts.map(post => (
          <Box key={post.id} p={5} shadow="md" borderWidth="1px" width="100%">
            <Heading fontSize="xl">{post.title}</Heading>
            <Text mt={4}>{post.content}</Text>
            <Button colorScheme="red" size="sm" mt={4} onClick={() => handleDelete(post.id)}>Delete</Button>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;
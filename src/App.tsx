import {
  Box,
  Container,
  Grid,
  Heading,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";
import { useContext } from "react";
import PostCard from "./components/PostCard/PostCard";
import { PostContext } from "./contexts/PostsContext";

type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

function App() {
  const { posts, isLoading } = useContext(PostContext);

  const renderSkeletons = () => {
    const list = [];
    for (let i = 0; i < 10; i++) {
      list.push(
        <Box padding="6" boxShadow="lg" bg="white">
          <Skeleton height={"30px"} />
          <SkeletonText mt="4" noOfLines={4} spacing="4" />
          <SkeletonText mt="4" noOfLines={4} spacing="4" />
          <SkeletonText mt="4" noOfLines={4} spacing="4" />
        </Box>
      );
    }

    return list;
  };

  return (
    <Container bgColor="gray.100" maxW="full" minHeight={"100vh"} padding="5">
      <Heading color="gray.600" m="5" size="2xl">
        Novatech Posters App
      </Heading>

      <Grid
        gridTemplateColumns={"repeat(auto-fit,minmax(350px,1fr))"}
        gap={10}
        marginTop="20"
      >
        {isLoading
          ? renderSkeletons()
          : posts && posts.map((post: Post) => <PostCard {...post} />)}
      </Grid>
    </Container>
  );
}

export default App;

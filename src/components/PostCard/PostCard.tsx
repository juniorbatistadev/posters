import { DeleteIcon } from "@chakra-ui/icons";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  Container,
  Heading,
  ScaleFade,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useContext, useRef, useState } from "react";
import { PostContext } from "../../contexts/PostsContext";

type PostCardProps = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

function PostCard({ title, body, id }: PostCardProps) {
  const { deletePost } = useContext(PostContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef(null);

  const [animate, setAnimate] = useState(true);

  const handleDelete = () => {
    setAnimate(false);
    onClose();
    deletePost(id);
  };

  return (
    <ScaleFade initialScale={0.3} in={animate} unmountOnExit={true}>
      <Container
        backgroundColor={"white"}
        padding="10"
        boxShadow="xl"
        borderRadius={"lg"}
        height="100%"
      >
        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                Delete Post
              </AlertDialogHeader>

              <AlertDialogBody>
                Are you sure you want to delete this post?
              </AlertDialogBody>

              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                  Cancel
                </Button>
                <Button colorScheme="red" onClick={handleDelete} ml={3}>
                  Delete
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
        <Heading
          as={"h6"}
          fontSize="27"
          color={"gray.600"}
          textTransform="capitalize"
        >
          {title}
        </Heading>
        <Text marginTop={"10"} fontSize="15" color={"gray.600"}>
          {body}
        </Text>
        <Button
          onClick={onOpen}
          colorScheme="red"
          alignItems={"center"}
          width="100%"
          marginTop="10"
        >
          Delete
          <DeleteIcon height={4} width={4} marginLeft="3" />
        </Button>
      </Container>
    </ScaleFade>
  );
}

export default PostCard;

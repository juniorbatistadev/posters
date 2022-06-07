import { createContext, useState, useEffect } from "react";

type Post = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

type PostProviderProps = {
  children: React.ReactNode;
};

type PostContextType = {
  posts: Post[] | null;
  isLoading: boolean;
  deletePost: (id: number) => void;
};

export const PostContext = createContext({} as PostContextType);

export const PostProvider = ({ children }: PostProviderProps) => {
  const [posts, setPosts] = useState<Post[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    const getData = async () => {
      const response = await fetch(url);
      const data = await response.json();

      setPosts(data);
      setIsLoading(false);
    };
    getData();
  }, [setIsLoading]);

  const deletePost = (id: number) => {
    if (posts !== null) {
      setPosts(posts.filter((post) => post.id !== id));
    }
  };

  return (
    <PostContext.Provider value={{ posts, isLoading, deletePost }}>
      {children}
    </PostContext.Provider>
  );
};

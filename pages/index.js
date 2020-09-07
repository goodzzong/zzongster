import React from "react";
import { useSelector } from "react-redux";
import AppLayout from "../components/AppLayout";

const Home = () => {
  const { isLoggedIn } = useSelector((state) => state.user);
  const { mainPosts } = useSelector((state) => state.post);
  return (
    <AppLayout>
      <PostForm />
      <PostCard />
    </AppLayout>
  );
};

export default Home;

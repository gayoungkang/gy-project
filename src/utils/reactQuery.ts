import { useInfiniteQuery } from "react-query";
import { fetchPosts } from "@hooks/queries/post";

export const useInfinitePostsQuery = () => {
  return useInfiniteQuery("posts", fetchPosts, {
    getNextPageParam: (lastPage, pages) => {
      return lastPage.length > 0 ? pages.length + 1 : undefined;
    },
  });
};

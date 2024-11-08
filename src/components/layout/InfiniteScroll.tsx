import { useEffect } from "react";

export type InfiniteScrollProps = {
  loadMore: () => void;
  hasNextPage: boolean | undefined;
  isFetchingNextPage: boolean;
};

const InfiniteScroll = (props: InfiniteScrollProps) => {
  const { loadMore, hasNextPage, isFetchingNextPage } = props;
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition =
        window.innerHeight + document.documentElement.scrollTop;
      const bottom = document.documentElement.offsetHeight;

      if (
        scrollPosition >= bottom - 200 &&
        !isFetchingNextPage &&
        hasNextPage
      ) {
        loadMore();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loadMore, hasNextPage, isFetchingNextPage]);

  return null;
};

export default InfiniteScroll;

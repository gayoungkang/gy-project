import InfiniteScroll from "@components/layout/InfiniteScroll";
import Card from "@components/surfaces/Card";
import Typography from "@components/typography/Typography";
import { useInfinitePostsQuery } from "@utils/reactQuery";

const PostListContainer = () => {
  const { data, fetchNextPage, hasNextPage, isLoading, isFetchingNextPage } =
    useInfinitePostsQuery();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {data?.pages.map((page, index) => (
        <div key={index}>
          {page.map((post) => (
            <Card key={post.id} mb='15px'>
              <Typography variant='h5'>{post.title}</Typography>
              <Typography variant='body2'>{post.body}</Typography>
            </Card>
          ))}
        </div>
      ))}

      {isFetchingNextPage && <p>Loading more...</p>}
      {!hasNextPage && <p>No more posts</p>}

      <InfiniteScroll
        loadMore={fetchNextPage}
        hasNextPage={hasNextPage}
        isFetchingNextPage={isFetchingNextPage}
      />
    </>
  );
};

export default PostListContainer;

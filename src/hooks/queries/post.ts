import { PostListResponse } from "@/interfaces/post";
import { apiRoutes } from "@constants/apiRoutes";
import { api } from "@utils/api";

/**---------------------------------------------------------------------------/

  * ! 포스트 목록 API

/**--------------------------------------------------------------------------*/

export const fetchPosts = async ({
  pageParam = 1,
  limit = 10,
}: {
  pageParam?: number;
  limit?: number;
}): Promise<PostListResponse> => {
  const response = await api.get<PostListResponse>(apiRoutes.getPostList, {
    params: { _page: pageParam, _limit: limit },
  });
  return response.data;
};

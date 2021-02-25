import Axios from "axios";
import { InfiniteQueryObserverResult, useInfiniteQuery } from "react-query";
import { nodeApiLink } from "../../config/Api/NodeServerLink";
import { Comment } from "../../types/comment";

export interface ICommentQuery {
  comments: Comment[];
  nextPage?: number | null;
}
export const useComments = (
  postId: string
): [Comment[] | undefined, InfiniteQueryObserverResult<ICommentQuery, Error>] => {
  const queryInstance = useInfiniteQuery<ICommentQuery, Error>(
    ["comments", postId],
    async ({ pageParam = 1 }) => {
      const { data } = await Axios.get(
        `${nodeApiLink}/api/posts/${postId}/comments?page=${pageParam}`
      );
      return data;
    },
    { getNextPageParam: (lastGroup, allPages) => lastGroup.nextPage ?? false }
  );
  const { data } = queryInstance;
  console.log(data);

  const listComments =
    data?.pages &&
    data.pages
      .reduce(
        (prevTotalListComments: Comment[], CommentsQuery) => [
          ...prevTotalListComments,
          ...CommentsQuery.comments,
        ],
        []
      )
      .reverse();
  return [listComments, queryInstance];
};

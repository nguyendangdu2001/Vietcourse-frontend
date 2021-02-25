import Axios from "axios";
import { InfiniteData, useMutation, useQueryClient } from "react-query";
import { nodeApiLink } from "../../config/Api/NodeServerLink";
import { ICommentQuery } from "./useComments";

export const useCreateComment = ({
  postId,
  user,
}: {
  postId: string;
  user: { name: string; userPic: string; id: string };
}) => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation(
    async (comment: string) => {
      return await Axios.post(`${nodeApiLink}/api/comments`, {
        postId,
        userId: user.id,
        text: comment,
      });
    },
    {
      onMutate: (comment) => {
        queryClient.setQueryData<
          (data: InfiniteData<ICommentQuery>) => InfiniteData<ICommentQuery>
        >(["comments", postId], (data: InfiniteData<ICommentQuery>) => {
          const { pages, pageParams } = data;
          return {
            pages: [
              {
                comments: [
                  {
                    _id: Date.now().toString(),
                    user: { name: user.name, userPic: user.userPic },
                    text: comment,
                    post: postId,
                    dateCreated: new Date().toISOString(),
                  },
                ],
                nextPage: pages ? pages[pages.length - 1].nextPage : null,
              },
              ...pages,
            ],
            pageParams: pageParams,
          };
        });
      },
      onSettled: () => {
        queryClient.invalidateQueries(["posts"]);
      },
    }
  );
  return { createComment: mutate };
};

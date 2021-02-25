import Axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { nodeApiLink } from "../../config/Api/NodeServerLink";

interface ICreatePost {
  user: string;
  title: string;
  body: string;
}

interface IData {
  id: string;
  name: string;
  userPic: string;
}
export const useCreatePost = ({ name, userPic, id }: IData) => {
  const queryClient = useQueryClient();

  const [title, setTitle] = useState("");
  const onTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const [body, setBody] = useState("");
  const onBodyChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBody(e.target.value);
  };

  const { mutate } = useMutation(
    async (post: ICreatePost) => {
      return await Axios.post(`${nodeApiLink}/api/posts`, post);
    },
    {
      onMutate: (post) => {
        //@ts-ignore
        queryClient.setQueryData("posts", (old: Post[]) => [
          {
            ...post,
            likeCount: 0,
            commentCount: 0,
            user: { name, userPic },
            dateCreated: Date.now().toString(),
          },
          ...old,
        ]);
      },
      onSettled: () => {
        queryClient.invalidateQueries("posts");
      },
    }
  );

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate({ user: id, title, body });
  };
  return { onTitleChange, onSubmitHandler, onBodyChange, title, body };
};

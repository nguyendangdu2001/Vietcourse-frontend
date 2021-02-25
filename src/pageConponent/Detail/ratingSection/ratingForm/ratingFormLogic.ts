import Axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { nodeApiLink } from "../../../../config/Api/NodeServerLink";

interface IRating {
  star: null | number;
  description: string;
}
const useRatingFormLogic = (courseId: string) => {
  const queryClient = useQueryClient();
  const [star, setStar] = useState<null | number>(0);
  const [description, setDescription] = useState("");
  const isEmpty = !star || !description;
  const { mutate } = useMutation(
    async ({ star, description }: IRating) => {
      await Axios.post(`${nodeApiLink}/api/courses/${courseId}/rating`, { star, description });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["ratings", courseId]);
      },
    }
  );
  const onStarChangeHandler = (e: ChangeEvent<{}>, value: number | null) => {
    setStar(value);
  };
  const onDescriptionChangeHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setDescription(e.target.value);
  };
  const onSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isEmpty) return;
    mutate({ star, description });
  };
  return {
    onStarChangeHandler,
    onDescriptionChangeHandler,
    onSubmitHandler,
    star,
    description,
    isEmpty,
  };
};

export default useRatingFormLogic;

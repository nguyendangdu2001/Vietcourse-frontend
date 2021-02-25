import Axios from "axios";
import { QueryObserverResult, useQuery } from "react-query";
import { nodeApiLink } from "../../config/Api/NodeServerLink";
import { Post } from "../../types/Post";

export const usePosts = (): [Post[] | undefined, QueryObserverResult<Post[], Error>] => {
  const queryInstance = useQuery<Post[], Error>(["posts"], async () => {
    const { data } = await Axios.get(`${nodeApiLink}/api/posts`);
    return data;
  });

  return [queryInstance.data, queryInstance];
};

import Axios from "axios";
import { QueryObserverResult, useQuery } from "react-query";
import { nodeApiLink } from "../../config/Api/NodeServerLink";
import { UserInfo } from "../../types/user";

export const useStudents = (): [UserInfo[] | undefined, QueryObserverResult<UserInfo[], Error>] => {
  const queryInstance = useQuery<UserInfo[], Error>(["students"], async () => {
    const { data } = await Axios.get(`${nodeApiLink}/api/users`);
    return data;
  });

  return [queryInstance.data, queryInstance];
};

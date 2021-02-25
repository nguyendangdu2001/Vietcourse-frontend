import Axios from "axios";
import { QueryObserverResult, useQuery } from "react-query";
import { nodeApiLink } from "../../config/Api/NodeServerLink";

interface Subject {
  _id: string;
  name: string;
}
export const useSubjects = (): [Subject[] | undefined, QueryObserverResult<Subject[], Error>] => {
  const queryInstance = useQuery<Subject[], Error>(["subjects"], async () => {
    const { data } = await Axios.get(`${nodeApiLink}/api/categories`);
    return data;
  });

  return [queryInstance.data, queryInstance];
};

import Axios from "axios";
import { QueryObserverResult, useQuery } from "react-query";
import { nodeApiLink } from "../../config/Api/NodeServerLink";
import { Noticfication } from "../../types/Noticfication";

export const useNoticfications = (): [
  Noticfication[] | undefined,
  QueryObserverResult<Noticfication[], Error>
] => {
  const queryInstance = useQuery<Noticfication[], Error>(
    ["noticfications"],
    async () => {
      const { data } = await Axios.get(`${nodeApiLink}/api/users/noticfications`);
      return data;
    },
    { refetchInterval: 2000 }
  );

  return [queryInstance.data, queryInstance];
};

import Axios from "axios";
import { QueryObserverResult, useQuery } from "react-query";
import { nodeApiLink } from "../../config/Api/NodeServerLink";
import { Rating } from "../../types/rating";

interface Data {
  ratings: Rating[];
  count: number;
}

export const useRatings = (
  courseId: string
): [Data | undefined, QueryObserverResult<Data, Error>] => {
  const query = useQuery<Data, Error>(["ratings", courseId], async () => {
    const { data } = await Axios.get(`${nodeApiLink}/api/courses/${courseId}/ratings`);
    return data;
  });
  return [query.data, query];
};

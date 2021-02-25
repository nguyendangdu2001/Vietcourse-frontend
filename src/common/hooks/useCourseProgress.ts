import Axios from "axios";
import { useQuery } from "react-query";
import { nodeApiLink } from "../../config/Api/NodeServerLink";

export const useCourseProgress = (id: string) => {
  const query = useQuery(["courseProgress", id], async () => {
    const { data } = await Axios.get(`${nodeApiLink}/api/course-progresses/${id}`);
    return data;
  });
  return query;
};

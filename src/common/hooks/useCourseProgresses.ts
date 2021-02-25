import Axios from "axios";
import { useQuery } from "react-query";
import { nodeApiLink } from "../../config/Api/NodeServerLink";

export const useCourseProgresses = () => {
  const query = useQuery("courseProgresses", async () => {
    const { data } = await Axios.get(`${nodeApiLink}/api/users/courseProgresses`);
    console.log(data);

    return data;
  });
  return query;
};

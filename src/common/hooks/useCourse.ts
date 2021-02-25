import Axios from "axios";
import { QueryObserverResult, useQuery } from "react-query";
import { nodeApiLink } from "../../config/Api/NodeServerLink";
import { Course } from "../../types/course";

interface Option {
  query: { linhvuc?: string };
}
export const useCourses = (
  { query }: Option = { query: {} }
): [Course[] | undefined, QueryObserverResult<Course[], Error>] => {
  const queryString = Object.keys(query).reduce((queryString, key) => {
    return queryString + `&${key}=${query.linhvuc}`;
  }, "");

  const queryInstance = useQuery<Course[], Error>(["courses", queryString], async () => {
    const { data } = await Axios.get(`${nodeApiLink}/api/courses?short=1${queryString}`);
    return data;
  });
  //@ts-ignore
  return [queryInstance.data?.listCourse, queryInstance];
};

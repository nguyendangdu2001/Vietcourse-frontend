import Axios from "axios";
import { useQuery } from "react-query";
import { nodeApiLink } from "../../config/Api/NodeServerLink";
import { CourseDetail } from "../../types/course";

export const useCourseDetail = (id: string) => {
  const initialData: CourseDetail = {
    _id: "",
    details: [],
    lastModified: "",
    lecture: "",
    numOfStudent: "",
    pic: "",
    price: 0,
    rating: 0,
    subject: "",
    title: "",
    university: "",
  };
  return useQuery<CourseDetail, Error>(
    ["coursesDetail", id],
    async () => {
      const { data } = await Axios.get(`${nodeApiLink}/api/courses/${id}`);
      return data;
    },
    { initialData: initialData }
  );
};

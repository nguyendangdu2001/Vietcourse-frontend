import "./style/thongtin.css";
import React, { memo } from "react";
import DetailHeading from "./DetailHeading";
import { DetailMain } from "./DetailMain";
import { DetailTeacher } from "./DetailTeacher";
import { DetailBenefit } from "./DetailBenefit";
import RatingSection from "./ratingSection/RatingSection";
import { useCourseDetail } from "../../common/hooks/useCourseDetail";

export const Detail = ({ match }) => {
  const { data } = useCourseDetail(match.params.id);

  return (
    <>
      <DetailHeading course={data} />
      <div>
        <div className="container">
          <DetailMain course={data} />
          <DetailBenefit />
          <DetailTeacher course={data} />
          {data._id && <RatingSection courseId={data._id} />}
        </div>
      </div>
    </>
  );
};
export default memo(Detail);

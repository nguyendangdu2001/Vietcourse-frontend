import React, { lazy, useMemo, memo } from "react";
import Slider from "react-slick";
const Subject = lazy(() => import("./Subject"));

const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <span className={className.replace("slick-next", "next-arrow")} style={style} onClick={onClick}>
            <i className="fas fa-chevron-right"></i>
        </span>
    );
};
const subject = [
    { title: "Mỹ thuật", numOfCourse: 500, pic: "/Images/smallart.jpg", link: "/linhvuc/mythuat" },
    { title: "Công nghệ thông tin", numOfCourse: 500, pic: "/Images/smalldesign.jpg", link: "/linhvuc/cntt" },
    { title: "Âm nhạc", numOfCourse: 500, pic: "/Images/smallmusic.jpg", link: "/linhvuc/amnhac" },
    { title: "Nhiếp ảnh", numOfCourse: 500, pic: "/Images/smallphoto.jpg", link: "/linhvuc/nhiepanh" },
];
const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <span className={className.replace("slick-prev", "prev-arrow")} style={style} onClick={onClick}>
            <i className="fas fa-chevron-left"></i>
        </span>
    );
};
export const SubjectSlider = () => {
    const settings = useMemo(
        () => ({
            slidesToShow: 4,
            slidesToScroll: 4,
            dots: true,
            infinite: false,
            arrows: true,
            prevArrow: <PrevArrow />,
            nextArrow: <NextArrow />,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        dots: false,
                        arrows: false,
                    },
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: false,
                        arrows: false,
                    },
                },
            ],
        }),
        []
    );
    return (
        <div className="subject-slick">
            <Slider {...settings}>
                {subject.map((subject) => {
                    return <Subject key={subject.title} subject={subject} />;
                })}
            </Slider>
        </div>
    );
};
export default memo(SubjectSlider);

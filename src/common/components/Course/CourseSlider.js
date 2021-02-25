import React, { useMemo, memo } from "react";
import Slider from "react-slick";
import { CourseSkelethon } from "./CourseSkelethon";
import { Course } from "./Course";
import { motion } from "framer-motion";

const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <span
            className={className.replace("slick-next", "next-arrow")}
            style={style}
            onClick={onClick}
        >
            <i className="fas fa-chevron-right"></i>
        </span>
    );
};

const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
        <span
            className={className.replace("slick-prev", "prev-arrow")}
            style={style}
            onClick={onClick}
        >
            <i className="fas fa-chevron-left"></i>
        </span>
    );
};

export const CourseSlider = ({ courses, loading }) => {
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
            ],
        }),
        []
    );
    const { courseVariant } = {
        courseVariant: {
            initial: (index) => index < 4 && { opacity: 0 },
            show: (index) => ({
                opacity: 1,
                transition: { duration: 0.5 + index * 0.2, when: "beforeChildren" },
            }),
        },
    };
    return (
        <div className="slick-course">
            {!loading ? (
                <Slider {...settings}>
                    {courses.map((course, index) => {
                        return (
                            <motion.div
                                key={course._id}
                                custom={index}
                                variants={courseVariant}
                                initial="initial"
                                animate="show"
                            >
                                <Course data={course} />
                            </motion.div>
                        );
                    })}
                </Slider>
            ) : (
                <Slider {...settings}>
                    <CourseSkelethon />
                    <CourseSkelethon />
                    <CourseSkelethon />
                    <CourseSkelethon />
                </Slider>
            )}
        </div>
    );
};
export default memo(CourseSlider);

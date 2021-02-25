import { Collapse } from "@material-ui/core";
import React, { useState } from "react";
import { Trans, useTranslation } from "react-i18next";

export const ColapseListCourse = ({ title }) => {
    const { t } = useTranslation("translation", { useSuspense: false });
    const [open, setOpen] = useState(false);
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <div
                className="learning-item"
                onClick={() => {
                    setOpen((prev) => !prev);
                }}
            >
                <div className="learning-item-left">
                    <span className="title-wrapper">
                        <span className="toogle">
                            {open ? (
                                <span className="plus" style={{ display: "inline-block" }}>
                                    <i className="fas fa-plus"></i>
                                </span>
                            ) : (
                                <span className="minus" style={{ display: "inline-block" }}>
                                    <i className="fas fa-minus"></i>
                                </span>
                            )}
                        </span>
                        <span className="text-left">{title.title}</span>
                    </span>
                </div>
                <div className="learning-item-right">
                    <span className="lectures">
                        {title.chapter.length} <Trans t={t}>Bài giảng</Trans>
                    </span>
                    <span className="time-learning">{title.totalTime}</span>
                </div>
            </div>
            <Collapse in={open} timeout="auto" unmountOnExit>
                {title.chapter.map((chapter) => {
                    return (
                        <div key={chapter.name} className="lecture-container multi-collapse">
                            <div className="left-content">
                                <span className="play-circle">
                                    <i className="far fa-play-circle"></i>
                                </span>
                                <div className="title-top">
                                    <span className="title">
                                        <span>{chapter.name}</span>
                                    </span>
                                </div>
                            </div>
                            <div className="right-content-preview-time">
                                <span>{chapter.time}</span>
                            </div>
                        </div>
                    );
                })}
            </Collapse>
        </div>
    );
};

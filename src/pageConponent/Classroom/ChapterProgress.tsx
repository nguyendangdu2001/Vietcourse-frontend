import { Collapse, Grid } from "@material-ui/core";
import { motion } from "framer-motion";
import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ChapterProgress as IChapterProgress } from "../../types/courseProgress";

interface Props {
  className?: string | undefined;
  chapterProgress: IChapterProgress;
  courseProgressId: string;
}

const ChapterProgress: FC<Props> = ({ className, chapterProgress, courseProgressId }) => {
  const {
    name,
    totalEpisodes,
    isCompleted,
    numOfcompletedEpisodes,
    episodes,
    _id: chapterId,
  } = chapterProgress;
  const [isOpened, setIsOpened] = useState(false);
  return (
    <div
      className={className}
      onClick={() => {
        setIsOpened(!isOpened);
      }}
    >
      <div className="course2 non-learning">
        <div className="course-border">{/* <div className="label-text">Bài 1</div> */}</div>
        <div className="course-content-2">
          <div className="material">
            <div className="flex-1 description">
              <div className="item-name">{name}</div>
            </div>
            <div className="align-self-center">
              <div className="course-main-content-button">
                <div className="Course-link-button" style={{ position: "relative" }}>
                  <motion.svg
                    viewBox="0 0 100 100"
                    width="150"
                    height="150"
                    style={{
                      overflow: "visible",
                      zIndex: 0,
                      stroke: "#00a8e8",
                      strokeWidth: 4,
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                    }}
                  >
                    <motion.path
                      d="m 50 0 a 1 1 0 0 0 0 100 a 1 1 0 0 0 0 -100"
                      fill="none"
                      initial={{ pathLength: 0.001 }}
                      animate={{
                        pathLength: numOfcompletedEpisodes / totalEpisodes,
                        transition: { duration: 1 },
                      }}
                    />
                  </motion.svg>
                  <div
                    className="course-link-button__text"
                    style={{
                      position: "absolute",
                      left: "50%",
                      top: "50%",
                      transform: "translate(-50%,-50%)",
                      fontSize: 30,
                      color: "#00a8e8",
                    }}
                  >
                    {`${numOfcompletedEpisodes}/${totalEpisodes}`}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Collapse in={isOpened} timeout="auto" unmountOnExit>
        {episodes && isOpened && (
          <Grid container direction="column" style={{ rowGap: 4 }}>
            {episodes.map((episode) => (
              <Link
                to={`/inclass/${courseProgressId}/${chapterId}/${episode._id}`}
                key={episode._id}
                style={{
                  padding: 16,
                  backgroundColor: episode.isCompleted ? "#4CAF50" : "#ffffff",
                  justifyContent: "space-between",
                  flexDirection: "row",
                  display: "flex",
                  fontSize: 18,
                  color: episode.isCompleted ? "white" : "initial",
                }}
              >
                <div>{episode.name}</div>
                <div>{episode.time}</div>
              </Link>
            ))}
          </Grid>
        )}
      </Collapse>
    </div>
  );
};

export default styled(ChapterProgress)``;

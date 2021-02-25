import "./style/bai1.css";
import React, { useEffect } from "react";
import $ from "jquery";
import { Link } from "react-router-dom";
import Axios from "axios";
import { nodeApiLink } from "../../config/Api/NodeServerLink";

export const InClass = ({ match }) => {
  useEffect(() => {
    $("#hide").click(function () {
      if ($(".videoHighlighs").hasClass("hide-click")) {
        $(".videoHighlighs").removeClass("hide-click");
        $(".videoHighlighs").addClass("show-click");
      } else {
        $(".videoHighlighs").addClass("hide-click");
        $(".videoHighlighs").removeClass("show-click");
      }
    });
    return () => {
      $("#hide").unbind();
    };
  }, []);
  useEffect(() => {
    Axios.put(`${nodeApiLink}/api/course-progresses/tracking`, {
      courseProgressId: match.params.courseProgressId,
      chapterId: match.params.chapterId,
      episodeId: match.params.episodeId,
    });
    return () => {};
  }, []);
  return (
    <div className="allin _8f0ciyt">
      <div className="primaryNavigation">
        <div className="left-breadcrumb">
          <div className="my-breadcrumb">
            <div className="breadcrumb-item">
              <Link className="breadcrumb-title" to="/classroom">
                Lập trình Java cơ bản
              </Link>
            </div>
            <div className="breadcrumb-arrow">&gt;</div>
            <div className="breadcrumb-item">
              <span className="breadcrumb-title">Bài 1: Giới Thiệu Khoá Học</span>
            </div>
          </div>
        </div>
        <div className="right-prev-next">
          <span className="link dim text">Trước</span>
          <div className="divider"></div>
          <span className="link dim text">Sau</span>
        </div>
      </div>
      <div className="tools-content _17khti1q">
        <div className="secondaryNavigation _1se6ugi3 bg-white">
          <ul className="chapter-list nostyle" aria-hidden="false">
            <li>
              <div className="chapter-item">
                <button className="nostyle link-button">
                  <h2 className="chapter-name">Giới thiệu giảng viên</h2>
                </button>
              </div>
              <div className="chapter-item">
                <button className="nostyle link-button">
                  <h2 className="chapter-name">Giới thiệu ngôn ngữ lập trình Java</h2>
                </button>
              </div>
              <div className="chapter-item">
                <button className="nostyle link-button">
                  <h2 className="chapter-name">Cài đặt môi trường Java</h2>
                </button>
              </div>
            </li>
          </ul>
        </div>
        <div className="item-scroll-container">
          <main className="item-page-content" id="main" style={{ height: "100%" }}>
            <div className="videoHighligh">
              <div id="render" className="w770">
                <h4 className="video-name">Giới thiệu giảng viên</h4>
                <div className="video-play">
                  <div className="video-main-player-container">
                    <div style={{ position: "relative" }}>
                      <iframe
                        title="video"
                        id="video-vietcourse"
                        width="770"
                        height="455"
                        src="https://www.youtube.com/embed/KtHt2EOXq9s"
                        frameborder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                    </div>
                  </div>
                </div>
                <div className="VideoManager">
                  <div className="video-toolbar horizontal-box wrap align-items-spacebetween">
                    <div className="_1wpyc64q">
                      <div className="saveNote">
                        <button className="my-style _n65jend VideoToolbarButton">
                          <span className="_1lutnh9y">
                            <span className="_k5dnrzp cui-iconWrapper">
                              <svg
                                className="_ufjrdd"
                                aria-hidden="true"
                                focusable="false"
                                viewBox="0 0 48 48"
                                role="img"
                                aria-labelledby="SaveNote41ac4d0c-c719-4e14-f3aa-7b694e844c50 SaveNote41ac4d0c-c719-4e14-f3aa-7b694e844c50Desc"
                                xmlns="http://www.w3.org/2000/svg"
                                style={{
                                  fill: "rgb(117, 117, 117)",
                                  height: 18,
                                  width: 18,
                                  marginTop: -3,
                                }}
                              >
                                <path
                                  d="M37,45 L37,16 L39,16 L39,45 L39,47 L8,47 L6,47 L6,7 L6,5 L29,5 L29,7 L8,7 L8,45 L37,45 Z M37,5 L37,1 L39,1 L39,5 L43,5 L43,7 L39,7 L39,11 L37,11 L37,7 L32,7 L32,5 L37,5 Z M14,15 L31,15 L31,17 L14,17 L14,15 Z M14,22 L31,22 L31,24 L14,24 L14,22 Z M14,29 L31,29 L31,31 L14,31 L14,29 Z M14,36 L31,36 L31,38 L14,38 L14,36 Z"
                                  role="presentation"
                                ></path>
                              </svg>
                            </span>
                            Save Note
                          </span>
                        </button>
                      </div>
                    </div>
                    <div className="_1qfi0x77">
                      <div className="ItemFeedback">
                        <div className="ItemFeedbackContent horizontal-box">
                          <div className="Like">
                            <div className="likeContent">
                              <div>
                                <button
                                  className="c-button-icon"
                                  aria-pressed="false"
                                  aria-label="Like"
                                >
                                  <svg
                                    className="_ufjrdd"
                                    viewBox="0 0 48 48"
                                    role="img"
                                    aria-labelledby="ThumbsUp6f91f7ed-e5c9-489c-95dc-af17f31418f0 ThumbsUp6f91f7ed-e5c9-489c-95dc-af17f31418f0Desc"
                                    xmlns="http://www.w3.org/2000/svg"
                                    style={{
                                      fill: "rgb(54, 59, 66)",
                                      height: 20,
                                      width: 20,
                                    }}
                                  >
                                    <title id="ThumbsUp6f91f7ed-e5c9-489c-95dc-af17f31418f0">
                                      Thumbs Up
                                    </title>
                                    <path
                                      d="M4.358,22.274 L6.749,36.715 C7.472,42.179 12.039,46.274 17.378,46.274 L35.43,46.274 C36.741,46.101 43.819,40.689 44.18,32.232 C44.33,28.705 43.587,26.061 41.97,24.374 C40.153,22.479 37.665,22.274 36.679,22.274 L28.179,22.274 C26.538,22.311 25.251,21.716 24.556,20.618 C23.842,19.489 23.876,18.01 24.65,16.452 L26.349,13.401 C27.652,11.144 28.03,8.678 27.394,6.624 C26.88,4.966 25.716,3.58 24.005,2.578 L10.71,22.274 L4.358,22.274 Z M35.43,48.274 L17.378,48.274 C11.04,48.274 5.62,43.431 4.772,37.01 L2,20.274 L9.648,20.274 L23.333,0 L24.11,0.372 C26.753,1.637 28.549,3.594 29.304,6.032 C30.105,8.617 29.662,11.663 28.089,14.388 L26.419,17.384 C25.996,18.237 25.925,19.041 26.247,19.549 C26.553,20.034 27.245,20.274 28.16,20.274 L36.679,20.274 C37.921,20.274 41.065,20.539 43.414,22.991 C45.422,25.086 46.352,28.224 46.178,32.316 C45.78,41.653 37.863,48.274 35.43,48.274 L35.43,48.274 Z"
                                      role="presentation"
                                    ></path>
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="DisLike">
                            <div className="DislikeContent">
                              <div>
                                <button
                                  className="c-button-icon"
                                  aria-pressed="false"
                                  aria-label="DisLike"
                                >
                                  <svg
                                    className="_ufjrdd"
                                    viewBox="0 0 48 48"
                                    role="img"
                                    aria-labelledby="ThumbsDowne9fe5227-b048-4c96-e093-60848f6d4862 ThumbsDowne9fe5227-b048-4c96-e093-60848f6d4862Desc"
                                    xmlns="http://www.w3.org/2000/svg"
                                    style={{
                                      fill: "rgb(54, 59, 66)",
                                      height: 20,
                                      width: 20,
                                    }}
                                  >
                                    <title id="ThumbsDowne9fe5227-b048-4c96-e093-60848f6d4862">
                                      Thumbs Down
                                    </title>
                                    <path
                                      d="M4.358,26 L10.71,26 L24.005,45.696 C25.716,44.694 26.88,43.308 27.394,41.65 C28.03,39.596 27.652,37.13 26.357,34.886 L24.671,31.863 C23.876,30.264 23.842,28.785 24.556,27.656 C25.251,26.558 26.541,26 28.197,26 L36.679,26 C37.665,26 40.153,25.795 41.97,23.899 C43.587,22.213 44.33,19.569 44.18,16.042 C43.819,7.584 36.741,2.173 35.402,1.999 L17.378,2 C12.039,2 7.472,6.095 6.754,11.527 L4.358,26 Z M23.333,48.274 L9.648,28 L2,28 L4.776,11.232 C5.62,4.843 11.04,0 17.378,0 L35.429,0 C37.863,0 45.78,6.621 46.178,15.958 C46.352,20.05 45.422,23.187 43.414,25.283 C41.065,27.735 37.921,28 36.679,28 L28.179,28 C27.239,27.985 26.553,28.24 26.247,28.725 C25.925,29.233 25.996,30.037 26.441,30.931 L28.096,33.899 C29.662,36.611 30.105,39.657 29.304,42.242 C28.549,44.68 26.753,46.637 24.11,47.902 L23.333,48.274 Z"
                                      role="presentation"
                                    ></path>
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="Flag">
                            <div className="FlagContent">
                              <div>
                                <button
                                  className="c-button-icon"
                                  aria-pressed="false"
                                  aria-label="Flag"
                                >
                                  <svg
                                    className="_ufjrdd"
                                    viewBox="0 0 48 48"
                                    role="img"
                                    aria-labelledby="SquareFlag77a10c3a-83af-48eb-e762-cb378ca8e2f4 SquareFlag77a10c3a-83af-48eb-e762-cb378ca8e2f4Desc"
                                    xmlns="http://www.w3.org/2000/svg"
                                    style={{
                                      fill: "rgb(54, 59, 66)",
                                      height: 20,
                                      width: 20,
                                    }}
                                  >
                                    <title id="SquareFlag77a10c3a-83af-48eb-e762-cb378ca8e2f4">
                                      Square Flag
                                    </title>
                                    <path
                                      d="M0,0 L34,0 L34,26 L2,26 L2,48 L0,48 L0,0 Z M2,24 L32.001,24 L32.001,2 L2,2 L2,24 Z"
                                      role="presentation"
                                    ></path>
                                  </svg>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="_17khti1q VideoHightLightSideBar expanded">
        <div className="_wqk9s2s HighlightSidebarTogglePanel">
          <button id="hide" className="_x19y45g notes-tool-button active-tools">
            <span className="_1lutnh9y">
              <span className="_41qsc cui-iconWrapper">
                <svg
                  className="_ufjrdd"
                  aria-hidden="true"
                  focusable="false"
                  viewBox="0 0 48 48"
                  role="img"
                  aria-labelledby="Notese887b946-f8c4-42aa-d10d-b0a219096315 Notese887b946-f8c4-42aa-d10d-b0a219096315Desc"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ fill: "rgb(31, 31, 31)", height: 20, width: 20 }}
                >
                  <path
                    d="M41,14 L41,43 L41,45 L10,45 L8,45 L8,5 L8,3 L31,3 L41,3 L41,5 L41,14 Z M39,14 L39,5 L31,5 L10,5 L10,43 L39,43 L39,14 Z M16,13 L33,13 L33,15 L16,15 L16,13 Z M16,20 L33,20 L33,22 L16,22 L16,20 Z M16,27 L33,27 L33,29 L16,29 L16,27 Z M16,34 L33,34 L33,36 L16,36 L16,34 Z"
                    role="presentation"
                  ></path>
                </svg>
              </span>
            </span>
          </button>
        </div>
        <div className="videoHighlighs">
          <div className="_errb565 highligh-sidebar-header">
            <h4>Notes</h4>
          </div>
          <div className="VideoHighLightPlaceHolder">
            <div className="_2kx9jpb">
              <img src="Images/icon_note.svg" alt="" className="icon note-icon" />
              <img src="Images/icon_highlight.svg" alt="" className="icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default InClass;

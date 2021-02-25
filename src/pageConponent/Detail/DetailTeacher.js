import React, { useEffect } from "react";
import $ from "jquery";

export const DetailTeacher = () => {
    useEffect(() => {
        $("#show-history").on("click", () => {
            $("div.history-show").css("height", "100%");
            $("div.history-hidden").css("display", "none");
        });
        return () => {
            $("#show-history").unbind()
        };
    }, []);

    return (
        <div className="row">
            <div className="col-12 col-md-8">
                <div className="teacher">
                    <div className="teacher-left">
                        <img className="img-teacher" src="/Images/human.jpg" alt="teacher" />
                        <div className="statics" style={{ marginTop: 15 }}>
                            <table>
                                <tbody>
                                    <tr className="statics-item">
                                        <td className="static-icon">
                                            <i className="fas fa-star"></i>
                                        </td>
                                        <td>
                                            <span>
                                                <span className="value">4.5</span>&nbsp;sao
                                            </span>
                                        </td>
                                    </tr>
                                    <tr className="statics-item">
                                        <td className="static-icon">
                                            <i className="fas fa-comments"></i>
                                        </td>
                                        <td>
                                            <span>
                                                <span className="value">36,119</span>&nbsp;nhận xét
                                            </span>
                                        </td>
                                    </tr>
                                    <tr className="statics-item">
                                        <td className="static-icon">
                                            <i className="fas fa-user" />
                                        </td>
                                        <td>
                                            <span>
                                                <span className="value">300,000</span>&nbsp;học sinh
                                            </span>
                                        </td>
                                    </tr>
                                    <tr className="statics-item">
                                        <td className="static-icon">
                                            <i className="fas fa-play-circle"></i>
                                        </td>
                                        <td>
                                            <span>
                                                <span className="value">17</span>&nbsp;khoá học
                                            </span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="teacher-right">
                        <div className="title-name-job">
                            <div className="title-name">
                                <span className="name" style={{ fontSize: 18 }}>
                                    Tiến sĩ: Paul Hill
                                </span>
                            </div>
                            <div className="job">
                                <p style={{ fontWeight: 700 }}>
                                    Chuyên gia giảng dạy IT: 129.000 học sinh, 17 khoá học
                                </p>
                            </div>
                        </div>
                        <div className="history-teacher">
                            <div className="history-show">
                                <div className="history-item">
                                    <p>
                                        Paul là một Chuyên gia CNTT với hơn 11 năm kinh nghiệm hiện đang làm Quản trị
                                        viên Mạng trong hỗ trợ hợp đồng của các Cơ quan Liên bang khác nhau tại Hoa Kỳ.
                                    </p>
                                </div>
                                <div className="history-item">
                                    <p>
                                        Paul bắt đầu sự nghiệp của mình bằng cách tình nguyện các kỹ năng máy tính của
                                        mình tại nhà thờ địa phương ở tuổi 16. Anh ấy đã xác định được một vấn đề công
                                        nghệ mà nhà thờ đang gặp phải và thiết kế một hệ thống để khắc phục nó. Các
                                        chuyên gia CNTT khác tại nhà thờ khuyến khích Paul tiếp tục sử dụng các kỹ năng
                                        của mình để tích lũy kinh nghiệm và nhấn mạnh rằng anh ta nên đưa nó vào sơ yếu
                                        lý lịch của mình mặc dù kinh nghiệm của anh ta chưa được trả. Chỉ dựa vào kinh
                                        nghiệm mà anh có được khi làm tình nguyện, một công ty hợp đồng DoD lớn đã thuê
                                        Paul làm thực tập sinh. Khi sự nghiệp phát triển, Paul chuyển sang một công ty
                                        lớn khác để bắt đầu lại từ đầu.
                                    </p>
                                </div>
                                <div className="history-item">
                                    <p>
                                        Paul không ngừng thúc đẩy bản thân để tăng cường kiến ​​thức chuyên sâu trong
                                        lĩnh vực Công nghệ thông tin và mở rộng bộ kỹ năng của mình, dù là trong công
                                        việc hay ở nhà. Paul rất biết ơn rằng anh ấy đã có phước khi làm việc cùng với
                                        các chuyên gia tài năng và có động lực cao, người đã liên tục truyền cảm hứng và
                                        thúc đẩy anh ấy vượt qua thử thách, và để MỌI THỨ bạn có thể thoát khỏi những cơ
                                        hội phát sinh trong khi làm việc. Phương châm của anh là "Bất kỳ công việc nào
                                        cũng là những gì bạn tạo ra. Bạn viết sơ yếu lý lịch của riêng bạn và trả lương
                                        bằng ổ đĩa của bạn để thành công."
                                    </p>
                                </div>
                                <div className="history-item">
                                    <p>
                                        Mục tiêu của Paul trên Udemy là giúp BẠN có được một công việc CNTT bằng cách
                                        cung cấp cho bạn một bộ kỹ năng cơ bản. Thực tế là hầu hết các công việc CNTT ở
                                        cấp nhập cảnh (Bộ phận Trợ giúp) trong NCR chỉ được trả 10k theo thu nhập trung
                                        bình của NHÀ GIỜ chỉ từ MỘT công việc cấp nhập cảnh và tiềm năng cao hơn gấp đôi
                                        hoặc gấp ba thu nhập trung bình giữ thu nhập trong suốt sự nghiệp của một người.
                                        Lĩnh vực CNTT được xem là rất khó để vào, nhưng nếu bạn có một bộ kỹ năng tốt và
                                        quyết tâm thành công, bạn S get được tuyển dụng!
                                    </p>
                                </div>
                            </div>
                            <div className="history-hidden">
                                <button id="show-history" className="history-show-all btn btn-show">
                                    + See more
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

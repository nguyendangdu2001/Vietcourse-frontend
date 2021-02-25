import React, { useEffect } from "react";
import $ from 'jquery'

export const Lecturer = ({lecturer}) => {
    const {name,pic,age,educationLevel} = lecturer
    useEffect(() => {
        function ActivePopup(){
            $(".popup-detail").css('transform', 'scale(1)');
            $(".main").addClass("blur");
        };
        $(".popup-inclick").click(function(e){
            if ($(".popup-container-detail").hasClass("popup-is-active")) {
                $(".popup-container-detail").removeClass('popup-is-active')
            }
            ActivePopup();
        });
        $(".popup-detail").on("click",function(){
            $(".popup-detail").css('transform', 'scale(0)');
            $(".main").removeClass("blur");
        });
        $(".popup-container-detail").on('click', function(e) {
            e.stopPropagation();
            /* Act on the event */
        });
        function ActivePopupAdd(){
            $(".popup-add").css('transform', 'scale(1)');
            $(".main").addClass("blur");
        };
        $(".addnew").click(function(e){
            if ($(".popup-container-add").hasClass("popup-is-active")) {
                $(".popup-container-add").removeClass('popup-is-active')
            }
            ActivePopupAdd();
        });
        $(".popup-add").on("click",function(){
            $(".popup-add").css('transform', 'scale(0)');
            $(".main").removeClass("blur");
        });
        $(".popup-container-add").on('click', function(e) {
            e.stopPropagation();
            /* Act on the event */
        });
        return () => {
            
        }
    }, [])
    return (
        <div className="profressor-inner-std res-mg-b-30 detail-form-profressor popup-inclick">
            <div className="profressor-img">
                <img src={pic} alt="" />
            </div>
            <div className="profressor-dtl">
                <h6>{name}</h6>
                <p className="dp">{educationLevel}</p>
                <p className="dp-age">  
                    <b>Tuổi:</b>
                    {`${age} tuổi`}
                </p>
            </div>
        </div>
    );
};

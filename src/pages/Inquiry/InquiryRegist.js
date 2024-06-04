import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import {callMemberInquiryRegistAPI, callUpdateInquiryAPI} from "../../apis/InquiryAPI";
import InquiryForm from "../../components/form/InquiryForm";
import {Col, Row} from "react-bootstrap";
import UserPageNavBar from "../../components/common/UserPageNavBar";

function InquiryRegist() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [form, setForm] = useState({
        memberId: '',
        memberEmail: '',
        inquiryTitle: '',
        inquiryDetail: ''
    });

    const {success} = useSelector(state => state.inquiryReducer);

    useEffect(() => {
        if (success === true) navigate('/inquiry');
    }, [success])
    const onClickInquiryUpdateHandler = () => {
        const formData = new FormData();
        formData.append('inquiryUpdateRequest', new Blob([JSON.stringify(form)], {type: 'application/json'}));
        dispatch(callUpdateInquiryAPI({inquiryUpdateRequest: formData}));
    }


    return (
        <>
            <Row>

                  <Col xs={3}>  <UserPageNavBar/> </Col>


              <Col>
                 <Col xs={9}>   <InquiryForm inquiry={form} setForm={setForm} modifyMode={true}/> </Col>


                <div>

                    <button
                        variant="success"
                        onClick={onClickInquiryUpdateHandler}>{''}
                        등록하기
                    </button>

                    <button
                        variant="outline-success"
                        onClick={() => navigate(-1)}>{''}
                        뒤로가기
                    </button>

                </div>
              </Col>


            </Row>
        </>
    );
}




  export default InquiryRegist;


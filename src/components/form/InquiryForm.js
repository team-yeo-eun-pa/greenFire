import {useDispatch} from "react-redux";
import Form from "react-bootstrap/Form";
import {Col, InputGroup, Row} from "react-bootstrap";
import React, {useState} from "react";
import {callSignupAPI} from "../../apis/MemberAPICalls";
import {callUpdateInquiryAPI} from "../../apis/InquiryAPI";

function InquiryForm () {

    const dispatch = useDispatch();

    const [form, setForm] = useState( {
        memberId:'',
        memberEmail:'',
        inquiryTitle:'',
        inquiryDetail:''
    });

    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };
    const onSubmitHandler = (e) => {
        e.preventDefault();
        dispatch(callUpdateInquiryAPI({inquiryUpdateRequest: form}));
    };


    return (

        <Row className="mt-5 justify-content-md-center">
            <Col className="col-8">
                <div className="fs-4 fw-semibold border-bottom border-2 border-dark-subtle p-2">문의 등록하기</div>
                <Form className="p-5" onSubmit={onSubmitHandler}>


                    <Form.Group as={Row} className="mb-3" controlId="formMemberId">
                        <Form.Label column sm="2">
                            아이디
                        </Form.Label>
                        <Col sm="10">
                            <Form.Control
                                type="text"
                                placeholder="아이디를 입력해 주세요."
                                name="memberId"
                                value={form.memberId}
                                onChange={onChangeHandler}
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formEmail">
                        <Form.Label column sm="2">
                            이메일
                        </Form.Label>
                        <Col sm="10">
                            <InputGroup className="mb-3">
                                <Form.Control
                                    type="email"
                                    placeholder="이메일을 입력해 주세요."
                                    name="memberEmail"
                                    value={form.memberEmail}
                                    onChange={onChangeHandler}
                                />
                            </InputGroup>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formInquiryTitle">
                        <Form.Label column sm="2">
                            문의 제목
                        </Form.Label>
                        <Col sm="10">
                            <InputGroup className="mb-3">
                                <Form.Control
                                    type="email"
                                    placeholder="문의 제목을 입력해 주세요."
                                    name="inquiryTitle"
                                    value={form.inquiryTitle}
                                    onChange={onChangeHandler}
                                />
                            </InputGroup>
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formInquiryDetail">
                        <Form.Label column sm="2">
                            문의 내용
                        </Form.Label>
                        <Col sm="10">
                            <InputGroup className="mb-3">
                                <Form.Control
                                    type="email"
                                    placeholder="문의 내용을 입력해 주세요."
                                    name="inquiryDetail"
                                    value={form.inquiryDetail}
                                    onChange={onChangeHandler}
                                />
                            </InputGroup>
                        </Col>
                    </Form.Group>


                </Form>
            </Col>
        </Row>

    );


}


export default InquiryForm;

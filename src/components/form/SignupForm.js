import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Col, InputGroup, Row, Spinner } from "react-bootstrap";
import { Checkbox } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { callSignupAPI } from "../../apis/MemberAPICalls";
import SuccessPage from "../items/SuccessPage";

function SignupForm() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [form, setForm] = useState({
        memberName: '',
        memberId: '',
        memberEmail: '',
        memberPhone: '01012341234',
        memberPassword: ''
    });
    const [loading, setLoading] = useState(false);
    const [signupSuccess, setSignupSuccess] = useState(false);

    const onChangeTerms = (e) => {
        console.log(`checked = ${e.target.checked}`);
    };

    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        setLoading(true); // 로딩 상태 활성화
        dispatch(callSignupAPI({ signupRequest: form }))
            .then(() => {
                setSignupSuccess(true);
            })
            .finally(() => setLoading(false)); // 요청이 완료되면 로딩 상태 비활성화
    };

    const handleMainClick = () => {
        navigate("/");
    };

    if (signupSuccess) {
        return (
            <SuccessPage
                title="회원가입이 완료되었습니다."
                subtitle="이메일 인증을 확인해 주세요."
                btnText1="메인으로"
                onBtnClick1={handleMainClick}
            />
        );
    }

    const onClickBackHandler = () => navigate(-1);

    return (
        <Row className="mt-5 justify-content-md-center">
            <Col className="col-8">
                <div className="fs-4 fw-semibold border-bottom border-2 border-dark-subtle p-2">초록불 회원 가입</div>
                <Form className="p-5" onSubmit={onSubmitHandler}>
                    <Form.Group as={Row} className="mb-3" controlId="formName">
                        <Form.Label column sm="2">이름</Form.Label>
                        <Col sm="10">
                            <Form.Control
                                type="text"
                                placeholder="이름을 입력해 주세요."
                                name="memberName"
                                value={form.memberName}
                                onChange={onChangeHandler}
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formMemberId">
                        <Form.Label column sm="2">아이디</Form.Label>
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
                        <Form.Label column sm="2">이메일</Form.Label>
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

                    <Form.Group as={Row} className="mb-3" controlId="formPassword">
                        <Form.Label column sm="2">비밀번호</Form.Label>
                        <Col sm="10">
                            <Form.Control
                                type="password"
                                placeholder="비밀번호를 입력해 주세요."
                                name="memberPassword"
                                value={form.memberPassword}
                                onChange={onChangeHandler}
                            />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="mb-3" controlId="formConfirmPassword">
                        <Form.Label column sm="2">비밀번호 확인</Form.Label>
                        <Col sm="10">
                            <Form.Control
                                type="password"
                                placeholder="비밀번호를 한번 더 입력해 주세요."
                                name="confirmPassword"
                                onChange={onChangeHandler}
                            />
                        </Col>
                    </Form.Group>

                    <Checkbox onChange={onChangeTerms} className="p-4 d-flex align-items-center justify-content-center">
                        아래 내용에 모두 동의합니다. (필수)
                    </Checkbox>

                    <div className="fs-4 fw-semibold border-top border-2 border-dark-subtle p-2"/>
                    <div onClick={onClickBackHandler} style={{ cursor: 'pointer' }} className="mb-5">
                        〈 이전으로
                    </div>

                    <div className="px-0 d-flex align-items-center justify-content-center">
                        <Button variant="success" type="submit" className="w-50" disabled={loading}>
                            {loading ? <Spinner animation="border" size="sm" /> : "회원 가입"}
                        </Button>
                    </div>
                </Form>
            </Col>
        </Row>
    );
}

export default SignupForm;

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Col, InputGroup, Row, Dropdown, DropdownButton} from "react-bootstrap";
import {Checkbox} from "antd";
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

function SignupForm() {
    const onChange = (checked) => {
        console.log(`checked = ${checked}`);
    };

    const navigate = useNavigate();
    const onClickHandler = () => navigate(-1);

    return (
        <Form>
            <Row className="mt-5 justify-content-md-center">
                <Col className="col-8">
                    <div className="fs-4 fw-semibold border-bottom border-2 border-dark-subtle p-2">초록불 회원 가입</div>
                    <Form className="p-5">
                        <Form.Group as={Row} className="mb-3" controlId="">
                            <Form.Label column sm="2">
                                이름
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="text" placeholder="이름을 입력해 주세요."/>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="">
                            <Form.Label column sm="2">
                                아이디
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="text" placeholder="아이디를 입력해 주세요."/>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="">
                            <Form.Label column sm="2">
                                이메일
                            </Form.Label>
                            <Col sm="10">
                                <InputGroup className="mb-3">
                                    <Form.Control
                                        placeholder="이메일을 입력해 주세요."
                                        aria-label=""
                                        aria-describedby=""
                                    />
                                    <Button variant="outline-success" id="button-addon2">
                                        중복 확인
                                    </Button>
                                </InputGroup>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="">
                            <Form.Label column sm="2">
                                전화번호
                            </Form.Label>
                            <Col sm="3">
                                <Form.Select>
                                    <option>010</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </Form.Select>
                            </Col>
                            <Col sm="7">
                                <InputGroup className="mb-3">
                                    <Form.Control
                                        placeholder="아이디를 입력해 주세요."
                                        aria-label=""
                                        aria-describedby=""
                                    />
                                    <Button variant="outline-success" id="button-addon2">
                                        인증번호 발송
                                    </Button>
                                </InputGroup>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="">
                            <Form.Label column sm="2">
                                인증번호
                            </Form.Label>
                            <Col sm="10">
                                <InputGroup className="mb-3">
                                    <Form.Control
                                        placeholder="인증번호 6자리를 입력해 주세요."
                                        aria-label=""
                                        aria-describedby=""
                                    />
                                    <Button variant="outline-success" id="button-addon2">
                                        인증번호 확인
                                    </Button>
                                </InputGroup>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="">
                            <Form.Label column sm="2">
                                주소
                            </Form.Label>
                            <Col sm="10">
                                <Button variant="outline-success" className="w-100 no-hover">주소 검색
                                </Button>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="">
                            <Form.Label column sm="2">
                                아이디
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="text" placeholder="아이디를 입력해 주세요."/>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="">
                            <Form.Label column sm="2">
                                비밀번호
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="password" placeholder="비밀번호를 입력해 주세요."/>
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} className="mb-3" controlId="">
                            <Form.Label column sm="2">
                                비밀번호 확인
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="password" placeholder="비밀번호를 한번 더 입력해 주세요."/>
                            </Col>
                        </Form.Group>

                        <Checkbox onChange={onChange} className="p-4 d-flex align-items-center justify-content-center"
                        >아래 내용에 모두 동의합니다. (필수)</Checkbox>

                        <div className="mb-5 d-flex align-items-center justify-content-center ">
                            <div
                                style={{height: '200px', overflowY: 'auto', fontSize: '12px'}}
                                className="p-3 border border-2 rounded-2 w-75">
                                <div className="fw-light lh-md">초록불 회원가입 동의 약관<br/><br/>
                                    제1장 총칙<br/>
                                    제1조 (목적)<br/>
                                    이 약관은 초록불 웹사이트에서 제공하는 회원 서비스 이용에 관한 권리와 의무를 규정함을 목적으로 합니다.
                                    제2조 (용어의 정의)<br/>
                                    "초록불"이란 환경운동 커뮤니티이자 비건 상품 이커머스 서비스를 제공하는 웹사이트를 의미합니다.
                                    "회원"이란 초록불 웹사이트에 회원가입을 한 자를 의미합니다.
                                    "아이디(ID)"란 회원의 식별과 서비스 이용을 위해 회원이 설정한 이메일 주소를 의미합니다.
                                    "비밀번호"란 회원이 자신의 계정을 보호하기 위해 설정한 영문, 숫자, 특수문자의 조합을 의미합니다.
                                    제2장 회원 가입 및 탈퇴<br/>
                                    제3조 (회원가입)<br/>
                                    회원가입은 초록불 웹사이트에서 제공하는 회원가입 양식을 작성하여 신청할 수 있습니다.
                                    회원은 자신의 정확한 정보를 입력해야 하며, 허위 정보 입력 시 서비스 이용에 제한이 있을 수 있습니다.
                                    초록불은 회원가입 신청에 대한 승인 여부를 결정할 수 있으며, 승인된 회원에게 아이디와 비밀번호를 부여합니다.
                                    제4조 (회원 탈퇴)<br/>
                                    회원은 언제든지 초록불 웹사이트에서 회원 탈퇴를 신청할 수 있습니다.
                                    회원 탈퇴 시 회원의 모든 데이터와 권한은 즉시 삭제됩니다.
                                    제3장 서비스 이용<br/>
                                    제5조 (서비스 이용)<br/>
                                    회원은 초록불이 제공하는 환경운동 커뮤니티 및 비건 상품 이커머스 서비스를 이용할 수 있습니다.
                                    회원은 서비스 이용 시 관련 법규, 이 약관 및 초록불의 운영정책을 준수해야 합니다.
                                    초록불은 회원의 서비스 이용을 제한하거나 중지할 수 있습니다.
                                </div>
                            </div>
                        </div>

                        <div className="fs-4 fw-semibold border-top border-2 border-dark-subtle p-2"/>
                        <div onClick={onClickHandler} style={{cursor: 'pointer'}} className="mb-5">
                        〈 이전으로</div>{' '}

                        <div className="px-0 d-flex align-items-center justify-content-center">
                            <Button variant="success" type="submit" className="w-50">
                                회원 가입
                            </Button>
                        </div>


                    </Form>
                </Col>
            </Row>
        </Form>
    );


}

export default SignupForm;
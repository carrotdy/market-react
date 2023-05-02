import React, { useState } from 'react';
import logo from '../../images/logo.png';
import { Col, Row, Form, Input } from 'antd';
import { Layout } from '../../layouts/Layout';
import { useNavigate } from 'react-router-dom';
import { Path } from '../../config/Route';

const SignUp = () => {
    const navigate = useNavigate();
    const reg = /^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W)).{6,20}$/;  //6~20 영문 대소문자 중에 최소 1개의 숫자 혹은 특수 문자를 포함

    const [password, setPassword] = useState<string>('');
    const [rePassword, setRePassword] = useState<string>('');

    return (
        <Layout>
            <Row justify="center">
                <Col
                    onClick={() => { navigate(Path.home) }}
                    style={{ cursor: 'pointer' }}>
                    <img src={logo} />
                </Col>
            </Row>
            <Row justify="center">
                <Col style={{ marginBottom: "20px" }}>
                    <h2>회원가입</h2>
                </Col>
            </Row>
            <Form layout="vertical">
                <Row justify="center">
                    <Col xs={20} sm={20} md={13} lg={13} xl={10}>
                        <Form.Item
                            label={'아이디'}
                            name={'userId'}
                            rules={[
                                {
                                    required: true,
                                    message: "아이디를 입력해 주세요.",
                                },
                            ]}
                        >
                            <Input type='userId' placeholder="아이디를 입력해 주세요." />
                        </Form.Item>
                        <Form.Item
                            label={'비밀번호'}
                            name={'password'}
                            rules={[
                                {
                                    required: true,
                                    message: "특수 문자를 포함히야 6자리 이상",
                                },
                            ]}
                        >
                            <Input
                                type='password'
                                onChange={(e) => { setPassword(e.target.value) }}
                                placeholder="비밀번호를 입력해 주세요." />
                        </Form.Item>
                        <Form.Item
                            label={'비밀번호 재확인'}
                            name={'rePassword'}
                            rules={[
                                {
                                    required: true,
                                    message: "비밀번호를 다시한번 입력해 주세요.",
                                },
                            ]}
                        >
                            <Input
                                type='rePassword'
                                onChange={(e) => { setRePassword(e.target.value) }}
                                placeholder="비밀번호를 입력해주세요." />
                            {rePassword != '' &&
                                <>
                                    {rePassword == password ?
                                        <div style={{ color: 'blue', fontSize: 12, marginTop: 5 }}>확인되었습니다.</div>
                                        : <div style={{ color: 'red', fontSize: 12, marginTop: 5 }}>비밀번호를 다시 입력해주세요.</div>
                                    }
                                </>
                            }
                        </Form.Item>
                        <Form.Item
                            label={'이름'}
                            name={'name'}
                            rules={[
                                {
                                    required: true,
                                    message: "이름을 입력해 주세요.",
                                },
                            ]}
                        >
                            <Input type='name' placeholder="이름을 입력해 주세요." />
                        </Form.Item>
                        <Form.Item
                            label={'이메일'}
                            name={'email'}
                            rules={[
                                {
                                    required: true,
                                    message: "이메일을 입력해 주세요.",
                                },
                            ]}
                        >
                            <Input type='email' placeholder="이메일을 입력해 주세요." />
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
            <Row justify={"center"} >
                <Col xs={20} sm={20} md={13} lg={13} xl={10} style={{ marginTop: "20px" }}>
                    <div className='sign-up-submit-button'>
                        가입 완료하기
                    </div>
                </Col>
            </Row>
        </Layout>
    );
};

export default SignUp;
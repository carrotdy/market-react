import React from 'react';
import logo from '../../images/logo.png';
import { Col, Row, Form, Input } from 'antd';
import { Layout } from '../../layouts/Layout';
import { useForm } from 'react-hook-form';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    return (
        <Layout>
            <Row justify="center">
                <Col>
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
                            name={'userPassword'}
                            rules={[
                                {
                                    required: true,
                                    message: "비밀번호를 입력해 주세요.",
                                },
                            ]}
                        >
                            <Input type='userPassword' placeholder="비밀번호를 입력해 주세요." />
                        </Form.Item>
                        <Form.Item
                            label={'비밀번호 재확인'}
                            name={'userRePassword'}
                            rules={[
                                {
                                    required: true,
                                    message: "비밀번호를 다시한번 입력해 주세요.",
                                },
                            ]}
                        >
                            <Input type='userRePassword' placeholder="비밀번호를 입력해주세요." />
                        </Form.Item>
                        <Form.Item
                            label={'이름'}
                            name={'userName'}
                            rules={[
                                {
                                    required: true,
                                    message: "이름을 입력해 주세요.",
                                },
                            ]}
                        >
                            <Input type='userName' placeholder="이름을 입력해 주세요." />
                        </Form.Item>
                        <Form.Item
                            label={'이메일'}
                            name={'userEmail'}
                            rules={[
                                {
                                    required: true,
                                    message: "이메일을 입력해 주세요.",
                                },
                            ]}
                        >
                            <Input type='userEmail' placeholder="이메일을 입력해 주세요." />
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
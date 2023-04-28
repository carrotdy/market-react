import React from 'react';
import logo from '../../images/logo.png';
import { Col, Row, Form, Input, Button } from 'antd';
import { Layout } from '../../layouts/Layout';

const SignUp = () => {
    const [form] = Form.useForm();

    return (
        <Layout>
            <Row justify="center">
                <Col className='sign-up-container'>
                    <img src={logo} />
                </Col>
            </Row>
            <Row justify="center">
                <Col style={{ marginBottom: "20px" }}>
                    <h2>회원가입</h2>
                </Col>
            </Row>
            <Form form={form} layout="vertical">
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
                            <Input placeholder="아이디를 입력해 주세요." />
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
                            <Input placeholder="비밀번호를 입력해 주세요." />
                        </Form.Item>
                        <Form.Item
                            label={'비밀번호 재확인'}
                            name={'userPassword'}
                            rules={[
                                {
                                    required: true,
                                    message: "비밀번호를 다시한번 입력해 주세요.",
                                },
                            ]}
                        >
                            <Input placeholder="비밀번호를 입력해주세요." />
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
                            <Input placeholder="이름을 입력해 주세요." />
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
                            <Input placeholder="이메일을 입력해 주세요." />
                        </Form.Item>
                        <Form.Item
                            label={'휴대폰번호'}
                            name={'userPhone'}
                            rules={[
                                {
                                    required: true,
                                    message: "휴대폰번호를 입력해 주세요.",
                                },
                            ]}
                        >
                            <Input placeholder="휴대폰번호를 입력해 주세요." />
                        </Form.Item>
                        <Form.Item
                            label={'주소'}
                            name={'userPhone'}
                            rules={[
                                {
                                    required: true,
                                    message: "주소를 입력해 주세요.",
                                },
                            ]}
                        >
                            <Input placeholder="주소를 입력해 주세요." />
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
            <Row justify={"center"} >
                <Col xs={20} sm={20} md={13} lg={13} xl={10} style={{ marginTop: "20px" }}>
                    <Button style={{ marginBottom: "50px" }}>
                        가입완료하기
                    </Button>
                </Col>
            </Row>
        </Layout>
    );
};

export default SignUp;
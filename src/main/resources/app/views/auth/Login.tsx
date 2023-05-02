import React from 'react';
import { Layout } from '../../layouts/Layout';
import { Row, Col, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import { Path } from '../../config/Route';
import logo from '../../images/logo.png';

const Login = () => {
    const navigate = useNavigate();

    return (
        <Layout>
            <Col style={{ marginTop: "100px" }}>
                <Row justify="center">
                    <Col
                        onClick={() => { navigate(Path.home) }}
                        style={{ cursor: 'pointer' }}>
                        <img src={logo} />
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
                                style={{ marginTop: "20px" }}
                            >
                                <Input type='userId' placeholder="아이디를 입력해 주세요." />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row justify="center">
                        <Col xs={20} sm={20} md={13} lg={13} xl={10}>
                            <Form.Item
                                label={'비밀번호'}
                                name={'password'}
                                rules={[
                                    {
                                        required: true,
                                        message: "아이디를 입력해 주세요.",
                                    },
                                ]}
                            >
                                <Input type='userId' placeholder="아이디를 입력해 주세요." />
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
                <Row justify={"center"} >
                    <Col xs={20} sm={20} md={13} lg={13} xl={10} style={{ marginTop: "20px" }}>
                        <div className='sign-up-submit-button'>
                            로그인
                        </div>
                    </Col>
                </Row>
            </Col>
        </Layout >
    );
};

export default Login;
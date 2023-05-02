import React from 'react';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { Path } from '../../config/Route';

const Home = () => {
    const navigate = useNavigate();

    return (
        <>
            <Button onClick={() => { navigate(Path.account.signUp) }}>
                회원가입
            </Button>
            <Button onClick={() => { navigate(Path.account.login) }}>
                로그인
            </Button>
        </>
    );
};

export default Home;
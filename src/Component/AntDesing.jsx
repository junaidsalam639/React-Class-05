import React, { useState } from 'react'
import { SearchOutlined, UserOutlined, MailOutlined, RedditOutlined } from '@ant-design/icons';
import { Button, Tooltip, Space, Col, Divider, Row, Card, Input, Form } from 'antd';
import CardComp from './CardComp';
import CarouselComp from './CarouselComp';
import FormComp from './FormComp';
import NavbarComp from './NavbarComp';
import MenuAPi from './MenuApi';

const style = {
    background: '#0092ff',
    padding: '8px 0',
    margin: '8px 0',
    textAlign: 'center',
    fontSize: '20px',
    fontWeight: 'bold'
};

const AntDesing = () => {
    let [useMenu, setMenu] = useState(MenuAPi);
    const submit = () => {
        let name = document.getElementById('name').value
        let email = document.getElementById('email').value
        let pass = document.getElementById('pass').value
        let obj = {
            name: name,
            email: email,
            pass: pass,
        }
        console.log(obj);
    }
    return (
        <div>
            <div className='sticky-top'>
            <NavbarComp />
            </div>
            {/* login ke lye Input Desing start */}
            <div className="container" style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Row>
                    <Col>
                        <Input size="large" id='name' className='mt-3' placeholder="Name" prefix={<RedditOutlined />} />
                        <Input size="large" id='email' className='mt-3' placeholder="Email" prefix={<MailOutlined />} />
                        <Input size="large" id='pass' type='password' className='mt-3' placeholder="Password" prefix={<UserOutlined />} />
                        <Button type="primary" className='mt-3' onClick={submit}>submit</Button>
                    </Col>
                </Row>
            </div>
            {/* login ke lye Input Desing end */}


               <div className="container card-main">
                <div className="row">
                        <CardComp Menu={useMenu} />
                </div>
                </div>

            <CarouselComp />
        </div>
    )
}

export default AntDesing

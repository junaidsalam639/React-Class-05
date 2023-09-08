import React from 'react'
import { SearchOutlined  } from '@ant-design/icons';
import { Button, Tooltip, Space, Col, Divider, Row, Card } from 'antd';
import CardComp from './CardComp';
import CarouselComp from './CarouselComp';

const style = {
    background: '#0092ff',
    padding: '8px 0',
    margin: '8px 0',
    textAlign: 'center',
    fontSize : '20px',
    fontWeight : 'bold'
};

const AntDesing = () => {
    return (
        <div>
            <Tooltip title="search">
                <Button type="primary" shape="circle" icon={<SearchOutlined />} search />
            </Tooltip>
        
        <div className="container">
                <Divider orientation="center">sub-element align evenly</Divider>
                <Row className='row'>
                    <Col style={style} span={6}>col-4</Col>
                    <Col style={style} span={6}>col-4</Col>
                    <Col style={style} span={6}>col-4</Col>
                    <Col style={style} span={6}>col-4</Col>
                </Row>
        </div>

                 <div className="container">
                <Row className='row' justify='center'>
                    <Col span={6}>
                        <CardComp/>
                    </Col>
                    <Col span={6}>
                        <CardComp/>
                    </Col>
                    <Col span={6}>
                        <CardComp/>
                    </Col>
                    <Col span={6}>
                        <CardComp/>
                    </Col>
                    <Col span={6}>
                        <CardComp/>
                    </Col>
                    <Col span={6}>
                        <CardComp/>
                    </Col>
                    <Col span={6}>
                        <CardComp/>
                    </Col>
                    <Col span={6}>
                        <CardComp/>
                    </Col>
                </Row>
                 </div>

                 <CarouselComp/>
    </div>
    )
}

export default AntDesing

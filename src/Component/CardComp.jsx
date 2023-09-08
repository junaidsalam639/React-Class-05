import React from 'react'
import { SearchOutlined , EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Button, Tooltip, Space, Col, Divider, Row  , Avatar, Card , Carousel} from 'antd';
const { Meta } = Card;


const CardComp = () => {
  const edit = () => {
     alert('Hello')
  }
  const dele = () => {
    alert('Hello')
  }
  return (
    <div>
           <Card style={{width: 260, marginTop : '8%', marginBottom : '8%' }}
        cover={ <img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
         actions={[
           <Button onClick={edit}>Edit</Button>,
             <Button onClick={dele}>Delete</Button>,
         ]}>
         <Meta avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
           title="Card title"
           description="This is the description"/>
       </Card>
      
    </div>
  )
}

export default CardComp


import React from 'react'
import './component.css'
import { SearchOutlined , EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Button, Tooltip, Space, Col, Divider, Row  , Avatar, Card , Carousel, Menu} from 'antd';
import MenuAPi from './MenuApi';
const { Meta } = Card;

const CardComp = (props) => {
    console.log(props.Menu);
  return (
    <div>
      {
        props.Menu.map((e) => {
          return <div key={e.id} className='card mt-4 mb-4'>
           <Card style={{width: 300, height : "450px"  }}
        cover={ <img alt="example" src={e.image} width={300} height={200} />}
         actions={[
           <Button>Edit</Button>,
             <Button>Delete</Button>,
         ]}>
         <Meta avatar={''}
           title={e.name}
           description={e.description}/>
       </Card>
           </div>
        })
      }
      
    </div>
  )
}

export default CardComp


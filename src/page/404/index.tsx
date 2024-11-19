import {Button, Empty, Typography} from 'antd';
import {Link} from 'react-router-dom';
import React from 'react';

const NotFound: React.FC = () => {
  return <div style={{marginTop: '300px'}}>

    <Empty
      image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
      imageStyle={{height: 60}}
      description={
        <Typography.Text>
          温馨提示 <a href="#API">页面走丢啦</a>
        </Typography.Text>
      }
    >
      <Button type="primary"><Link to="/home">回到首页</Link></Button>
    </Empty></div>;
};

export default NotFound;
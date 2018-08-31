import React from 'react';
import ContentEditable from 'react-contenteditable';
import { Card as AntdCard } from 'antd';
import 'antd/lib/card/style/css';
import Kfeditor from '@kfcoding/kfeditor';

class Card extends React.Component {
  render() {
    const {instance} = this.props;
    return (
        <AntdCard style={{width: '100%', height: '100%'}} title={<ContentEditable onChange={e => instance.setProp('title', e.target.value)} html={instance.props.get('title')}/>}>
          <Kfeditor/>
          <ContentEditable onChange={(e) => instance.setProp('content', e.target.value)} html={instance.props.get('content')} style={{overflow: 'auto', height: '100%'}}/>
        </AntdCard>
    )
  }
}

export default Card;
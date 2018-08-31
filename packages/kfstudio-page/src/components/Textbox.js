import React from 'react';
import ContentEditable from 'react-contenteditable';

class Textbox extends React.Component {
  render() {
    const {instance} = this.props;
    return (

      <ContentEditable
        onChange={e => instance.setProp('content', e.target.value)}
        html={instance.props.get('content')}
        style={{
          fontSize: instance.props.get('fontSize'),
          color: instance.props.get('color'),
          textAlign: instance.props.get('textAlign')
        }}
      />

    )
  }
}

export default Textbox;
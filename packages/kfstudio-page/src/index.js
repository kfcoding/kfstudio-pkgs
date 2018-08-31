import React from 'react';
import styled from 'styled-components';
import {Progress, Button, Icon} from 'antd';
import UIComponent from './UIComponent';
import ReactDOM from 'react-dom';

const Containers = styled.div`
  width: ${props => props.page.width + 'px'};
  margin: 0 auto;
  background: #fff;
  position: relative;
`;

const Footer = styled.div`
  height: 60px;
  background: #dadada;
  bottom: 0;
  width: 100%;
  padding: 0 20px;
  line-height: 60px;
 
`;

class KfstudioPage extends React.Component {

  state = {
    rect: null,
    currentInstance: undefined
  }

  componentDidMount() {
    if (ReactDOM.findDOMNode(this.refs.dom))
      this.state.rect = ReactDOM.findDOMNode(this.refs.dom).getBoundingClientRect();

  }

  onDragOver = e => {
    e.stopPropagation();
    e.preventDefault();
  }

  onDrop = e => {
    const {page} = this.props;
    page.addInstance({
      x: e.pageX - this.state.rect.x,
      y: e.pageY - this.state.rect.y,
      type: e.dataTransfer.getData('text/plain')
    });
  }

  render() {
    let {page, store, onClickComponent} = this.props;
    return (
      <Containers ref='dom' onDragOver={this.onDragOver} onDrop={this.onDrop} page={page}>
        <div style={{height: page.height, width: page.width}}>
          {page.instances.map(i => <UIComponent onMouseDown={(i) => {onClickComponent(i); this.setState({currentInstance: i})}} store={store} key={i} active={this.state.currentInstance === i} instance={i}/>)}
        </div>
      </Containers>
    )
  }
}

export default KfstudioPage;
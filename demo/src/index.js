import React, {Component} from 'react'
import {render} from 'react-dom'

import TencentCaptcha from '../../src'

class Demo extends Component {

  captcha = null;

  onRefChild = ref => {
    this.captcha = ref;
  }

  captchaCallback = res => {
    console.log(res);
  }

  show = () => {
    this.captcha.show();
  }
  // 销毁
  destroy = () => {
    this.captcha.destroy();
  }

  render() {
    return <div>
      <h1>腾讯验证码</h1>
      <a onClick={this.show}>点我啊！！！！</a>
      <TencentCaptcha
        appid="2028109764"
        callback={this.captchaCallback}
        onRefChild={this.onRefChild}
      >
        点我啊！
      </TencentCaptcha>
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))

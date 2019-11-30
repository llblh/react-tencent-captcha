import React, {Component} from 'react'

export default class extends Component {

  captcha = null;

  captchaSource = null;

  componentDidMount() {
    if (typeof window.TencentCaptcha !== 'function') {
      const URL = 'https://ssl.captcha.qq.com/TCaptcha.js';
      const scriptHeat = document.createElement('script');
      scriptHeat.type = 'text/javascript';
      scriptHeat.src = URL;
      document.body.appendChild(scriptHeat);
      scriptHeat.onload = () => {
        this.initCaptcha();
      };
    } else {
      this.initCaptcha();
    }
  }
  componentWillUnmount() {
    this.captcha = null;
    this.captchaSource.destroy();
    this.captchaSource = null;
  }

  initCaptcha = () => {
    const { appid, callback, options, onRefChild } = this.props;
    const captcha = new window.TencentCaptcha(this.captcha, appid, callback, { ...options });
    this.captcha = captcha;
    if (onRefChild && typeof onRefChild !== 'function') {
      onRefChild(this.captcha);
    }
  }

  render() {
    const { children } = this.props;
    return (
      <div
        ref={(ref) => this.captcha = ref}
        id="Captcha">
        {children}
      </div>
    )
  }
}

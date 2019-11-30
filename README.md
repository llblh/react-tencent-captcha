# @carpenter/react-tencent-captcha

### 安装
> npm i @carpenter/react-tencent-captcha

### 引用
``` js
  import TencentCaptcha from '@carpenter/react-tencent-captcha';
```

### 属性
| 成员        | 说明            | 类型                | 默认值        |
|------------|-----------------|--------------------|--------------|
| onRefChild | onRefChild      | function           | 无           |
| appid      | appid           | String             | 无           |
| callback   | 验证成功的回调函数 | function           | 无           |
| options    | 配置参数         | object             | 无           |

### 示例

``` js
import TencentCaptcha from '@carpenter/react-tencent-captcha';

class Demo extends Component {

  captcha = null;

  onRefChild = ref => {
    this.captcha = ref;
  }

  captchaCallback = res => {
    console.log(res);
  }

  // 销毁
  destroy = () => {
    this.captcha.destroy();
  }

  render() {
    return <div>
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
```


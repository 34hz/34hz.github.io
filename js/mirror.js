function Mirror() {
    let pathname;
    let hostname;
    let url;
    pathname = window.location.pathname;
    hostname = window.location.hostname;
    // if (hostname === '域名，不带https://协议')
    if (hostname === 'www.34hz.top') { //如果是主站
      // url = "域名，带https://协议" + pathname;
      url = "http://didibobo.gitee.io" + pathname; //就跳转到镜像站的同名页面
      window.alert("即将抵达至镜像站");
      window.location.href = url;
    }
    else if(hostname === 'didibobo.gitee.io') {
      url = "http://www.34hz.top" + pathname;
      window.alert("即将启程回主站");
      window.location.href = url;
    }
    else {
      window.alert("本地调试，无需跳转");
    }
  }
function Mirror() {
    let pathname;
    let hostname;
    let url;
    pathname = window.location.pathname;
    hostname = window.location.hostname;
    // if (hostname === '域名，不带https://协议')
    // if(pathname === '/'){
    //     url=hostname;
    //     window.location.href = url;
    // }
    window.alert(pathname);
    
    if (hostname === 'www.34hz.top') { //如果是主站
      // url = "域名，带https://协议" + pathname;
      url = "http://didibobo.gitee.io" + pathname; //就跳转到镜像站的同名页面
      //window.alert(pathname);
      window.location.href = url;

    }
    else if(hostname === 'didibobo.gitee.io') {
      url = "http://www.34hz.top" + pathname;
      window.location.href = url;
      //window.alert("即将启程回主站");
      window.location.reload();
    }
    else {
      window.alert("本地调试，无需跳转");
    }
  }
  function Mirror2() {
      window.location.reload();
  }
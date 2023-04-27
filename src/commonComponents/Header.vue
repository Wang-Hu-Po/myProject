<template>
  <div class="header-wrap">
    <!-- 头部区分三部分： 1.左侧logo  2.导航栏  3.成长关爱+登录 -->
    <!-- 左侧 -->
    <a href=":javascript;" class="header-logo" @click.prevent></a>
    
    <!-- 中间导航栏 -->
    <div @mouseleave="movecorrect">
      <ul class="header-nav"  > 
        <li class="header-navitem" v-for="item in pathArr" :key="item.index">
          <router-link :to="item.path" exact  @mouseenter.native="moveLine">{{ item.msg }}</router-link>
        </li>
        <!-- 高亮bar -->
        <div id="lineHight"></div>
      </ul>
    </div>
    
    <!-- 登录 -->
    <div class="header-right">
      <a href="https://jiazhang.mihoyo.com" target="_blank" class="header-love">
        <span>成长关爱系统</span>
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAydpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDcuMS1jMDAwIDc5LmRhYmFjYmIsIDIwMjEvMDQvMTQtMDA6Mzk6NDQgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjNBMTNCQzMwNjk1MTExRUNBQ0ZDQjRDRjMxNzREOTQ2IiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjNBMTNCQzJGNjk1MTExRUNBQ0ZDQjRDRjMxNzREOTQ2IiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE4IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjkxMTU3NzhFNEI0NzExRUNCOUEyOTdCQUJGQzVDQjIzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjkxMTU3NzhGNEI0NzExRUNCOUEyOTdCQUJGQzVDQjIzIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+aJoX1wAAAvZJREFUeNqsl01IVFEUx99MM1iRjRoJobMwErFylRK0kOxrxoJoVbgIsk2LFkFfC2khSIu+iKKoRQzRQmpRBAUZmkEfZhRkmaAVooNQhISlSWj6+h/5D5wec997M7wDv3nvzj1z/++ee+bc+0K2bVs+LAw2gySoA1WgCETBBBgBfaAbPABTniOKsAtLwFEwZvu3SXAFxN3GdhNNghE7f/sNToKwX+EQaAPzdjD2GBR5CYvoDTt4ewdiWivkSK42cIr3f0AP6ATDoBDUgy2g3JEq4vsWPAJDTLyNoFH5vmKCzjiTK6nC+xw0GtZ+NWgF0/R9AhIuvufUzC84Q71UJdI9tuX77eA26ANd4AhYzr4DIAWibG8FN+n7lIm1TPnOgb9ggxY+RtGXYAV/0G5YrzTYp2a1Etw1+A6DBqUxCzoywmH+TyV0O+nU7pEsM+AgqAS9Hr7fwTpQwCUUWy8i29j4SNF6n5kqoZvw6XuHYx9m+0yYZVCsi9e9lj+T38Z4Py956uIr2V0KXrCdCLP2in3itcrK3UIe/YtBNZhkuyaCj0o2CtR/MmhhsWlGaSFaclPMRi2vr63gbQz0g1V6nSK8bwAl4Bb4GbDwNUZyj94Wx1X2tTD7mrm9BWEPWZDirAELJiJvlNMPUAsi4H1Awvupc19/KZtEChNvVmH5CtIs9ANgt1qOXEw2hV+gAoyDTaovLU/SZHjSQ3zS46yxuVg3KGSIsxWZlMW6PJWl8wtLna7lfuyZ2mSusz47LZEp9FcNg3xmPba428x6iPaAUtb/SwafQenPCMd5RspmQ2At/VpcRHu5U4nfRRe/JufR54SLszxlhYt4P2cq/eddxulkQv8nvIgHM5MNqLC3OkQzD3XWY3ssMx32YjxBmExE1tD3MhgF5T5mKpld53W8LeFJxGQflFgxr6dd/L9ljjt+DvRRzmDOMJhEZReopt+8y5qW5fomYfFJO/Iok4PM3lA+rzCaGjmucKamKIzy1LnD9Nqi+SfAAFLcgBA6a85mAAAAAElFTkSuQmCC" alt="">
      </a>
      <div class="header-login">
        <button class="login-btn">
          <span>登 录</span>
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkM4Q0U4MzlGNzIwQjExRTlCNzFCRjhGQzY5NjE1QzVEIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkM4Q0U4M0EwNzIwQjExRTlCNzFCRjhGQzY5NjE1QzVEIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QzhDRTgzOUQ3MjBCMTFFOUI3MUJGOEZDNjk2MTVDNUQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QzhDRTgzOUU3MjBCMTFFOUI3MUJGOEZDNjk2MTVDNUQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz59zFVZAAACLklEQVR42ryXzytEURTH33vGmPzOzxmmSbGSlaXt5D+QIqNYkKz8WCiSbFnJgiaysmCj+Bf4A6wQdkhK+ZFf0fU9Oq9er5l7zzVy6rOYeeec733v3XvOea5SyrGwCIiCGlDO/z2De/ABPsWZSNhAEYiDGfCq8tsr+8Q5RpvXJJoCu8redjnWWtgFQ6pwoxyeVLgYbKq/sy3OqRWmd5NVf2/Z8HsPC2cESeb5/ZUyLWBREJfJJ5wyBJ4bNgxduzTkSIWFaQPsaAIe+JiYTkGcffPZjr/ZggE66xWI+vQYciXIz+M6MqSpMWdg36K6HYATzfVhv3JFDBVpz+JuffYMFS7ice2NaVb45tjbh+YaaUU9Lvg6o+uupXC1KScJlxmcOkC9hWgdaDf4lHmCRAkwZiE8DpolbTEpLHtpwaZKC3MlHS57UqMzGsshGBOc36CVUvujqeLJsLODdgyWwTlPJG1gkveCxOiUVPgrnlX/Z6TluDxz0Qa6Fqz2CiyBQ3AHXkAJSII0mBM8uSZwI20Sp6AzV0MPTS0loBvcakYiT9oWF0DUsmRWgg1JW8w1CFB7G+A7cX6BGxoQMtLR55IbiFOA8KB09PGHvTUOWAG1vxCtDeRYlQx7wdUOBB7TCKgXCDaA0UBcXz5f1/AJk+Bi0c+/18ERuAAP3LUqQSvoAqPstw2mf45NAZ8wtP0bwZSgOEywr2fKa7rjsBVxwaA2WUXrBo9cTN7BlzTRtwADAOPsTPUcvaPqAAAAAElFTkSuQmCC" alt="">
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',

  data() {
    return {
      pathArr: [
        { msg: '首 页', path: '/main/home'},
        { msg: '新 闻', path: '/main/news'},
        { msg: '角 色', path: '/main/roles'},
        { msg: '世 界', path: '/main/worlds'},
        { msg: '漫 画', path: '/main/manhua'},
        { msg: '社 区', path: '/main/community'}
      ]
    }
  },

  methods: {
    moveLine(e) {
      // 移动
      // lineHight.style.transform = `translate(${e.target.offsetLeft - 30}px)`
      lineHight.style.left = `${e.target.offsetLeft}px`
      
    },
    // 移动当鼠标移除导航栏时要自动处于当前路由对应的标签位置
    movecorrect() {
      const active = document.querySelector('.header-nav .router-link-active')
      // lineHight.style.transform = `translate(${active.offsetLeft - 30}px)`
      lineHight.style.left = `${active.offsetLeft}px`
    }
  }
}
</script>

<style lang="less" scoped>
  .header-wrap {
    position: fixed;
    top: 0;

    z-index: 10;
    display: flex;
    height: 66px;
    width: 100%;
    min-width: 1280px;
    background-color: rgba(17, 17, 17, 0.75);
    .header-logo {
      width: 317px;
      background: url('@/assets/imgs/logo.png');
    }


    .header-nav {
      position: relative;
      display: flex;
      margin-left: -35px;
      // flex-direction: row;
      justify-content: center;
      align-items: center;

      .header-navitem {
        margin: 0 30px;
        height: 100%;

        text-align: center;
        line-height: 66px;
        font-size: 17px;
      }

      .header-navitem a {
        cursor: default;
      }

      #lineHight {
        position: absolute;
        top: 0;
        left: 30px;

        width: 40px;
        height: 5px;
        background-color: #69e0ff;

        transition: 0.2s;
      }

      .header-navitem:hover > a,
      .router-link-active {
        text-shadow: 0 0 10px #69e0ff, 0 0 20px #69e0ff, 0 0 40px #69e0ff;
        color: #fff;
      }
    }


    .header-right {
      position: absolute;
      top: 0;
      right: 30px;
      height: 100%;

      display: flex;
      align-items: center;

      .header-love {
        display: flex;
        align-items: center;
        margin-right: 20px;
        font-size: 17px;
        &:hover {
          color: #fff;
          img {
            opacity: 1;
          }
        }

        img {
          width: 27px;
          height: 27px;
          margin-left: 18px;
          opacity: 0.7;
        }
        
      }

      .header-login {
        display: flex;
        align-items: center;
        padding: 0 10px;

        .login-btn {
          display: flex;
          align-items: center;

          background: none;
          border: none;
          outline: none;
          font-size: 17px;
          color: #ccc;
          cursor: pointer;
          &:hover {
          color: #fff;
            img {
              opacity: 1;
            }
          }

          img {
            width: 27px;
            height: 27px;
            margin-left: 18px;
            opacity: 0.7;
          }
        }
      }
    }
  }
</style>
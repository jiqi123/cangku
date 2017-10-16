<template>
  <div class="hello">
    <div class="loginBox">
      <p>
        个人博客
      </p>
      <div class="area" v-focus:test="loginname">
        <label>
        用户名:&nbsp;
        </label>
      <input type="text" placeholder="请输入账号" v-model.lazy="loginname.val" @blur="fn(loginname)">
      <b style="color:red;display:block;padding-left:80px" v-if="loginname.state">{{loginname.msg}}</b>
      <br><br><br>
      </div>
      <div class="area" v-focus:required="loginpw">
        <label>
        密&nbsp;&nbsp;&nbsp;&nbsp;码:
      </label>
      <input type="password" placeholder="请输入密码" v-model.lazy="loginpw.val" @blur="fn(loginpw)">
      <b style="color:red;display:block;padding-left:80px" v-if="loginpw.state">{{loginpw.msg}}</b>
      <br><br><br>
      </div>
      
      <div class="btn">
        <button @click="login">点击登录</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      loginname: {
        val: "",
        msgread: "您输入的账号不符合格式",
        msg: "您输入的账号不符合格式",
        test: /^[a-zA-Z]+$/,
        state: false
      },
      loginpw: {
        val: "",
        msgread: "您输入的密码格式不对",
        blur: false,
        msg: "您输入的密码格式不对",
        test: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9a-zA-Z]{6,20}$/,
        state: false
      }
    }
  },
  methods: {
    login(){
      var _this = this
      if(!this.loginpw.state && !this.loginname.state && this.loginpw.val != "" && this.loginname.val != "") {
        this.axios.post('/api/back_class',{
          loginname: this.loginname.val,
          loginpw: this.loginpw.val
        }).then(function (data) {
          console.log(data)
          _this.$message(data.data.msg);
          if(data.data.code=="1001") {
            sessionStorage.setItem('userid',data.data.userid)
            sessionStorage.setItem('username',_this.loginname.val)
            _this.$router.push("/main")
          }
        })
      } else {
        alert('请输入正确的用户名和密码')
      }
    },
    fn(val){
      val.blur = true
    }
  },
  directives: {
      focus: {
        componentUpdated(el, option, vnode, oldVnode) {
            var $testState = option.value.test.test(option.value.val)
            if (option.value.val != "") {
                if ($testState) {
                    option.value.state = false
                } else {
                    option.value.state = true
                }
                option.value.msg = option.oldValue.msgread
            } else {
                if (option.arg == "required" && option.value.blur) {
                    option.value.state = true
                    option.value.msg = "不能为空"
                } else {
                    option.value.state = false
                }
            }
        }
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  html,body{
  	width: 100%;
  	height: 100%;
  }
  .hello{
  	width: 100%;
  	height: 100%;
    background: url(../../static/images/back5.jpg) no-repeat;
    position: relative;
    background-size: 100% 100%;
  }
  .loginBox{
    width: 500px;
    height: 500px;
    position: absolute;
    margin: auto;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    color: #999;
  }
  p{
    margin: 80px 175px;
    color: #fff;
    font-weight: normal;
    font-size: 30px;
  }
  label{
    margin: 40px 30px 40px 80px;
    font-size: 20px;
    color: #fff;
  }
  input{
    width: 200px;
    height: 30px;
    border: none;
    outline: none;
    padding: 0px 10px;background: rgba(255,255,255,0);
    color: #fff;
    font-size: 16px;
  }
  .btn{
    width: 300px;
    height: 40px;
    margin: 20px auto;
  }
  button{
   width: 100%;
   height: 100%;
   color: #fff;
   border: none;
   font-size: 18px;
   border-radius: 10px;
   outline: none;
   background: #917c5d;
   border: 2px solid #fff;
  }
</style>

webpackJsonp([6],{Tq1l:function(e,t){},W2Q3:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={name:"login",data:function(){return{loginData:{email:"",password:""},ruleInline:{email:[{required:!0,message:"请输入邮箱",trigger:"blue"}],password:[{required:!0,message:"请输入密码",trigger:"blue"},{type:"string",min:6,message:"密码长度不能"}]}}},methods:{handleSubmit:function(e){var t=this;this.$refs[e].validate(function(e){e?t.$post("/api/login",t.loginData).then(function(e){200===e.code?(t.$Message.success("登录成功!"),t.$Lockr.set("token",e.token),console.log(e),t.$router.push({path:"/home"})):t.$Message.error(e.msg)}):t.$Message.error("失败!")})}},watch:{}},s={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"admin-login"},[a("h3",{staticClass:"title"},[e._v("时洋的博客")]),e._v(" "),a("Form",{ref:"formInline",staticClass:"formInline",attrs:{model:e.loginData,rules:e.ruleInline}},[a("FormItem",{attrs:{prop:"email"}},[a("Input",{attrs:{type:"text",placeholder:"请输入邮箱"},model:{value:e.loginData.email,callback:function(t){e.$set(e.loginData,"email",t)},expression:"loginData.email"}},[a("Icon",{attrs:{slot:"prepend",type:"ios-person-outline"},slot:"prepend"})],1)],1),e._v(" "),a("FormItem",{attrs:{prop:"password"}},[a("Input",{attrs:{type:"password",placeholder:"请输入密码"},model:{value:e.loginData.password,callback:function(t){e.$set(e.loginData,"password",t)},expression:"loginData.password"}},[a("Icon",{attrs:{slot:"prepend",type:"ios-lock-outline"},slot:"prepend"})],1)],1),e._v(" "),a("FormItem",[a("Button",{attrs:{type:"primary"},on:{click:function(t){return e.handleSubmit("formInline")}}},[e._v("登录")])],1)],1)],1)},staticRenderFns:[]};var o=a("VU/8")(n,s,!1,function(e){a("Tq1l")},null,null);t.default=o.exports}});
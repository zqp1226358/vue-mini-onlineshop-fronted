<template>
  <div id="login-form">用户登录</div>
</template>

<script>
export default {
    data(){
        return{
            model:{manufacturer:{name:"",_id:""}}
        };
    },
    mounted(){
        const appId ="604c14e7e53ac80c3a83d2c0";
        const userPoolId = "604c14e672db2a0eca267b6f";
        const domain = "https://tuture-first.authing.co";

        const form = new Guard(userPoolId,{
            logo:"https://tuture.co/images/avatar.png",
            title:"迷你电商网站",
            mountId:"login-form",
            hideClose:true,
        });

        const that = this;

        form.on("authenticated",userInfo => {
            that.$store.commit("SET_USER",userInfo);
            localStorage.setItem("token",JSON.stringify(userInfo.token));
            localStorage.setItem("userInfo",JSON.stringify(userInfo));

            that.$router.push("/");
        })
    },
}
</script>

<style>

</style>
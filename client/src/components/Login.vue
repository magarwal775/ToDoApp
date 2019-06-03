<template lang="html">
  <div class = "login-card">
    <div class = "log_head">
    <h1> Login</h1>
    </div>
    <div class = "log_body">
    <form v-on:submit='checkUser($event)'>
      <table width="200" border="0" align="center">
      <tr>
      <td><input type='text' placeholder='Enter UserName' class="log_user" v-model='newUser'/></td>
      </tr>
      <tr>
      <td>&nbsp</td>
      </tr>
      <tr>
      <td><input type='password' placeholder='Enter Password' class="log_Pass" v-model='newPassword'/></td>
      </tr>
      <tr>
      <td>&nbsp</td>
      </tr>
      <tr>
      <td><input type='submit' class="login-submit" value="SIGN IN" /></td>
      </tr>
      </table>
    </form>
  </div>
  </div>
</template>

<script>
import ToDoAPI from '@/services/ToDoApi.js'
export default {
  data () {
    return {
      newUser: '',
      newPassword: '',
      random: []
    }
  },
  methods: {
    async checkUser (evt) {
    const response= await ToDoAPI.checkUser({'user': this.newUser})
    this.random= response.data
    if (this.random[0].password == this.newPassword){
    this.$store.commit('change', {'name': this.newUser})
    this.$router.push({path: '/todos'})
    }
    else{
    alert("Incorrect Password")
    }
      }

    }
  }
</script>
<style>
*{ padding:0; margin:0;}

.login-card {

  width: 400px;
  background-color: #7E7E7E;
  margin: 0px auto ;
  border-radius: 9px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
  min-height:440px;

}

.log_head{ background:#4DC889; width:400px; height:120px; border-radius:9px 9px 0 0px; }

.login-card h1 {
  text-align: center;
  font-family:open Sans;
  color:#FFFFFF;
  font-weight:700px;
  font-size:20px;
  line-height:27px;
  padding-top: 24px;

}


.log_body{ padding:40px 20px 20px 20px;}

.log_user{ background:#FEFEFE; color:#999999; border-radius: 10px; width:349px; height:31px; padding:5px; font-family:open Sans; font-weight:700px; font-size:15px; border:none; }

.log_Pass{background:#FEFEFE; color:#999999; border-radius: 10px; width:349px; height:31px; padding:5px; font-family:open Sans; font-weight:700px; font-size:15px; border:none;}


.login-submit{ background:#4DC889; border:none; border-radius: 10px; width:359px; height:36px; cursor:pointer; font-family:open Sans; font-weight:700px; font-size:15px; color:#FFFFFF; }

.log_body a{ text-decoration:none; color:#78EEB2; font-family:open Sans; font-weight:900px; font-size:15px; line-height:21px;}

</style>

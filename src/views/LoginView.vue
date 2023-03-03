<template>
  <div class="login mt-5 pt-5">
    <form class="form">
      <p class="heading">Login</p>
      <input class="input" placeholder="Email" v-model="email" type="email">
      <input class="input" placeholder="Password" v-model="userPass" type="text">
      <div class="btn-inline">
        <button class="btn">Forget Password<ForgetPassword></ForgetPassword></button>
        <button class="btn">Login</button>
      </div>
    </form>
  </div>
</template>

<script>
import ForgetPassword from '@/components/ForgetPassword.vue';
import axios from 'axios'

export default {
  components: {
    ForgetPassword
  },
  data() {
    return {
      email: '',
      userPass: '',
    }
  },
  methods: {
    login() {
      axios
        .post('https://sushi-store2.onrender.com/login', {
          email: this.email,
          userPass: this.userPass
        })
        .then(response => {
          localStorage.setItem('token', response.data.token);
        })
        .catch(error => {
          console.log(error);
        })
    }
  }

}
</script>

<style scoped>
@media screen and (min-width: 768px) {
  .login {
    width: 60%;
  }
}

@media screen and (min-width: 992px) {
  .login {
    width: 40%;
  }
}

.btn-inline {
  display: flex;
  gap: 10px;
  justify-content: center;
}

.login {
  width: 80%;
  margin: auto;
}

.form {
  margin-top: 5vh;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: white;
  padding: 2.5em;
  border-radius: 25px;
  transition: .4s ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.4) 1px 2px 2px;
}

.form:hover {
  transform: translateX(-0.5em) translateY(-0.5em);
  border: 1px solid #171717;
  box-shadow: 10px 10px 0px #666666;
}

.heading {
  color: #9EA1D4;
  padding-bottom: 2em;
  text-align: center;
  font-weight: bold;
}

.input {
  border-radius: 5px;
  border: 1px solid whitesmoke;
  background-color: whitesmoke;
  outline: none;
  padding: 0.7em;
  transition: .4s ease-in-out;
}

.input:hover {
  box-shadow: 6px 6px 0px #969696,
    -3px -3px 10px #ffffff;
}

.input:focus {
  background: #ffffff;
  box-shadow: inset 2px 5px 10px rgba(0, 0, 0, 0.3);
}

.form .btn {
  margin-top: 2em;
  align-self: center;
  padding: 0.7em;
  padding-left: 1em;
  padding-right: 1em;
  border-radius: 10px;
  border: none;
  color: black;
  transition: .4s ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.4) 1px 1px 1px;
}

.form .btn:hover {
  box-shadow: 6px 6px 0px #969696,
    -3px -3px 10px #ffffff;
  transform: translateX(-0.5em) translateY(-0.5em);
}

.form .btn:active {
  transition: .2s;
  transform: translateX(0em) translateY(0em);
  box-shadow: none;
}

.btn {
  color: #9EA1D4 !important;
}
</style>
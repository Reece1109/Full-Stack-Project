<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-lg-6 col-md-8 col-sm-10">
        <form class="form" @submit.prevent="signUp">
          <div class="form-control-wrapper spacing">
            <p class="heading">Register</p>
            <div class="row">
              <div class="col-md-6">
                <span class="inline">
                  <input class="form-control input" type="text" placeholder="Name" required v-model="payload.firstName"/>
                  <i class="bi bi-person"></i>
                </span>
              </div>
              <div class="col-md-6">
                <span class="inline">
                  <input type="text" class="form-control input" placeholder="Surname" v-model="payload.lastName">
                  <i class="bi bi-person-plus"></i>
                </span>
              </div>
            </div>
          </div>
          <div class="form-control-wrapper spacing">
            <div class="row">
              <div class="col-md-6">
                <span class="inline">
                  <input type="text" class="form-control input" placeholder="Gender" v-model="payload.gender">
                  <i class="bi bi-person-check"></i>
                </span>
              </div>
              <div class="col-md-6">
                <span class="inline">
                  <input type="text" class="form-control input" placeholder="Contact" v-model="payload.cellphoneNumber" maxlength="12">
                  <i class="bi bi-telephone"></i>
                </span>
              </div>
            </div>
          </div>
          <div class="form-control-wrapper ">
            <span class="inline">
              <input type="email" class="form-control input" placeholder="Email" v-model="payload.emailAdd">
              <i class="bi bi-envelope"></i>
            </span>
          </div>
          <div class="form-control-wrapper">
            <span class="inline">
              <input type="password" class="form-control input" placeholder="Password" v-model="payload.userPass">
              <i class="bi bi-keyboard"></i>
            </span>
          </div>
          <div class="form-control-wrapper">
            <span class="inline">
              <input type="text" class="form-control input" placeholder="Profile URL" v-model="payload.userProfile">
              <i class="bi bi-link"></i>
            </span>
          </div>
          <div class="form-control-wrapper">
            <span class="inline">
              <input type="date" class="form-control input" placeholder="Joined Date" v-model="payload.joinDate">
            </span>
          </div>
          <div class="form-control-wrapper">
            <label class="form-control bg-gradient" v-show="userMsg">{{ userMsg }}</label>
          </div>
          <div class="form-control-wrapper mt-3">
            <button type="submit" class="btn w-100">Register</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core';
import { useStore } from 'vuex';
export default {
  setup() {
    const payload = {
      firstName: '',
      lastName: '',
      gender: '',
      cellphoneNumber: '',
      emailAdd: '',
      userPass: '',
      userProfile: '',
      joinDate: ''
    };
    const store = useStore();
    const signUp = () => {
      store.dispatch("register", payload);
      // Refresh
      store.dispatch("fetchUsers");
    }
    const userMsg =
      computed(() => store.state.message)
    return {
      payload,
      userMsg,
      signUp
    }
  }
}
</script>

<style scoped>

.container-fluid {
  width: 100%;
  max-width: 1200px;
  margin: auto;
  height: fit-content;
  margin-top: 20px;
}
.form {
  margin-top: 1vh;
  display: flex;
  flex-direction: column;
  gap: 5px;
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
/* Input */
.input {
  border-radius: 5px;
  border: 1px solid whitesmoke;
  background-color: whitesmoke;
  outline: none;
  padding: 0.6em;
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
  margin-top: 1em;
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
/* Button */
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
<template>
        <div id="register" name="register" class="bg-grey-lighter min-h-screen flex flex-col">
            <div class="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <div class="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                <h1 class="mb-8 text-3xl text-center">Sign up</h1>
                <input 
                    type="text"
                    class="block border border-grey-light w-full p-3 rounded mb-4"
                    name="username"
                    v-model="username"
                    placeholder="User name" />

                <input 
                    type="text"
                    class="block border border-grey-light w-full p-3 rounded mb-4"
                    name="email"
                    v-model="email"
                    placeholder="Email" />

                <input 
                    type="password"
                    class="block border border-grey-light w-full p-3 rounded mb-4"
                    name="password"
                    v-model="password"
                    placeholder="Password" />
                <input 
                    type="password"
                    class="block border border-grey-light w-full p-3 rounded mb-4"
                    name="confirm_password"
                    v-model="cpassword"
                    placeholder="Confirm Password" />

                <button
                    type="submit"
                    @click="createUser"
                    className="w-full text-center py-3 rounded bg-blue-600 text-white hover:bg-green-dark focus:outline-none my-1"
                >Create Account</button>

                <div class="text-center text-sm text-grey-dark mt-4">
                    By signing up, you agree to the 
                    <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                        Terms of Service
                    </a> and 
                    <a class="no-underline border-b border-grey-dark text-grey-dark" href="#">
                        Privacy Policy
                    </a>
                </div>
            </div>

            <div class="text-grey-dark mt-6">
                Already have an account? 
                <router-link to="/" class="no-underline border-b border-blue text-blue">
                    Log in
                </router-link>.
            </div>
            </div>
        </div>
  
</template>

<script>
import { RouterLink } from 'vue-router';
import  create  from '../UserServer';

export default {
    name: 'register',
    data() {
        return {
            user: null,
            username: '',
            email: '',
            password: '',
            cpassword: ''
        }
    },
    methods: {
        // ValidateEmail(inputText) {
        //     var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        //     if(inputText.value.match(mailformat)) {
        //         alert("Valid email address!");
        //         this.createUser();
        //     } else {
        //         alert("You have entered an invalid email address!");
        //         this.clearForm();
        //     }
        // },
        createUser() {
            console.log(this.username)
          const payload = {
              username: this.username,
              password: this.password,
              email: this.email
          }
          create.create(payload);
          this.$router.push('/home');
        },
        clearForm() {
            this.username = "";
            this.password = "";
            this.cpassword = "";
            this.email = "";
        }
    }
}
</script>
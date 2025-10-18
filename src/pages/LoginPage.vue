<template>
   <div class="login-container">
      <h2>Log in into your account dude</h2>
      <input v-model="username" placeholder="Логін">
      <input v-model="password" type="password" placeholder="Пароль">
      <button v-on:click="login">login</button>
      <p v-if="message" class="error"> {{ message }}</p>
   </div>
</template>

<script>
   export default {
      data () {
         return {
            username: "",
            password: "",
            message: "",
            users: []
         };
      },
   async mounted () {
      try {
         const response = await fetch("/admin.json");
   if (!response.ok) {
      throw new Error("HTTP error: " + response.status);
   }
   this.users = await response.json();
   } catch (error) {
      console.error("Error with Downloading JSON: " + error);
      this.message = "Server issues! Please try again later.";
   }
   },
   methods: {
      login: function () {
         if (!this.username || !this.password) {
            this.message = "Insert your name and password!";
            return;
         }

         const user = this.users.find(function (u) {
            return u.username === this.username && u.password === this.password;
         }.bind(this));

         if (user) {
            localStorage.setItem("authUser", this.username);
            this.$router.push("/profile");
         } else {
            this.message = "LOL THAT PASSWORD / USERNAME IS WRONG!";
         }
      }
   }
};
</script>

<style>
   .login-container {
      max-width: 300px;
      margin: 50px auto;
      display: flex;
      flex-direction: column;
      gap: 10px;
   }
   input, button {
      padding: 10px;
      font-size: 16px;
   }
   button {
      cursor: pointer;
   }
   .error {
      color: red;
      font-size: 14px;
   }
</style>
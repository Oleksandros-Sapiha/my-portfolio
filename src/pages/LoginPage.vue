<template>
   <div class="login-style">
      <div class="login-container">
         <h2>Log in into your account dude</h2>
         <input v-model="username" placeholder="Username">
         <input v-model="password" type="password" placeholder="Password">
         <button v-on:click="login">Login</button>
         <p v-if="message" class="error"> {{ message }}</p>
      </div>
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

<style scoped>
   h2 {
      color: white;
      font-family: "Bahnschrift";
      font-stretch: condensed;
      text-align: center;
   }
   button {
      background: linear-gradient(to bottom, #221f5b, #190d42);
      height: 48px;
      width: 300px;
      color: white;
      font-weight: bold;
      text-align: left;
      border: none;
      border-radius: 3px;
      font-size: 19px;
      cursor: pointer;
   }

   .login-style {
      border-radius: 20px;
      background: linear-gradient(to bottom, #091825, #111214);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      width: 700px;
      height: 300px;
      margin-left: auto;
      margin-right: auto;
   }
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
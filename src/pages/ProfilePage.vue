<template>
   <div class="admin-container">
      <h2>Admin panel</h2>
      <p>Welcome back, {{ username }}!</p>

      <div class="profile-card">
         <img :src="photo" width="200px" alt="Фото профілю" class="profile-photo" v-if="photo">
         <p><strong>Name:</strong> {{ name }}</p>
         <p><strong>Role:</strong> {{ role }}</p>
         <p><strong>Phone:</strong> {{ phone }}</p>
         <p><strong>Email:</strong> {{ email }}</p>
      </div>

      <button v-on:click="logout">Вийти</button>
   </div>
</template>

<script>
   export default {
      data() {
         return {
            username: "",
            name: "Завантаження...",
            role: "Завантаження...",
            phone: "Завантаження...",
            email: "Завантаження...",
            photo: ""
         };
      },

      async mounted() {
         try {
            const savedUser = localStorage.getItem("authUser");
            if (savedUser) {
               this.username = savedUser;
            } else {
               this.$router.push("/login");
               return;
            }

            const response = await fetch("/admin.json");
            if (!response.ok) {
               throw new Error("HTTPS помилка" + response.status);
            }

            const users = await response.json();
            const currentUser = users.find(user => user.username == this.username);

            if (currentUser) {
               this.name = currentUser.name;
               this.role = currentUser.role;
               this.phone = currentUser.phone;
               this.email = currentUser.email;
               this.photo = currentUser.photo || "default-photo.png";
            } else {
               console.warn("Користувач не знайдений у JSON");
            }
         } catch (error) {
            console.error("Помилка завантаження JSON:", error);
         }
      },

      methods: {
         logout() {
            localStorage.removeItem("authUser");
            this.$router.push("/");
         }
      }
   };
</script>

<style>
   .admin-container {
      max-width: 400px;
      margin: 50px auto;
      text-align: center;
   }
   button {
      padding: 10px;
      font-size: 16px;
      cursor: pointer;
   }
</style>
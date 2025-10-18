<template>
   <div>
      <h2>MY <span>PORT</span>FOLIO</h2>
      <nav>
         <router-link to="/admin/homepage" active-class="active-link">Home</router-link>
         <router-link to="/admin/archive" active-class="active-link">Archive</router-link>
         <router-link to="/login" active-class="active-link">Profile</router-link>
      </nav>

      <main>
         <router-view />
      </main>
   </div>
</template>

<script>
   export default {
      name: "NavDashboard",
   };
</script>

<style scoped>
   div {
      display: flex;
      justify-content: column;
      min-height: 100vh;
   }

   nav {
      display: flex;
      justify-content: right;
      gap: 74px;
      position: sticky;
      top: 0;
      z-index: 1000;
      color: white;
   }

   a {
      color: white;
      font-size: 25px;
      text-decoration: none;
      padding: 10px 20px;
      border-radius: 5px;
   }

   a:hover {
      transform: scale(1.05);
   }

   .active-link {
      font-weight: bold;
   }

   main {
      padding: 20px;
      margin: 20px;
   }

   span {
      color: #0F4869;
   }
   
   h2 {
      color: white;
   }
</style>
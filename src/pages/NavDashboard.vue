<template>
   <div>
      <h2>MY <span>PORT</span>FOLIO</h2>
      <nav class="nav-links">
         <router-link to="/">Home</router-link>
         <router-link to="/archive">Archive</router-link>
         <router-link to="/footer">Commissions</router-link>
      </nav>
      <nav class="nav-registration">
         <router-link to="/login">Sign in / Log in</router-link>
      </nav>
   </div>
</template>

<script>
   export default {
      name: "NavDashboard"
   };
</script>

<style scoped>
   .nav-links a,
   .nav-registration a {
   font-size: inherit !important;
   }  

   div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: #00000004;
      padding: 15px 80px;
      position: sticky;
      top: 0;
      z-index: 1000;
   }

   .nav-registration {
      display: flex;
      justify-content: right;
      color: white;
      font-size: 13px;
      margin-right: 25px;
   }

   .nav-links {
      display: flex;
      justify-content: center;
      flex: 1;
      gap: 60px;
      font-weight: bold;
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
      font-size: 40px;
      color: white;
      margin-left: 10px;
      font-family: "Bahnschrift";
      font-stretch: condensed;
   }
</style>
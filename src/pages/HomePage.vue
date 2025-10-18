<template>
   <div class="homepage">
      <div class="homepage-card"> <br>
         <img src="assets/profile.png" class="pfp-image">
         <h2>Mikoro</h2>
         <p>✦ me when I obsess over fictional worldbuilding stuff cuz I can ✦</p>
         <div class="links"> 
            <a href="#">POSTS</a>
            <a href="#">ASK ME ANYTHING</a>
            <a href="#">ARCHIVE</a>
         </div>
         <p>Just some Worldbuilder Fella who’s obsessed with Rainworld and Military stuff. 
         Made that website with the help of my Online Web-designing Class Teacher, Dmytro, he’s a cool guy, thanks to him for everything.
         one of the members of <span>PROJECT: STARFALL</span></p>
         <ul>
            <li>Beginner in Digital Art</li>
            <li>Worldbuilder</li>
            <li>Traditional Artist</li>
            <li>Roblox Studio Vignette creator</li>
         </ul> <br>
      </div>
      <div class="post-content">
         <img src="assets/PostImage.png" loading="lazy" class="image">
         <p>Some cool tree models available for y’all, don’t miss</p>
         <button>DOWNLOAD</button>
      </div>
   </div>
</template>

<script scoped>
   export default {
      name: "HomePage"
   }
</script>

<style scoped>
   .homepage {
      min-height: 100vh;
      background-color: #171A21;
      padding-bottom: 50px;
   }

   .links {
      display: flex;
      justify-content: space-evenly;
      text-decoration: none;
      color: #E20346;
      gap: 3px;
      font-weight: bold;
      margin-left: 40px;
   }

   .homepage-card {
      background-color: #1B2126;
      border-radius: 25px;
      margin-top: 440px;
      width: 1300px;
      text-align: center;
      margin-left: auto;
      margin-right: auto;
   }

   .homepage h2 {
      color: #E20346;
      font-weight: condensed;
      font-size: 45px;
      margin-left: 20px;
      margin-bottom: 0;
      font-family: "Bahnschrift"
   }

   .homepage-card p {
      font-weight:normal;
      color: #A20435;
      font-size: 13px;
      margin-top: 0;
   }

   ul {
      font-weight:normal;
      color:#A20435;
      font-size: 13px;
      list-style: none;
   }

   .post-content {
      max-width: 315px;
      border: none;
      background-color: white;
      border-radius: 8px;
      margin-top: 30px;
      margin-left: auto;
      margin-right: auto;
   }

   .post-content p{
      color: #555555;
      margin-left: 5px;
      text-align: left;
      font-size: 15px;
   }

   button {
      background: linear-gradient(to bottom, #328B12, #2E6619);
      height: 68px;
      width: 141px;
      color: white;
      font-weight: bold;
      text-align: left;
      border: none;
      border-radius: 3px;
      font-size: 19px;
      cursor: pointer;
      margin-bottom: 13px;
      margin-left: 5px;
   }

   .image {
      width: 315px;
      height: 325px;
      margin-top: 4px;
      object-fit: cover;
   }

   .background-image {
      padding: 1440px, 601px;
   }
   
   .homepage-card span {
      color:#A20435;
      font-weight: bold;
   }

   .pfp-image {
      border: #1B2126;
      border-radius: 20px;
   }
</style>
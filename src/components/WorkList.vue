<template>
   <div class="work-list">
      <div class="work-section">
         <h2>EXAMPLES OF MY WORK:</h2>
         <p>Roblox Stuff: </p>
         <nav id="work-examples">
            <img src="assets/Montana.png" alt ="Some Pacific Northwest type shi I made for fun" loading="lazy" id="image-first">
            <img src="assets/EuropeVillage1.png" alt ="Average Eastern European Village 1" loading="lazy" id="image-second">
            <img src="assets/EuropeVillage2.png" alt ="Average Eastern European Village 2" loading="lazy" id="image-third">
         </nav> <br>
         <p>Digital Art Stuff: </p> <br>
         <h1>BLANK!!!! WORKING ON IT</h1>
      </div>
   </div>
</template>

<script>
   export default {
      name: "WorkList"
   }
</script>

<style scoped>
   .work-list {
      background: linear-gradient(to bottom, #2A475E, #1B2838);
      padding: 60px 20px;
   }

   .work-section {
      flex-direction: column;
      width: 456px;
      height: 510px;
   }

   .work-section img {
      width: 315px;
      height: 325px;
      margin-top: 4px;
      object-fit: cover;
   }
   
   .work-section h2 {
      font-size: 28px;
      font-family: "Bahnschrift";
      font-stretch: condensed;
      color: #FFFFFF;
      text-align: left;
   }

   .work-section p {
      font-size: 15px;
      color: #FFFFFF;
      font-family: "Bahnschrift";
      font-stretch: condensed;
      text-align: left;
   }
   .work-section nav {
      background-color: white;
      border-radius: 8px;
      color: #555555;
      text-align: left;
   }

   h1 {
      color: #FFFFFF;
      font-family: "Bahnschrift";
      font-stretch: condensed;
      font-size: 40px;
      margin-top: 60px;
      margin-left: 150%;
   }
</style>
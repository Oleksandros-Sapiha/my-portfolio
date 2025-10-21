<template>
   <div class="archive-content">
      <h2>ARCHIVE: </h2>
      <p>Roblox Stuff: </p>
      <nav id="first-container">
         <img src="assets/Montana.png" alt ="Some Pacific Northwest type shi I made for fun" loading="lazy" id="image">
         <img src="assets/EuropeVillage1.png" alt ="Average Eastern European Village 1" loading="lazy" id="image">
         <img src="assets/EuropeVillage2.png" alt ="Average Eastern European Village 2" loading="lazy" id="image">
      </nav> <br>
      <nav id="second-container">
         <img src="assets/RedSky.png" alt="Crimson Skies" loading="lazy" id="image">
         <img src="assets/Meadow.png" alt="Most Beautiful Shi I've ever made" loading="lazy" id="image">
         <img src="assets/BreakThatCycle.png" alt="Where did my boy, 106 go?" loading="lazy" id="image">
      </nav> <br> <hr>
      <p>Other stuff: </p>
      <h1>[Work in Progress!!!!]</h1>
   </div>
</template>

<script>
   export default {
      name: "ArchivePage"
   }
</script>

<style scoped>
   h2 {
      font-family: "Bahnschrift";
      font-stretch: condensed;
      font-size: 30px;
      color: white;
      margin-left: 90px;
   }

   p {
      color: white;
      margin-left: 90px;
      font-family: "Bahnschrift";
      font-stretch: condensed;
   }
   
   nav {
      display: flex; 
      justify-content: space-evenly;
      max-width: 400px;
      border: none;
      background-color: white;
      border-radius: 8px;
      margin-left: auto;
      margin-right: auto;
   }

   .first-container .second-container {
      color: #555555;
      margin-left: 5px;
      text-align: left;
      font-size: 14px;
   }

   h1 {
      color: #FFFFFF;
      font-family: "Bahnschrift";
      font-stretch: condensed;
      font-size: 40px;
      text-align: center;
      font-size: 60px;
   }

   div {
      background: linear-gradient(to bottom, #0A1525, #17273f);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      width: 1400px;
      height: 600px;
      margin-left: auto;
      margin-right: auto;
   }

   .image {
      width: 400px;
      height: 325px;
      margin-top: 4px;
      object-fit: cover;
   }
</style>
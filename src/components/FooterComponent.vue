<template>
   <footer class="footer">
      <div class="footer-content">
         <h2>MY <span>PORT</span>FOLIO</h2>
         <p>Follow me for more on social media
         if you have questions? Ask me in DMs
         Support me on Ko-Fi</p>
         <a href="https://x.com/MikoroElamaris"><img src="assets/twitter-logo.png" loading="lazy" class="image-first"></a>
         <a href="https://t.me/@AlexSapiha"><img src="assets/telegram-logo.webp" loading="lazy" class="image-second"></a>
         <a href="https://discordapp.com/users/1224124971081797724"><img src="assets/discord-logo.webp" loading="lazy" class="image-third"></a>
         <a href="https://ko-fi.com/"><img src="assets/ko-fi-logo.png" loading="lazy" class="image-fourth"></a>
         <div class="footer-misc">
            <p>&copy; MY PORTFOLIO - All Rights are Reserved.</p>
         </div>

         <ul>
            <li><p>Navigation</p></li>
            <li><a href="#">Homepage</a></li>
            <li><a href="#">Archive</a></li>
            <li><a href="#">Log in | Sign out</a></li>
            <li><a href="#">Commissions</a></li>
         </ul>

         <ul>
            <li><p>Navigation</p></li>
            <li><a href="#">About Me</a></li>
            <li><a href="#">Contacts</a></li>
            <li><a href="#">Credits</a></li>
            <li><a href="#">Subscription</a></li>
         </ul>

         <section id="Form">
            <h2>Commissions</h2>
            <p>There you could choose a type of comission you want:</p>
            <form action="/submit-form" method="post">
               <label for="commission-type">Type of comission:</label>
               <select id="commission-type">
                  <option value="full-model">$5 - Roblox Vignette (small)</option>
                  <option value="standard">$10 - Roblox Vignette (large)</option>
                  <option value="full-map">$15 - Fanart</option>
               </select>
               <label for="name">Your name: </label>
               <input type="text" id="name" name="name" placeholder="Please enter your name here" required>
               <button type="submit">Submit</button>
            </form>
         </section> <br> <hr>
         
         <div>
            <img src="assets/Element.png">
            <p>All Payments are 100% Secure.</p>
         </div>
      </div>
   </footer>
</template>

<script>
   export default {
      name: "FooterComponent",
   };
</script>

<style>
   body {
      background: linear-gradient(to bottom, #18222F, #131a24);
   }

   ul {
      align-items: left;
      list-style: none;
   }

   p {
      font-size: 14px;
      font-weight: bold;
      word-spacing: -3%;
      color: #CCCCCC;
   }

   .image-first {
      width: 73px;
      height: 53px;
   }

   .image-second {
      width: 58px;
      height: 58px;
   }

   .image-third {
      width: 43px;
      height: 43px;
   }

   .image-forth {
      width: 44px;
      height: 44px;
   }
</style>

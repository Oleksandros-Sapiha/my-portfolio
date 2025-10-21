<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-main">
        <div class="footer-left">
          <h2>MY <span>PORT</span>FOLIO</h2>
          <h3>
            Follow me for more on social media.<br>
            If you have questions? ask me in DMs.<br>
            Support me on Ko-Fi
          </h3>

          <div class="socials">
            <a href="https://x.com/MikoroElamaris"><img src="@/assets/twitter-logo.webp" loading="lazy" class="icons"></a>
            <a href="https://t.me/@AlexSapiha"><img src="@/assets/telegram-logo.webp" loading="lazy" class="icons"></a>
            <a href="https://discordapp.com/users/1224124971081797724"><img src="@/assets/discord-logo.webp" loading="lazy" class="icons"></a>
            <a href="https://ko-fi.com/"><img src="@/assets/ko-fi-logo.png" loading="lazy" class="icons"></a>
          </div>
          <p class="copyright-footer">&copy; MY PORTFOLIO - All Rights Reserved.</p>
        </div>

        <div class="footer-right">
          <div class="footer-links">
            <ul>
              <li><p>Navigation</p></li>
              <li><a href="pages/HomePage.vue">HomePage</a></li>
              <li><a href="pages/ArchivePage.vue">Archive</a></li>
              <li><a href="pages/LoginPage.vue">Log in | Sign out</a></li>
              <li><a href="#Form">Commissions</a></li>
            </ul>

            <ul>
              <li><p>About</p></li>
              <li><a href="#">About Me</a></li>
              <li><a href="#">Contacts</a></li>
              <li><a href="#">Credits</a></li>
              <li><a href="#">Subscription</a></li>
            </ul>
          </div>

          <section id="Form">
            <p>Commissions</p>
            <form action="/submit-form" method="post">
              <label for="commission-type">Type of commission:</label>
              <select id="commission-type">
                <option value="full-model">$5 - Roblox Vignette (small)</option>
                <option value="standard">$10 - Roblox Vignette (large)</option>
                <option value="full-map">$15 - Fanart</option>
              </select>
              <input type="text" id="taskInput" placeholder="Type Here..." required>
              <button type="submit">Submit</button>
            </form>
          </section>
        </div>
      </div> <hr>
      <div class="footer-misc">
        <img src="@/assets/Element.png" alt="Secure payments" class="guarantee-img"/>
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

<style scoped>
.footer {
  background: linear-gradient(to bottom, #18222F, #131a24);
  padding: 60px 20px;
  color: #CCCCCC;
}

.guarantee-img {
  width: 1000px;
  height: 500px;
}

.footer-content {
  max-width: 1300px;
  margin: 0 auto;
}

.footer-main {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 60px;
}

.footer-left {
  flex: 1 1 40%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.footer-left h2 {
  font-family: "Bahnschrift";
  font-stretch: condensed;
  color: white;
  font-size: 40px;
}

.footer-left h3 {
  font-weight: bold;
  line-height: 1.5;
  margin-top: 10px;
}

.footer-left span {
  color: #0F4869;
}

.copyright-footer {
  font-weight: lighter;
  font-style: italic;
  font-size: small;
  margin-top: 10px;
}

.socials {
  margin-top: 20px;
  display: flex;
  gap: 10px;
}

.socials a img {
  transition: transform 0.2s ease;
}

.socials a img:hover {
  transform: scale(1.1);
}

.footer-right {
  flex: 1 1 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.footer-links {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  gap: 50px;
}

ul {
  list-style: none;
  padding: 0;
}

ul li p {
  color:#CCCCCC;
  font-weight: bold;
  margin-bottom: 10px;
}

ul li a {
  color: #CCCCCC;
  text-decoration: none;
  font-size: 14px;
  display: block;
  margin-bottom: 6px;
  transition: color 0.2s ease;
}

ul li a:hover {
  color: #1e1b49;
}

.icons { 
   width: 43px; 
   height: 43px; 
   display: flex;
   justify-content: start;
}

#Form {
  margin-top: 25px;
  width: 100%;
}

#Form select,
#Form input {
  width: 100%;
  padding: 8px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: none;
  background-color: #10151d;
  color: #CCCCCC;
}

button {
  background: linear-gradient(to bottom, #328B12, #2E6619);
  border: none;
  border-radius: 3px;
  font-weight: bold;
  color: white;
  cursor: pointer;
  padding: 10px 20px;
}

button:hover {
  background: linear-gradient(to bottom, #41aa1b, #48912d);
}

.footer-misc {
  text-align: center;
  margin-top: 40px;
  color: #888;
  font-size: 13px;
}

.footer-misc img {
  display: block;
  margin: 0 auto 10px auto;
  width: 60px;
  height: auto;
}

@media (max-width: 900px) {
  .footer-main {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .footer-left,
  .footer-right {
    align-items: center;
  }

  .footer-links {
    flex-direction: column;
    gap: 20px;
  }

  #Form {
    text-align: center;
  }
}
</style>

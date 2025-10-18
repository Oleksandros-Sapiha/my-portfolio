<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-main">
        <div class="footer-links">
          <h2>MY <span>PORT</span>FOLIO</h2>
          <h3>
            Follow me for more on social media.<br>
            If you have questions? ask me in DMs.<br>
            Support me on Ko-Fi
          </h3>

          <div class="socials">
            <a href="https://x.com/MikoroElamaris"><img src="assets/twitter-logo.png" loading="lazy" class="image-first"></a>
            <a href="https://t.me/@AlexSapiha"><img src="assets/telegram-logo.webp" loading="lazy" class="image-second"></a>
            <a href="https://discordapp.com/users/1224124971081797724"><img src="assets/discord-logo.webp" loading="lazy" class="image-third"></a>
            <a href="https://ko-fi.com/"><img src="assets/ko-fi-logo.png" loading="lazy" class="image-fourth"></a>
          </div>
          <p class="copyright-footer">&copy; MY PORTFOLIO - All Rights Reserved.</p>
        </div>

        <div class="footer-right">
          <div class="footer-nav">
            <ul>
              <li><p>Navigation</p></li>
              <li><a href="pages/HomePage.vue">Homepage</a></li>
              <li><a href="pages/ArchivePage.vue">Archive</a></li>
              <li><a href="">Log in | Sign out</a></li>
              <li><a href="#">Commissions</a></li>
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
        <img src="assets/Element.png" alt="Secure payments" />
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
.footer p {
  font-weight: bold;
}

.footer {
  background: linear-gradient(to bottom, #18222F, #131a24);
  padding: 60px 20px;
  color: #CCCCCC;
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

.footer-links {
  flex: 1 1 40%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.footer-links h2 {
  font-family: "Bahnschrift";
  font-stretch: condensed;
  color: white;
  font-size: 40px;
}

.footer-links h3 {
  font-weight: bold;
  line-height: 1.5;
  margin-top: 10px;
}

.footer-links span {
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

.footer-nav {
  display: flex;
  justify-content: space-between;
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
  color: #4c398f;
}

.image-first { 
   width: 73px; height: 53px; 
}

.image-second { 
   width: 58px; height: 58px; 
}

.image-third { 
   width: 43px; height: 43px;
}

.image-fourth { 
   width: 44px; height: 44px; 
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

<template>
  <div class="footer-container">
    <div class="footer-content">
      <div class="footer-top">
        <div class="logo-and-title">
          <div class="icon">
            <a href="/">
              <IconVibraTravel />
            </a>
          </div>
          <div class="footer-title">
            <p class="footer-title-text cooper-font">
              Your padel adventure in Spain starts here.
            </p>
          </div>
        </div>
        <div class="footer-links-content">
          <div class="footer-links-section">
            <p class="trips-title">Explore</p>
            <div class="links">
              <a href="/groups" class="nav-link">
                <p class="button-text">Groups</p>
              </a>
              <a href="/corporate" class="nav-link">
                <p class="button-text">Corporate</p>
              </a>
              <a href="/schools" class="nav-link">
                <p class="button-text">Schools</p>
              </a>
            </div>
          </div>
          <div class="footer-links-section">
            <p class="trips-title">About Us</p>
            <div class="links">
              <a href="/why-vibra" class="nav-link">
                <p class="button-text">Why Vibra</p>
              </a>
              <a href="/contact" class="nav-link">
                <p class="button-text">Contact</p>
              </a>
            </div>
          </div>
          <div class="footer-links-section">
            <p class="trips-title">Follow our trips</p>
            <div class="links">
              <a href="https://www.instagram.com/vibratravel__/" target="_blank" class="nav-link">
                <p class="button-text">Instagram</p>
              </a>
              <a href="https://www.tiktok.com/@vibratravel" target="_blank" class="nav-link">
                <p class="button-text">Tiktok</p>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-line"></div>

      <div class="footer-bottom">
        <p class="bottom-text">
          © 2025 Vibra Travel. All Rights Reserved. Crafted with ❤️ for Padel
          Lovers.
        </p>
        <div class="bottom-links">
          <a href="/legal" class="nav-link buttom-text">
            <p class="button-text">Terms & Conditions</p>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconVibraTravel from "./icons/IconVibraTravel.vue";
</script>

<style scoped>
.footer-container {
  display: flex;
  justify-content: center;
  height: 480px;
  background-color: var(--color-purple);
}

.footer-content {
  width: 85vw;
  margin: 81px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.icon {
  width: 136px;
  height: 44px;
}

.footer-top {
  height: 172px;
  display: flex;
  justify-content: space-between;
  align-items: space-between;
}

.logo-and-title {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 384px;
  gap: 40px;
}

.footer-title-text {
  font-size: 38px;
  font-weight: 200;
  line-height: 115%;
  color: var(--color-cream);
}

.footer-links-section {
  display: flex;
  flex-direction: column;
  gap: 23px;
  align-items: flex-start;
  max-width: 736px;
  height: 132px;
}

.footer-links-content {
  display: flex;
  justify-content: space-between;
  width: 40vw;
}

.trips-title {
  color: var(--color-cream);
  font-size: 24px;
}

.button-text {
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  color: var(--color-cream);
  opacity: 0.5;
  transition: opacity 0.3s ease-in-out;
}

.button-text:hover {
  opacity: 1;
}

.footer-line {
  width: 100%;
  height: 1px;
  opacity: 0.15;
  background-color: var(--color-white);
}

.bottom-text {
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  color: var(--color-cream);
  opacity: 0.5;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
}

.bottom-links {
  display: flex;
  justify-content: space-between;
  gap: 30px;
}

.not-clickable {
  pointer-events: none;
}

@media (max-width: 1024px) {
  .footer-container {
    height: auto;
    padding: 20px 0;
  }

  .footer-content {
    width: 90vw;
    margin: 20px 0;
  }

  .footer-top {
    flex-direction: column;
    height: auto;
    align-items: center;
    gap: 20px;
  }

  .logo-and-title {
    width: 100%;
    align-items: center;
    gap: 30px;
  }

  .footer-title-text {
    font-size: 24px;
    text-align: center;
    margin: 20px 0;
  }

  .footer-links-content {
    flex-direction: column;
    align-items: center;
    width: 70vw;
    min-width: 350px;
    justify-content: space-evenly;
    gap: 50px;
    margin: 10px 0;
  }

  .footer-links-section {
    align-items: start;
    flex-direction: column;
    width: 90vw;
    justify-content: space-between;
    height: auto;
    padding-left: 10px;
  }

  .links {
    display: flex;
    gap: 20px;
    justify-content: flex-end;
  }

  .trips-title {
    font-size: 20px;
  }

  .button-text {
    font-size: 14px;
  }

  .footer-line {
    margin: 45px 0;
  }

  .bottom-text {
    font-size: 14px;
    text-align: center;
  }

  .footer-bottom {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 30px;
  }
}
</style>

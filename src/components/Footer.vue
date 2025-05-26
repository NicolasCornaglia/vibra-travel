<template>
  <div class="footer-container">
    <div class="footer-content">
      <div class="footer-top">
        <div class="logo-and-title">
          <div class="icon">
            <IconVibraTravel />
          </div>
          <div class="footer-title">
            <p class="footer-title-text cooper-font">Your padel adventure in Spain starts here.</p>
          </div>
        </div>
        <div class="footer-links">
          <div class="trips-container">
            <p class="trips-title">Follow our trips</p>
          </div>
          <div>
            <a href="https://www.instagram.com/vibr.atravel/" target="_blank" class="nav-link">
              <p class="button-text">Instagram</p>
            </a>
            <a href="https://www.instagram.com/vibr.atravel/" target="_blank" class="nav-link">
              <p class="button-text">Tiktok</p>
            </a>
            <a href="https://www.instagram.com/vibr.atravel/" target="_blank" class="nav-link">
              <p class="button-text">Youtube</p>
            </a>
          </div>
        </div>
      </div>

      <div class="footer-line"></div>

      <div class="footer-bottom">
        <p class="bottom-text">© 2025 Vibra Travel. All Rights Reserved. Crafted with ❤️ for Padel Lovers.</p>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import IconVibraTravel from './icons/IconVibraTravel.vue';
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

.footer-links {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 40vw;
  max-width: 736px;
  height: 132px;
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

@media (max-width: 768px) {
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

  .footer-links {
    width: 100%;
    align-items: center;
    height: auto;
    gap: 10px;
  }

  .trips-title {
    font-size: 20px;
  }

  .button-text {
    font-size: 14px;
  }

  .footer-line {
    margin: 15px 0;
  }

  .bottom-text {
    font-size: 14px;
    text-align: center;
  }
}

</style>

<template>
    <div class="footer">
        <div class="footer-logo">
            <img src="../assets/photos/1.png" alt="logo">
        </div>
        <div class="footer-content">
            <div class="footer-section">
                <h3>DESTINATIONS</h3>
                <p><a href="#" @click.prevent="scrollToLocations"><span>Barcelona</span></a></p>
                <p><a href="#" @click.prevent="scrollToLocations"><span>Sevilla</span></a></p>
            </div>
            <div class="footer-section">
                <h3>WHAT DO WE OFFER?</h3>
                <p><RouterLink to="/padel"><span>Padel Packages</span></RouterLink></p>
                <p><RouterLink to="/sports"><span>Sports Activities</span></RouterLink></p>
            </div>
            <div class="footer-section">
                <h3>WHO ARE WE?</h3>
                <p><a href="#" @click.prevent="scrollToAbout"><span>About Us</span></a></p>
                <p><RouterLink to="/terms"><span>Terms & Conditions</span></RouterLink></p>
                <p><a href="#" @click.prevent="scrollToContact"><span>Contact Us</span></a></p>
                <p><RouterLink to="/faq"><span>FAQ</span></RouterLink></p>
            </div>
        </div>
    </div>
    
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { nextTick } from 'vue';
const router = useRouter();

const scrollToLocations = async () => {
  // First check if we're already on the home page
  if (router.currentRoute.value.path !== '/') {
    // If not, navigate to home page first and wait for navigation to complete
    await router.push('/');
    // Wait for next tick to ensure component is mounted
    await nextTick();
  }
  
  // Use a slightly longer timeout to ensure the page has fully rendered
  setTimeout(() => {
    const element = document.getElementById('locations');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, 500);
};

const scrollToAbout = async () => {
  if (router.currentRoute.value.path !== '/') {
    await router.push('/');
    await nextTick();
  }
  
  setTimeout(() => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, 500);
}

const scrollToContact = async () => {
  if (router.currentRoute.value.path !== '/') {
    await router.push('/');
    await nextTick();
  }
  
  setTimeout(() => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, 500);
};
</script>

<style scoped>
.footer {
    background-color: #f5f5f5;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 20px;
}

.footer-logo img {
    border-radius: 50%;
    width: 25vw;
    max-width: 200px;
}

.footer-content {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: flex-start;
    width: 70vw;
    margin-left: 20px;
    max-width: 1100px;
}

.footer-section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
    width: 100%;
}

.footer-section p {
    margin: 0;
}

.footer-section p a {
    text-decoration: none;
    color: #000;
    font-size: 0.9rem;
    width: 20vw;
}

.footer-section p a:hover {
    color: #f4acb7;
}


@media (max-width: 768px) {
    .footer {
        margin: 0;
    }
    .footer-content {
        flex-direction: column;
    }

    .footer-logo {
        display: none;
    }
}

</style>
<template>
    <div class="fet-container">
      <div class="fet-content">
        <div class="fet-top">
          <div class="fet-top-title">
            <p class="cooper-font">
                Perfect Padel trips <br/>
                for every team
            </p>
          </div>
          <div class="fet-top-subtitle">
            <p>
              We lay the foundation for an incredible trip. All elements can be
              adjusted, added, or removed to suit your group’s preferences. We’ll
              shape the experience around you.
            </p>
          </div>
        </div>
        <div class="fet-bottom">
          <div class="fet-card" v-for="card in cards" :key="card.title">
            <div class="fet-card-icon">
              <component :is="card.icon" />
            </div>
            <div class="fet-card-title">
              <p>{{card.title}}</p>
            </div>
            <div class="fet-card-desc">
               {{ card.desc }}
            </div>
          </div>
          
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import IconChart from './icons/IconChart.vue';
  import IconShield from './icons/IconShield.vue';
  import IconSchool from './icons/IconSchool.vue'
  
  const cards = [
    {
      icon: IconChart,
      title: 'Corporate Teams',
      desc: 'Boost productivity, enhance communication, and reward your employees with an unforgettable active retreat.'
    },
    {
      icon: IconShield,
      title: 'Sports Clubs & Teams',
      desc: 'Strengthen team dynamics, improve skills with group coaching, and enjoy friendly competition in a new environment.'
    },
    {
      icon: IconSchool,
      title: 'School & College Groups',
      desc: 'Build camaraderie, enjoy a break from studies, and experience Spanish culture with an affordable, action-packed Padel tour.'
    },
  ]
  
  </script>
  
  <style scoped>
  .fet-container {
    display: flex;
    justify-content: center;
    background-color: var(--color-white);
  }
  
  .fet-content {
    margin: 50px 0;
    width: 85vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
  }
  
  .fet-top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
  }
  
  .fet-top-title {
    height: 150px;
    max-width: 600px;
    font-size: 64px;
    font-weight: 400;
    line-height: 115%;
    color: var(--color-purple);
  }
  
  .fet-top-subtitle {
    height: 150px;
    display: flex;
    align-items: end;
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
    color: rgba(0, 0, 0, 0.41);
    width: 25vw;
  }
  
  .fet-bottom {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    margin: 30px 0;
  }
  
  .fet-card {
    width: 25vw;
    margin: 40px 0;
  }
  
  .fet-card-icon {
    width: 56px;
    height: 56px;
    margin-bottom: 20px
  }
  
  .fet-card-title {
    font-size: 24px;
    font-weight: 500;
    line-height: 113%;
    color: var(--color-purple);
    padding: 10px 0;
  }
  
  .fet-card-desc {
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
    color: rgba(0, 0, 0, 0.41);
    padding: 10px 0;
  }
  
  @media (max-width: 768px) {
    .fet-container {
      width: 100vw;
      margin-top: 0px;
    }
  
    .fet-content {
      width: 90vw;
      gap: 0;
    }
  
    .fet-top {
      flex-direction: column;
      align-items: center;
    }
  
    .fet-top-title {
      font-size: 40px;
      width: 100%;
      height: 100px;
    }
  
    .fet-top-subtitle {
      height: auto;
      width: 100%;
      margin-top: 20px;
    }
  
    .fet-bottom {
      flex-wrap: nowrap;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  
    .fet-card {
      width: 90vw;
      margin-bottom: 20px;
    }
  }
  </style>
  
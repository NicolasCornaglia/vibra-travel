<template>
  <div class="terms">
    <div class="terms-title">
      <img src="../../assets/photos/terms.jpg" alt="Terms & Conditions image" />
      <h1>Terms & Conditions</h1>
    </div>
    <div class="terms-content">
      <div class="terms-content-title">
        <h1>
          <span class="terms-black">BOOK WITH</span>
          <span class="terms-pink"> CONFIDENCE</span>
        </h1>
        <p>When you choose a trip with us, changing plans is easy!</p>
      </div>
      <div class="terms-content-text">
        <div class="terms-content-text-item">
          <h3>Last Minute Changes</h3>
          <p>
            Vibra Travel & Sport reserves the right to adjust the schedule or
            location of training sessions. Any changes will be communicated in
            advance and will not impact the format or total number of training
            hours.
          </p>
          <p>
            In case of adverse weather conditions, the organization will take
            all necessary measures, such as rescheduling or relocating
            activities to indoor facilities, to ensure that the padel
            experiences proceed smoothly.
          </p>
          <p>
            Should force majeure circumstances prevent the activities from
            taking place (such as continuous severe weather, unavailability of
            indoor facilities or difficulties to find trainers), the
            organization will provide a refund for any services that were not
            used.
          </p>
        </div>

        <div class="terms-content-text-item">
          <h3>Cancellation Policy REVIEW PENDING</h3>
          <p>
            The participant is entitled to cancel the whole experience with full
            refund up to 48h before arrival. Let's dive deep into every specific
            scenario depending on the selected package:
          </p>
          <p>
            30% NON-REFUNDABLE DEPOSIT FOR ACCOMMODATION? 
            HOW MUCH FUNDED AND WHEN? 
          </p>
          <p>
            30% PAID UPON BOOKING REMAINING 7 DAYS BEFORE ARRIVAL? 
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.terms {
  position: relative;
}

.terms-title {
  position: relative;
  width: 100%;
  max-height: 400px;
}

.terms-title img {
  width: 100%;
  max-height: 400px;
  object-fit: cover;
  display: block;
}

.terms-title h1 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 4rem;
  font-weight: 600;
  text-align: center;
  width: 100%;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.terms-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.terms-content-title {
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 500;
}
.terms-content-title h1 {
  font-size: 2.3rem;
}

.terms-pink {
  color: #f4acb7;
}

.terms-content-text h3 {
  font-size: 1.5rem;
}

.terms-content-text-item {
  margin-bottom: 20px;
}

.terms-content-text-item p {
  padding: 10px 0;
}

/* Responsive Fix */
@media (max-width: 768px) {
  .terms-title h1 {
    font-size: 2rem;
  }

  .terms-content-title h1 {
    font-size: 1.5rem;
  }

  .terms-content-title p {
    font-size: 0.8rem;
  }

  .terms-content-text h3 {
    font-size: 1.2rem;
  }

  .terms-content-text-item p {
    font-size: 0.8rem;
  }
}
</style>

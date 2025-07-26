<template>
  <div class="tac-container">
    <div class="tac-content">
      <h1 class="tac-title cooper-font">Terms and Conditions</h1>
      <p class="tac-desc fgrotesk-font">
        Please read these Terms and Conditions carefully before booking your holiday with <b>VIBRA TRAVEL</b> (“we”, “us”, “our”). By booking a trip, you agree to be bound by these Terms and Conditions.
      </p>
      <ol class="tac-list fgrotesk-font">
        <li>
          <span class="tac-section-title">Booking and Payment</span>
          <ol type="a">
            <li>A non-refundable deposit is required to secure your place.</li>
            <li>The balance must be paid no later than 4 weeks before the start of your holiday. Failure to do so may result in cancellation of your booking.</li>
            <li>Bookings made less than 4 weeks before the holiday start date must be paid in full at the time of booking.</li>
          </ol>
        </li>
        <li>
          <span class="tac-section-title">What’s Included</span>
          <ul>
            <li>Coaching sessions, matches/tournament</li>
            <li>Local transfers (where applicable)</li>
            <li>Accommodation for the specified number of nights (as agreed in your package)</li>
            <li>Social events or excursions (if listed in your package)</li>
            <li>Flights and travel insurance are <b>not included.</b></li>
          </ul>
        </li>
        <li>
          <span class="tac-section-title">Cancellations and Refunds</span>
          <ol type="a">
            <li><b>By You:</b><br />
              Cancellations must be made in writing.<br />
              If you cancel more than 4 weeks before the start date, we retain only the deposit. If you cancel less than 4 weeks before the start date, we retain the full booking amount.
            </li>
            <li><b>By Us:</b><br />
              In the unlikely event we must cancel a trip (due to unforeseen circumstances), you will be offered a full refund or an alternative date.
            </li>
          </ol>
        </li>
        <li>
          <span class="tac-section-title">Travel and Insurance</span>
          <ol type="a">
            <li>You are responsible for booking your own travel to the destination.</li>
            <li>Travel insurance is <b>strongly recommended</b>, including cover for padel and other physical activities.</li>
            <li>We are not liable for costs incurred due to travel disruption, illness, or personal injury not directly caused by our negligence.</li>
          </ol>
        </li>
        <li>
          <span class="tac-section-title">Health and Fitness</span>
          <ol type="a">
            <li>You must ensure you are physically fit to take part in padel sessions.</li>
            <li>Any health conditions or injuries must be disclosed in advance. We reserve the right to decline participation based on medical concerns.</li>
          </ol>
        </li>
        <li>
          <span class="tac-section-title">Accommodation and Conduct</span>
          <ol type="a">
            <li>You must treat the accommodation and facilities with respect. Any damage caused will be your responsibility.</li>
            <li>We reserve the right to remove any participant who behaves in a way that negatively impacts the group or the local environment, without refund.</li>
          </ol>
        </li>
        <li>
          <span class="tac-section-title">Liability</span>
          <ol type="a">
            <li>We accept no responsibility for loss or damage to personal belongings during the holiday.</li>
            <li>Our liability is limited to the cost of your holiday booking, except in cases of personal injury or death caused by our negligence.</li>
          </ol>
        </li>
        <li>
          <span class="tac-section-title">Changes to Itinerary</span>
          <p>We reserve the right to make reasonable changes to the itinerary due to weather, availability, or operational needs. We’ll always do our best to provide a similar alternative.</p>
        </li>
        <li>
          <span class="tac-section-title">Photos and Marketing</span>
          <p>By attending one of our holidays, you agree that photos or videos taken during the trip may be used for marketing purposes. Please notify us in advance if you do not wish to appear in any promotional material.</p>
        </li>
        <li>
          <span class="tac-section-title">Governing Law</span>
          <p>These Terms and Conditions are governed by the laws of Spain and any disputes will be subject to the exclusive jurisdiction of its courts.</p>
        </li>
      </ol>
      <div class="tac-contact fgrotesk-font">
        <b>Contact</b><br />
        If you have any questions about these Terms and Conditions, please contact us at:<br />
        📧 <a href="mailto:info@vibra-travel.com">info@vibra-travel.com</a><br />
        📞 <a href="tel:+34744484995">(+34) 744484995</a><br />
        🌐 <a href="https://www.vibra-travel.com" target="_blank">www.vibra-travel.com</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.tac-container {
  display: flex;
  justify-content: center;
  background-color: var(--color-cream);
  padding: 40px 0;
}

.tac-content {
  width: 95vw;
  max-width: 1300px;
  background: var(--color-white);
  border-radius: 30px;
  padding: 40px 60px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
}

.tac-title {
  font-size: 48px;
  color: var(--color-purple);
  margin-bottom: 40px;
  font-weight: 400;
  text-align: center;
}

.tac-desc {
  font-size: 18px;
  color: rgba(0,0,0,0.41);
  margin-bottom: 30px;
}

.tac-list {
  color: rgba(0,0,0,0.41);
  font-size: 16px;
  line-height: 1.7;
  margin-bottom: 30px;
  padding-left: 20px;
}
.tac-list > li {
  margin-bottom: 18px;
}
.tac-section-title {
  color: var(--color-purple);
  font-weight: bold;
  display: inline-block;
  margin-bottom: 6px;
}
.tac-list ul, .tac-list ol {
  margin-top: 10px;
  margin-bottom: 10px;
  padding-left: 20px;
}
.tac-list p {
  margin: 0;
}

.tac-contact {
  font-size: 16px;
  color: rgba(0,0,0,0.41);
  margin-top: 30px;
}
.tac-contact a {
  color: var(--color-orange);
  text-decoration: none;
}
.tac-contact a:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .tac-content {
    width: 99vw;
    padding: 20px 10px;
  }
  .tac-title {
    font-size: 32px;
    text-align: center;
  }
  .tac-desc {
    font-size: 15px;
    text-align: center;
  }
}
</style>
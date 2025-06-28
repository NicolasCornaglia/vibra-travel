<template>
    <section id="contact">
        <div class="contact-form-container">
            <div class="tr-decoration">
                <IconBallBL />
            </div>
            <div class="contact-form-content">
                <div class="contact-items  cooper-font">
                    <div class="title">
                        <span>Prefer to reach out directly?</span>
                    </div>
                </div>
                <div class="contact-form">
                    <form @submit.prevent="submitEmail">
                        <div class="form-line">
                            <div class="form-group">
                                <label for="name">Name</label>
                                <input type="text" id="name" v-model="formData.name" placeholder="Your name" required />
                            </div>
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input type="email" id="email" v-model="formData.email" placeholder="Your email"
                                    required />
                            </div>
                        </div>
                        <div class="form-line">
                            <div class="form-group">
                                <label for="number">Phone number</label>
                                <input type="number" id="number" v-model="formData.phone"
                                    placeholder="Your phone number" required />
                            </div>
                            <div class="form-group">
                                <label for="group">Group size</label>
                                <input type="number" id="group" v-model="formData.groupSize"
                                    placeholder="Your group size" required />
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="message">Message</label>
                            <textarea id="message" v-model="formData.message" rows="4"
                                placeholder="What are you dreaming about?" required></textarea>
                            <div class="form-submit">
                                <button type="submit" class="btn-contact">Send</button>
                            </div>
                        </div>

                    </form>
                </div>
            </div>
            <div class="bl-decoration">
                <!-- <IconBallTR /> -->
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
/* import IconBallTR from './icons/IconBallTR.vue'; */
import IconBallBL from './icons/IconBallBL.vue';
import { ref } from "vue";
import emailjs from "@emailjs/browser";
// Reactive form data
const formData = ref({
    name: "",
    email: "",
    phone: "",
    groupSize: "",
    message: "",
});

// Form submission handler
const submitEmail = async () => {
    try {
        await emailjs.send(
            'service_6bh7gps',
            'template_lp60trd',
            formData.value,
            'rXl9T75PEg6BL6TxA'
        );
        alert('Email sent successfully! Thank you for contacting us :)');
        formData.value = { name: "", email: "", phone: "", groupSize: "", message: "" };
    } catch (error) {
        alert('Failed to send email. Please try again later.');
        console.error(error);
    }
};
</script>

<style scoped>
.contact-form-container {
    display: flex;
    justify-content: center;
    background-color: var(--color-cream);
}

.contact-form-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 200px;
    min-width: 200px;
    width: 90vw;
    padding: clamp(60px, 8vw, 120px) 0px;
}

/* Icons are rotated here I assume, but will keep it for now and modify their order in the template, should be fixed in the future */
.tr-decoration {
    align-self: flex-end;
    width: clamp(60px, 8vw, 120px);
    height: clamp(60px, 8vw, 120px);
}

.bl-decoration {
    align-self: flex-start;
    width: clamp(60px, 8vw, 120px);
    height: clamp(60px, 8vw, 120px);
}

.tr-decoration :deep(svg),
.bl-decoration :deep(svg) {
    width: 100%;
    height: 100%;
}

.contact-items {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
}

.title {
    font-size:  38px;
    font-weight: 400;
    line-height: 115%;
    text-align: center;
    margin: 0;
    color: var(--color-purple);
}

.contact-form {
    max-width: 600px;
    margin: 0 auto;
    padding-top: 60px;
}

.form-line {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
}

.form-group {
    flex: 1;
    margin: 0 10px;
}

.form-group label {
    display: block;
    color: var(--color-purple);
    font-size: 14px;
    font-weight: 500;
    line-height: 150%;
}

.form-group input,
.form-group textarea {
    width: 100%;
    font-size: 14px;
    padding: 10px;
    background-color: rgba(255, 255, 255, 0.28);
    border: 1px solid #ccc;
    border-radius: 10px;
    box-sizing: border-box;
}

.form-group input::placeholder,
.form-group textarea::placeholder {
    color: #999;
}

.form-group input:focus,
.form-group textarea:focus {
    border-color: var(--color-orange);
    outline: none;
    color: var(--color-purple);
    background-color: white;
    /* Background becomes white when focused */
}

.form-group textarea {
    height: 100px;
    resize: vertical;
}

.form-submit {
    width: 100%;
}

.btn-contact {
    margin-top: 20px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 600;
    line-height: 113%;
    color: var(--color-white);
    padding: 10px 20px;
    border: 1px-solid var(--color-orange);
    background-color: var(--color-orange);
    border-radius: 25px;
    height: 50px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--color-orange);
    transition: all 0.3s ease-in-out;
}

.btn-contact:hover {
    background-color: var(--color-white);
    color: var(--color-orange);
}

@media (max-width: 768px) {
    .title {
        width: 90%;
    }

    .contact-form {
        padding-top: 30px;
    }

    .form-line {
        flex-direction: column;
        width: 70vw;

    }

    .form-group {
        margin-bottom: 15px;
    }

}
</style>
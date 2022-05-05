<template>
    <div class="container">
        <div class="row justify-content-center mt--300">
            <div class="col-lg-8">
                <card gradient="second" shadow body-classes="p-lg-5"
                    v-if="!signedUp">
                    <h4 class="mb-1">We'd love to hear from you</h4>
                    <p class="mt-0">Fill up the form below to get started!</p>
                    <base-input 
                        class="mt-5"
                        alternative
                        placeholder="Your name"
                        addon-left-icon="ni ni-single-02"
                        v-model="name"
                        :required="true"
                    >
                    </base-input>

                    <base-input 
                        alternative
                        placeholder="Email address"
                        addon-left-icon="ni ni-email-83"
                        v-model="email"
                        :required="true"
                    >
                    </base-input>

                    <base-input 
                        class="mb-4"
                    >
                        <textarea 
                            class="form-control form-control-alternative" name="name" rows="4"
                            cols="80" placeholder="Type a message..."
                            v-model="message">
                        </textarea>
                    </base-input>

                    <base-button 
                        type="primary" 
                            block size="lg"
                        @click="signup"
                    >
                        SUBMIT
                    </base-button>

                    <div v-if="error.length" class="mt-5 text-danger">{{error}}</div>
                </card>
                <card gradient="second" shadow body-classes="p-lg-5"
                    v-else>
                    <h4 class="mb-1">Thank you for your submission!</h4>
                </card>
            </div>
        </div>
        
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    name: 'sign-up-form',
    data() {
        return {
            name: '',
            email: '',
            message: '',
            signedUp: false,
            error: ''
        }
    },
    methods: {
        ...mapActions({
            createSignup: 'signups/createSignup'
        }),
        signup() {
            if(this.name.length && this.email.length){

                this.createSignup({
                    name: this.name,
                    email: this.email,
                    message: this.message,
                    context: this.$route.path
                }); 

                this.signedUp = true;
            } else {
                this.error = '*Name and Email Address are required';
            }
        }
    },
}
</script>

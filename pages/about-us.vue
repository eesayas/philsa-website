
   
<template>
    <div>
        <div class="profile-page">
            <section class="section-profile-cover section-shaped my-0">
                <div class="shape shape-style-1 shape-default">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <div class="container shape-container d-flex">
                    <div class="col px-0 my-auto">
                        <div class="row justify-content-center text-center mb-lg">
                            <div class="col-lg-8">
                                <v-img src="https://photos.smugmug.com/photos/i-bzxrsKF/0/240281b0/X3/i-bzxrsKF-X3.png"></v-img>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <about-us></about-us>
        </div>
        <contact-info></contact-info>
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
export default {
    methods: mapActions({
        showExecutive: 'executives/showExecutive'
    }),
    computed: mapGetters({
        executive: 'executives/executive'
    }),
    created(){
        this.showExecutive(this.$route.params.id);
    }
};
</script>
<style scoped>
.v-image__image{
    max-width: 180px !important;
}
</style>
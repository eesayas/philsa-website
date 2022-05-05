<template>
    <section class="section-hero section-shaped my-0">
        <div class="shape shape-style-1 shape-default">
            <span class="span-150"></span>
            <span class="span-50"></span>
            <span class="span-50"></span>
            <span class="span-75"></span>
            <span class="span-100"></span>
            <span class="span-75"></span>
            <span class="span-50"></span>
            <span class="span-100"></span>
            <span class="span-50"></span>
            <span class="span-100"></span>
        </div>

        <div class="shape-container d-flex align-items-center"
            style="height: 100%">
            <div class="col px-0">
                <div class="row justify-content-center align-items-center">
                    <div class="col-lg-12 text-center">
                        <highlight-carousel></highlight-carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import HighlightCarousel from './HighlightCarousel.vue';
export default {
  components: { HighlightCarousel },};
</script>
<style>
</style>

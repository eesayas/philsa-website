<template>
  <div>
    <section class="section section-shaped my-0 overflow-hidden">
      <div class="shape shape-style-1 shape-default shape-skew">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="container pt-lg pb-300">
        <div class="row text-center justify-content-center">
          <div class="col-lg-10">
            <h2 class="display-3 text-white">Be a part of PhilSA!</h2>
            <p class="lead text-white">
              PhilSA is <span class="font-weight-bold">not only</span> for
              Filipino or Filipino-Canadian students; it is open to
              <span class="font-weight-bold">ALL</span> campus members who are
              interested in Philippine culture and issues. We welcome you to
              join us in our social events, educational engagements, and
              philanthropic initiatives.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="section section-lg pt-lg-0 section-contact-us">
      <sign-up-form></sign-up-form>
    </section>
  </div>
</template>
<script>
import SignUpForm from "./SignUpForm.vue";
export default {
  components: { SignUpForm },
  name: "contact-info",
};
</script>

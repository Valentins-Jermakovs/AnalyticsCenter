<template>
  <div>
    <HeroSection></HeroSection>
    <AboutSection></AboutSection>
    <FeaturesSection></FeaturesSection>
    <CTASection></CTASection>
    <Footer></Footer>
    <LanguageSelector></LanguageSelector>
  </div>
</template>

<script setup>
import HeroSection from '@/components/landing/HeroSection.vue'
import CTASection from '@/components/landing/CTASection.vue'
import AboutSection from '@/components/landing/AboutSection.vue'
import FeaturesSection from '@/components/landing/FeaturesSection.vue'
import Footer from '@/components/landing/Footer.vue'
import LanguageSelector from '@/components/common/LanguageSelector.vue'
</script>

<style scoped></style>

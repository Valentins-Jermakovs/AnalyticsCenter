<template>
  <footer class="py-6 bg-base-100 border-t border-base-300 text-center text-sm">
    <p class="mb-2">{{ $t('footer.copyright') }}</p>
    <div class="flex flex-col justify-center gap-4">
      <div class="flex flex-col md:flex-row items-center justify-center gap-4">
        <a href="#" class="hover:underline">{{ $t('footer.privacy') }}</a>
        <a href="#" class="hover:underline">{{ $t('footer.terms') }}</a>
      </div>
      <div class="flex items-center justify-center gap-4 text-2xl">
        <a href="#" aria-label="GitHub">
          <font-awesome-icon icon="fa-brands fa-github" />
        </a>
        <a href="#" aria-label="Twitter">
          <font-awesome-icon icon="fa-brands fa-twitter" />
        </a>
        <a href="mailto:jermakovsvalentins@gmail.com" aria-label="Email">
          <font-awesome-icon icon="fa-envelope" />
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup></script>

<style scoped></style>

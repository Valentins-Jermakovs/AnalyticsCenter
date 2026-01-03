<template>
    <!-- Navigation links to registration and login -->
    <!-- if login: link to register -->
    <div v-if="isLogin">
        <h3>{{ $t('auth.switch_to_register') }} 
            <router-link to="/register" class="link link-hover link-primary">
                {{$t('auth.register') }}
            </router-link>
        </h3>
    </div>
    <!-- if register: link to login -->
    <div v-if="isRegister">
        <h3>{{ $t('auth.switch_to_login') }} 
            <router-link to="/login" class="link link-hover link-primary">
                {{ $t('auth.login')}}
            </router-link>
        </h3>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import router from '@/router'

const route = useRoute()

const isLogin = computed(() => route.name === 'login')
const isRegister = computed(() => route.name === 'register')
</script>

<style scoped></style>
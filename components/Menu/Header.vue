<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const router = useRouter()

const handleClick = () => {
    router.push('/')
}
</script>

<template>
    <div class="flex gap-2 mb-5 items-center text-white cursor-pointer" :title="t('Retour à l\'accueil')"
        @click="handleClick()">
        <img src="~/assets/img/logo50.png" :alt="t('logo')" />
        <p>
            Peace Of Mind
        </p>
    </div>
</template>
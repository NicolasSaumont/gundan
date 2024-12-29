<script setup lang="ts">
const { t } = useI18n()

const code = 404
const message = t('Page introuvable...')
</script>

<template>
    <div>
        {{ `${message}(${code})` }}
    </div>
</template>
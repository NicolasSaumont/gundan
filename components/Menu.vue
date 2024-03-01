<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const menu: IMenu = [
    {
        key: 'default',
        items: [
            {
                label: t('Accueil'),
                icon: '',
                path: '/'
            }
        ]
    },
    {
        key: 'Service',
        items: [
            {
                label: t('Maison'),
                icon: '',
                path: '/'
            }
        ]
    }
]
</script>
<template>
    <template v-for="menuItem in menu" v-key="menuItem.key">
        <MenuKey :key-name="menuItem.key" :items="menuItem.items" />
    </template>
</template>
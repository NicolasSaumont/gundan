<script setup lang="ts">
import { faAddressBook, faCalendarDays, faCarrot, faCoins, faHouseChimney, faLightbulb, faUsers, faWind } from '@fortawesome/free-solid-svg-icons';
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const menu: IMenu = [
    {
        key: 'default',
        items: [
            {
                label: t('Accueil'),
                path: '/'
            }
        ]
    },
    {
        key: 'QUARTIERS',
        items: [
            {
                label: t('Calendrier'),
                icon: faCalendarDays,
                path: '/calendrier'
            },
            {
                label: t('Maison'),
                icon: faHouseChimney,
                path: '/maison'
            },
            {
                label: t('Repas'),
                icon: faCarrot,
                path: '/repas'
            },
            {
                label: t('Finances'),
                icon: faCoins,
                path: '/finances'
            },
            {
                label: t('Bien-être'),
                icon: faWind,
                path: '/bien-etre'
            },
            {
                label: t('Contacts'),
                icon: faAddressBook,
                path: '/contacts'
            }
        ]
    },
    {
        key: 'OUTILS',
        items: [
            {
                label: t('Conseils'),
                icon: faLightbulb,
                path: '/conseils'
            },
            {
                label: t('Communauté'),
                icon: faUsers,
                path: '/communaute'
            }
        ]
    }
]
</script>
<template>
    <div class="bg-shamrock-green w-48 h-screen p-3">
        <MenuHeader />
        <template v-for="menuItem in menu" v-key="menuItem.key">
            <MenuItem :key-name="menuItem.key" :items="menuItem.items" />
        </template>
    </div>
</template>
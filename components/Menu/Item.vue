<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { useRouter } from 'vue-router'

const appStore = useAppStore()
const router = useRouter()

const props = defineProps<{
    keyName: string
    items: IMenuItems
}>()

const handleButtonMenuClick = (destination: string) => {
    router.push(destination)
}
</script>

<template>
    <div v-if="props.keyName !== 'default'" class="text-xs text-white">
        {{ props.keyName }}
    </div>
    <template v-for="item in items" v-key="item.label">
        <button class="flex items-center gap-2 w-full my-3 mx-3 py-2 px-4"
            :class="appStore.activeMenuButton === item.label ? ' rounded-l-full bg-nyanza-green text-cal-poly-green' : ''"
            @click="handleButtonMenuClick(item.path)">
            <font-awesome-icon v-if="item.icon" :icon="item.icon" />
            <p> {{ item.label }} </p>
        </button>
    </template>
</template>
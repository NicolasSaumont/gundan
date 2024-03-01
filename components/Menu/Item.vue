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
        <button class="flex items-center gap-2 w-full my-3 mx-3 py-2 px-4 "
            :class="appStore.activeMenuButton === item.path ? 'active rounded-l-full bg-nyanza-green text-cal-poly-green relative' : 'text-white'"
            @click="handleButtonMenuClick(item.path)">
            <font-awesome-icon v-if="item.icon" :icon="item.icon" />
            <p> {{ item.label }} </p>
        </button>
    </template>
</template>

<style scoped>
.active::after,
.active::before {
    --border-radius: 1.5rem;
    --nyanza-green: #DCFCE7;
    --shamrock-green: #599E66;

    content: '';
    position: absolute;
    width: var(--border-radius);
    height: var(--border-radius);
    right: 0;
    background-color: var(--shamrock-green);
    border-radius: 50%;
}

.active::before {
    top: calc(var(--border-radius) * -1);
    border-radius: 0 0 50% 0;
    box-shadow: 5px 5px 0 5px var(--nyanza-green);
}

.active::after {
    bottom: calc(var(--border-radius) * -1);
    border-radius: 0 50% 0 0;
    box-shadow: 5px -5px 0 5px var(--nyanza-green);
}
</style>
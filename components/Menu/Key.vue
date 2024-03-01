<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
const props = defineProps<{
    keyName: string
    items: IMenuItems
}>()
</script>

<template>
    <div v-if="props.keyName !== 'default'">
        {{ props.keyName }}
    </div>
    <template v-for="item in items" v-key="item.label">
        <button class="flex items-center gap-2">
            <font-awesome-icon :icon="item.icon" />
            <p>
                {{ item.label }}
            </p>
        </button>
    </template>
</template>
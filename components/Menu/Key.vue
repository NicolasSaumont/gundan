<script setup lang="ts">

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
        <button>
            {{ item.icon }}
            <p>
                {{ item.label }}
            </p>
        </button>
    </template>
</template>
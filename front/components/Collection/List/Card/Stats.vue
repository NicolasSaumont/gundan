<script setup lang='ts'>
const props = defineProps<{
  cardStats: IStats
  cardWidth: number
}>()

const statClasses = computed(() => 'flex items-center justify-center w-[7%] h-[7%] absolute font-bloom-monday text-white')
const statsFontSize = computed(() => `${props.cardWidth * CARD_WIDTH_STATS_RATIO}px`);

const stats = computed(() => [
  { key: "power", value: props.cardStats.power, position: "top-[33.5%] left-[4.6%]" },
  { key: "defense", value: props.cardStats.defense, position: "top-[46.7%] left-[4.6%]" },
  { key: "damage", value: props.cardStats.damage, position: "top-[60%] left-[4.6%]" }
])
</script>

<template>
  <div
    v-for="stat in stats"
    :key="stat.key"
    :class="[statClasses, stat.position]"
    :style="{ fontSize: statsFontSize }"
  >
    {{ stat.value }}
  </div>
</template>

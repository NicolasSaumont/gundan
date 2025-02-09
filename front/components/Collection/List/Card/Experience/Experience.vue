<script setup lang='ts'>
const props = defineProps<{
  card: ICard
}>()

const maxLevel = computed(() => props.card.maxLevel)
const currentLevel = computed(() => props.card.evolution.level)
const differenceFromCurrentToMaxLevel = computed(() => maxLevel.value - currentLevel.value)

const experienceToNextLevel = computed(() => {
  return props.card.experience && props.card.evolution.experienceNeeded
    ? props.card.experience / props.card.evolution.experienceNeeded * 100
    : 100
})
</script>

<template>
  <div class="w-[50%] h-[5%] absolute top-[15%] left-[5%]">
    <div class="w-full h-full bg-tertiary border-2 border-tertiary shadow-inner-strong rounded-full absolute inset-0 z-10" />
    <div 
      v-if="experienceToNextLevel >= MIN_EXPERIENCE_VISIBLE"
      class="h-full border-2 border-tertiary shadow-inner-strong rounded-full absolute inset-0 z-10" 
      :class="experienceToNextLevel === 100 ? 'bg-purple-900' : 'bg-primary'"
      :style="{ width: `${experienceToNextLevel}%` }"
    />
    <div class="absolute left-[5%] top-[50%] transform -translate-y-1/2 flex gap-2 z-20">
      <CollectionListCardExperienceStars :count="currentLevel" imageSrc="_nuxt/assets/images/cards/elements/star.png" />
      <CollectionListCardExperienceStars :count="differenceFromCurrentToMaxLevel" imageSrc="_nuxt/assets/images/cards/elements/star-black-white.png" />
    </div>
  </div>
</template>

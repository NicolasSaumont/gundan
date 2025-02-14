<script setup lang='ts'>
const props = defineProps<{
  cardSkills: ISkills
  cardWidth: number
}>()

const { gameMode } = storeToRefs(useCollectionStore())

const isQuickMode = computed(() => gameMode.value === "quick");

const skillFontSize = computed(() => `${props.cardWidth * CARD_WIDTH_SKILL_RATIO}px`);

const capacity = computed(() => 
  isQuickMode.value ? props.cardSkills.capacity.quickMode : props.cardSkills.capacity.classicalMode
)

const bonus = computed(() => 
  isQuickMode.value ? props.cardSkills.bonus.quickMode : props.cardSkills.bonus.classicalMode
)
</script>

<template>
  <div class="flex items-center w-[70%] h-[15%] absolute bottom-[16%] right-0">
    <div 
      class="font-caveat"
      :title="capacity.description"
      :style="{ fontSize: skillFontSize }"
    >
      {{ isQuickMode ? cardSkills.capacity.quickMode.code : cardSkills.capacity.classicalMode.name }}
    </div>
  </div>
  <div class="flex items-center w-[70%] h-[7%] absolute bottom-[4.5%] right-0">
    <div 
      class="font-caveat"
      :title="bonus.description"
      :style="{ fontSize: skillFontSize }"
    >
      {{ isQuickMode ? cardSkills.bonus.quickMode.code : cardSkills.bonus.classicalMode.name }}
    </div>
  </div>
</template>

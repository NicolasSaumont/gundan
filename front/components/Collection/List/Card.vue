<script setup lang='ts'>
const props = defineProps<{
  card: ICard
}>()

const { formatLegionName } = useCard()

const legionName = ref<string>()
  const isHovered = ref(false)

onMounted(() => {
  legionName.value = formatLegionName(props.card.legion.name!) // Je sais que le nom de la légion est toujours défini
})
</script>

<template>
  <!-- Perspective -->
  <div 
    class="relative cursor-pointer"
    :style="{ width: `${CARD_WIDTH}px`, height: `${CARD_HEIGHT}px`,  perspective: '1000px' }"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <!-- Back Shadow -->
    <div 
      class="absolute inset-0 w-full h-full transition-opacity duration-500 ease-in-out pointer-events-none"
      :class="{ 'opacity-100': isHovered, 'opacity-0': !isHovered }"
      style="
        content: '';
        position: absolute;
        top: 87%;
        left: 50%;
        width: 102%;
        height: 12%;
        background: rgba(255, 255, 255, 0.4);
        filter: blur(10px);
        transform: translateX(-50%);
        transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
      "
    />
    <!-- Rotation -->
    <div
      class="w-full h-full transition-transform duration-500 ease-in-out"
      :style="{ transform: isHovered ? 'rotateX(30deg)' : 'rotateX(0deg)' }"
    >
    
      <CollectionListCardBackground :legion-name="legionName"/>
  
      <CollectionListCardCharacterImage
        :legion-name="legionName"
        :character-image="card.evolution.image"
        :is-hovered="isHovered"
      />
  
      <CollectionListCardDesignElements :legion-name="legionName" :card />
  
      <CollectionListCardBorder />
  
      <CollectionListCardStats :card-stats="card.evolution.stats"/>
  
      <CollectionListCardSkills :card-skills="card.skills"/>
  
      <CollectionListCardLife :card-health="card.evolution.stats.health"/>
  
      <CollectionListCardExperience :card/>
  
      <CollectionListCardType :card-type="card.type"/>

      <!-- Front Shadow -->
      <div 
        class="absolute inset-0 w-full h-full rounded-2xl transition-opacity duration-500 ease-in-out pointer-events-none"
        :class="{ 'opacity-100': isHovered, 'opacity-0': !isHovered }"
        style="
          content: '';
          position: absolute;
          top: 0;
          left: 50%;
          width: 100%;
          height: 100%;
          background-image: radial-gradient(circle, transparent 100px, black);
          transform: translateX(-50%);
          transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
        "
      />
    </div>
    
  </div>
</template>

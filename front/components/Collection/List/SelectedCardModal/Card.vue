<script setup lang='ts'>
const props = defineProps<{
  card: ICard
}>()

const { formatLegionName } = useCard()

const legionName = ref<string>()

const interactiveCard = ref<HTMLElement | null>(null)

const cardOpacity = ref(0)
const pointerX = ref(0)
const pointerY = ref(0)
const pointerFromCenter = ref(0.5)
const pointerFromTop = ref(0.5)
const pointerFromLeft = ref(0.5)
const seedX = ref(0.21284490846329862)
const seedY = ref(0.47781444499873915)
const cosmosBgX = ref(0)
const cosmosBgY = ref(0)

const updatePointer = (event) => {
  if (!interactiveCard.value) return;

  const rect = interactiveCard.value.getBoundingClientRect();
  const x = event.clientX - rect.left; // Position X relative à l'élément
  const y = event.clientY - rect.top; // Position Y relative à l'élément
  const width = rect.width;
  const height = rect.height;

  // Normalisation (entre 0 et 1)
  pointerFromLeft.value = x / width;
  pointerFromTop.value = y / height;
  pointerFromCenter.value = Math.sqrt(
    Math.pow(pointerFromLeft.value - 0.5, 2) + Math.pow(pointerFromTop.value - 0.5, 2)
  );

  // Calcul d'une rotation légère
  // const rotateX = (pointerFromTop - 0.5) * -10; // Inclinaison haut/bas
  // const rotateY = (pointerFromLeft - 0.5) * 10; // Inclinaison gauche/droite

  // Déplacement du background aléatoire
  seedX.value = Math.random();
  seedY.value = Math.random();
  cosmosBgX.value = Math.floor(seedX.value * 500);
  cosmosBgY.value = Math.floor(seedY.value * 500);

  // Application des styles CSS via `style.setProperty`
  cardOpacity.value = 1
  pointerX.value = x
  pointerY.value = y

  // interactiveCard.value.style.setProperty("--card-opacity", `1`);
  // interactiveCard.value.style.setProperty("--pointer-x", `${x}px`);
  // interactiveCard.value.style.setProperty("--pointer-y", `${y}px`);
  // interactiveCard.value.style.setProperty("--pointer-from-center", pointerFromCenter.toString());
  // interactiveCard.value.style.setProperty("--pointer-from-top", pointerFromTop.toString());
  // interactiveCard.value.style.setProperty("--pointer-from-left", pointerFromLeft.toString());
  // interactiveCard.value.style.setProperty("--rotate-x", `${rotateX}deg`);
  // interactiveCard.value.style.setProperty("--rotate-y", `${rotateY}deg`);
  // interactiveCard.value.style.setProperty("--seedx", seedX.toString());
  // interactiveCard.value.style.setProperty("--seedy", seedY.toString());
  interactiveCard.value.style.setProperty("--cosmosbg", `${cosmosBgX}px ${cosmosBgY}px`);
};

const resetPointer = () => {
  if (!interactiveCard.value) return;
  interactiveCard.value.style.setProperty("--rotate-x", "0deg");
  interactiveCard.value.style.setProperty("--rotate-y", "0deg");
  interactiveCard.value.style.setProperty("--pointer-from-center", "0");
};

onMounted(() => {
  legionName.value = formatLegionName(props.card.legion.name!)
})
</script>

<template>
  <div
    ref="interactiveCard"
    @mousemove="updatePointer"
    @mouseleave="resetPointer"
    class="relative overflow-hidden card"
    :style="{
      width: `${SELECTED_CARD_WIDTH}px`,
      height: `${SELECTED_CARD_HEIGHT}px`,
      '--pointer-x': `${pointerX}px`,
      '--pointer-y': `${pointerY}px`,
      '--pointer-from-center': pointerFromCenter.toString(),
      '--pointer-from-top': pointerFromTop.toString(),
      '--pointer-from-left': pointerFromLeft.toString(),
      '--card-opacity': cardOpacity,
      // '--rotate-x': '0deg',
      // '--rotate-y': '0deg',
      '--background-x': '50%',
      '--background-y': '50%',
      '--card-scale': '1',
      '--translate-x': '0px',
      '--translate-y': '0px',
      '--seedx': seedX.toString(),
      '--seedy': seedY.toString(),
      '--cosmosbg': `${cosmosBgX}px ${cosmosBgY}px`,
      '--mask': 'url(https://poke-holo.b-cdn.net/foils/pgo/masks/upscaled/049_foil_holo_sunpillar_2x.webp)',
      '--foil': 'url(https://poke-holo.b-cdn.net/foils/pgo/foils/upscaled/049_foil_holo_sunpillar_2x.webp)'
    }"
  >
    <CollectionListCardBackground :legion-name="legionName" />

    <!-- <div 
      class="absolute inset-0 w-full h-full rounded-xl opacity-5 bg-[url('/_nuxt/assets/images/cards/elements/foreground/common.png')] bg-center bg-blend-multiply"
    /> -->

    <CollectionListCardCharacterImage
      :legion-name="legionName"
      :character-image="card.evolution.image"
    />

    <CollectionListCardDesignElements :legion-name="legionName" :card :card-width="SELECTED_CARD_WIDTH" />

    <CollectionListCardBorder />

    <CollectionListCardStats :card-stats="card.evolution.stats" :card-width="SELECTED_CARD_WIDTH" />

    <CollectionListCardSkills :card-skills="card.skills" :card-width="SELECTED_CARD_WIDTH" />

    <CollectionListCardLife :card-health="card.evolution.stats.health" :card-width="SELECTED_CARD_WIDTH" />

    <CollectionListCardExperience :card :card-width="SELECTED_CARD_WIDTH" />

    <CollectionListCardType :card-type="card.type" :card-width="SELECTED_CARD_WIDTH" />

    

    <!-- <div class="card__shine"></div> -->
    <!-- <div class="card__glare"></div> -->

  </div>  
</template>

<style>

:root {
  
  --card-aspect: 0.718;
  --card-radius: 4.55% / 3.5%;
  --card-edge: hsl(47, 100%, 78%);
  --card-back: hsl(205, 100%, 25%);
  --card-glow: hsl(175, 100%, 90%);

  --sunpillar-1: hsl(2, 100%, 73%);
  --sunpillar-2: hsl(53, 100%, 69%);
  --sunpillar-3: hsl(93, 100%, 69%);
  --sunpillar-4: hsl(176, 100%, 76%);
  --sunpillar-5: hsl(228, 100%, 74%);
  --sunpillar-6: hsl(283, 100%, 73%);

  --sunpillar-clr-1: var(--sunpillar-1);
  --sunpillar-clr-2: var(--sunpillar-2);
  --sunpillar-clr-3: var(--sunpillar-3);
  --sunpillar-clr-4: var(--sunpillar-4);
  --sunpillar-clr-5: var(--sunpillar-5);
  --sunpillar-clr-6: var(--sunpillar-6);

}

.card {
  --grain: url("/img/grain.webp");

}
/*

  SHINE LAYERS

*/
.card__shine,
.card__shine:after,
.card__shine:before,
.card__glare {
  position: absolute;
  inset: 0;
  border-radius: 1.25rem;
}

.card__shine,
.card__shine:after {
  --space: 5%;
  --angle: 133deg;
  --imgsize: 500px;
  background-image: var(--grain), repeating-linear-gradient(0deg, var(--sunpillar-clr-1) calc(var(--space)* 1), var(--sunpillar-clr-2) calc(var(--space)* 2), var(--sunpillar-clr-3) calc(var(--space)* 3), var(--sunpillar-clr-4) calc(var(--space)* 4), var(--sunpillar-clr-5) calc(var(--space)* 5), var(--sunpillar-clr-6) calc(var(--space)* 6), var(--sunpillar-clr-1) calc(var(--space)* 7)), repeating-linear-gradient(var(--angle), #0e152e 0%, hsl(180, 10%, 60%) 3.8%, hsl(180, 29%, 66%) 4.5%, hsl(180, 10%, 60%) 5.2%, #0e152e 10%, #0e152e 12%), radial-gradient(farthest-corner circle at var(--pointer-x) var(--pointer-y), hsla(0, 0%, 0%, 0.1) 12%, hsla(0, 0%, 0%, 0.15) 20%, hsla(0, 0%, 0%, 0.25) 120%);
  background-blend-mode: screen, hue, hard-light;
  background-size: var(--imgsize) 100%, 200% 700%, 300% 100%, 200% 100%;
  background-position: center, 0% var(--background-y), var(--background-x) var(--background-y), var(--background-x) var(--background-y);
  filter: brightness(.8) contrast(2.95) saturate(.65);
}

.card__shine:after {
  content: "";
  background-position: center, 0% var(--background-y), calc(var(--background-x)* -1) calc(var(--background-y)* -1), var(--background-x) var(--background-y);
  background-size: var(--imgsize) 100%, 200% 400%, 195% 100%, 200% 100%;
  filter: brightness(1) contrast(2.5) saturate(1.75);
  mix-blend-mode: soft-light;
}


.card__shine {

display: grid;
transform: translateZ(1px);
overflow: hidden;
z-index: 3;

background: transparent;
background-size: cover;
background-position: center;

filter: brightness(.85) contrast(2.75) saturate(.65);
mix-blend-mode: color-dodge;

opacity: var(--card-opacity);

}

.card__shine:before,
.card__shine:after {

--sunpillar-clr-1: var(--sunpillar-5);
--sunpillar-clr-2: var(--sunpillar-6);
--sunpillar-clr-3: var(--sunpillar-1);
--sunpillar-clr-4: var(--sunpillar-2);
--sunpillar-clr-5: var(--sunpillar-3);
--sunpillar-clr-6: var(--sunpillar-4);

grid-area: 1/1;
transform: translateZ(1px);
border-radius: var(--card-radius);

}

.card__shine:after {

--sunpillar-clr-1: var( --sunpillar-6 );
--sunpillar-clr-2: var( --sunpillar-1 ); 
--sunpillar-clr-3: var( --sunpillar-2 );
--sunpillar-clr-4: var( --sunpillar-3 );
--sunpillar-clr-5: var( --sunpillar-4 );
--sunpillar-clr-6: var( --sunpillar-5 );

transform: translateZ(1.2px);

}

.card__glare {

/* make sure the glare doesn't clip */
transform: translateZ(1.41px);
overflow: hidden;

background-image: radial-gradient(
  farthest-corner circle at var(--pointer-x) var(--pointer-y),
  hsla(0, 0%, 100%, 0.8) 10%,
  hsla(0, 0%, 100%, 0.65) 20%,
  hsla(0, 0%, 0%, 0.5) 90%
);

opacity: var(--card-opacity);
mix-blend-mode: overlay;

}

/* 
.card__shine:before {

  content: "";
  -webkit-mask-image: none;
  mask-image: none;
  
  background-image: 
    radial-gradient( farthest-corner circle at var(--pointer-x) var(--pointer-y), 
      hsl(0, 0%, 100%) 0%, 
      hsla(0, 0%, 0%, 0) 40% 
    );
  background-position: center;
  background-size: cover;
  mix-blend-mode: overlay;
  
  opacity: 0.75;
  z-index: 1;

} */

.card__glare {
  background-image: radial-gradient(farthest-corner circle at var(--pointer-x) var(--pointer-y), hsl(0, 0%, 100%) 0%, hsla(210, 3%, 54%, 0.33) 45%, hsla(0, 0%, 20%, 0.9) 130%);
  opacity: calc(var(--card-opacity)* .5);
  mix-blend-mode: hard-light;
  filter: brightness(.9) contrast(1.75);
}

.card__shine,
.card__glare {
  
  will-change: transform, opacity, background-image, background-size,
    background-position, background-blend-mode, filter;
 
}
</style>

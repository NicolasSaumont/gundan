<template>
  <div class="flex flex-col grow justify-center gap-20">
    <div>
      <template
        v-for="mode in Object.values(BATTLE_MODE)"
        :key="mode"
      >
        <BattleModesMode :mode />
      </template>
    </div>
    <BattleModesRules />
  </div>
</template>

<template>
  <div class="w-[33%] border-r border-white">
    <div>
      <template
        v-for="section in Object.values(RULES_SECTIONS)"
        :key="section"
      >
        <RulesSection :section />
      </template>
    </div>
  </div>
</template>

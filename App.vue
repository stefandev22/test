

<template>
	<router-view />
</template>

<script setup lang="ts">
onMounted(async () => {
    useGoalsStore().loadGoals();
})
</script>

<style scoped>

</style>

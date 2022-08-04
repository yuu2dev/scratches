<template>
    <q-page class="flex flex-center"> shop </q-page>
</template>
<script>
import { defineComponent, onMounted } from "vue";
import { useCounterStore } from "src/stores/example-store";

export default defineComponent({
    setup() {
        const counterStore = useCounterStore();
        onMounted(() => {
            counterStore.increment();
        });
    },
});
</script>

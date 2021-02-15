<template>
    <div class="card">
        <div class="card-header">{{ resource }}</div>
        <div class="card-controls">
            <div class="btn" @click="increaseBy(10, resource)">Add 10</div>
            <div class="btn" @click="increaseBy(50, resource)">Add 50</div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            resource: {
                type: String,
                required: true
            }
        },
        methods: {
            increaseBy(val, type) {
                this.$store.commit('increment', {resource: type, val})
            }
        }
    }
</script>

<style scoped>
.card {
    width: auto;
    height: 175px;
    border: 1px solid #dedede;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.card-header {
    margin-bottom: 1rem;
    font-size: 2rem;
}

.card-controls {
    display: flex;
}

.btn {
    border: 1px solid #0707b6;
    border-radius: 5px;
    background: #0707b6;
    color: #fff;
    padding: 0.5rem 1rem;
    cursor: pointer;
}

.btn + .btn {
    margin-left: 1rem;
}

</style>
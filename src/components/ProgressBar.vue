<template>
    <div class="loading-bar">
        <div class="percentage" :class="color" :style="{'width': setPercentage(amount) + '%'}">
        </div>
        <p class="label">
            {{ label }} : {{ amount }} / 10000
        </p>
    </div>
</template>

<script>
    export default {
        props: {
            color: {
                type: String,
                required: true
            },
            label: {
                type: String,
                required: true
            },
            amount: {
                type: Number,
                required: true
            }
        },
        methods: {
           setPercentage(amount) {
             return (amount / 10000) * 100
           }
        }
    }
</script>

<style scoped>
.loading-bar {
    position: relative;
    width: 100%;
    height: 30px;
    overflow: hidden;
    border-bottom: 1px solid #ddd;
    box-shadow:inset 0 1px 2px rgba(0, 0, 0, 0.4), 0 -1px 1px #fff, 0 1px 0 #fff;
}

.percentage {
    position: absolute;
    top: 1px;
    left: 1px;
    right: 1px;
    display: block;
    height: 100%;
    background-size: 30px;
    background-image: linear-gradient(135deg, rgba(0,0,0,0.15) 25%,transparent 25%, transparent 50%, rgba(0,0,0,0.15) 50%, rgba(0,0,0,0.15) 75%, transparent 75%, transparent);
    animation: animate-stripes 2s linear infinite;
}

@keyframes animate-stripes {
    0% {background-position: 0 0;}
    100% {background-position: 60px 0;}
}

.label {
    text-align: center;
    margin: 0;
}

.gold {
    background-color: gold;
}

.silver {
    background-color: silver;
}

.copper {
    background-color: rgb(161, 6, 6);
}
</style>
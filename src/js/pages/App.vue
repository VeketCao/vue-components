<template>
    <div class="layout">
        <h1>源组件</h1>
        <HelloWorld></HelloWorld>
        <h1>编译后的独立组件</h1>
        <button @click="handleLoadButtonClick()">异步加载编译后的组件</button>
        <AsyncCom :url="renderUrl" ></AsyncCom>
    </div>
</template>

<script>
    import AsyncCom from 'lib/async-component/index';
    import HelloWorld from 'pkg/HelloWorld/HelloWorld.vue'
    export default {
        data() {
            return {
                renderUrl: '',
            };
        },
        components: {
            AsyncCom,
            HelloWorld
        },
        methods: {
            handleLoadButtonClick() {
                this.renderUrl = '/dist/pkg/HelloWorld/HelloWorld.min.js';
            }
        }
    }
</script>

<style lang="scss" scoped>
    .layout {
        width: 800px;
        margin: 0 auto;
    }
</style>
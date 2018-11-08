<template>
    <div class="layout">
        <h1>源组件</h1>
        <HelloWorld></HelloWorld>
        <h1>编译后的独立组件</h1>
        <button @click="handleLoadButtonClick()">异步加载编译后的组件</button>
        <AsyncComRE :url="renderUrl" ></AsyncComRE>
    </div>
</template>

<script>
    import AsyncComRE from 'lib/async-component/index';
    import HelloWorld from '@/HelloWorld/HelloWorld.vue'
    export default {
        data() {
            return {
                renderUrl: '',
            };
        },
        components: {
            AsyncComRE,
            HelloWorld
        },
        methods: {
            handleLoadButtonClick() {
                this.renderUrl = '/dist/HelloWorld/HelloWorld.min.js';
                console.log(this.renderUrl)
                console.log(AsyncComRE);
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
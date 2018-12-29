<template>
    <div class="layout">
        <!--<h1>源组件</h1>
        <HelloWorld></HelloWorld>-->
        <h1>编译后的独立组件</h1>
        <button @click="handleLoadButtonClick()">异步加载编译后的组件</button>
        <AsyncCom :url="renderUrl" :dataSource="dataSource" :http="http" :attrs="attrs"></AsyncCom>
    </div>
</template>

<script>
    import AsyncCom from 'lib/async-component/index';
    import HelloWorld from 'pkg/HelloWorld/HelloWorld.vue'
    export default {
        data() {
            return {
                renderUrl: '',
                dataSource:{
                    url:'http://imip.midea.com/mip-portal/portal/Stock/getData?fdLangType=zh-CN&_=1546056940769',
                    data:{}
                },
                attrs:{
                    a:'a',
                    b:'b'
                },
                http:window.Axios
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
        },
        mounted(){
           // console.log(window.Axios);
        }

    }
</script>

<style lang="scss" scoped>
    .layout {
        width: 800px;
        margin: 0 auto;
    }
</style>
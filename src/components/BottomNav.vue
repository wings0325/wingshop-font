<template>
<div class="bottom-nav">
    <router-link v-for="(item,index) in items" :to="item.link" class="bottom-nav-item" :key="index">
        <i class="icon" :class="index==selected?'selected':''">
            <font-awesome-icon style="width: 100%" :icon="item.icon" />
        </i>
        {{item.text}}
    </router-link>
</div>
</template>

<script>
    import { library } from '@fortawesome/fontawesome-svg-core'
    import { faShoppingCart,faThList,faHome,faUser } from '@fortawesome/free-solid-svg-icons'
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
    library.add([faUser,faShoppingCart,faThList,faHome])

    export default {
        name: "BottomNav",
        props:{
          selected:{
              default:0
          }
        },
        components:{
            FontAwesomeIcon
        },
        data:function () {
            return {
                items:[
                    {
                        icon:'home',
                        text:'首页',
                        link:'/'
                    },
                    {
                        icon:'th-list',
                        text:'分类',
                        link:'class'
                    },
                    {
                        icon:'shopping-cart',
                        text:'购物车',
                        link:'cart'
                    },
                    {
                        icon:'user',
                        text:'我的',
                        link:'mine'
                    }
                ]
            }
        }
    }
</script>

<style scoped lang="stylus">
    .bottom-nav{
        box-sizing border-box
        border-top-style solid
        border-top-width 1px
        border-top-color #e4e4e4
        width 100%
        height 50px
        padding 5px
        position absolute
        bottom 0
        display flex
        .bottom-nav-item{
            box-sizing border-box
            padding-bottom 10px
            flex 1
            text-align center
            line-height 17px
            font-size 10px
            .icon{
                font-size 20px
            }
            .selected {
                color darkorange
            }
        }
    }
</style>

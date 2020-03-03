<template>
<div class="product-class">
    <div class="item" v-for="(item,index) in items" :key="index">
        <a :href="item.link" class="item-wrap">
            <img :src="item.icon" />
            <div>{{item.text}}</div>
        </a>
    </div>
</div>
</template>

<script>
    export default {
        name: "ProductClass",
        data:()=>{
            return {
                items:[
                    {
                        icon:'https://gw.alicdn.com/tfs/TB1OIxTcLc3T1VjSZLeXXbZsVXa-183-144.png?getAvatar=1',
                        link:'http://www.baidu.com',
                        text:'今日爆款'
                    },{
                        icon:'https://gw.alicdn.com/tfs/TB1OIxTcLc3T1VjSZLeXXbZsVXa-183-144.png?getAvatar=1',
                        link:'http://www.baidu.com',
                        text:'今日爆款'
                    },{
                        icon:'https://gw.alicdn.com/tfs/TB1OIxTcLc3T1VjSZLeXXbZsVXa-183-144.png?getAvatar=1',
                        link:'http://www.baidu.com',
                        text:'今日爆款'
                    },{
                        icon:'https://gw.alicdn.com/tfs/TB1OIxTcLc3T1VjSZLeXXbZsVXa-183-144.png?getAvatar=1',
                        link:'http://www.baidu.com',
                        text:'今日爆款'
                    },{
                        icon:'https://gw.alicdn.com/tfs/TB1OIxTcLc3T1VjSZLeXXbZsVXa-183-144.png?getAvatar=1',
                        link:'http://www.baidu.com',
                        text:'今日爆款'
                    },{
                        icon:'https://gw.alicdn.com/tfs/TB1OIxTcLc3T1VjSZLeXXbZsVXa-183-144.png?getAvatar=1',
                        link:'http://www.baidu.com',
                        text:'今日爆款'
                    },{
                        icon:'https://gw.alicdn.com/tfs/TB1OIxTcLc3T1VjSZLeXXbZsVXa-183-144.png?getAvatar=1',
                        link:'http://www.baidu.com',
                        text:'今日爆款'
                    },{
                        icon:'https://gw.alicdn.com/tfs/TB1OIxTcLc3T1VjSZLeXXbZsVXa-183-144.png?getAvatar=1',
                        link:'http://www.baidu.com',
                        text:'今日爆款'
                    },

                ]
            }
        }
    }
</script>

<style scoped lang="stylus">
    .product-class{
        box-sizing border-box
        width 100%
        margin-top 5px
        padding 5px 8px
        background-color #fff
        .item{
            box-sizing border-box
            display inline-block
            width 25%
            height 45%
            padding 3px
            .item-wrap{
                display block
                height 100%
                padding 5px
                text-align center
                font-size 10px
                img{
                    width 80%
                }
            }
        }
    }
</style>

<template>
    <router-link :to="'/detail/'+data.id" class="product-item">
        <img :src="data.image" />
        <div class="name-wrap">
            <div class="name">{{data.name}}</div>
        </div>
        <div class="price-wrap">
            <span class="icon">¥</span> <span class="price">{{data.price}}</span>
            <span class="buyed-num">{{data.buyed_num}}人已购买</span>
        </div>
    </router-link>
</template>

<script>
    export default {
        name: "ProductItem",
        props:{
            data:{
                type:Object
            }
        }
    }
</script>

<style scoped lang="stylus">
    .product-item{
        display inline-block
        box-sizing border-box
        width 46%
        margin 5px 5px
        border-radius  6.5px
        background-color #fff
        overflow hidden
        img{
            width 100%
            height 190px
        }
        .name-wrap{
            padding 10px
            .name{
                text-align center
                position: relative;
                overflow hidden;
                line-height 20.5px;
                text-overflow ellipsis;
                min-height 0;
                font-size 13px
                color #333333
            }
        }
        .price-wrap{
            padding 0 0 10px 15px
            display flex
            color #ff5500
            .icon {
                flex 1
                line-height 16px
                font-size 5px
            }
            .price{
                flex 1
            }
            .buyed-num{
                text-align left
                flex 6
                font-size 13px
                color #999999
                line-height 16px
            }
        }
    }
</style>

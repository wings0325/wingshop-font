<template>
    <div class="cart">
        <div class="cart-list" v-if="cartData.list.length">
            <ul>
                <li class="item" v-for="(item,index) in cartData.list" :key="index">
                    <div class="product-item">
                        <div class="image-wrap">
                            <img :src="item.image"/>
                        </div>

                        <div class="info-wrap">
                            <div>
                                <span class="name">{{item.name}}</span>
                                <cube-button :inline="true" class="delete">删除</cube-button>
                            </div>

                            <p class="tag">{{item.tag}}</p>
                            <div class="price">
                                <span class="icon">¥ </span>
                                <span>{{item.price}}</span>
                                <div class="cala">
                                    <span><font-awesome-icon class="minus" :class="item.num == 1?'dis':''" icon="minus-circle"></font-awesome-icon></span>
                                    <span class="num">{{item.num}}</span>
                                    <span><font-awesome-icon class="plus" icon="plus-circle"></font-awesome-icon></span>
                                </div>
                            </div>
                        </div>

                    </div>
                </li>
            </ul>
        </div>
        <div class="no-products" v-else>
            <div class="icon-wrap">
                <font-awesome-icon icon="shopping-bag"></font-awesome-icon>
            </div>
            <div class="no-products-word">空空如也</div>
        </div>
        <div class="footer">
           <p class="total">
               <span>合计:</span>
               <span>{{this.count}}</span>
           </p>
            <cube-button class="settl" :inline="true" :primary="true">结算</cube-button>
        </div>
        <bottom-nav selected="2"></bottom-nav>
    </div>
</template>

<script>
    import {library} from '_@fortawesome_fontawesome-svg-core@1.2.27@@fortawesome/fontawesome-svg-core/index'
    import {faShoppingBag, faMinusCircle, faPlusCircle} from '@fortawesome/free-solid-svg-icons/index'
    import {FontAwesomeIcon} from '_@fortawesome_vue-fontawesome@0.1.9@@fortawesome/vue-fontawesome/index'
    import {Style, Button} from 'cube-ui'

    library.add([faShoppingBag, faMinusCircle, faPlusCircle])
    import BottomNav from '@/components/common/BottomNav'

    import {mapState} from 'vuex'

    export default {
        name: 'cart',
        components: {
            BottomNav,
            FontAwesomeIcon
        },
        data() {
            return {}
        },
        computed: {
            ...mapState(['cartData']),
            count(){
                let list = this.cartData.list;
                let length = list.length;
                let sum = 0;
                for (let i = 0;i<length;i++){
                    sum+=(list[i].price*list[i].num);
                }
                return sum;
            }


        }
    }
</script>

<style scoped lang="stylus">
    .cart {
        box-sizing border-box
        .cart-list {
            padding 10px 10px 35px

            .item {
                margin-top 5px

                .product-item {
                    display flex
                    border-radius 7px
                    background-color #fff

                    .image-wrap {
                        flex 1
                        border-radius 7px
                        overflow hidden
                        width 100%

                        img {
                            width 100%
                        }
                    }

                    .info-wrap {
                        flex 2
                        padding 10px
                        line-height 30px

                        .name {
                            font-size 10px
                            color #3e3030
                        }

                        .delete {
                            float right
                        }

                        .tag {
                            display inline-block
                            border solid 1px
                            border-radius 7px
                            line-height 10px
                            padding 3px
                            font-size 10px
                            color #3e3030
                            background-color #f7f2f2
                        }

                        .price {
                            display flex
                            color #ff8c00

                            .icon {
                                font-size 5px
                            }

                            .cala {
                                display inline-block
                                flex 1
                                text-align right
                                color #000

                                .num {
                                    margin 0 7px
                                    font-size 15px
                                }

                                .minus {
                                    font-size 13px
                                }

                                .plus {
                                    font-size 13px
                                }

                                .dis {
                                    color #e4e4e4
                                }
                            }
                        }
                    }
                }

            }

        }

        .no-products {
            text-align center
            padding-top 55%
            padding-bottom 35px;
            line-height 50px
            color #ded9d9

            .icon-wrap {
                font-size 80px
            }

            .no-products-word {
                font-size 30px
            }
        }
        .footer{
            display flex
            padding 0 0 0 10px
            background-color #ffffff
            height 50px
            position fixed
            bottom 50px
            width 100%
            .total{
                line-height 50px
                flex 4
            }
            .settl{
                flex 1
                font-size 17px
            }

        }
    }
</style>

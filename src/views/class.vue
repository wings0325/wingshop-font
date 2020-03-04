<template>
    <div class="class">
        <div class="scroll-wrap">
            <cube-scroll-nav-bar
                    :current="current"
                    :labels="classIds"
                    :txts="txts"
                    @change="changeHandler">
                <i slot-scope="props">{{props.txt}}</i>
            </cube-scroll-nav-bar>
        </div>
        <product-list></product-list>
        <bottom-nav selected="1"></bottom-nav>

    </div>
</template>

<script>
    import BottomNav from '@/components/common/BottomNav'
    import ProductList from '@/components/home/product/productlist/ProductList'

    import {Style, ScrollNavBar} from 'cube-ui'

    export default {
        name: "class",
        components: {
            BottomNav,
            ProductList
        },
        data() {
            return {
                current: 3,
                classIds: [
                    0,
                    1,
                    2,
                    3,
                    4,
                    5,
                    6,
                    7,
                    8,
                    9
                ],
                txts: [
                    '1快车',
                    '2小巴',
                    '3专车',
                    '4顺风车',
                    '5代驾',
                    '6公交',
                    '7自驾租车',
                    '8豪华车',
                    '9二手车',
                    '10出租车'
                ]
            }
        },
        methods: {
            changeHandler(label) {
                this.current = label
            }
        }
    }
</script>

<style scoped lang="stylus">
    .class {
        .scroll-wrap {
            .goods-img {
                width 100%
            }
        }
    }
</style>

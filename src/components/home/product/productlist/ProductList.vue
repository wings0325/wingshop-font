<template>
    <div class="product-list">
        <div class="like">
            <img src="../../../../assets/img/maybe_like.png" />
        </div>
        <product-item v-for="(item,index) in items" :data="item" :key="index"></product-item>
    </div>
</template>

<script>
    import ProductItem from '../productItem/ProductItem'
    export default {
        name: "ProductList",
        components:{
            ProductItem
        },
        data:()=>{
            return {
                items:[
                    {
                        id:1,
                        image:'//gw.alicdn.com/bao/uploaded/i1/TB1emO.HXXXXXcZXFXXXXXXXXXX_!!0-item_pic.jpg_500x500q90.jpg_.webp',
                        name:'米兰丝绸---【特价.清库存.微微瑕】100%桑蚕丝 双面 枕套/单只价',
                        price:79,
                        buyed_num:166
                    },
                    {
                        id:1,
                        image:'//gw.alicdn.com/bao/uploaded/i1/TB1emO.HXXXXXcZXFXXXXXXXXXX_!!0-item_pic.jpg_500x500q90.jpg_.webp',
                        name:'米兰丝绸---【特价.清库存.微微瑕】100%桑蚕丝 双面 枕套/单只价',
                        price:79,
                        buyed_num:166
                    },
                    {
                        id:1,
                        image:'//gw.alicdn.com/bao/uploaded/i1/TB1emO.HXXXXXcZXFXXXXXXXXXX_!!0-item_pic.jpg_500x500q90.jpg_.webp',
                        name:'米兰丝绸---【特价.清库存.微微瑕】100%桑蚕丝 双面 枕套/单只价',
                        price:79,
                        buyed_num:166
                    },
                    {
                        id:1,
                        image:'//gw.alicdn.com/bao/uploaded/i1/TB1emO.HXXXXXcZXFXXXXXXXXXX_!!0-item_pic.jpg_500x500q90.jpg_.webp',
                        name:'米兰丝绸---【特价.清库存.微微瑕】100%桑蚕丝 双面 枕套/单只价',
                        price:79,
                        buyed_num:166
                    },
                    {
                        id:1,
                        image:'//gw.alicdn.com/bao/uploaded/i1/TB1emO.HXXXXXcZXFXXXXXXXXXX_!!0-item_pic.jpg_500x500q90.jpg_.webp',
                        name:'米兰丝绸---【特价.清库存.微微瑕】100%桑蚕丝 双面 枕套/单只价',
                        price:79,
                        buyed_num:166
                    },
                    {
                        id:1,
                        image:'//gw.alicdn.com/bao/uploaded/i1/TB1emO.HXXXXXcZXFXXXXXXXXXX_!!0-item_pic.jpg_500x500q90.jpg_.webp',
                        name:'米兰丝绸---【特价.清库存.微微瑕】100%桑蚕丝 双面 枕套/单只价',
                        price:79,
                        buyed_num:166
                    }
                ]
            }
        }
    }
</script>

<style scoped lang="stylus">
    .product-list{
        box-sizing: border-box;
        margin: 5px;
        padding 5px 5px
        .like{
            padding 10px 20px
            text-align center
            img{
                width 50%
            }
        }
    }
</style>

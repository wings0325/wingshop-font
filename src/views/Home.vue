<template>
  <div class="home">
    <!--搜索栏 -->
    <search-bar :onChange="onChange" :onSearch="onSearch">
      abcd
    </search-bar>
    <!--搜索栏 -->

    <!--轮播图-->
    <div class="carousel-wrap">
      <div class="carousel">
        <cube-slide>
          <cube-slide-item v-for="(item, index) in carousel" :key="index" @click.native="clickHandler(item, index)">
            <a :href="item.url">
              <img :src="item.image">
            </a>
          </cube-slide-item>
        </cube-slide>
      </div>
    </div>
    <!--轮播图-->

    <!--商品分类-->
    <product-class></product-class>
    <!--商品分类-->

    <!--商品列表-->
    <product-list></product-list>
    <!--商品列表-->

    <bottom-nav></bottom-nav>
  </div>
</template>

<script>
// @ is an alias to /src
import BottomNav from '@/components/common/BottomNav'
import SearchBar from '@/components/home/searchbar/SearchBar'
import ProductClass from '@/components/home/class/ProductClass'
import ProductList from '@/components/home/product/productlist/ProductList'
import {Style,Slide} from 'cube-ui'

export default {
  name: 'Home',
  components: {
    SearchBar,
    BottomNav,
    ProductClass,
    ProductList
  },
  data:()=>{
    return {
      carousel:    //轮播图
              [
                {
                  url: 'http://www.didichuxing.com/',
                  image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide01.png'
                },
                {
                  url: 'http://www.didichuxing.com/',
                  image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide02.png'
                },
                {
                  url: 'http://www.didichuxing.com/',
                  image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide03.png'
                }
              ]
    }
  },
  methods:{
    onChange:()=>{
      console.log(1234)
    },
    onSearch:()=>{
      console.log(4567)
    }
  }
}
</script>

<style scoped lang="stylus">
  .home{
    box-sizing border-box
    .carousel-wrap{
      .carousel{
        width 100%
        height 150px
        img{
          width 100%
        }
      }
    }
  }
</style>

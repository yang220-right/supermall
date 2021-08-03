import BackTop from 'components/content/backTop/BackTop'
export const backmixin = {
  data(){
    return {
      isShowBackTop:false
    }
  },
  components:{
    BackTop
  },
  methods:{
    backTop(){
      this.$refs.scroll.scrollTo(0,0)
    },
  }
}
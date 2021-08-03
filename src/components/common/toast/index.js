import Toast from './Toast'

const obj = {

}
obj.install = function (Vue){//默认会传入Vue参数
  // 因为这个对象是组件，但是模板又没有被添加到body上，所以里面的内容并不会被显示
  // document.querySelector('body').appendChild(Toast.$el)  拿不到，还没有执行完生命周期

  // 1. 先创建组件构造器
  const toastConstructor = Vue.extend(Toast)
  // 2. 通过new的方式，根据组件构造器，可以创建一个组件对象
  const toast = new toastConstructor()
  // 3. 将组件对象手动的挂载某一个元素上
  toast.$mount(document.createElement('div'))
  // 4. toast.$el 对应的就是创建好的div了
  document.body.appendChild(toast.$el)

  Vue.prototype.$toast = toast//这个对象最好为同文件夹下的toast.vue
}

export default obj
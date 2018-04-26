const vueTemplate = {
  data: function(){
    return {}
  }
}

const templateRxp = /\{\{(\w+)\}\}/g
const TAG = /^<([\S\s]*)/g

class RoughTag {
  constructor(html){
    this.tag 
  }
}
class Vue {
  constructor(params){
      this.el = params.el
      this.data = params.data
      this.parseStr = document.querySelector(this.el).innerHTML
      for(let key in this.data){
        Object.defineProperty(this, key, {
            get: ()=>this.data[key],
            set: (newValue)=>{
              this.data[key] = newValue
                this.complier()
            }
        })
    }
      this.complier()
  }
  complier(){
    let parseStr = ''
    let newStr = ''
    let matchWord = []
    if(Object.prototype.toString.call(this.el) === '[object String]'){
      
      newStr = this.parseStr.replace(templateRxp, (match, p1) => this[p1])
    }
    document.querySelector(this.el).innerHTML = newStr
  }
}
class XiaoJieJie2{
  public sex:string
  protected name:string
  private age:number
  public constructor(sex:string,name:string,age:number){
      this.sex=sex
      this.name=name
      this.age=age
  }
  public sayHello(){
      console.log('小哥哥好')
  }

  protected sayLove(){
      console.log('我爱你')
  }
}

var jiejie2:XiaoJieJie2 = new XiaoJieJie2('女','热巴',22)

console.log(jiejie2.sex)
console.log(jiejie2.name)   //报错
console.log(jiejie2.age)    //报错
jiejie2.sayHello()
jiejie2.sayLove()    //报错
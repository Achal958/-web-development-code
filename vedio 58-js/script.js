function nice(name){
    console.log("Hey " +  name  + "you are nice !")
console.log("Hey "+   name  +  "you are good !")
    console.log("Hey " + name  +  "your laptop features is so cool!")
    console.log("Hey "  + name  +  "your tshirt is good !")
}
nice("Neha")

function sum(a,b ,c=3){
    // console.log(a+b)
    return a+b+c

}
 result1=sum(3,5)
 result2=sum(4,5)
 result3=sum(3,6)
 result4=sum(8,5)
console.log("the sum of these number is:",result1)
console.log("the sum of these number is:",result2)
console.log("the sum of these number is:",result3)
console.log("the sum of these number is:",result4)

const func1 = (x)=>{
    console.log("I am an arrow function",x)

}
func1(34);
func1(66)
func1(84)
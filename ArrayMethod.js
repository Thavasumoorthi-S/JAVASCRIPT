//1)push method
let arr=[1,2,3,4];
arr.push(5);
console.log(arr)
console.log("------------------------------");

//2)pop method

let arr1=["abc",1,7.5,"cde"];
arr1.pop();
console.log(arr1);
console.log("----------------------------------");

//3)unshift method

let arr2=[2,3,4,5];
arr2.unshift(1);
console.log(arr2);
console.log("----------------------------------");



//4)shift method

let arr3=[2,3,4,5];
arr3.shift(1);
console.log(arr3);
console.log("----------------------------------");

//5)sort method

let arr4=[39,12,67,89,15];
arr4.sort();
console.log(arr4);
console.log("----------------------------------");

//6)reverse method

let arr5=[1,2,3,4,5];
arr5.reverse();
console.log(arr5);
console.log("---------------------------");

//7)length method

console.log(arr5.length);
console.log("--------------------------");

//8)forEach method
let arr6=[1,2,3,4,5];
arr6.forEach(value=>
    {
        console.log(value*3);
    })
console.log("------------------------------");

//9)map method

let arr7=[10,15,20,30,17,34];
let arr8=arr7.map(value=>value*2);
console.log(arr8);
console.log("-------------------------------------------");

//10)filter method

let arr9=[10,20,34,56,78,30];
let arr10=arr9.filter(value=>value%5==0);
console.log(arr10);
console.log("----------------------------------");

//11)reduce method

let arr11=[10,20,30,40];
let x=arr11.reduce((a,b)=>{return a+b});
console.log(x);
console.log("-----------------------------------------");


//12)reduce right method

let arr12=[10,20,30,40];
let y=arr12.reduceRight((a,b)=>{return a-b});
console.log(y);
console.log("-----------------------------------------");

//13)toString method
let arr13=["apple","banana","orange"];
let sentence=arr13.toString();
console.log(sentence);
console.log("-----------------------------------------");

//14)valueOf method
let arr14=["banana","orange","apple"];
let result=arr14.valueOf();
result[0]="mango";
console.log(result);
console.log(arr14);
console.log("------------------------------------");

//15)every method
let arr15=[2,4,6,7,10];
let ans=arr15.every(value=>value%2==0);
console.log(ans);
console.log("----------------------------------------------------");

//16)some method
let arr16=[2,4,6,7,10];
let answer=arr15.some(value=>value%2==0);
console.log(answer);
console.log("----------------------------------------------------");

//17)find method
let arr17=[2,4,6,7,10];
let find=arr17.find(value=>value>8);
console.log(find);
console.log("----------------------------------------------------------");

//18)findindex
let arr18=[2,4,8,9,-2];
let findindex=arr18.findIndex(value=>value<0);
console.log(findindex);
console.log("-------------------------------------------------");

//19)indexOf method
let arr19=["Bike","car","bus","cycle","bus"];
let indexof=arr19.indexOf("bus");
console.log(indexof);
console.log("----------------------------------------------------------");


//20)lastIndexOf method
let lastIndexof=arr19.lastIndexOf("bus");
console.log(lastIndexof);
console.log("----------------------------------------------------------");

//21)keys method
let keys=arr19.keys();
for(let x of keys)
{
    console.log(x);
}
console.log("------------------------------------------------------------");

//22)entries method
let entries=arr19.entries();
for(let y of entries)
{
    console.log(y);
}
console.log("-------------------------------------------------------------");

//23)fill method
let arr20=["apple","orange","banana"];
let fill=arr20.fill("fruits");
console.log(fill);
console.log("-----------------------------------------------");

//24)from method
let name="THAVASUMOORTHI";
let arr21=Array.from(name);
console.log(arr21);
console.log("-------------------------------------------------------------");

//25)includes method

let arr22=["heat","cold","warm","ice"];
let include=arr22.includes("ice");
console.log(include);
console.log("------------------------------------------------------------------");

//26)join method
let join=arr22.join();
console.log(join);
console.log("-------------------------------------------------------------------");

//27)isArray method
let isarray=Array.isArray(arr22);
console.log(isarray);
console.log("----------------------------------------------------------------------");

//28)slice method
let arr23=["father","mother","sister","Brother","son"];
let slice=arr23.slice(1,4);
console.log(slice);
console.log("-------------------------------------------------------------------------");

//29)splice method
let arr24=["father","mother","sister","Brother","son"];
let splice=arr24.splice(2,2);
console.log(splice);

//30)prototype method

let arr25=["father","mother","sister","Brother","son"];
for(let i=0;i<arr25.length;i++)
{
    let name=arr25[i].toUpperCase();
    console.log(name);
}
console.log("-------------------------------------------------------");

//31)concat method
let a=["software","hardware","embedded"];
let b=["Software developer","App Developer","web Developer"];
let c=a.concat(b);
console.log(c);
console.log("---------------------------------------------------------------");

//32)constructor method
let IT=["Software developer","App Developer","web Developer"];
let constructor=IT.constructor();
console.log(constructor);

//33)copyWithin method
let num=[1,2,3,4,5,6,7];
let final=num.copyWithin(0,2,5);
console.log(final);
console.log("---------------------------------------------------------------------");
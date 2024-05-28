const nummern=[5,1,4,7,2,3]

let total=((nummern.length+1)*(nummern.length+2))/2;

const sum=nummern.reduce((acc,curr)=>acc+curr)

console.log(total-sum);
let nums = [3,1,2,10,1]
let numsResultado=[]

numsResultado[0]=nums[0];
for(let cont=1; cont<nums.length; cont++){
   // console.log("Posicion "+cont+":"+nums[cont])
    let valorAcumulado = numsResultado[cont-1]
    numsResultado[cont]= valorAcumulado + nums[cont];
}
//concatenar con +
console.log("Input:"+nums)
//backtick
console.log(`Output:${numsResultado}`)

//++ --
//=+ += -= =-
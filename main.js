let FiA=[0.222,0.081,0.016,0.032,0.036,0.123,0.023,0.016,0.051,0.071,
    0.001,0.005,0.040,0.022,0.072,0.079,0.023,0.002,0.060,0.066,
    0.096,0.031,0.009,0.020,0.002,0.019,0.001];
let FiC=[0.06,0.036,0,0.047,0.036,0.107,0.036,0.107,0.036,0,0.024,0,
    0.012,0,0.167,0.107,0,0.012,0.012,0.071,0.012,0.071,0.024,0.036,0,0,
    0.047,0.036,0.047];
let d=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
let text1=["M","L","A","C","_","S","C","M","Y","Y","U","Z","S","L","X","M","Z","S","F","M","S","Q","L","U","D","L","M","L","E","J","A","Q","L","_","R","L","H","C","U","E","E","Q","Z","L","X","M","Z","S","F","M","S","Q","L","E","T","M","E","L","E","Q","X","X","D","L","O","_","Y","A","F","E","Q","C","D","L","H","T","M","E","L","E","_","L","P","_"];
let result=["k","L","h","C","_","S","C","M","Y","Y","U","Z","S","L","X","M","Z","S","F","M","S","Q","L","U","D","L","M","L","E","J","A","Q","L","_","R","L","H","C","U","E","E","Q","Z","L","X","M","Z","S","F","M","S","Q","L","E","T","M","E","L","E","Q","X","X","D","L","O","_","Y","A","F","E","Q","C","D","L","H","T","M","E","L","E","_","L","P","_"];
for( let k=0;k<27;k++){
    for( let j=0;j<27;j++){
        d[k]+=Math.abs(FiA[j]-FiC[(j-k+27)%27]);
    }
}

let min=2;
let kmin=0;
for(let k=0;k<27;k++){
    if(d[k]<min){
        min=d[k];
        kmin=k;
    }
}
kmin++;
document.getElementById('min').innerHTML="<br> min = "+min+"<br>kmin="+kmin;
let abc=["_","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
// let result=text1;
for(let i=0;i<84;i++){
    for(let j=0;j<27;j++){
       if(text1[i]===abc[j]){
           result[i]=abc[((j+kmin+1+27)%27)];
           console.log("change");
       }
    }
}
for(let i=0;i<27;i++){
    console.log(d[i]);
}
for(let i=0;i<84;i++){
    document.getElementById('old').innerHTML=" old Array"+text1;
}

for(let i=0;i<27;i++){
    document.getElementById('d').innerHTML=" Array d "+d+"<br> ";

}
for(let i=0;i<84;i++){
    document.getElementById('result').innerHTML=" New Array"+result;
}

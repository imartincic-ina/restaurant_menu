const decoder = new TextDecoder();
let b = false;

for await (const chunk of Deno.stdin.readable) {
  const text = decoder.decode(chunk);

  
  for(let i=0 ; i < text.length; i++){
    let a = text [i];
    if ( a !== " "){
       
    }

  } 

}

  console.log (b);

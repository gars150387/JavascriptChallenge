

const list=[
    'sport', 'shoe', 'sad', 'child'
  ]
  
  
  const word = 'esho';
  
  function matchWord (word, list) {
    
    let splitWord = []
  
  for ( let i = 0; word.length > i; i++){
   splitWord.push(word[i])
   }
   
   
  const resultFilter = list.filter(word => word.length === splitWord.length);
  
  
  for ( let i = 0; i < resultFilter.length; i++ ){
    
    
    for ( let value of splitWord){
      
       for( let resultItem of resultFilter[i]){
         
      if ( resultItem === value ){
        
        console.log( resultFilter[i])
      }
     }
    }
  }
  }
  
  
  matchWord(word, list)
  
  
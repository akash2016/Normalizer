function arrayNormalizer(data){
  const obj={};
  if(Array.isArray(data)){
    data.forEach((value) =>{
     const {id, ...rest} = value;
      const innerObj={};
      Object.keys(rest).forEach((val)=>{
        if(Array.isArray(rest[val])){
           innerObj[val]=arrayNormalizer(rest[val]);
        }
        else{
          innerObj[val]=rest[val];
        }
       
      });
     obj[id]=innerObj;
      
    })
    return obj;
   
    
  }
  return data;
}

module.exports=arrayNormalizer;

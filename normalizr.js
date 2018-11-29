function arrayNormalizer(data){
  let obj={};
  if(Array.isArray(data)){
    data.forEach((value) =>{
     const {id, ...rest} = value;
      let newObj={};
      Object.keys(rest).forEach((val)=>{
        if(Array.isArray(rest[val])){
           newObj[val]=arrayNormalizer(rest[val]);
        }
        else{
          newObj[val]=rest[val];
        }
       
      });
     obj[id]=newObj;
      
    })
    return obj;
   
    
  }
  return data;
}

module.exports=arrayNormalizer;

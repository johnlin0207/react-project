export const receiveAggType = aggType =>({
  type : 'AGG_TYPE',
  aggType
})
export const chooseAgg = agg => ({
  type : 'CHOOSE_AGG',
  agg
})
export const getAggType = agg =>dispatch=>{
  if(!agg){
    dispatch(receiveAggType(
     {hasForm :false} 
    )) 
    return    
  }
  //return //fetch(`https://www.reddit.com/r/reactjs.json`)
  //.then(response => response.json())
  //.then(json => 
  dispatch(receiveAggType(
    {
      hasForm :true,
      form:[
        {name:'productName',type:'text',value:'',child:{}},
        {name:'productNum',type:'radio',options:['one','two'],value:'',child:{}},
        {name:'productSell',type:'checkbox',options:['A','B','C'],value:'',child:{}},
        {name:'productDescrib',type:'area',value:'',child:{}},
      ] 
    }
  ))//)
}
export const receiveFinalResult = result =>({
  type : 'GET_RESULT',
  result
})
export const postFinalResult = result => dispatch =>{
  return fetch(`http://localhost:3000/kibana`)
  .then(response => response.json())
  .then(json =>dispatch(receiveFinalResult(json)))
}
export const addMetrics = m =>({
  type:'ADD_METRICS',
  m  
})
export const removeMetrics = i =>({
  type:'REMOVE_METRICS',
  i  
})
export const modefyMetrics = (m,i) =>({
  type : 'MODEFY_METRICS',
  m,
  i  
})
export const addBucket = b =>({
  type : 'ADD_BUCKET',
  b   
})
export const removeBucket = i =>({
  type:'REMOVE_BUCKET',
  i  
})
export const modefyBucket = (b,i) =>({
  type:'MODEFY_BUCKET',
  b,
  i  
})

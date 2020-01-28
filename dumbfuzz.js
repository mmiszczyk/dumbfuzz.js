function randomDecision(probabilityOutOfTen){
  if(Math.floor(Math.random()*10) < probabilityOutOfTen)
    return true;
  return false;
}

function randStr(){
  s=""
  while(randomDecision(4))
    s+= Math.random().toString(36).slice(2)
  return s
}

function getRandomData(){
  switch(Math.floor(Math.random()*7)){
    case 0:
      return Math.random()
    case 1:
      return randStr()
    case 2:
      obj={}
      while(randomDecision(4)){
        obj[getRandomData()]=getRandomData()
      }
      if (randomDecision(5)) return obj
      return JSON.stringify(obj)
    case 3:
      return undefined
    case 4:
      return NaN
    case 5:
      a=[]
      while(randomDecision(6)) a.push(getRandomData())
      if(randomDecision(5)) return a
      return JSON.stringify(a)
    case 6:
      return randomDecision(5)
   }
}

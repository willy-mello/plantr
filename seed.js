const db= require('./models.js');

db.sync({force: true})
.then(()=>{
  console.log('Great it works')
})
.catch((err)=>{
  console.error(err)
})
.finally(()=>{
  db.close()
})

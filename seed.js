const db= require('./models.js');


// console.log('Iiiiiiiiiiii this is db', db)

db.sync({force: true})
.then(()=>{
  return (
  db.models.Vegetables.create({
    name: 'Onion',
    color: 'Red',
    planted_on: new Date(Date.now())

  }))
})
// .then(()=>{
//   db.models.Vegetables.create({
//     name: 'Grapes',
//     color: 'Yellow',
//     planted_on: new Date(Date.now())
//   })
// })
.catch((err)=>{
  console.error(err)
})
.finally(()=>{
  db.close()
})


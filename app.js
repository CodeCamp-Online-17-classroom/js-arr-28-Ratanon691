function deleteTask(id){
  const tasks = [
  { id: 1, name: 'Fishing' },
  { id: 2, name: 'Shopping' },
  { id: 3, name: 'Swimming' }
];
  for(i = 0 ; i < tasks.length ; i++){
    if(tasks[i].id == id){
    tasks.splice(i, 1)
    }
  }
  console.log(tasks)
}
deleteTask(2);

// [
//   { id: 1, name: 'Fishing' },
//   { id: 3, name: 'Swimming' }
// ]

import React from 'react'

const BasicFn = () => {


    const person = {
        name:'hiba',
        age:23,
        isStudents:true
    }
  return (
    <div>
      <h1>{person.name}</h1>
      <h2>{person.age}</h2>
      <h3>is student:{person.isStudents}</h3>
    </div>
  )
}

export default BasicFn

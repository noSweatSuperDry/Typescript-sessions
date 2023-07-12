// Lesson 5 - Modules

//Type casting or type assertions

type One = string 
type Two = string | number
type Three = 'apple'

//convert to more or less specific 

let a: One = 'apple'
let b = a as Two //convert to less specific
let c = a as  Three //convert to more specific


let d =  <One> 'world'
let e = <string | number> 'world'


const addOrConcat = (a: number, b: number, c: 'add' |'concat'): number | string => {
    if (c == 'add') return a + b
        return ''+ a + b
    }

// Till 8:06
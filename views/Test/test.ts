let num = 'adsf'

function yo(num: number){console.log(num)}

// yo(num)

//Creating interfaces
interface Details {
    id: number, title: String
}
const product_details: Details = {
    id: 123, title: 'asdf'
}


//Tuples
type Mytuple = [String, Number, Boolean]
const a_tuple: Mytuple = [ 'asdf', 123, true]
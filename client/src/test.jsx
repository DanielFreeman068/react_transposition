import {useState} from 'react'


const App = () => {
const [name, setName] = useState("")
const [email, setEmail] = useState("")

const handleOnSubmit = async(e)=>{
    e.preventDefault()
    let result = await fetch('http://localhost:5000/users',{
    method: 'POST',
    body: JSON.stringify({name,email,id:Date.now()}),
    headers:{'Content-Type': 'application/json'}
    })
    result = await result.json()
    console.log(result)
    if(result){
    alert('Data save successfully')
    setEmail("")
    setName("")
    }

}

return (
    <div>
    <h1>This is React WebApp </h1>
            <form action="">
                <input type="text" placeholder="name"
                value={name} onChange={(e) => setName(e.target.value)} />
                <input type="email" placeholder="email"
                value={email} onChange={(e) => setEmail(e.target.value)} />
                <button type="submit"
                onClick={handleOnSubmit}>submit</button>
            </form>
    </div>
)
}

export default App
import React,{ useEffect ,useState} from 'react'

const Home = () => {
  const [state, setState] = useState(true);
  const [input, setInput] = useState("");

  useEffect(()=>{
    setState(!state);
      return ()=>{
        console.log("unmounting");
    };
    console.log("hi");
  },[input]);

  return (
    <>
      <input type='text'
      value={input} 
      onChange={(e)=>setInput(e.target.value)} 
      />
      {/* <button>Home</button> */}
      <p>{input}</p>
    </>
    
  )
}

export default Home
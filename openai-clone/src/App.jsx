import { useState } from 'react'
import { Configuration, OpenAIApi } from "openai"
import './App.css'
import OptionSelection from './components/OptionSelection'
import { arrayItems } from './AIOptions'
import Translation from "./components/Translation"

function App() {

  const configuration = new Configuration({
     //apiKey: import.meta.env.VITE_Open_AI_Key,
     //apiKey: process.env.VITE_Open_AI_Key,
     apiKey: 'OPENAIKEY',
  })

  const openai = new OpenAIApi(configuration)
  const [option, setOption] = useState({});
  const [result, setResult] = useState('');
  const [input, setInput] = useState("");

  const selectOption = (option) => {
    setOption(option);

  }
  const doStuff = async () => {
    let object = { ...option, prompt: input };

    const response = await openai.createCompletion(object);

    setResult(response.data.choices[0].text);
    console.log(response)
  };
  

  return ( 
    <div className='App'>
      
      {Object.values(option).length === 0 ? (
          <OptionSelection arrayItems={arrayItems} selectOption={selectOption}/>
        ) : (
          <Translation doStuff={doStuff} setInput={setInput} result={result}/>
        )}
    </div>
  )
}

export default App

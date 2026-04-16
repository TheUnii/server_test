import { useEffect, useState } from 'react'

import './App.css'

function App() {

  const [inputText, setInputText] = useState('');
  const [emojis, setEmojis] = useState([]);
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    fetchEmoji();
  }, [inputText]);

  const fetchEmoji = async () => {
    setLoading(true);

      let url = 'http://localhost:3000/api/emojis';
      
      if(inputText){
        url += '?q=' + inputText;
      }
    
      const response = await fetch(url)
      const data = await response.json();

      if(data.success){
        setEmojis(data.data);
        setLoading(false);
      }
  }

  return (
    <>
      <header>
        <h1>Emoji Finder</h1>
        <p>Find emoji by keywords</p>
        <input 
        type="text" 
        value={inputText} 
        placeholder='Input here...' 
        onInput={(event) => setInputText(event.target.value)} />
      </header>

      <main>
      {loading ? 'Загрузка...' : emojis.map((emoji)=>{
        return <div className="card">
          <p>{emoji.symbol}</p>
          <p>{emoji.title}</p>
          <p>{emoji.keywords}</p>
        </div>
      })}
      </main>



    </>
  )
}

export default App

import './App.css'
import { useEffect, useState } from 'react'


function App() {

  const [inputText, setInputText] = useState('');
  const [inputHouse, setInputHouse] = useState('');
  const [chars, setChar] = useState([]);
  const [loading, setLoading] = useState(false)
  const houses = ["Гриффиндор", "Слизерин", "Когтевран", "Пуффендуй"]; 


  useEffect(() => {
    fetchChar();
  }, [inputText, inputHouse]);

  const fetchChar = async () => {
    setLoading(true);

      let url = 'http://localhost:3000/api/characters';

      if(inputText){
        url += '?search=' + inputText;
        
      if(inputHouse){
        url += '&house=' + inputHouse;
        }
      } else if(inputHouse){
        url += '?house=' + inputHouse;
      }

      const response = await fetch(url)
      const data = await response.json();

      if(Array.isArray(data)){
        setChar(data); 
        setLoading(false);
      }
  }


  return (
    <main>
      <div className='main_cont_bord'>
        <div className='main_cont'>
          <div className="main_text_cont">
            <h1 className="main_text_h1">Harry Potter</h1>
            <p className="main_text_p">View all characters from the Harry Potter universe</p>
            <div className="form_cont">
              <div className="form_name_cont">
                <p className="form_p">Name</p>
                <input 
                  className="form_name" 
                  type="text"  
                  placeholder='Hermione' 
                  value={inputText} 
                  onInput={(event) => setInputText(event.target.value)}/>
              </div>
              <div className="form_select_cont">
                <p className="form_p">School</p>
                <select 
                  className="form_select"
                  value={inputHouse}
                  onChange={(event) => setInputHouse(event.target.value)}> 
                  <option value="">Choose one</option> 
                  {houses.map((house, index) => ( 
                    <option key={index} value={house}>{house}</option> 
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className='main_card_cont'>
            {loading ? 'Загрузка...' : chars.map((char)=>{
              return <div className='main_card'>
                <div>
                  <img src={char.img} alt=""></img>
                </div>
                <div className='main_card_text'>
                    <h2>{char.name}</h2>
                    <p>Актер: {char.actor}</p>
                    <p>Пол: {char.gender}</p>
                    <p>Факультет: {char.house}</p>
                    <p>Состав палочки: {char.wand}</p>
                    <p>Живой: {char.alive ? 'Да' : 'Нет'}</p>
                </div>
              </div>
            })}
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
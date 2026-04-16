import './App.css'
import rectangleImage from './assets/Rectangle 37.png'
import rectangleImage2 from './assets/Rectangle 37 (1).png'


function App() {
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
                  <input className="form_name" type="text"  placeholder='Hermione'/>
                </div>
                <div className="form_select_cont">
                  <p className="form_p">School</p>
                  <select className="form_select">
                    <option value="">Choose one</option>
                    <option value="option1">Вариант 1</option>
                    <option value="option2">Вариант 2</option>
                    <option value="option3">Вариант 3</option>
                  </select>
                </div>
              </div>
            </div>
            <div className='main_card_cont'>
              <div className='main_card'>
                <div>
                  <img src={rectangleImage} alt=""></img>
                </div>
                <div className='main_card_text'>
                    <h2>Hermione Granger</h2>
                    <p>Actor: Emma Watson</p>
                    <p>Gender: female</p>
                    <p>House: Gryffindor</p>
                    <p>Wand core: dragon heartstring</p>
                    <p>Alive: yes</p>
                </div>
              </div>
              <div className='main_card'>
                <div>
                  <img src={rectangleImage2} alt=""></img>
                </div>
                <div className='main_card_text'>
                    <h2>Hermione Granger</h2>
                    <p>Actor: Emma Watson</p>
                    <p>Gender: female</p>
                    <p>House: Gryffindor</p>
                    <p>Wand core: dragon heartstring</p>
                    <p>Alive: yes</p>
                </div>
              </div>
              <div className='main_card'>
                <div>
                  <img src={rectangleImage} alt=""></img>
                </div>
                <div className='main_card_text'>
                    <h2>Hermione Granger</h2>
                    <p>Actor: Emma Watson</p>
                    <p>Gender: female</p>
                    <p>House: Gryffindor</p>
                    <p>Wand core: dragon heartstring</p>
                    <p>Alive: yes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
  )
}

export default App
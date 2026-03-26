import './App.css';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import Main from './components/main.jsx';

//Задание1
// function App() {
//   return (
//     <div className="App">
//         <Header />
//         <Main />
//         <Footer />
//     </div>
//   );
// }

//Задание2
function App() {
  return (
    <div className="App">
        <Header title="Привет, мир React!" />
        <Main />
        <Footer copyrightText="© 2024 Моя компания" />
    </div>
  );
}

export default App;


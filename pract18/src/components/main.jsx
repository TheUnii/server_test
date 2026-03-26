import { useState } from 'react';

function SimpleCounter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Текущее значение: {count}</p>
            <button onClick={() => setCount(count + 1)}>+1</button>
            <button onClick={() => setCount(count - 1)}>-1</button>
            <button onClick={() => setCount(0)}>Сброс</button>
        </div>
    );
}

function ColorChanger() {
 // Объявите состояние для цвета фона
 const [bgColor, setBgColor] = useState('white');
 return (
 <div style={{ backgroundColor: bgColor}}>
 <h2>Цвет фона: {bgColor}</h2>
 <button onClick={() => setBgColor('red')}>Красный</button>
 <button onClick={() => setBgColor('blue')}>Синий</button>
 </div>
 );
}

function TextDisplay() {
 // Объявите состояние для текста
 const [text, setText] = useState('');
 return (
 <div>
    <input type="text" placeholder="Введите текст" value={text} onChange={(e) => setText(e.target.value)}/>
    <p>Вы ввели: {text}</p>
 </div>
 );
}

function PasswordToggle() {
    const [visible, setVisible] = useState(false);
    const [password, setPassword] = useState('');

    return (
        <div>
            <input type={visible ? "text" : "password"} placeholder="Введите пароль" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={() => setVisible(!visible)}>
                {visible ? "Скрыть" : "Показать"}
            </button>
        </div>
    );
}

function UserStatus() {
 // Объявите состояние для статуса
 const [status, setStatus] = useState('online');
 const toggleStatus = () => {
 setStatus(status === 'online' ? 'offline' : 'online');
 };
 return (
 <div>
    <p>Пользователь: <strong>Анна</strong> — статус: {status}</p>
    <button onClick={toggleStatus}>
    Переключить статус
    </button>
 </div>
 );
} 


export { SimpleCounter, ColorChanger, TextDisplay, PasswordToggle, UserStatus };
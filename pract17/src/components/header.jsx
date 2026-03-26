//Задание 1
// function Header(){
//     return (
//         <header>
//             <h1>Мой первый React-проект</h1>
//         </header>
//     );
// }

// export default Header;

//Задание2
function Header({ title }) {
    return (
        <header>
            <h1>{title}</h1>
        </header>
    );
}

export default Header;
//Задание 1
// function Footer(){
//     return (
//         <footer>
//              <p>© 2024 Все права защищены</p>
//         </footer>
//     );
// }

// export default Footer;

//Задание2
function Footer({ copyrightText }) {
    return (
        <footer>
             <p>{copyrightText}</p>
        </footer>
    );
}

export default Footer;
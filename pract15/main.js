//Задание 1
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    introduce() {
        console.log(`Привет, я ${this.name}, мне ${this.age} лет`);
    }
}

const person1 = new Person("Анна", 25);
const person2 = new Person("Максим", 30);
person1.introduce();
person2.introduce();

//Задание 2 
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    
    getArea() {
        return this.width * this.height;
    }
    
    getPerimeter() {
        return 2 * (this.width + this.height);
    }
}

const myRectangle = new Rectangle(5, 8);

//Задание 3
class Counter {
    constructor() {
        this.count = 0;  
    }
    
    increment() {
        this.count += 1;  
    }
    
    decrement() {
        this.count -= 1;  
    }
    
    getValue() {
        console.log(this.count);
    }
}

//Задание 4
class Book {
    constructor(title, author, year) {
        this.title = title;  
        this.author = author; 
        this.year = year;     
    }
    
    getInfo() {
        return `${this.title} (${this.year}) — ${this.author}`;
    }
}

const book1 = new Book("Преступление и наказание", "Фёдор Достоевский", 1866);
const book2 = new Book("Война и мир", "Лев Толстой", 1869);
const book3 = new Book("Мастер и Маргарита", "Михаил Булгаков", 1967);

//Задание 6
class ShoppingCart {
    constructor() {
        this.items = []; 
    }
    
    addItem(item) {
        this.items.push(item);
    }
    
    removeItem(item) {
        const index = this.items.indexOf(item);
        if (index !== -1) {
            this.items.splice(index, 1);
        } 
    }
    
    getTotalItems() {
        return this.items.length;
    }
    
    showItems() {
        this.items.forEach((item, index) => {
                console.log(`${index + 1}. ${item}`);
            });
        }
}

//Задание 7
class Password {
    constructor(value) {
        this.value = value; 
    }

    isValid() {
        return this.value.length >= 8;
    }

    mask() {
        if (this.value.length <= 3) {
            return "*".repeat(this.value.length); 
        }
        
        const firstThree = this.value.slice(0, 3); 
        const stars = "*".repeat(this.value.length - 3);
        
        return firstThree + stars;
    }
}
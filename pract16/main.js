//Задание 1
class Figure {
    constructor(name = "Фигура") {
        this.name = name;
    }
    
    getArea() {
        return 0; 
    }
    
    getInfo() {
        return `${this.name} с площадью ${this.getArea()}`;
    }
}

class Circle extends Figure {
    constructor(radius, name = "Круг") {
        super(name);
        this.radius = radius;
    }
    
    getArea() {
        return Math.PI * this.radius ** 2;
    }
 
    getInfo() {
        return `${super.getInfo()} (радиус: ${this.radius})`;
    }
}
//Задание 2 
class Transport {
    constructor(brand, year) {
        this.brand = brand; 
        this.year = year;   
    }
    getInfo() {
        return `Марка: ${this.brand}, Год: ${this.year}`;
    }
    
    getType() {
        return "Транспортное средство";
    }
}
class Car extends Transport {
    constructor(brand, year, doors) {
        super(brand, year); 
        this.doors = doors;     
    }
    
    getType() {
        return "Автомобиль";
    }
    
    getInfo() {
        return `${super.getInfo()}, Дверей: ${this.doors}`;
    }
    
    startEngine() {
        console.log(`${this.brand}: Двигатель запущен`);
    }
}


class Bike extends Transport {
    constructor(brand, year, type, hasBasket) {
        super(brand, year);
        this.type = type;        
    }
    
    getType() {
        return "Велосипед";
    }
    
    getInfo() {
        return `${super.getInfo()}, Тип: ${this.type}`;
    }
    

    ringBell() {
        console.log(`${this.brand}: Дзынь`);
    }
}

//Задание 3
class Employee {
    constructor(name, baseSalary) {
        this.name = name;
        this.baseSalary = baseSalary;
    }
    
    calculateSalary() {
        return this.baseSalary;
    }
    
    getInfo() {
        return `${this.name}: ${this.calculateSalary()} руб.`;
    }
}

class Manager extends Employee {
    constructor(name, baseSalary, bonus, hasTeam) {
        super(name, baseSalary);
        this.bonus = bonus;
        this.hasTeam = hasTeam;
    }
    
    calculateSalary() {
        let salary = this.baseSalary + this.bonus;
        return salary;
    }
    
    getInfo() {
        return `Менеджер ${this.name} ${this.calculateSalary()} руб.`;
    }
    
}

class Developer extends Employee {
    constructor(name, baseSalary, hoursWorked, hourlyRate) {
        super(name, baseSalary);
        this.hoursWorked = hoursWorked;
    }
    
    calculateSalary() {
        const overtime = Math.max(0, this.hoursWorked - 160);
        return this.baseSalary + overtime * 120;
    }
    
    getInfo() {
        const overtime = Math.max(0, this.hoursWorked - 160);
        return `Разработчик ${this.name} ${this.calculateSalary()} руб.`;
    }
}

//Задание 4
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    sound() {
        return "Звук";
    }
    
    getInfo() {
        return `${this.name}, ${this.age} лет: ${this.sound()}`;
    }
}

class Cat extends Animal {
    constructor(name, age, color) {
        super(name, age);
    }
    
    sound() {
        return "Мяу-мяу!";
    }
    
    getInfo() {
        return `Кот ${this.name}: ${this.sound()}`;
    }
}

class Dog extends Animal {
    constructor(name, age) {
        super(name, age);
    }
    
    sound() {
        return "Гав-гав!";
    }
    
    getInfo() {
        return `Собака ${this.name}: ${this.sound()}`;
    }
}

class Cow extends Animal {
    constructor(name, age) {
        super(name, age);
    }
    
    sound() {
        return "Му-у-у!";
    }
    
    getInfo() {
        return `Корова ${this.name}: ${this.sound()}`;
    }
}

//Задание 5
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

class Square extends Rectangle {
    constructor(side) {
        super(side, side);
    }
}

//Задание 6 
class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    
    getInfo() {
        return `"${this.title}", ${this.author}, ${this.year}`;
    }
}

class Fiction extends Book {
    constructor(title, author, year, genre) {
        super(title, author, year);
    }
    
    getInfo() {
        return `Художественная: "${this.title}", ${this.author}, ${this.year}`;
    }
}

class NonFiction extends Book {
    constructor(title, author, year, topic) {
        super(title, author, year);
    }
    
    getInfo() {
        return `Нехудожественная: "${this.title}", ${this.author}, ${this.year}`;
    }
}

//Задание 7
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    
    getPrice() {
        return this.price;
    }
    
    getInfo() {
        return `${this.name}: ${this.getPrice()} руб.`;
    }
}

class DiscountedProduct extends Product {
    constructor(name, price, discountPercent) {
        super(name, price);
        this.discountPercent = discountPercent;
    }
    
    getPrice() {
        const discount = (this.price * this.discountPercent) / 100;
        return this.price - discount;
    }
    
    getInfo() {
        return `${this.name} (скидка ${this.discountPercent}%): ${this.getPrice()} руб.`;
    }
}

class PremiumProduct extends Product {
    constructor(name, price, markupPercent) {
        super(name, price);
    }
    
    getPrice() {
        const markup = this.price * 0.30;
        return markup;
    }
    
    getInfo() {
        return `${this.name}: ${this.getPrice()} руб.`;
    }
}

//Задание 8
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    getInfo() {
        return `${this.name}, ${this.age} лет`;
    }
}

class Student extends Person {
    constructor(name, age, studentId, grade) {
        super(name, age);
        this.studentId = studentId;
        this.grade = grade;
    }
    
    getInfo() {
        return `Студент ${this.name}, ID: ${this.studentId}, класс: ${this.grade}`;
    }
    
    study() {
        return `${this.name} учится`;
    }
}

class Teacher extends Person {
    constructor(name, age, teacherId, subject) {
        super(name, age);
        this.teacherId = teacherId;
        this.subject = subject;
    }
    
    getInfo() {
        return `Учитель ${this.name}, предмет: ${this.subject}`;
    }
    
    teach() {
        return `${this.name} преподает ${this.subject}`;
    }
}

//Задание 9
class Animal {
    constructor(name) {
        this.name = name;
    }
    
    getInfo() {
        return `Животное: ${this.name}`;
    }
}

class Mammal extends Animal {
    constructor(name) {
        super(name);
    }
    
    feedMilk() {
        return `${this.name} кормит детенышей молоком`;
    }
    
    getInfo() {
        return `Млекопитающее: ${this.name}`;
    }
}

class Dog extends Mammal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
    
    dog() {
        return `${this.name} лает: Гав-гав!`;
    }
    
    getInfo() {
        return `Собака: ${this.name}, порода: ${this.breed}`;
    }
}

//Задание 10
class Shape {
    constructor(name) {
        this.name = name;
    }
    
    getArea() {
        return 0;
    }
    
    getInfo() {
        return `${this.name} с площадью ${this.getArea()}`;
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super("Прямоугольник");
        this.width = width;
        this.height = height;
    }
    
    getArea() {
        return this.width * this.height;
    }
}

class Triangle extends Shape {
    constructor(base, height) {
        super("Треугольник");
        this.base = base;
        this.height = height;
    }
    
    getArea() {
        return (this.base * this.height) / 2;
    }
}
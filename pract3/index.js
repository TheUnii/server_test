let hero = {
    name: 'Рыцарь',
    health: 100,
    maxHealth: 100,
    attack: 10,
    armor: 2,
    hasPotion: true,
    isDefending: false,

    attackEnemy: function (enemy) {
        let variance = Math.floor(Math.random() * 5) - 2;
        let baseDamage = this.attack + variance;
        baseDamage = Math.max(1, baseDamage);
        
        if (Math.random() < 0.1) {
            console.log(`${this.name} промахнулся!`);
            return;
        }
        
        let damage = baseDamage;
        
        if (Math.random() < 0.2) {
            let critMultiplier = 1.5 + Math.random() * 0.5;
            damage = Math.floor(damage * critMultiplier);
            console.log(`Крит удар`);
        }
        
        let finalDamage = Math.max(0, damage - enemy.armor);
        enemy.health -= finalDamage;
        
        console.log(`${this.name} атаковал ${enemy.name}! Нанесено ${finalDamage} урона. Здоровье ${enemy.name} = ${Math.max(0, enemy.health)}`);
    },
    
    takeDamage: function (damage) {
        if (this.isDefending) {
            damage = Math.floor(damage / 2);
            console.log(`${this.name} защитился`);
            this.isDefending = false;
        }
        
        let actualDamage = Math.max(0, damage - this.armor);
        this.health -= actualDamage;
        
        console.log(`${this.name} получил урон. Нанесено ${actualDamage} урона. Здоровье ${this.name} = ${Math.max(0, this.health)}`);
    }
}

let enemy = {
    name: 'Орк',
    health: 120,
    attack: 6,
    armor: 0,
    
    attackHero: function (hero) {
        let variance = Math.floor(Math.random() * 5) - 2;
        let baseDamage = this.attack + variance;
        baseDamage = Math.max(1, baseDamage);
        
        if (Math.random() < 0.1) {
            console.log(`${this.name} промахнулся`);
            return;
        }
        
        let damage = baseDamage;
        
        if (Math.random() < 0.2) {
            damage = Math.floor(damage * 1.8);
            console.log(`Крит урон от ${this.name}`);
        }
        
        hero.takeDamage(damage);
    }
}

console.log(`${hero.name} (${hero.health}) против ${enemy.name} (${enemy.health})`);

let round = 1;

while (hero.health > 0 && enemy.health > 0) {
    console.log(`\nРаунд ${round}`);
    
    let action = prompt("Выберите действие:\n1 Атаковать\n2 Защищаться\n3 Выпить зелье");
    
    if (action === "2") {
        hero.isDefending = true;
        console.log(`${hero.name} защищается`);
    } 
    else if (action === "3" && hero.hasPotion) {
        let heal = 30;
        hero.health = Math.min(hero.maxHealth, hero.health + heal);
        hero.hasPotion = false;
        console.log(`${hero.name} восстановил ${heal} здоровья. Здоровье = ${hero.health}`);
    }
    else if (action === "1") {
        console.log(`Ход ${hero.name}:`);
        hero.attackEnemy(enemy);
    }
    else {
        console.log(`Ход ${hero.name}:`);
        hero.attackEnemy(enemy);
    }
    
    if (enemy.health <= 0) {
        console.log(`${hero.name} одержал победу`);
        break;
    }
    
    console.log(`Ход ${enemy.name}:`);
    enemy.attackHero(hero);
    
    if (hero.health <= 0) {
        console.log(`${enemy.name} победил`);
        break;
    }
    
    console.log(`\nХп после ${round} раунда:`);
    console.log(`${hero.name}: ${hero.health} ${enemy.name}: ${enemy.health}`);
    
    round++;
}
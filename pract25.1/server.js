import { DataTypes, Sequelize } from "sequelize";

const db = new Sequelize({
    dialect:'sqlite',
    storage:'./storage/db.sqlite'
})

const Enemies = db.define('eneimes',{
    name: DataTypes.STRING,
    health: DataTypes.INTEGER
})

const Player = db.define('Player', {
    nickname: {
    type: DataTypes.STRING,
    allowNull: true 
    },
    experience: {
    type: DataTypes.INTEGER,
    defaultValue: 0
    },
    isOnline: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
    }
}); 


await db.sync({force: true});
console.log('Таблица игроков создана')

const hero1 = new Player({ nickname: 'Лучник69', experience: 120, isOnline: true});
await hero1.save();

const hero2 = new Player({ nickname: 'МагЛев', experience: 45});
await hero2.save();

const hero3 = new Player({ nickname: 'Танк_2000', experience: 300, isOnline: true});
await hero3.save();

const allPlayers = await Player.findAll();
console.log(allPlayers);

const onlinePlayers = await Player.findAll({
    where: {isOnline: true}
});

console.log('Игроки онлайн:');
console.log(onlinePlayers);


async function findPlayer(nickname) {
    const player = await Player.findOne({
        where: {nickname: nickname}
});

    if (player === null) {
        console.log(`Игрок с ником ${nickname} не зарегистрирован`);
    } else {
        console.log(
            `Найден игрок: ${player.nickname}, уровень опыта: ${player.experience}`
        );
    }
}

await findPlayer('Лучник69');

await findPlayer('Воин');



const player = await Player.findOne({
    where: {nickname: 'Лучник69'}
    });

player.experience = player.experience + 50;
player.isOnline = false;

await player.save();

console.log(`Игрок ${player.nickname} обновлён. Новый опыт: ${player.experience}`);



const target = await Player.findOne({
    where: {nickname: 'МагЛев'}
});

console.log(`Прощай, ${target.nickname} (уровень ${target.experience})`);

await target.destroy();

console.log('Персонаж покинул мир');



const topPlayers = await Player.findAll({order: [['experience', 'DESC']],limit: 2});

topPlayers.forEach((player, index) => {
    console.log(`${index + 1} место: ${player.nickname} - ${player.experience} опыта`);
});
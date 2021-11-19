// 1. Создать класс House, инстанс которого иммет поля
// adress: {city:, street:, number:}
// apartments: Apartment[]
// maxApartments: number
// метод addApartment который принимает объект Appartment
// и добавляет его в массив apartments
// добавлять квартир больше чем maxApartments - запрещено
// добавлять квартиру без владельца запрещено
// добавлять квартиру без номера - запрещено
// нельзя добавлять квартиру если квартира с таким номером уже существует
// в массиве.
// Создать класс Apartment, интсанс которого имеет поля
// apartmentNumber: number
// owner: string // по умолчанию - пустая строка
// и метод setOwner('Vasya')
// [
//     {apartmentNumber:2, owner:'Vasya'},
//     {apartmentNumber:3, owner:'Petya'}
// ]

class House{
    constructor(city,street,number,maxApartments){
        this.adress = {
            city: city,
            street: street,
            number:number
        }
        this.apartments = [];
        this.maxApartments = maxApartments;
    }
    addApartment(apart){
        if(this.apartments.length<this.maxApartments 
            && apart.owner !== `` 
            && !this.apartments.some(({apartmentNumber}) => apartmentNumber === apart.apartmentNumber )){
            this.apartments.push(apart);
        } 
    }
}


class Apartment{
    constructor(number,owner = ``){
        this.apartmentNumber =  number;
        this.owner = owner
    }
    setOwner(name){
        this.owner = name
    }
}

let apartment1 = new  Apartment(1);
apartment1.setOwner(`Nike`);
let apartment2 = new  Apartment(2);
apartment2.setOwner(`Vasiya`);
let apartment3 = new  Apartment(3);
apartment3.setOwner(`Grzegosz`);
let apartment4 = new  Apartment(4);
apartment4.setOwner(`Ludomir`);
let apartment5 = new  Apartment(3);
apartment5.setOwner(`Pedro`);
let apartment6 = new  Apartment(56);

let house1 = new House(`Ulan-Ude`, `Lenina`, 1, 13);
house1.addApartment(apartment1);

house1.addApartment(apartment2);

house1.addApartment(apartment3);

house1.addApartment(apartment4);
house1.addApartment(apartment5);
house1.addApartment(apartment6);

console.log(house1);

// 2. Создать класс Device, который имеет параметр isOn (по 
//     умолчанию false), метод callSmbd, который принимает имя 
//     вызываемого абонента и метод switchDevice, который 
//     переключает параметр isOn. Позвонить абоненту можно 
//     только тогда, когда параметр isOn == true, иначе вывести 
//     сообщение, что звонок невозможен. Необходимо также 
//     создать классы Smartphone(принимает имя и диагональ 
//     экрана(не может быть больше 8)) и Tablet(принимает имя и 
//     диагональ экрана (не может быть меньше 8)), которые 
//     наследуют от класса Device

// 3. Создать класс Battery, который инициализирует поля type,
// energy (заряд, по умолчанию 100). Создать класс Device, 
// который принимает параметр batteryType и метод
// insertBattery, который принимает два параметра (две 
// батарейки). Создать класс Gamepad, который наследует от 
// Device. Класс Gamepad должен содержать поле model, поле 
// isConnected (boolean) и методы connectTo(), который 
// принимает название другого девайса и выводит сообщение 
// типа “gamepadModel connected to TV”, метод disconnect(), 
// который отключает Gamepad и метод play(), который 
// отнимает 10 зарядов от каждой батареи. Если хотя бы одно 
// поле batteryType у Device и type у Battery не совпадают, то 
// вывести сообщение что батарейки не вставлены. 
// Подключить один девайс к другому можно только если есть 
// 2 батарейки. Подключить Gamepad можно только если 
// isConnected == false. Если заряд батареек == 0, то метод 
// play вернет сообщение с требованием замены батареек

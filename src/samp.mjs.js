class Person {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    updateName(name) {
        this.name = name;
    }
}

const person = new Person('vishnu', 15);
console.log(person.name);

const CreatePerson = ({ name, age }) => {
    return {
        updateName(newName) {
            name = newName;
        },
        getName() {
            return name;
        },
        getAge() {
            return age;
        }
    };
};

const p2 = CreatePerson({ name: 'harry', age: 8 });
p2.updateName('harry ohlsen');

console.log(p2.getName());

const p3 = CreatePerson({ name: 'harry2', age: 8 });
p3.updateName('Harry2 Ohlsen');

console.log(p2.getName());
console.log(p3.getName());

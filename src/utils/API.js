import faker from "faker";

const arr = []

for (var i = 0; i<50; i++){
    const person = {
        id:    faker.random.uuid(),
        name:  faker.name.findName(),
        image: faker.image.avatar(),
        title: faker.name.jobTitle(),
        email: faker.internet.email()
      };
    
      arr.push(person);
}

export default{people: arr,}
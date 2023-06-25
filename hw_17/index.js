function Human(name, gender) {
    this.name = name;
    this.gender = gender;
  }
  
  function Flat() {
    this.people = [];
  }
  
  Flat.prototype.addPeople = function (person) {
    this.people.push(person);
  }
  
  function Building(maxFlats) {
    this.apartments = [];
    this.maxFlats = maxFlats;
  }
  
  Building.prototype.addFlat = function (flat) {
    if (this.apartments.length < this.maxFlats) {
      this.apartments.push(flat);
    } else {
      console.log('Досягнуто максимальну кількість квартир');
    }
  }
  
  const person = new Human('Володимир', 'чоловік');
  const person1 = new Human('Катерина', 'жінка');
  
  const apt = new Flat();
  const apt1 = new Flat();
  
  apt.addPeople(person);
  apt1.addPeople(person1);
  
  const house = new Building(10);
  
  house.addFlat(apt);
  house.addFlat(apt1);
  
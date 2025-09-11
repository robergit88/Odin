// // Objects and Object Constructors
// const myObject = {
//   property: 'Value!',
//   otherProperty: 77,
//   "obnoxious property": function() {
//     // do stuff!
//   }
// };

// There are also 2 ways to get information out of an object:
// dot notation and bracket notation.

// dot notation
// myObject.property; // 'Value!'

// bracket notation
// myObject["obnoxious property"]; // [Function]
// console.log(myObject)
// console.log(myObject.property)
// console.log(myObject.otherProperty)

function createUser(name) {
  const discordName = "@" + name;

  let reputation = 0;
  const getReputation = () => reputation;
  const giveReputation = () => reputation++;

  return { name, discordName, getReputation, giveReputation };
}

const josh = createUser("josh");
josh.giveReputation();
josh.giveReputation();

console.log({
  discordName: josh.discordName,
  reputation: josh.getReputation(),
});
// logs { discordName: "@josh", reputation: 2 }

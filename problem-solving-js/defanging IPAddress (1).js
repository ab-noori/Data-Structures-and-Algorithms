const defangIPaddr = (address) => {
  return address.split('.').join('[.]');
};

let address = "255.100.50.0";
console.log(defangIPaddr(address));

//-----------------------------------------------------

const defangIPaddr = (address) => {
  return address.replaceAll('.', '[.]');
};

let address = "255.100.50.0";
console.log(defangIPaddr(address));
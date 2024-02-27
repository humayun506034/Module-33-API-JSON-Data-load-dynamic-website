const user = { Id: 1, name: "humayun", ocupation: "student" };
const stringify=JSON.stringify(user);
// console.log(user);
// console.log(stringify);

const shop={
    owner:'humayun',
    address:{
        street:'danajpur village',
        city:'rangpur',
        country:'bangladesh'
    },
    products:['laptop', 'mic', 'monitor', 'keyboard'],
    revenue:45000,
    isOpen:true,
    isNew:false
};
const shopJSON=JSON.stringify(shop);
console.log(shop);
console.log(shopJSON);
const shopObj=JSON.parse(shopJSON);
console.log(shopObj);
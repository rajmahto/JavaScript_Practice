let contacts = [];

function AddContact(name,number)
{
    let contact = {name,number};
    contacts.push(contact);
}
function displayConatcts(){
    console.log('Your Contacts are:');
    contacts.forEach(contact =>{
        console.log(`${contact.name} ${contact.number}`);
    })
}
function FindConatct(name){
        let contact = contacts.find(contact => contact.name === name);
        if (contact){
            console.log(`Found: ${contact.name} ${contact.number}`);
        }
        else{
            console.log('Conatct not Found!');
        }
}

AddContact('manik',80998989);
AddContact('vishal',32665562);
displayConatcts();

FindConatct('raj');
FindConatct('manik');
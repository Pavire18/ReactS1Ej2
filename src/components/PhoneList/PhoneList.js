const phones = ["iPhone", "Galaxy", "Redmi", "OnePlus"];

const PhoneList = () =>{
    return (
        <ul>
             {phones.map((phone)=> <li key={phone}>{phone}</li>)}
        </ul>
    )
}

export default PhoneList;
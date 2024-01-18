import './App.css';
import CustomButton from './components/CustomButton/CustomButton';
import Greeting from './components/Greeting/Greeting';
import PhoneList from './components/PhoneList/PhoneList';
import RedTitle from './components/RedTitle/RedTitle';

function App() {
  const youHitIt = () => {
    alert("Le has dado");
  }
  const okMen = () => {
    alert("Le has dado");
  }
  return (
    <div className="App">
      <RedTitle text="Teléfonos:"></RedTitle>
      <PhoneList></PhoneList>
      <RedTitle text="Mensajes:"></RedTitle>
      <Greeting name="Laura"></Greeting>
      <Greeting name="Pablo"></Greeting>
      <RedTitle text="Botones"></RedTitle>
      <CustomButton handleClick={youHitIt} text="Dale!"></CustomButton>
      <CustomButton handleClick={okMen} text="Ok"></CustomButton>
    </div>
  );
}

export default App;

import './App.css';
import PersonalCard from './components/PersonalCard';

function App() {
  return (
    <div className="App">
      <PersonalCard userName={'Doe, Jane'}/>
      <PersonalCard userAge={'Age: 45'}/>
      <PersonalCard userHair={'Hair Color: Black'}/>
      <PersonalCard userName={'Smith, John'}/>
      <PersonalCard userAge={'Age: 88'}/>
      <PersonalCard userHair={'Hair Color: Brown'}/>
      <PersonalCard userName={'Fillmore, Millard'}/>
      <PersonalCard userAge={'Age: 50'}/>
      <PersonalCard userHair={'Hair Color: Brown'}/>
      <PersonalCard userName={'Smith, Maria'}/>
      <PersonalCard userAge={'Age: 62'}/>
      <PersonalCard userHair={'Hair Color: Brown'}/>
    </div>
  );
}

export default App;

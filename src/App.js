import './App.css';
import PersonalCard from './components/PersonalCard';
import PersonCard from './components/PersonCard';

// var namesArr =[
//   {"userName":"Doe, Jane", "age":45, "hairColor":"Black"},
//   {"userName":"Smith, John","age":88,"hairColor":"Brown"},
//   {"userName":"Fillmore, Millard","age":50,"hairColor":"Brown"},
//   {"userName":"Smith, Maria","age":62,"hairColor":"Brown"}
// ]

function App() {
  return (
    <div className="App">
      {/* {namesArr.map(person => {
        return <PersonalCard userName={person.userName} age={person.age} hairColor={person.hairColor} />
      })
      } */}
        <PersonCard userName="Doe, Jane" age={45} hairColor='Black'/>
        <PersonCard userName="Smith, John" age={88} hairColor='Brown'/>
        <PersonCard userName='Fillmore, Millard' age={50} hairColor='Brown'/>
        <PersonCard userName='Smith, Maria' age={62} hairColor='Brown'/>
    </div>
  );
}

export default App;

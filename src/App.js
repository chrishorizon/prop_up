import './App.css';
import PersonalCard from './components/PersonalCard';

var namesArr =[
  {"userName":"Doe, Jane", "age":45, "hairColor":"Black"},
  {"userName":"Smith, John","age":88,"hairColor":"Brown"},
  {"userName":"Fillmore, Millard","age":50,"hairColor":"Brown"},
  {"userName":"Smith, Maria","age":62,"hairColor":"Brown"}
]

function App() {
  return (
    <div className="App">
      {namesArr.map(person => {
        return <PersonalCard userName={person.userName} age={person.age} hairColor={person.hairColor} />
      })
      }
    </div>
  );
}

export default App;

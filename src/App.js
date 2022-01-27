import logo from './logo.svg';
import './App.css';
import FindNUmbersWithEvenNumberOfDigits from "./component/FindNumbersWithEvenNumbersOfDigits"
import TwoSum from './component/TwoSum';
import MaxConsecutiveOnes from "./component/MaxConsecutiveOnes"
import MoveZeroes from "./component/MoveZeroes"
import RemoveDuplicateInSortedArray from "./component/RemoveDuplicateInSortedArray"
import ReplaceElementWithTheGreatestOneOnRightSide from "./component/ReplaceElementWithTheGreatestOneOnRightSide"

function App() {
  return (
    <div className="App">
      <FindNUmbersWithEvenNumberOfDigits/>
      <br/>
      <MaxConsecutiveOnes />
      <br/>
      <MoveZeroes />
      <br/>
      <RemoveDuplicateInSortedArray />
      <br/>
      <ReplaceElementWithTheGreatestOneOnRightSide />
      <br/>
      <TwoSum />
    </div>
  );
}

export default App;

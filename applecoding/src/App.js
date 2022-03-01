
import axios from 'axios';
import React, { useCallback, useState, useContext } from 'react'
import List from './components/List';
import Tab from './components/Tab';

export const 범위context = React.createContext();

function App() {

  // const [a, b] = useState([])
  // const example = [
  //   { id: 1, title: 'a', content: 'sibal' },
  //   { id: 2, title: 'b', content: 'siba2l' },
  //   { id: 3, title: 'c', content: 'siba3l' },
  //   { id: 4, title: 'd', content: 'siba4l' },
  // ]
  // const garen = {
  //   q: {name: 'strike'},
  //   w: {name: 'a'}
  // }
  const [log, setLog] = useState([]);
  const request =
    useCallback(() => {
      axios.get('https://codingapple1.github.io/shop/data2.json').then((result) => {

        console.log(result.data);
        setLog(...log, [result.data]);
        console.log(log)

      }).catch(() => { console.log("요청실패"); })
      console.log(log);
    }, [log]);

  return (
    <범위context.Provider value={log}>
      <button onClick={request}>가져오기</button>
      <List />
      <Tab />
    </범위context.Provider>
  );
}

export default App;

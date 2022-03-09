import { CardContainer, TextField } from './Components';
import { useState, useEffect } from 'react';
import './App.scss';

function App() {

  const rootUrl = 'https://api.github.com/repos/facebook/react/issues';

  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState('');
  const [filteredData, setFilteredData] = useState('');

  async function fetchIssues() {
    fetch(rootUrl).then(response => response.json()).then(parsedResponse => setData(parsedResponse));
  }

  useEffect(async () => {
    await fetchIssues();
  }
    , []);

  useEffect(() => {
    if (!searchTerm) {
      setFilteredData(data.slice(0, 5));
    } else {
      const results = data.filter(issue => issue?.title.toLowerCase().includes(searchTerm.toLowerCase()));
      const firstFiveElements = results.slice(0, 5);
      setFilteredData(firstFiveElements);
    }
  }
    , [searchTerm]);



  return (
    <div>
      <TextField handleState={setSearchTerm} />
      <CardContainer data={filteredData} />
    </div>
  );
}

export default App;

//anuar.morales@venafi.com
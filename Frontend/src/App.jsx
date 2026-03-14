import { useEffect, useState } from 'react';

import api from './api';
import SearchBar from './components/SearchBar';
import CountryList from './components/CountryList';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [countries, setCountries] = useState({});
  const loadCountries = async (params = {}) => {
    try {
      const res = await api.get('/countries', { params });
      setCountries(res.data);
    } catch (error) {
      console.error("Error fetching countries:", error);
    }
    
  };
  useEffect(() => {
    loadCountries();
  }, []);
  return (
    <div className="flex flex-col  m-auto  ">
      <div className='text-4xl p-3 bg-gray-900 w-full text-center '>🌍 Rest Countries Explorer</div>
      <SearchBar className="mt-5" onSearch={loadCountries} />
      <CountryList countries={countries} />
    </div>
  );
  
}
export default App;
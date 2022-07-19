import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  getBrochureURL,
  getBackgroundVideoURL,
  getButtonURLs,
  getUniversityList,
} from './util/airtable';
import { Home, NotFound } from './pages';

function App() {
  // Airtable's Data
  const [airtBgVideoURL, setAirtBgVideoURL] = useState('');
  const [airtButtons, setAirtButtons] = useState({
    mainButtonURL: '',
    membershipButtonURL: '',
  });
  const [airtUniversityList, setAirtUniversityList] = useState([]);
  const [airtBrochureURL, setAirtBrochureURL] = useState('');

  useEffect(() => {
    getBackgroundVideoURL(setAirtBgVideoURL);
    getButtonURLs(setAirtButtons);
    getUniversityList(setAirtUniversityList);
    getBrochureURL(setAirtBrochureURL);
    // eslint-disable-next-line
  }, []);

  const data = {
    airtBgVideoURL,
    airtButtons,
    airtUniversityList,
    airtBrochureURL,
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home data={data} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

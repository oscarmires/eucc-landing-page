import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  getBrochureURL,
  getBackgroundVideoURL,
  getButtonURLs,
  getUniversityList,
} from './util/airtable';
import { Home, NotFound } from './pages';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles, themes } from './style';

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
      <GlobalStyles />
      <ThemeProvider theme={themes.emprendedores}>
        <BrowserRouter>
          <h1>Haallo</h1>
          <Routes>
            <Route index element={<Home data={data} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;

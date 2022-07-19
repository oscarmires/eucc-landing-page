import { useEffect, useState } from 'react';
import {
  getBrochureURL,
  getBackgroundVideoURL,
  getButtonURLs,
  getUniversityList,
} from './util/airtable';

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

  return <div className="App"></div>;
}

export default App;

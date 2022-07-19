import Airtable from 'airtable';

const base = new Airtable({ apiKey: process.env.REACT_APP_AIRTABLE_API_KEY }).base(
  process.env.REACT_APP_AIRTABLE_BASE_ID
);

/**
 * Fetches background video URL and assigns it to airtableData
 *
 * @param {objecto} airtableData - Airtable data state
 * @param {function} setAirtableData - Airtable data state setter
 */
export const getBackgroundVideoURL = (setData) => {
  base('Otros')
    .select({
      // Selecting the first 3 records in Grid view:
      maxRecords: 3,
      view: 'Grid view',
    })
    .eachPage(
      function page(records, fetchNextPage) {
        // This function (`page`) will get called for each page of records.

        records.forEach(function (record) {
          if (record.get('Name') === 'Video de fondo') {
            const url = record.get('URL');

            record.get('Activar') && setData(url);
          }

          return;
        });

        // To fetch the next page of records, call `fetchNextPage`.
        // If there are more records, `page` will get called again.
        // If there are no more records, `done` will get called.
        fetchNextPage();
      },
      function done(err) {
        if (err) {
          console.error(err);
          return;
        }
      }
    );
};

/**
 * Fetches both btn's URLs and assigns them to airtableData
 *
 * @param {objecto} airtableData - Airtable data state
 * @param {function} setAirtableData - Airtable data state setter
 */
export const getButtonURLs = (setData) => {
  let mainButtonURL = '';
  let membershipButtonURL = '';

  base('Botones')
    .select({
      // Selecting the first 3 records in Grid view:
      maxRecords: 3,
      view: 'Grid view',
    })
    .eachPage(
      function page(records, fetchNextPage) {
        // This function (`page`) will get called for each page of records.

        records.forEach(function (record) {
          if (record.get('Name') === 'Principal') mainButtonURL = record.get('URL');
          if (record.get('Name') === 'Membresía') membershipButtonURL = record.get('URL');
        });

        // To fetch the next page of records, call `fetchNextPage`.
        // If there are more records, `page` will get called again.
        // If there are no more records, `done` will get called.
        fetchNextPage();
      },
      function done(err) {
        if (err) {
          console.error(err);
          return;
        }

        setData({
          mainButtonURL: mainButtonURL,
          membershipButtonURL: membershipButtonURL,
        });
      }
    );
};

/**
 * Fetches university list and assigns it to airtableData
 *
 * @param {objecto} airtableData - Airtable data state
 * @param {function} setAirtableData - Airtable data state setter
 */
export const getUniversityList = (setData) => {
  const universityList = [];

  base('Universidades')
    .select({
      // Selecting the first 3 records in Grid view:
      maxRecords: 50,
      view: 'Grid view',
    })
    .eachPage(
      function page(records, fetchNextPage) {
        // This function (`page`) will get called for each page of records.

        records.forEach(function (record) {
          record.get('Activar') && universityList.push(record.get('Name'));
        });

        // To fetch the next page of records, call `fetchNextPage`.
        // If there are more records, `page` will get called again.
        // If there are no more records, `done` will get called.
        fetchNextPage();
      },
      function done(err) {
        if (err) {
          console.error(err);
          return;
        }

        setData(universityList);
      }
    );
};

/**
 * Fetches "brochure" file URL and assigns it to airtableData
 *
 * @param {object} airtableData - Airtable data state
 * @param {function} setAirtableData - Airtable data state setter
 */
export const getBrochureURL = (setData) => {
  base('Archivos')
    .select({
      // Selecting the first 3 records in Grid view:
      maxRecords: 3,
      view: 'Grid view',
    })
    .eachPage(
      function page(records, fetchNextPage) {
        // This function (`page`) will get called for each page of records.

        records.forEach(function (record) {
          // console.log('Retrieved', record.get('Name'));
          if (record.get('Name') === 'Folleto') {
            const url = record.get('Archivo')[0].url;
            record.get('Activar') && setData(url);
            return;
          }
        });

        // To fetch the next page of records, call `fetchNextPage`.
        // If there are more records, `page` will get called again.
        // If there are no more records, `done` will get called.
        fetchNextPage();
      },
      function done(err) {
        if (err) {
          console.error(err);
          return;
        }
      }
    );
};

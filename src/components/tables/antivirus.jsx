import React from 'react';

const Antivirus = ({ results }) => {

  const resultsArray = Object.entries(results);
  console.log(results);

  return (
    <div className="antivirus-table">
      {resultsArray.map(([antivirus, data]) => (
        <div key={antivirus} className="antivirus-row">
          <div className="antivirus-name">{antivirus}</div>
          <div className="antivirus-status">
            {data.category === 'harmless' ? (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#19d250" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-circle-2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
                <span>Undetected</span>
              </>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#d21922" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x-circle">
                  <circle cx="12" cy="12" r="10" />
                  <path d="m15 9-6 6" />
                  <path d="m9 9 6 6" />
                </svg>
                <span>Detected</span>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Antivirus;

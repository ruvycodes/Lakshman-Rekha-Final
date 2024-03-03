import React from 'react';

const VoteResults = ({ results }) => {
    console.log(results);
    return (
        <div className="vote-results-table">
            <hr />
            <h1 className='mt-2 text-lg underline font-semibold'>Votes :</h1>
            {results.map(result => (
                <div key={result.id} className="vote-results-row flex">
                    <div className="vote-results-value">
                        {result.attributes.value === 1 ? (
                            <span className="vote-results-positive m-1 p-1">+1</span>
                        ) : (
                            <span className="vote-results-negative m-1 p-1">-1</span>
                        )}
                    </div>
                    <div className="vote-results-verdict">
                        {result.attributes.verdict === 'harmless' ? (
                            <span className="vote-results-harmless font-semibold text-green-500 m-1 p-1">Harmless</span>
                        ) : (
                            <span className="vote-results-malicious font-semibold text-red-600 m-1 p-1">Malicious</span>
                        )}
                    </div>
                    <div className="vote-results-date">
                        {new Date(result.attributes.date * 1000).toLocaleString()}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default VoteResults;

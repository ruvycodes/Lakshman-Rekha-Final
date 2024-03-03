import React from 'react';
import Antivirus from './tables/antivirus';
import VoteResults from './tables/VoteResults';
import CommentResults from './CommentResults';

const Output = ({ data, voteData, commentData }) => {
  console.log(voteData);
  return (
    <div>
      <Antivirus results={data.data.attributes.results} />
      {/* Render VoteResults component */}
      {voteData && <VoteResults results={voteData.data} />}
      {commentData && <CommentResults results={commentData.data} />}
    </div>
  );
};

export default Output;

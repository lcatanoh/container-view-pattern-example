import React from 'react';
import { useRouter } from 'next/router';

const MovieDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <p>Movie Detail for Movie ID: {id}</p>
      <button onClick={() => router.back()}>Go Back</button>
    </div>
  );
};

export default MovieDetail;
import React from 'react';
import { Error, Loader } from '../components';
import { useGetLyricsQuery } from '../redux/services/spotifyAPI';

const LyricsPage = ({ trackId }) => {
  const { data, isFetching, error } = useGetLyricsQuery(trackId);

  if (isFetching) return <Loader title="Loading lyrics" />;
  if (error) return <Error />;

  return (
    <div className="flex flex-col items-center mt-4 mb-10">
      <h2 className="font-bold text-3xl text-primary mb-4">Lyrics</h2>
      <div className="w-full max-w-2xl p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm rounded-lg">
        {data.lyrics.lines.map((line, index) => (
          <p key={index} className="text-lg text-gray-300 mt-2">{line.words}</p>
        ))}
      </div>
    </div>
  );
};

export default LyricsPage;

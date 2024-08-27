import React from 'react';
import { useGetUserQuery } from '../redux/services/spotifyAPI';
import { Error, Loader } from '../components';
import PlaylistCard from '../components/MusicPlayer/PlaylistCard';

const UserPage = ({ userId }) => {
  const { data, isFetching, error } = useGetUserQuery(userId);

  if (isFetching) return <Loader title="Loading user data" />;
  if (error) return <Error />;

  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center mt-4 mb-10">
        <img
          className="rounded-full w-40 h-40"
          src={data.image_url}
          alt={data.name}
        />
        <h2 className="font-bold text-3xl text-primary mt-4">{data.name}</h2>
        <p className="text-sm text-gray-300 mt-1">Followers: {data.followers_count.toLocaleString()}</p>
      </div>
      <h3 className="font-bold text-2xl text-primary mb-4">Public Playlists</h3>
      <div className="flex flex-wrap sm:justify-center justify-center gap-8">
        {data.public_playlists?.map((playlist) => (
          <PlaylistCard
            key={playlist.uri}
            playlist={playlist}
          />
        ))}
      </div>
    </div>
  );
};

export default UserPage;

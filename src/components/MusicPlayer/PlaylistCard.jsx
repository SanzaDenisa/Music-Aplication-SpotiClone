import React from 'react';
import { Link } from 'react-router-dom';

const PlaylistCard = ({ playlist }) => (
  <div
    className="flex flex-col w-[220px] p-4 bg-white/5 bg-opacity-80
     backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
  >
    <div className="relative w-full h-full group">
      <img
        className="rounded-lg"
        alt="playlist_img"
        src={playlist.image_url.replace('spotify:image:', 'https://i.scdn.co/image/')}
      />
    </div>
    <div className="mt-4 flex flex-col">
      <p className="font-semibold text-lg text-primary capitalize truncate">
        <Link to={`/playlists/${playlist.uri}`}>{playlist.name}</Link>
      </p>
      <p className="text-sm truncate text-gray-300 mt-1">
        Followers: {playlist.followers_count.toLocaleString()}
      </p>
      <p className="text-sm truncate text-gray-300 mt-1">
        Owner: <Link to={`/users/${playlist.owner_uri}`}>{playlist.owner_name}</Link>
      </p>
    </div>
  </div>
);

export default PlaylistCard;

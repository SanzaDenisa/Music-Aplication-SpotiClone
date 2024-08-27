import { Link } from 'react-router-dom';

const AlbumCard = ({ album }) => (
  <div
    className="flex flex-col w-[220px] p-4 bg-white/5 bg-opacity-80
     backdrop-blur-sm animate-slideup rounded-lg cursor-pointer"
  >
    <div className="relative w-full h-full group">
      <img
        className="rounded-lg"
        alt="album_img"
        src={album.images[1]?.url}
      />
    </div>
    <div className="mt-4 flex flex-col">
      <p className="font-semibold text-lg text-primary capitalize truncate">
        <Link to={`/albums/${album?.id}`}>{album.name}</Link>
      </p>
      <p className="text-sm truncate text-gray-300 mt-1">
        {album.artists.map((artist) => artist.name).join(', ')}
      </p>
    </div>
  </div>
);
export default AlbumCard;

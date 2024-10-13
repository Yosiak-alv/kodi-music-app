import { albumsData } from '../assets/assets';
import { songsData } from '../assets/assets';

import { AlbumItem } from '../components/AlbumItem';
import { SongItem } from '../components/SongItem';
import { NavBar } from '../components/NavBar';
import { Head } from '../components/Head';

export const Home = () => {
    return (
        <>
            <Head title="Home" />
            <NavBar />
            <div className="mb-4">
                <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
                <div className="flex overflow-auto">
                    {albumsData.map((item, index) => (
                    <AlbumItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />
                    ))}
                </div>
            </div>

            <div className="mb-4">
                <h1 className="my-5 font-bold text-2xl">Today's biggest hits</h1>
                <div className="flex overflow-auto">
                    {songsData.map((item, index) => (
                    <SongItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />
                    ))}
                </div>
            </div>
        </>
    )
}
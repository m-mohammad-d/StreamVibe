import { AiFillLike } from "react-icons/ai";
import { BiPlay, BiPlus } from "react-icons/bi";
import { HiOutlineSpeakerWave } from "react-icons/hi2";

function VideoTrailers() {
  return (
    <div
      style={{
        background: `linear-gradient(to top, rgb(15, 15, 15) 5%, rgba(15, 15, 15, .9) 20%, rgba(15, 15, 15, .8) 50%, rgba(15, 15, 15, .6) 70%, rgba(15, 15, 15, .4) 80%, rgba(15, 15, 15, .3) 100%), url('/AvengersWallpaper.jpg')`,
      }}
      className="h-[700px] mx-4 flex flex-col md:flex-row justify-center items-center p-8 md:p-20 rounded-lg"
    >
      <div>
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            Avengers : Endgame
          </h2>
          <p className="text-grey-60 text-sm">
            With the help of remaining allies, the Avengers must assemble once
            more in order to undo Thanos's actions and undo the chaos to the
            universe, no matter what consequences may be in store, and no matter
            who they face... Avenge the fallen.
          </p>
        </div>
        <div className="mt-12 flex justify-center flex-col md:flex-row items-center gap-6">
          <button className="bg-primary-45 flex justify-center items-center gap-2 text-white p-3 rounded-lg transition duration-300">
            <BiPlay size={20} />
            Play Now
          </button>
          <div className="flex justify-between items-center gap-4">
            <button className="bg-dark-06 border-2 border-dark-15 text-white p-3 rounded-lg transition duration-300">
              <BiPlus size={20} />
            </button>
            <button className="bg-dark-06 border-2 border-dark-15 text-white p-3 rounded-lg transition duration-300">
              <AiFillLike size={20} />
            </button>
            <button className="bg-dark-06 border-2 border-dark-15 text-white p-3 rounded-lg transition duration-300">
              <HiOutlineSpeakerWave size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoTrailers;

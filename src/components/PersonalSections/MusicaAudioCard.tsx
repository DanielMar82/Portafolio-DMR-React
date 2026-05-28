import PauseIcon from "../../assets/Icons/PauseIcon";
import PlayIcon from "../../assets/Icons/PlayIcon";

type MusicaAudioCardProps = {
  image: string;
  audio: string;
  className?: string;
  currentAudio: string | null;
  onClick: (audio: string) => void;
};

const MusicaAudioCard = ({
  image,
  audio,
  className,
  currentAudio,
  onClick,
}: MusicaAudioCardProps) => {
  return (
    <>
      <div
        onClick={() => onClick(audio)}
        className={`group relative shadow-2xl bg-cover cursor-grow content-center aspect-square rounded-3xl overflow-hidden after:absolute after:inset-0 after:bg-black/0 after:transition-all after:duration-400 z-10 hover:after:bg-black/80 ${className}`}
        style={{ backgroundImage: `url(${image})` }}
      >
        {currentAudio === audio ? (
          <PauseIcon className="text-white relative size-[30%] mx-auto opacity-0 group-hover:opacity-100 transition-all duration-400 z-20" />
        ) : (
          <PlayIcon className="text-white relative size-[30%] mx-auto opacity-0 group-hover:opacity-100 transition-all duration-400 z-20" />
        )}
      </div>
    </>
  );
};

export default MusicaAudioCard;

import { useRef, useState } from "react";
import { Link } from "react-router";
import MusicaAudioCard from "./MusicaAudioCard";
import { useScrollAppear } from "../../hooks/useScrollAppear";

const SectionMusica = () => {
  const sectionRef = useScrollAppear();
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [currentAudio, setCurrentAudio] = useState<string | null>(null);

  function handleAudio(audioUrl: string) {
    if (currentAudio === audioUrl) {
      audioRef.current?.pause();
      audioRef.current = null;
      setCurrentAudio(null);
      return;
    }

    if (audioRef.current) {
      audioRef.current.pause();
    }

    const newAudio = new Audio("/audios/" + audioUrl);

    newAudio.volume = 0.4;
    newAudio.play();
    audioRef.current = newAudio;
    setCurrentAudio(audioUrl);

    newAudio.onended = () => {
      setCurrentAudio(null);
      audioRef.current = null;
    };
  }

  return (
    <>
      {/* APARTADO MUSICA */}
      <section
        ref={sectionRef}
        className="flex flex-col gap-10 bg-[#0d1a0d] -mx-20 px-30 py-20 "
      >
        <div className="scroll-appear flex flex-col gap-8 z-20">
          <h1 className="bg-[#fff4de] lg:text-7xl text-8xl text-left font-bold text-[#021b07] lg:p-4 p-7 w-fit rounded-t-3xl rounded-bl-3xl">
            Música
          </h1>
          <p className="bg-[#fdff9a] lg:w-full text-[#021b07] text-left lg:text-2xl text-4xl p-5 rounded-4xl whitespace-pre-line">
            {`No hay mucho que añadir ¿A quién no le gusta la música?\n
              Entre algunos de mis tipos musicales favoritos se encuentran el rap español e inglés, el pop/rock antiguo de los 80 y 90, y sobretodo las canciones típicas españolas.\n
              Y aquí dejo algunas de las canciones que más me gustan:`}
          </p>
        </div>

        <div className="grid lg:grid-cols-4 grid-cols-2 2xl:gap-20 lg:gap-10 gap-15 w-full relative">
          <MusicaAudioCard
            image="/personalImages/musica/ImgCover1.jpg"
            audio="PagarAudio.wav"
            currentAudio={currentAudio}
            onClick={handleAudio}
            className="scroll-appear"
          />
          <MusicaAudioCard
            image="/personalImages/musica/ImgCover2.jpg"
            audio="ThatsOnMeAudio.wav"
            currentAudio={currentAudio}
            onClick={handleAudio}
            className="scroll-appear"
          />
          <MusicaAudioCard
            image="/personalImages/musica/ImgCover3.jpg"
            audio="PuraDrogaSinCortarAudio.wav"
            currentAudio={currentAudio}
            onClick={handleAudio}
            className="scroll-appear"
          />
          <MusicaAudioCard
            image="/personalImages/musica/ImgCover4.jpg"
            audio="HeroesAudio.wav"
            currentAudio={currentAudio}
            onClick={handleAudio}
            className="scroll-appear"
          />
          <MusicaAudioCard
            image="/personalImages/musica/ImgCover5.jpg"
            audio="SiTeVasAudio.wav"
            currentAudio={currentAudio}
            onClick={handleAudio}
            className="scroll-appear"
          />
          <MusicaAudioCard
            image="/personalImages/musica/ImgCover6.jpg"
            audio="TeniaTantoQueDarteAudio.wav"
            currentAudio={currentAudio}
            onClick={handleAudio}
            className="scroll-appear"
          />
          <MusicaAudioCard
            image="/personalImages/musica/ImgCover7.jpg"
            audio="DNAAudio.wav"
            currentAudio={currentAudio}
            onClick={handleAudio}
            className="hidden lg:block scroll-appear"
          />
          <MusicaAudioCard
            image="/personalImages/musica/ImgCover8.jpg"
            audio="ComoCamaronAudio.wav"
            currentAudio={currentAudio}
            onClick={handleAudio}
            className="hidden lg:block scroll-appear"
          />
          <div className="scroll-appear scroll-left lg:w-[30%] w-[40%] aspect-square lg:self-center lg:ml-[8%] lg:mt-auto mt-[30%] left-1/2 lg:translate-x-0 -translate-x-1/2 lg:left-0 bg-[#fdff9a] rounded-3xl z-0 absolute"></div>
          <div className="scroll-appear scroll-right lg:w-[30%] w-[40%] aspect-square lg:self-center right-0 lg:mr-[8%] lg:bottom-auto lg:mb-auto bottom-0 mb-[30%] lg:left-auto left-1/2 lg:translate-x-0 -translate-x-1/2 bg-[#fdff9a] rounded-3xl z-0 absolute"></div>
        </div>

        <h1 className="scroll-appear scroll-left text-left lg:text-3xl text-4xl col-span-full font-semibold text-[#fdff9a]">
          Y puedes ver más en{" "}
          <Link
            to={
              "https://open.spotify.com/user/xgbe1jpbbg4noh4e1l8112tqe?si=U739ei0lTByLHOSkwUiF8g"
            }
            className="cursor-grow font-bold underline italic decoration-[#fdff9a]/30"
            target="_blank"
          >
            mi Spotify.
          </Link>
        </h1>
      </section>
    </>
  );
};

export default SectionMusica;

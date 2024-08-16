import { useState, useEffect } from 'react';

const songs = ['Je Te Laisserai Des Mots', 'Pensando en ti', 'Te guardo', 'Cure for me', 'Coincidir', 'Desencuentro','Sabrás'];

function useAudio() {
  const [audio] = useState(new Audio());
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [volume, setVolume] = useState(0.6);

  const loadSong = (song) => {
    audio.src = `/audio/${song}.mp3`;
    setCurrentSong(song);
  };

  const playPause = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const prev = () => {
    const index = songs.indexOf(currentSong);
    const newSong = songs[(index - 1 + songs.length) % songs.length];
    loadSong(newSong);
    if (isPlaying) audio.play();
  };

  const next = () => {
    const index = songs.indexOf(currentSong);
    const newSong = songs[(index + 1) % songs.length];
    loadSong(newSong);
    if (isPlaying) audio.play();
  };

  const changeVolume = (newVolume) => {
    setVolume(newVolume);
    audio.volume = newVolume;
  };

  useEffect(() => {
    loadSong(currentSong);
    audio.volume = volume;
    return () => {
      audio.pause();
    };
  }, []);

  return { isPlaying, currentSong, playPause, prev, next, volume, changeVolume };
}

export default useAudio;
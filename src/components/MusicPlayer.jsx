import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStepBackward, faPlay, faPause, faStepForward, faHeart } from '@fortawesome/free-solid-svg-icons';
import useAudio from '../hooks/useAudio';

function MusicPlayer() {
  const { isPlaying, currentSong, playPause, prev, next, volume, changeVolume } = useAudio();
  const [isOverflowing, setIsOverflowing] = useState(false);
  const songNameRef = useRef(null);

  useEffect(() => {
    const element = songNameRef.current;
    if (element) {
      setIsOverflowing(element.scrollWidth > element.clientWidth);
    }
  }, [currentSong]);

  const handleVolumeChange = (level) => {
    changeVolume(level / 5);
  };

  return (
    <div id="music-player" className="d-flex align-items-center">
      <div className="controls">
        <button onClick={prev} className="btn btn-music"><FontAwesomeIcon icon={faStepBackward} /></button>
        <button onClick={playPause} className="btn btn-music mx-2">
          <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
        </button>
        <button onClick={next} className="btn btn-music"><FontAwesomeIcon icon={faStepForward} /></button>
      </div>
      <div className={`song-name-container ${isOverflowing ? 'overflow' : ''}`}>
        <span id="song-name" ref={songNameRef}>{currentSong}</span>
      </div>
      <div className="volume-control">
        {[1, 2, 3, 4, 5].map((level) => (
          <FontAwesomeIcon
            key={level}
            icon={faHeart}
            className={`volume-heart ${level <= volume * 5 ? 'active' : ''}`}
            onClick={() => handleVolumeChange(level)}
          />
        ))}
      </div>
    </div>
  );
}

export default MusicPlayer;
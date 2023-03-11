import { FC, useRef, useState } from 'react';
import styles from './AudioRecord.module.scss';
import playSvg from '../../assets/img/recordSvg/play.svg';
import pauseSvg from '../../assets/img/recordSvg/pause.svg';
import downloadSvg from '../../assets/img/recordSvg/download.svg';
import { getDurateTime } from '../../utils/getDurateTime';
import { LoadingAnimation } from '../LoadingAnimation/LoadingAnimation';

interface AudioRecordProps {
  idRecord: string;
  idPartnership: number;
  durate: string | undefined;
}

export const AudioRecord: FC<AudioRecordProps> = ({ idRecord, idPartnership, durate }) => {
  const [urlRecord, setUrlRecord] = useState<any>('');
  const [isLoad, setIsLoad] = useState<boolean>(false);
  const [play, setPlay] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const audioRef = useRef<any>(null);
  const progressRef = useRef<any>(null);
  const progressingRef = useRef<any>(null);
  const moveRef = useRef<any>(null);

  const postData = async (
    url = `https://api.skilla.ru/mango/getRecord?record=${idRecord}&partnership_id=${idPartnership}`
  ) => {
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'audio/mpeg, audio/x-mpeg, audio/x-mpeg-3, audio/mpeg3',
        'Content-Transfer-Encoding': 'binary',
        'Content-Disposition': 'filename="record.mp3"',
        Authorization: `Bearer testtoken`,
      },
    })
      .then((res) => {
        return res.blob();
      })
      .then((blob) => {
        const file = new File([blob], 'record', { type: blob.type });
        const url = URL.createObjectURL(file);
        setUrlRecord(url);
        setIsLoad(true);
        setIsLoading(false);
      });
  };

  const clickPlay = () => {
    if (!isLoad) {
      setIsLoading(true);
      postData();
      setIsLoad(false);
    }

    if (play === false && isLoad) {
      audioRef.current.play();
      setPlay(true);
    } else {
      audioRef.current.pause();
      setPlay(false);
    }
  };

  const clickClose = () => {
    audioRef.current.currentTime = 0;
    audioRef.current.pause();
    setPlay(false);
  };

  const updateProgress = () => {
    const { duration, currentTime } = audioRef.current;
    const progressPercent = (currentTime / duration) * 100;
    progressingRef.current.style.width = `${progressPercent}%`;
  };

  const setProgress = (event: React.MouseEvent<HTMLDivElement>) => {
    const width = event.currentTarget.clientWidth;
    const clickX = event.nativeEvent.offsetX;
    const duration = audioRef.current.duration;
    if (isLoad) audioRef.current.currentTime = (clickX / width) * duration;
  };

  const setMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (isLoad) {
      const { duration } = audioRef.current;
      const width = event.currentTarget.clientWidth;
      const moveX = event.nativeEvent.offsetX;
      const progress = Math.trunc((duration / width) * moveX);

      moveRef.current.style.paddingLeft = `${moveX - 20}px`;
      moveRef.current.textContent = `${getDurateTime(progress)}`;

      console.log(progress);
    }
  };

  return (
    <div className={play ? styles.playback : ''}>
      <audio onTimeUpdate={updateProgress} ref={audioRef} src={urlRecord}></audio>
      <div className={styles.audio}>
        <span className={styles.durate}>{durate}</span>
        <button className={styles.play} onClick={() => clickPlay()}>
          {isLoading ? <LoadingAnimation /> : <img src={!isLoad ? downloadSvg : play ? pauseSvg : playSvg} alt='' />}
        </button>

        <div ref={progressRef} onMouseMove={setMove} onClick={setProgress} className={styles.progress}>
          <div ref={progressingRef} className={styles.progressing} />
          {isLoad && <span ref={moveRef}></span>}
        </div>

        <a href={urlRecord} download className={styles.download}>
          <svg width='13' height='16' viewBox='0 0 13 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M0 16H13V14.1176H0V16ZM13 5.64706H9.28571V0H3.71429V5.64706H0L6.5 12.2353L13 5.64706Z'
              fill='#ADBFDF'
            />
          </svg>
        </a>

        {play && (
          <button className={styles.close} onClick={() => clickClose()}>
            <svg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z'
                fill='#ADBFDF'
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  );
};

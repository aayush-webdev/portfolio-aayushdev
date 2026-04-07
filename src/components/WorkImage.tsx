import { useState, useEffect } from "react";
import { MdArrowOutward } from "react-icons/md";

interface Props {
  image: string;
  alt?: string;
  video?: string;
  link?: string;
}

const WorkImage = (props: Props) => {
  const [isVideo, setIsVideo] = useState(false);
  const [video, setVideo] = useState("");

  const handleMouseEnter = async () => {
    if (props.video && !video) {
      // Use public path for videos (src/assets won't work in production builds)
      const response = await fetch(`/videos/${props.video}`);
      const blob = await response.blob();
      const blobUrl = URL.createObjectURL(blob);
      setVideo(blobUrl);
    }
    if (props.video) {
      setIsVideo(true);
    }
  };

  // Clean up blob URL to prevent memory leak
  useEffect(() => {
    return () => {
      if (video) URL.revokeObjectURL(video);
    };
  }, [video]);

  return (
    <div className="work-image">
      <a
        className="work-image-in"
        href={props.link}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setIsVideo(false)}
        target="_blank"
        data-cursor={"disable"}
      >
        {props.link && (
          <div className="work-link">
            <MdArrowOutward />
          </div>
        )}
        <img
          src={props.image}
          alt={props.alt}
          loading="lazy"
          decoding="async"
          width={800}
          height={450}
        />
        {isVideo && <video src={video} autoPlay muted playsInline loop></video>}
      </a>
    </div>
  );
};

export default WorkImage;

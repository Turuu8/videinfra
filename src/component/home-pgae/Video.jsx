export const Video = () => {
  return (
    <div className="video-position">
      <iframe
        title="video"
        style={{
          border: "none",
        }}
        width="100%"
        height="100%"
        src="https://player.vimeo.com/video/736806402?h=c49d186757&autoplay=1&loop=1&muted=1&background=1"
      ></iframe>
      {/* <img
        src="https://images.unsplash.com/photo-1664574653790-cee0e10a4242?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
        width="100%"
        height="100%"
        alt=""
      /> */}
    </div>
  );
};

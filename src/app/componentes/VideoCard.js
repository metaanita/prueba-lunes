import React from 'react';

const VideoCard = ({ imageSrc, profileSrc, title, channel, views, time }) => {
  return (
    <div className="col-span-12 sm:col-span-6 md:col-span-3">
      <div className="w-full flex flex-col">
        <div className="relative">
          {/* Image Video */}
          <a href="#">
            <img src={imageSrc} className="w-96 h-auto" alt="Video Thumbnail" />
          </a>
          <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">{time}</p>
        </div>
        <div className="flex flex-row mt-2 gap-2">
          {/* Profile Picture */}
          <a href="#">
            <img src={profileSrc} className="rounded-full max-h-10 max-w-10" alt="Profile" />
          </a>
          {/* Description */}
          <div className="flex flex-col">
            <a href="#">
              <p className="text-gray-100 text-sm font-semibold">{title}</p>
            </a>
            <a className="text-gray-400 text-xs mt-2 hover:text-gray-100" href="#">
              {channel}
            </a>
            <p className="text-gray-400 text-xs mt-1">{views}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const YourComponent = () => {
  return (
    <div className="h-screen flex bg-gray-900 items-center justify-center">
      <div className="grid grid-cols-12 gap-2 gap-y-4 max-w-6xl">
        {/* Video 1 */}
        <VideoCard
          imageSrc="https://picsum.photos/seed/59/300/200"
          profileSrc="https://picsum.photos/seed/1/40/40"
          title="Learn CSS Box Model in 8 Minutes"
          channel="Web Dev Simplified"
          views="241K views . 3 years ago"
          time="1:15"
        />
        {/* Video 2 */}
        <VideoCard
          imageSrc="https://picsum.photos/seed/60/300/200"
          profileSrc="https://picsum.photos/seed/4/40/40"
          title="Learn CSS Box Model in 8 Minutes"
          channel="Web Dev Simplified"
          views="241K views . 3 years ago"
          time="1:15"
        />
        {/* Video 3 */}
        <VideoCard
          imageSrc="https://picsum.photos/seed/22/300/200"
          profileSrc="https://picsum.photos/seed/88/40/40"
          title="Learn CSS Box Model in 8 Minutes"
          channel="Web Dev Simplified"
          views="241K views . 3 years ago"
          time="1:15"
        />
        {/* Video 4 */}
        <VideoCard
          imageSrc="https://picsum.photos/seed/90/300/200"
          profileSrc="https://picsum.photos/seed/57/40/40"
          title="Learn CSS Box Model in 8 Minutes"
          channel="Web Dev Simplified"
          views="241K views . 3 years ago"
          time="1:15"
        />
      </div>
    </div>
  );
};

export default YourComponent;

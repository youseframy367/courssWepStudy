import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import AddLink from './addLinK';
import './vides.css';

const YouTubeCourse = ({ nameCourse, mode, linkCourse }) => {
  const API_KEY = "AIzaSyAs55k4isTS6OfLe6U4oc-m5L2oib_kkJw";

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(linkCourse); 
  const [allLinks, setAllLinks] = useState([]); 
  const [channelNames, setChannelNames] = useState({}); 

  const [videos, setVideos] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // دالة حذف الرابط
  const deleteLink = (e, urlToDelete) => {
    e.stopPropagation(); // منع تفعيل التابة عند الضغط على حذف
    const storageKey = `links_${nameCourse.toLowerCase()}`;
    const savedEntries = JSON.parse(localStorage.getItem(storageKey)) || [];
    const updatedEntries = savedEntries.filter(item => item.url !== urlToDelete);
    localStorage.setItem(storageKey, JSON.stringify(updatedEntries));
    
    // لو الرابط الممسوح هو النشط، نرجع للمصدر الأساسي
    if (activeLink === urlToDelete) {
      setActiveLink(linkCourse);
    }
    loadLinks();
  };

  const loadLinks = useCallback(() => {
    const storageKey = `links_${nameCourse.toLowerCase()}`;
    const savedEntries = JSON.parse(localStorage.getItem(storageKey)) || [];

    // جلب الأسماء المخزنة مسبقاً من الـ Entries وحطها في الـ State
    const namesMap = {};
    savedEntries.forEach(entry => {
      namesMap[entry.url] = entry.name;
    });
    setChannelNames(prev => ({ ...prev, ...namesMap }));

    const baseEntry = { url: linkCourse, name: "المصدر الأساسي" };
    setAllLinks([baseEntry, ...savedEntries]);
  }, [nameCourse, linkCourse]);

  useEffect(() => {
    loadLinks();
    setActiveLink(linkCourse);
  }, [nameCourse, linkCourse, loadLinks]);

  const parseYoutubeUrl = (url) => {
    if (!url) return { playlistId: null, videoId: null };
    const playlistMatch = url.match(/[&?]list=([^&]+)/);
    const videoMatch = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/))([^?&]+)/);
    return {
      playlistId: playlistMatch ? playlistMatch[1] : null,
      videoId: videoMatch ? videoMatch[1] : null
    };
  };

  useEffect(() => {
    if (!activeLink) return;

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      const { playlistId, videoId } = parseYoutubeUrl(activeLink);

      try {
        let fetchedVideos = [];
        let channelTitle = "";

        if (playlistId) {
          const res = await axios.get(`https://www.googleapis.com/youtube/v3/playlistItems`, {
            params: { part: 'snippet,contentDetails', maxResults: 50, playlistId, key: API_KEY }
          });
          fetchedVideos = res.data.items.map(item => ({
            id: item.contentDetails.videoId,
            title: item.snippet.title,
            thumbnail: item.snippet.thumbnails.medium?.url,
            channel: item.snippet.videoOwnerChannelTitle
          }));
          channelTitle = fetchedVideos[0]?.channel || "قناة يوتيوب";
        } 
        else if (videoId) {
          const res = await axios.get(`https://www.googleapis.com/youtube/v3/videos`, {
            params: { part: 'snippet', id: videoId, key: API_KEY }
          });
          if (res.data.items.length > 0) {
            channelTitle = res.data.items[0].snippet.channelTitle;
            fetchedVideos = [{
              id: videoId,
              title: res.data.items[0].snippet.title,
              thumbnail: res.data.items[0].snippet.thumbnails.medium?.url,
              channel: channelTitle
            }];
          }
        }

        if (fetchedVideos.length > 0) {
          setVideos(fetchedVideos);
          setCurrentVideo(fetchedVideos[0]);
          // تحديث الاسم لو مكنش موجود أو اتغير
          setChannelNames(prev => ({ ...prev, [activeLink]: channelTitle }));
        }
      } catch (err) {
        setError("فشل في تحميل محتوى الرابط.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [activeLink, API_KEY]); 

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>

      {isModalOpen && (
        <AddLink
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          courseName={nameCourse}
          onSuccess={loadLinks}
        />
      )}

      {/* شريط التبويبات */}
      <div style={{
        width: "100%", height: '35px', border: "1px solid #757575",
        display: 'flex', direction: 'rtl', alignItems: 'center',
        background: mode === "dark" ? "#222" : "#f5f5f5", borderRadius: "8px",
        overflowX: 'auto', scrollbarWidth: 'none'
      }}>
        <div style={{
          width: '35px', height: '100%', display: 'flex', justifyContent: 'center',
          alignItems: 'center', background: '#757575', color: '#fff', cursor: "pointer", flexShrink: 0,
          borderRadius: '0px 7px 7px 0px'
        }} onClick={() => setIsModalOpen(true)}> + </div>

        {allLinks.map((entry, index) => (
          <div
            key={index}
            onClick={() => setActiveLink(entry.url)}
            style={{
              padding: '0 10px', height: '100%', display: 'flex', alignItems: 'center',
              cursor: 'pointer', fontSize: '11px', whiteSpace: 'nowrap', gap: '8px',
              background: activeLink === entry.url ? (mode === "dark" ? "#444" : "#E0E0E0") : 'transparent',
              color: activeLink === entry.url ? (mode === "dark" ? "#fff" : "#000") : "#888",
              borderLeft: '1px solid #757575',
              fontWeight: activeLink === entry.url ? 'bold' : 'normal',
            }}>
            
            <span>{channelNames[entry.url] || entry.name}</span>

            {/* زر الحذف يظهر فقط للروابط المضافة وليس الأساسي */}
            {index !== 0 && (
              <span 
                onClick={(e) => deleteLink(e, entry.url)}
                style={{
                  color: '#ff4d4d', fontSize: '14px', fontWeight: 'bold', 
                  padding: '0 4px', borderRadius: '50%'
                }}
                title="حذف الرابط"
              > × </span>
            )}
          </div>
        ))}
      </div>

      {/* باقي الكود (Video Section & Sidebar) يظل كما هو دون تغيير */}
      <div className={`course-container ${mode}`} dir="rtl">
        {loading ? (
          <div style={{ textAlign: 'center', padding: '50px' }}>جاري جلب الفيديوهات...</div>
        ) : error ? (
          <div style={{ color: 'orange', textAlign: 'center', padding: '50px' }}>{error}</div>
        ) : (
          <div className="main-layout">
            <div className="video-section">
              <div className="video-player-wrapper">
                {currentVideo && (
                  <iframe 
                    key={currentVideo.id} 
                    src={`https://www.youtube.com/embed/${currentVideo.id}?autoplay=1`} 
                    title="Player" frameBorder="0" allowFullScreen width="100%" height="100%"
                  ></iframe>
                )}
              </div>
              <div className="video-info">
                <h1>{currentVideo?.title}</h1>
                <p>{currentVideo?.channel}</p>
              </div>
            </div>

            <div className="playlist-sidebar">
              <div className="playlist-header">
                <h3>{nameCourse} Course</h3>
                <p>{videos.length} فيديو</p>
              </div>
              <div className="playlist-items">
                {videos.map((video, index) => (
                  <div key={video.id + index} className={`video-item ${currentVideo?.id === video.id ? 'active' : ''}`} onClick={() => setCurrentVideo(video)}>
                    <div className="item-thumbnail"><img src={video.thumbnail} alt={video.title} /></div>
                    <div className="item-details"><h4>{video.title}</h4><p>الفيديو {index + 1}</p></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default YouTubeCourse;
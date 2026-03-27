"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";

interface Video {
  id: number;
  image: string;
  video_files: Array<{
    link: string;
    quality: string;
  }>;
  tags?: string;
}

export default function VideoCards() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Fetch different types of videos from Pixabay API
    const fetchVideos = async () => {
      try {
        const apiKey = process.env.NEXT_PUBLIC_PIXABAY_API_KEY;

        if (!apiKey) {
          console.warn("⚠️ No Pixabay API key found!");
          console.warn(
            "Get your FREE API key at: https://pixabay.com/api/docs/",
          );
          console.warn(
            "Then add to .env.local: NEXT_PUBLIC_PIXABAY_API_KEY=your_key",
          );
          setError(true);
          setLoading(false);
          return;
        }

        console.log("Fetching different video types from Pixabay...");

        // Search terms for different video types
        const videoQueries = [
          "fashion model", // Reel/UGC content
          "product showcase", // Product demos
          "people talking", // Testimonials
          "vlog daily", // Blog/Vlog content
          "review unboxing", // Review videos
          "social media", // Social/Reels content
        ];

        // Fetch videos with different search terms
        const videoPromises = videoQueries.map((query) =>
          fetch(
            `https://pixabay.com/api/videos/?key=${apiKey}&q=${encodeURIComponent(query)}&per_page=3&video_type=film&safesearch=true`,
            { method: "GET" },
          ).catch((err) => {
            console.warn(`Failed to fetch "${query}":`, err);
            return null;
          }),
        );

        const responses = await Promise.all(videoPromises);
        const validResponses = responses.filter((r) => r !== null);

        if (validResponses.length === 0) {
          throw new Error("All video requests failed");
        }

        const dataArray = await Promise.all(
          validResponses.map((r) => r!.json()),
        );

        // Collect all videos
        const allVideos: Video[] = [];
        dataArray.forEach((data, index) => {
          if (data.hits && data.hits.length > 0) {
            const hit = data.hits[0];
            allVideos.push({
              id: hit.id + index, // Ensure unique IDs
              image:
                hit.videos?.medium?.thumbnail ||
                hit.videos?.small?.thumbnail ||
                hit.picture_id,
              video_files: hit.videos?.medium
                ? [
                    {
                      link: hit.videos.medium.url,
                      quality: "medium",
                    },
                  ]
                : [],
              tags: hit.tags || videoQueries[index],
            });
          }
        });

        console.log("✅ Received videos:", allVideos.length, "types");

        if (allVideos.length > 0) {
          setVideos(allVideos);
        } else {
          console.warn("No videos returned from API, showing placeholders");
          setError(true);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching videos:", error);
        setError(true);
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  const scrollCards = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const badges = ["REEL", "PRODUCT", "TESTIMONIAL", "BLOG", "REVIEW", "SOCIAL"];
  const captions = [
    { text: "Check out this look...", position: "top-right" },
    { text: "Product in action", position: "mid-center" },
    { text: "Best purchase ever!", position: "bot-center" },
    { text: "Daily vlog update", position: "mid-left" },
    { text: "Full honest review", position: "mid-center" },
    { text: "Behind the scenes", position: "top-right" },
  ];

  return (
    <section className="cards-section">
      <div className="cards-track-wrapper">
        <div className="cards-track" ref={trackRef}>
          {loading || error || videos.length === 0
            ? // Show placeholders if loading, error, or no videos
              Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="video-card">
                  <div className={`card-bg card-bg-${(i % 6) + 1}`}></div>
                  <span className="card-badge">{badges[i]}</span>
                  <span className={`card-caption ${captions[i].position}`}>
                    {captions[i].text}
                  </span>
                  <div className="card-mute">
                    <svg viewBox="0 0 14 14" fill="none">
                      <path d="M3 5H1V9H3L6 11V3L3 5Z" fill="currentColor" />
                    </svg>
                  </div>
                </div>
              ))
            : videos.map((video, i) => (
                <div key={video.id} className="video-card">
                  <Image
                    src={video.image}
                    alt="Video thumbnail"
                    fill
                    className="card-img"
                    style={{ objectFit: "cover" }}
                    unoptimized
                  />
                  <span className="card-badge">{badges[i]}</span>
                  <span className={`card-caption ${captions[i].position}`}>
                    {captions[i].text}
                  </span>
                  <div className="card-mute">
                    <svg viewBox="0 0 14 14" fill="none">
                      <path d="M3 5H1V9H3L6 11V3L3 5Z" fill="currentColor" />
                    </svg>
                  </div>
                </div>
              ))}
        </div>

        <button className="scroll-arrow" onClick={scrollCards}>
          <svg viewBox="0 0 16 16" fill="none">
            <path
              d="M6 3L11 8L6 13"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}

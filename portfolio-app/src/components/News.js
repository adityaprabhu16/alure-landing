import { NewsData } from "./NewsData";

import "./NewsStyles.css";

import { useEffect, useRef, useState } from "react";

export default function News() {
    const imgRefs = useRef([]);
    const [imagesLoaded, setImagesLoaded] = useState(false);

    useEffect(() => {
        // Ensure all images are loaded before setting up observer
        const loadPromises = imgRefs.current
            .filter(img => img)
            .map(img => new Promise(resolve => {
                if (img.complete) {
                    resolve();
                } else {
                    img.onload = () => resolve();
                    img.onerror = () => resolve(); // Still resolve to not block
                }
            }));

        Promise.all(loadPromises).then(() => {
            setImagesLoaded(true);
        });
    }, []);

    useEffect(() => {
        if (!imagesLoaded) return;

        const imgRefsCurrent = imgRefs.current;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { 
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px' // Slightly adjust trigger point
            }
        );

        imgRefsCurrent.forEach((img) => {
            if (img) observer.observe(img);
        });

        return () => {
            imgRefsCurrent.forEach((img) => {
                if (img) observer.unobserve(img);
            });
        };
    }, [imagesLoaded]);

    return (
        <div className="news-container">
            <h1 style={{color: "white"}}>As seen on...</h1>
            <div className="news-container-array">
                {
                    NewsData.map((val, ind) => {
                        return (
                            <div key={ind} className="news-card">
                                <img 
                                ref={(el) => imgRefs.current[ind] = el}
                                src={val.src} 
                                alt={val.alt}
                                />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
import { useEffect, useState } from "react";

export const StarBackground = () => {
    const [stars, setStars] = useState([]);
    const [meteors, setMeteors] = useState([]);
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        generateStars();
        generateMeteors();

        const handleResize = () => generateStars();
        window.addEventListener("resize", handleResize);

        // Detect dark mode on load and on theme toggle
        const observer = new MutationObserver(() => {
            setIsDarkMode(document.documentElement.classList.contains("dark"));
        });

        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

        setIsDarkMode(document.documentElement.classList.contains("dark")); // initial load

        return () => {
            window.removeEventListener("resize", handleResize);
            observer.disconnect();
        };
    }, []);

    const generateStars = () => {
        const numberOfStars = Math.floor((window.innerWidth * window.innerHeight) / 10000);
        const newStars = Array.from({ length: numberOfStars }, (_, i) => ({
            id: i,
            size: Math.random() * 3 + 1,
            x: Math.random() * 100,
            y: Math.random() * 100,
            opacity: Math.random() * 0.5 + 0.5,
            animationDuration: Math.random() * 4 + 2,
        }));
        setStars(newStars);
    };

    const generateMeteors = () => {
        const numberOfMeteors = 4;
        const newMeteors = Array.from({ length: numberOfMeteors }, (_, i) => ({
            id: i,
            size: Math.random() * 2 + 1,
            x: Math.random() * 100,
            y: Math.random() * 20,
            delay: Math.random() * 15,
            animationDuration: Math.random() * 3 + 3,
        }));
        setMeteors(newMeteors);
    };

    const backgroundImageUrl = isDarkMode ? "/stars.jpg" : "/white.jpg";

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            <div
                className="absolute inset-0 -z-10 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url('${backgroundImageUrl}')` }}
            >
                {stars.map((star) => (
                    <div
                        key={star.id}
                        className="star animate-pulse-subtle"
                        style={{
                            width: `${star.size}px`,
                            height: `${star.size}px`,
                            left: `${star.x}%`,
                            top: `${star.y}%`,
                            opacity: star.opacity,
                            animationDuration: `${star.animationDuration}s`,
                        }}
                    />
                ))}

                {isDarkMode &&
                    meteors.map((meteor) => (
                        <div
                            key={meteor.id}
                            className="meteor animate-meteor"
                            style={{
                                width: `${meteor.size * 50}px`,
                                height: `${meteor.size}px`,
                                left: `${meteor.x}%`,
                                top: `${meteor.y}%`,
                                // animationDelay: `${meteor.delay}s`,
                                animationDuration: `${meteor.animationDuration}s`,
                            }}
                        />
                    ))}
            </div>
        </div>
    );
};

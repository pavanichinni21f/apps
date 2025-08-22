import { useState, useEffect } from "react";

const textArray = [
    "Expert Consulting",
    "Digital Transformation",
    "Business Growth",
    "Strategic Solutions",
];

export function useTypewriter() {
    const [typedText, setTypedText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const currentText = textArray[currentIndex];
        let charIndex = 0;

        const typeInterval = setInterval(() => {
            if (charIndex <= currentText.length) {
                setTypedText(currentText.slice(0, charIndex));
                charIndex++;
            } else {
                clearInterval(typeInterval);
                setTimeout(() => {
                    setCurrentIndex((prev) => (prev + 1) % textArray.length);
                }, 2000);
            }
        }, 100);

        return () => clearInterval(typeInterval);
    }, [currentIndex]);

    return typedText;
}

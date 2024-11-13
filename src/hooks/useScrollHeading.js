import { useEffect, useRef, useState } from 'react';

const useScrollHeading = () => {
    const [srollDriction, setSrollDriction] = useState(null);
    const [scrollPosition, setscrollPosition] = useState(0);
    const previousScrollPosition = useRef(0);


    const SrollTracking = () => {
        const currentScrollPosition = window.pageYOffset;
        // xu ly nghiep vu scroll
        if (currentScrollPosition > previousScrollPosition.current) {
            setSrollDriction('down');
        } else {
            setSrollDriction('up');
        }
        previousScrollPosition.current =
            currentScrollPosition <= 0 ? 0 : currentScrollPosition;
        setscrollPosition(currentScrollPosition);
    };

    useEffect(() => {
        window.addEventListener('scroll', SrollTracking);
        return () => {
            window.removeEventListener('scroll', SrollTracking);
        };
    }, []);

    return {
        srollDriction,
        scrollPosition
    };

}
export default useScrollHeading;
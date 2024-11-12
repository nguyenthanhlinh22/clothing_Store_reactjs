import React, { useEffect, useRef, useState } from 'react';

const useTranslateXImage = () => {
    const [srollDriction, setSrollDriction] = useState(null);
    //vị trí fix cứng của ảnh
    const [translateXPosition, setTranslateXPosition] = useState(80);
    //lưu trữ vị trí cuối cùng của scroll
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

    useEffect(() => {
        handleTranslateX();
        // console.log("thực thi hàm handleTranslateX");
    }, [scrollPosition]);

    // console.log(srollDriction);

    const handleTranslateX = () => {
        //nếu scroll xuống và vị trí scroll lớn hơn 1500 thì thực hiện
        //không có 1500 thì chưa xuống tới vị trí cần thiết thì nó đã thực hiện rồi
        if (srollDriction === 'down' && scrollPosition >= 1500) {
            setTranslateXPosition(
                //nếu vị trí translateXPosition = 0 thì không thay đổi
                translateXPosition <= 0 ? 0 : translateXPosition - 1
            );
        } else if (srollDriction === 'up') {
            //nếu scroll lên thì thực hiện nếu vị trí translateXPosition < 80
            setTranslateXPosition(
                translateXPosition >= 80 ? 80 : translateXPosition + 1
            );
        }
    };

    return {
        translateXPosition
    };
};
export default useTranslateXImage;

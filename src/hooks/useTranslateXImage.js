import useScrollHeading from './useScrollHeading';
import { useState, useEffect } from 'react';

const useTranslateXImage = () => {
    const { srollDriction, scrollPosition } = useScrollHeading();

      
    const [translateXPosition, setTranslateXPosition] = useState(80);
   

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
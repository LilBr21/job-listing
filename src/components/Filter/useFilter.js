import { useState} from 'react';

const useFilter = () => {
    const [isShown, setIsShown] = useState(false);

    const showListHandler = () => {
        setIsShown(!isShown);
    }

    return {
        isShown,
        showListHandler
    }
}

export default useFilter;
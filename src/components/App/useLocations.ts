import { useState, useEffect } from 'react';

const useLocation = () => {
    const [url, setUrl] = useState(window.location.href);

    useEffect(() => {
        const handleLocationChange = () => {
            setUrl(window.location.href);
        };

        window.addEventListener('popstate', handleLocationChange);
        window.addEventListener('locationchange', handleLocationChange);

        // Listen to custom events for pushState and replaceState
        return () => {
            window.removeEventListener('popstate', handleLocationChange);
            window.removeEventListener('locationchange', handleLocationChange);
        };
    }, []);

    return url;
};

export default useLocation;

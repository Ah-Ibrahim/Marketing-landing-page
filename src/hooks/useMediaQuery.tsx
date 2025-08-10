import { useEffect, useState } from 'react';

function useMediaQuery(query: string): boolean {
    const [matches, setMatches] = useState<boolean>(
        () => window.matchMedia(query).matches,
    );

    useEffect(() => {
        const media = window.matchMedia(query);

        setMatches(media.matches);
        const updateMatches = () => setMatches(media.matches);
        media.addEventListener('change', updateMatches);

        return () => media.removeEventListener('change', updateMatches);
    }, [query]);

    return matches;
}

export default useMediaQuery;

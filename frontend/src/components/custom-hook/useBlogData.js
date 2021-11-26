import { useEffect, useState } from "react";

// A custom hook for fetching data from the backend.
function useBlogData(api) {
    // Store the fetched data.
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);

    // Fetch data from the backend.
    useEffect(() => {
        fetch(api)
            .then(response => response.json())
            .then(result => {
                setData(result);
                setIsPending(false);
            })
            .catch(error => console.log(error));
    }, [api]);

    return { data, isPending };
}

export default useBlogData;
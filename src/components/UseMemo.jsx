import React, { useMemo, useEffect, useState } from 'react'
import axios from 'axios'

const longestWord = posts => {
    if(posts){
        console.log('Computing...');
        let longest = '';
        const titles = posts.map(post => post.title);

        titles.forEach(title => {
            if(title.length > longest.length){
                longest = title;
            }
        })

        return longest;
    }
}

const UseMemo = () => {

    useEffect(() => {
        getPosts();
    }, [])

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    const getPosts = async () => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setPosts(res.data);
        setLoading(false);
    }

    const longestTitle = useMemo(() => longestWord(posts), [posts])


    if(loading){
        return <p className="flow-text center">Loading...</p>
    }

    return (
        <div>
            <h6>
                {longestTitle}
            </h6>
        </div>
    )
}

export default UseMemo

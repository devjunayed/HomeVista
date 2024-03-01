import React from 'react';
import useSWR from 'swr';

const Comments = ({ propertyId }) => {
    const url = '/api/comments';
    const { data, error, mutate } = useSWR(url, GetComments);

    // Filter comments based on propertyId
    const filteredComments = data ? data.filter(comment => comment.propertyId === propertyId) : [];

    return (
        <div className='border w-full my-3 h-36 p-5 overflow-auto'>
            {filteredComments.length > 0 ? (
                filteredComments.map(comment => (
                    <div key={comment._id}>
                        {comment.comment}
                    </div>
                ))
            ) : (
                <p>No comments found for this property.</p>
            )}
        </div>
    );
};

export default Comments;

const GetComments = async (url) => {
    try {
        const res = await fetch(url, { cache: "no-cache" });
        const data = await res.json();
        return data.data;
    } catch (error) {
        console.error('Error fetching comments', error);
        throw error; // Propagate the error
    }
};

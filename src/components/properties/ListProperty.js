import React from 'react';

const ListProperty = ({ data }) => {

    return (
        <div>
            Length of data: {data.length}
            title of data: {data[0].title}
        </div>
    );
};

export default ListProperty;

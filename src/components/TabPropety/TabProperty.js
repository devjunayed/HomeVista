import Link from 'next/link';
import React from 'react';

const TabProperty = () => {
    const divisions = [
        { "id": 1, "name": "Dhaka" },
        { "id": 2, "name": "Chittagong" },
        { "id": 3, "name": "Rajshahi" },
        { "id": 4, "name": "Khulna" },
        { "id": 5, "name": "Barisal" },
        { "id": 6, "name": "Sylhet" },
        { "id": 7, "name": "Rangpur" },
        { "id": 8, "name": "Mymensingh" }
    ];

    return (
        <div>
            <ul>
                {divisions.map((division) => (
                    <li key={division.id}>
                        <Link href={`/divisions/${division.id}`}>
                            {division.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TabProperty;

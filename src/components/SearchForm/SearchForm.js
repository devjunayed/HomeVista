"use client"

import { Router } from "next/router";
import { useState } from "react";

const SearchForm = ({ onSearch }) => {
    const [keyword, setKeyword] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        if (keyword) {
            Router.push(`/?keyword=${keyword}`)
        }
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="join">
                <div>
                    <div>
                        <input
                            className="input input-bordered join-item"
                            placeholder="Search"
                            type="text"
                            value={keyword}
                            onChange={(e) => setKeyword(e.target.value)}
                        />
                    </div>
                </div>
                <div className="indicator">
                    <button type="submit" className="btn join-item">
                        Search
                    </button>
                </div>
            </div>
        </form>
    );
};

export default SearchForm;

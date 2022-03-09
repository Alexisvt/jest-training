import './FollowersList.css';

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function FollowersList() {

    const [followers, setFollowers] = useState([]);

    useEffect(() => {
        const controller = new AbortController();

        const fetchFollowers = async () => {
            try {
                const { data } = await axios.get("https://randomuser.me/api/?results=5", {
                    signal: controller.signal
                })

                setFollowers(data.results);
            } catch (error) {
                if (axios.isCancel(error)) {
                    console.log('Request canceled! message:', error.message);
                }
            }
        }

        fetchFollowers();

        return () => {
            controller.abort();
        }
    }, []);


    return (
        <div className="followerslist-container">
            <div>
                {!followers.length && <p>No followers found.</p>}
                {followers.map((follower, index) => (
                    <div data-testid={`follower-item-${index}`} className="follower-item" key={follower.login.uuid}>
                        <img alt={`${follower.name.first} profile`} src={follower.picture.large} />
                        <div className="followers-details">
                            <div className="follower-item-name">
                                <h4>{follower.name.first}</h4> <h4>{follower.name.last}</h4>
                            </div>
                            <p>{follower.login.username}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="todo-footer">
                <Link to="/">Go Back</Link>
            </div>
        </div>
    )
}

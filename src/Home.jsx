// App.js
import './style.css';
import React from 'react';

function App() {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission, e.g., send the post to the blockchain network or a server.
    };

    return (
        <div>
            <header>
                <div className="logo"></div>
            </header>
            <aside className="sidebar">
                <ul>
                    <li><a><i className="fas fa-user"></i> Profile</a></li>
                    <li><a><i className="fas fa-sign-out-alt"></i> Sign Out</a></li>
                </ul>
            </aside>
            <main>
                <section className="create-post">
                    <h2>Create Post</h2>
                    <form id="post-form" onSubmit={handleSubmit}>
                        <textarea id="post-content" placeholder="Write your post here..."></textarea>
                        <input type="file" id="media" accept="image/*, video/*" />
                        <button className="but" type="submit">Post</button>
                    </form>
                </section>
                {/* Other sections displaying posts can be added here */}
            </main>
        </div>
    );
}

export default App;

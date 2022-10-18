import React from 'react';
import Home from './Home';
import About from './About';
import NotFound from './NotFound';
import AlbumDeatils from './AlbumDeatils';
import MusicPlayer from './MusicPlayer';
import { Routes, Route, Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className='container bg-dark text-white'>
            <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                <a href="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                    <h1 className='text-white'>Spotify</h1>
                </a>

                <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                    <li><Link to="/" className="nav-link px-2 link-white">Home</Link></li>
                    <li><Link to="/albums" className="nav-link px-2 text-white">Albums</Link></li>
                    <li><Link to="/about" className="nav-link px-2 text-white">About</Link></li>
                </ul>

                <div className="d-flex align-items-center text-end">
                    <button type="button" className="btn btn-outline-primary me-2">Login</button>
                    <button type="button" className="btn btn-primary">Sign-up</button>
                    <div class="dropdown m-2">
                        <a href="#" class="d-block link-light text-decoration-none dropdown-toggle" id="dropdownedUser1" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" class="rounded-circle" />
                        </a>
                        <ul class="dropdown-menu text-small" aria-labelledby='dropdownedUser1'>
                            <li><a class="dropdown-item" href="#">Settings</a></li>
                            <li><a class="dropdown-item" href="#">Profile</a></li>
                            <li><hr class="dropdown-divider" /></li>
                            <li><a class="dropdown-item" href="#">Sign out</a></li>
                        </ul>
                    </div>
                </div>
            </header>
            <div class="d-flex">
                <div class="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" style={{ width: 280 }}>
                    <ul class="nav nav-pills flex-column mb-auto">
                        <li class="nav-item">
                            <Link to="/" class="nav-link active" aria-current="page">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/albums" class="nav-link text-white">
                                Albums
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" class="nav-link text-white">
                                About
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className='bg-white text-dark container rounded m-2 vh-100'>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="albums" element={<MusicPlayer />} />
                        <Route path="albums/:id" element={<AlbumDeatils />} />
                        <Route path="about" element={<About />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
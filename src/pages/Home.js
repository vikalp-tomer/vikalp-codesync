import React, { useState } from 'react';
import { v4 as uuidV4 } from 'uuid';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const [roomId, setRoomId] = useState('');
    const [username, setUsername] = useState('');
    const createNewRoom = (e) => {
        e.preventDefault();
        const id = uuidV4();
        setRoomId(id);
        toast.success('Created a new room');
    };

    const joinRoom = () => {
        if (!roomId || !username) {
            toast.error('ROOM ID & username is required');
            return;
        }

        // Redirect
        navigate(`/editor/${roomId}`, {
            state: {
                username,
            },
        });
    };

    const handleInputEnter = (e) => {
        if (e.code === 'Enter') {
            joinRoom();
        }
    };
    return (
        <div className="homePageWrapper flex justify-center items-center min-h-screen">
            <div className="formWrapper bg-slate-900 p-5 rounded-xl w-[450px] max-w-[90%] text-lg font-bold flex flex-col">
                <img
                    className="homePageLogo"
                    src="/main.png"
                    alt=""
                />
                <h4 className="mainLabel">Enter your Room ID here</h4>
                <div className="inputGroup flex flex-col">
                    <input
                        type="text"
                        className="input-base"
                        placeholder="ROOM ID"
                        onChange={(e) => setRoomId(e.target.value)}
                        value={roomId}
                        onKeyUp={handleInputEnter}
                    />
                    <input
                        type="text"
                        className="input-base"
                        placeholder="USERNAME"
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                        onKeyUp={handleInputEnter}
                    />
                    <button className="btn joinBtn bg-slate-700 py-2 w-24 ml-auto my-2 rounded text-xl hover:bg-transparent hover:text-purple-400 transition-all duration-300" onClick={joinRoom}>
                        Join
                    </button>
                    <span className="createInfo text-base my-2">
                        Got no invitation code?{" "}
                        <a href="#" className="underline-link" onClick={createNewRoom}>
                            Create new
                        </a>{" "}
                        inivitaion code.
                    </span>
                </div>
            </div>
            <footer className="fixed bottom-0 mb-4 font-bold text-xl">
                Developed By{" "}
                <a className="underline-link" href="https://github.com/vikalp-tomer">
                    Vikalp Tomer
                </a>
            </footer>
        </div>
    );
};

export default Home;

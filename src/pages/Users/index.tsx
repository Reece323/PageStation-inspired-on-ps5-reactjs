import React, { useCallback, useEffect } from 'react';
import { FaPowerOff } from 'react-icons/fa';
import { IoLogoGameControllerB, IoMdApps } from 'react-icons/io';

import Particles from 'react-tsparticles';
import { ISourceOptions } from 'tsparticles';
import { useHistory } from 'react-router-dom';
import particlesOptions from '../../particles.json';

import './styles.css';

import brazil from '../../images/brazil.png';
import yellowmore from '../../images/yellowmore.png';
import more from '../../images/more.png';

const users = [
  {
    name: 'Add User',
    avatar: more,
    plus: false,
    active: false,
  },
  {
    name: 'User 1',
    avatar: brazil,
    plus: false,
    active: true,
  },
];

const Users: React.FC = () => {
  const history = useHistory();

  const handleNavigateToHome = useCallback(() => {
    history.push('/home');
  }, [history]);

  const handleUserKeyPress = useCallback(
    event => {
      const { keyCode } = event;

      if (keyCode === 32 || keyCode === 13) {
        history.push('/home');
      }
      if (keyCode === 8 || keyCode === 27) {
        history.goBack();
      }
    },
    [history],
  );

  useEffect(() => {
    window.addEventListener('keydown', handleUserKeyPress);

    return () => {
      window.removeEventListener('keydown', handleUserKeyPress);
    };
  }, [handleUserKeyPress]);

  return (
    <div className="container-users">
      <Particles options={particlesOptions as ISourceOptions} />
      <span className="time">4:33PM</span>

      <div className="animationContainerUsers">
        <div className="content-users">
          <h1>Welcome and all that here</h1>
          <h2>Login Below</h2>

          <div className="user-selection">
            <div className="users-list">
              {users.map(user => (
                <div
                  key={user.name}
                  className={`user ${
                    user.active
                      ? 'active animationContainerUserBig'
                      : 'inactive animationContainerUserSmall'
                  }`}
                >
                  <button
                    type="button"
                    className="avatar-button"
                    onClick={handleNavigateToHome}
                  >
                    <div className="white-circle">
                      <img
                        src={user.avatar}
                        alt="User Avatar"
                        className="avatar"
                      />
                    </div>
                  </button>
                  <div className="username">
                    <span>{user.name}</span>
                    {user.plus && (
                      <img
                        src={yellowmore}
                        alt="Yellowmore icon"
                        className="plus"
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="power">
          <button type="button" onClick={handleNavigateToHome}>
            <FaPowerOff />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Users;

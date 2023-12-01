import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import gravatar from '../utils/gravatar'
import '../assets/styles/components/Header.scss';
import userIcon from '../assets/static/user-icon.png';
import { logoutRequest } from '../Actions'

const Header = props => {

  const { user, isLogin, isRegister } = props;

  const handleLogout = () => {
    props.logoutRequest({})
  }

  const headerClass = classNames('header', {
    isLogin,
    isRegister,
  });

  return (
    <header className={headerClass}>

      <Link to="/">
        <img
          className="header__img"
          style={{height: "5em", width: "5em"}}
          src={"https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Media_Player_Windows_11_logo.svg/1024px-Media_Player_Windows_11_logo.svg.png"}
          alt="player Video" />
      </Link>

      <div className="header__menu">
        <div className="header__menu--profile">
          <img
            src={Object.keys(user).length > 0 ?
              gravatar(user.email)
              :
              userIcon} alt={user.email} />
          <p>Perfil</p>
        </div>
        <ul>
          {Object.keys(user).length > 0 ?
            <>
              <li><Link to="/">{user.name}</Link></li>
              <li><Link to="#logout" onClick={handleLogout}>Cerrar sesion</Link></li>
            </>
            :
            <li><Link to="/login">Iniciar sesion</Link></li>
          }
        </ul>
      </div>
    </header>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = {
  logoutRequest
}

Header.propTypes = {
  user: PropTypes.object,
  logoutRequest: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
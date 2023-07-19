import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import '../assets/styles/components/Search.scss';
import { searchResult } from '../Actions';

const Search = ({ isHome, searchResult }) => {

  const inputStyle = classNames('input', {
    isHome
  });

  const change = (event) => {
      searchResult(event.target.value);
  }

  return (
    <section className="main">
      <h2 className="main__title">¿Qué quieres ver hoy?</h2>
      <input
        type="text"
        className={inputStyle}
        placeholder="Buscar..."
        onChange={(e) => change(e)}
      />
    </section>
  );
};

const mapDispatchToProps = {
  searchResult,
}

export default connect(null, mapDispatchToProps)(Search);
import React from 'react';
import '../stylesheets/components/_character-detail.scss';
import { Link } from 'react-router-dom';

const CharacterDetail = (props) => {
  return (
    <section className="detail">
      <Link className="detail__return" to="/">
        <i class="detail__return--icon fas fa-angle-left"></i> Volver
      </Link>
      <div className="detail__card">
        <div className="detail__card--info">
          <h3>{props.character.name}</h3>
          <h4>
            Status:
            <span className="detail__card--span">
              {' '}
              {props.character.status}
            </span>
          </h4>
          <h4>
            Species:
            <span className="detail__card--span">
              {props.character.species}
            </span>
          </h4>
          <h4>
            Origin:
            <span className="detail__card--span">
              {' '}
              {props.character.origin}
            </span>
          </h4>
          <h4>
            Episodes:
            <span className="detail__card--span">
              {props.character.episodes}
            </span>
          </h4>
        </div>
        <img
          className="detail__card--photo"
          src={props.character.photo}
          alt={props.character.name + ' photo'}
          title={props.character.name + ' photo'}
        />
      </div>
    </section>
  );
};

export default CharacterDetail;

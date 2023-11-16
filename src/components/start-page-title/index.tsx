import React from 'react';
import style from '../page-title/page-title.module.css';
import startPageStyle from './start-page-title.module.css';

export default function TitleStartPage() {
  return (
    <h1 className={`${style.title} ${startPageStyle.startPageTitle}`}>
      <span className={style.gradient}>Hej </span>
      <span role="img" aria-label="vinkande hand">
        👋
      </span>
      <span className={style.gradient}> det är vi som är Variant!</span>
    </h1>
  );
}

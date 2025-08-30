'use client'

import c from "./page.module.css";

export default function Home() {

  return (
    <div className={c.page}>
      <div className={c.mainInfo}>
        <h1>Welcome!</h1>
        <h2>This is my pet project where you can browse events happening in your city.</h2>
      </div>
    </div>
  );
}

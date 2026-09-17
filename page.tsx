"use client";

import { useState } from "react";
import { Play, Pause, Instagram, Youtube, Mail, ArrowDown, Music2, Mic2 } from "lucide-react";

const songs = [
  {title:"PAISA", tag:"Latest Single", year:"2026", length:"3:12"},
  {title:"NAUKRI", tag:"Story Rap", year:"2026", length:"3:48"},
  {title:"BUDHAPA", tag:"Real Talk", year:"2026", length:"3:35"},
];

export default function Home(){
  const [playing,setPlaying]=useState<number|null>(null);
  const [menu,setMenu]=useState(false);

  return <main>
    <nav className="nav">
      <a className="logo" href="#home">G<span>.</span></a>
      <div className={menu ? "links open":"links"}>
        <a href="#music" onClick={()=>setMenu(false)}>Music</a>
        <a href="#videos" onClick={()=>setMenu(false)}>Videos</a>
        <a href="#lyrics" onClick={()=>setMenu(false)}>Lyrics</a>
        <a href="#about" onClick={()=>setMenu(false)}>About</a>
        <a href="#contact" onClick={()=>setMenu(false)}>Booking</a>
      </div>
      <button className="menu" onClick={()=>setMenu(!menu)}>☰</button>
    </nav>

    <section id="home" className="hero">
      <div className="heroGlow"/>
      <div className="heroText">
        <p className="eyebrow"><span/> INDEPENDENT ARTIST</p>
        <h1>TURN<br/><i>REAL</i><br/>INTO RHYME.</h1>
        <p className="sub">Hindi rap. Desi energy. Real stories.<br/>No filter — just the voice.</p>
        <div className="actions">
          <a href="#music" className="primary"><Play size={17} fill="currentColor"/> LISTEN NOW</a>
          <a href="#about" className="secondary">MY STORY <ArrowDown size={16}/></a>
        </div>
      </div>
      <div className="heroVisual">
        <div className="portrait">
  <img src="/IMG_20251125_175800_375.webp" alt="Gourab" />
  <div className="stamp">
    DESI<br/>
    RAP<br/>
    <b>2026</b>
  </div>
</div>
      </div>
      <div className="scroll">SCROLL TO EXPLORE ↓</div>
    </section>

    <section id="music" className="section">
      <div className="sectionHead"><div><p className="eyebrow"><span/> DISCOGRAPHY</p><h2>THE SOUND<br/><i>OF NOW.</i></h2></div><Music2 size={44}/></div>
      <div className="songs">
        {songs.map((s,i)=><div className="song" key={s.title}>
          <button className="play" onClick={()=>setPlaying(playing===i?null:i)}>{playing===i?<Pause size={19} fill="currentColor"/>:<Play size={19} fill="currentColor"/>}</button>
          <div className="songNo">0{i+1}</div><div className="songName"><small>{s.tag}</small><strong>{s.title}</strong></div>
          <div className="year">{s.year}</div><div className="duration">{s.length}</div>
          <div className="wave">{Array.from({length:18},(_,j)=><b key={j} style={{height:`${15+((j*17+i*11)%45)}px`}}/>)}</div>
        </div>)}
      </div>
      <p className="note">Player UI is ready — replace the song data with your own MP3/streaming links.</p>
    </section>

    <section id="videos" className="videoSection">
      <div className="videoCard"><div className="videoPlay"><Play size={28} fill="currentColor"/></div><div className="videoOverlay"><p>OFFICIAL VIDEO</p><h3>PAISA</h3><span>WATCH FILM →</span></div></div>
    </section>

    <section id="lyrics" className="section lyrics">
      <p className="eyebrow"><span/> WORDS MATTER</p>
      <h2>“KUCHH BAATEIN<br/><i>BEAT PE BOLTA HOON.</i>”</h2>
      <div className="quote">“Jeb mein kam tha, par hausla bhaari,<br/>Sapne the bade, raat thi saari.<br/>Gir ke bhi bola — rukna nahi,<br/>Apni kahaani kisi aur se likhwaani nahi.”</div>
      <a className="textLink" href="#music">EXPLORE LYRICS →</a>
    </section>

    <section id="about" className="about">
      <div><p className="eyebrow"><span/> THE ARTIST</p><h2>FROM LIFE.<br/><i>FOR LIFE.</i></h2></div>
      <div className="aboutCopy"><p>Every track starts with something real — pressure, family, dreams, money, love, loss and the everyday chaos of growing up.</p><p>Hindi words. Modern production. Desi soul. The goal is simple: make something you can feel before you understand it.</p></div>
    </section>

    <section id="contact" className="contact">
      <div><p className="eyebrow"><span/> BOOKINGS / COLLABS</p><h2>LET'S MAKE<br/><i>SOME NOISE.</i></h2></div>
      <a className="mail" href="mailto:booking@example.com"><Mail size={20}/> booking@example.com</a>
      <div className="socials"><a href="#"><Instagram/></a><a href="#"><Youtube/></a></div>
    </section>

    <footer><span>GOURAB © 2026</span><span>BUILT FOR THE BEAT.</span></footer>
  </main>
}

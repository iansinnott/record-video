import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/Home.module.css";

const buttonStyle = {
  padding: 20,
  fontSize: 24,
  background: "lime",
  borderRadius: 3,
  outline: "none",
  border: "none",
  cursor: "pointer",
  width: "100%",
};

export default function Home() {
  const inputRef = useRef<HTMLInputElement>();
  const [vid, setVid] = useState<File | null>(null);
  const [src, setSrc] = useState<string | null>(null);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!vid) {
      alert("Please record a video!");
      return;
    }

    alert("Thank you! That is a great video.");
  };

  // Clean up object URL if present
  useEffect(() => {
    return () => {
      if (src) {
        URL.revokeObjectURL(src);
      }
    };
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>Record Video</title>
        <meta name="description" content="Record Video" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {src ? (
          <>
            <h1>You're a star 🤩</h1>
            <video src={src} controls></video>
          </>
        ) : (
          <>
            <h1>Record Video</h1>
            <p>For fun and profit.</p>
            <form onSubmit={handleSubmit}>
              <button
                style={{
                  ...buttonStyle,
                }}
                onClick={(e) => {
                  e.preventDefault();
                  if (inputRef.current) {
                    inputRef.current.click();
                  }
                }}>
                Record Video
              </button>
              <input
                style={vid ? {} : { position: "absolute", left: -9999 }} // Hide off screen when theres no vid
                ref={inputRef}
                onChange={(e) => {
                  const vid = e.target.files[0];
                  setVid(vid);
                  setSrc(URL.createObjectURL(vid));
                }}
                type="file"
                accept="video/*"
                capture="user"
              />
              <button
                style={{
                  ...buttonStyle,
                  background: "black",
                  color: "white",
                  display: "block",
                  marginTop: 10,
                }}
                type="submit">
                Submit
              </button>
            </form>
          </>
        )}
      </main>
    </div>
  );
}

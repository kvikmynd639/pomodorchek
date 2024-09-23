"use client"
import { useState, useEffect } from "react";
import PomodoroTabs from "@/components/Tabs";

const quotes = [
  { name: "Edgar Allan Poe", quote: "All that we see or seem is but a dream within a dream." },
  { name: "Edgar Allan Poe", quote: "Once upon a midnight dreary, while I pondered, weak and weary." },
  { name: "Edgar Allan Poe", quote: "There is no exquisite beauty without some strangeness in the proportion." },
  { name: "Edgar Allan Poe", quote: "I became insane, with long intervals of horrible sanity." },
  { name: "Edgar Allan Poe", quote: "The boundaries which divide life from death are at best shadowy and vague." },
  
  { name: "J.R.R. Tolkien", quote: "Not all those who wander are lost." },
  { name: "J.R.R. Tolkien", quote: "In my opinion, the best book is the one you’re reading now." },
  { name: "J.R.R. Tolkien", quote: "The world is indeed full of peril, and in it there are many dark places." },
  { name: "J.R.R. Tolkien", quote: "A single dream is more powerful than a thousand realities." },
  { name: "J.R.R. Tolkien", quote: "Even the smallest person can change the course of the future." },

  { name: "Rosalind Franklin", quote: "Science and everyday life cannot and should not be separated." },
  { name: "Rosalind Franklin", quote: "The great tragedy of science—the slaying of a beautiful hypothesis by an ugly fact." },
  { name: "Rosalind Franklin", quote: "I have made a lasting contribution to the study of DNA." },
  { name: "Rosalind Franklin", quote: "You cannot be a scientist without being a good observer." },
  { name: "Rosalind Franklin", quote: "In a sense, I have been involved in the battle between science and superstition." },

  { name: "Ada Lovelace", quote: "That brain of mine is something more than merely mortal; as time will show." },
  { name: "Ada Lovelace", quote: "I am in the happy position of being able to work with computers." },
  { name: "Ada Lovelace", quote: "The Analytical Engine has no pretensions whatever to originate anything. It can do whatever we know how to order it to perform." },
  { name: "Ada Lovelace", quote: "The laws of nature are but the mathematical thoughts of God." },
  { name: "Ada Lovelace", quote: "I think that we should take the mathematical side of things." },

  { name: "Ruđer Bošković", quote: "The world is made up of bodies that are always in motion." },
  { name: "Ruđer Bošković", quote: "Nature has made all things for a good purpose." },
  { name: "Ruđer Bošković", quote: "It is a truth universally acknowledged that an individual must be born for some particular purpose." },
  { name: "Ruđer Bošković", quote: "I consider it essential to go beyond the limits of what is known." },
  { name: "Ruđer Bošković", quote: "The universe is governed by laws that we can discern." },
  
  { name: "Edgar Allan Poe", quote: "To elevate the soul, poetry is necessary." },
  { name: "J.R.R. Tolkien", quote: "The road goes ever on and on, down from the door where it began." },
  { name: "Rosalind Franklin", quote: "I want to be able to use science to improve the world." },
  { name: "Ada Lovelace", quote: "I have a firm belief in the importance of understanding." },
  { name: "Ruđer Bošković", quote: "Our knowledge of nature is limited, but our curiosity is infinite." },
];


const getRandomQuote = () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
};

export default function Home() {
  const [quote, setQuote] = useState<{ name: string; quote: string }>({ name: "", quote: "" });
  const [fade, setFade] = useState<boolean>(false);

  useEffect(() => {
    const initialQuote = getRandomQuote();
    setQuote(initialQuote);

    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setQuote(getRandomQuote());
        setFade(false);
      }, 500); 
    }, 6000); 

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="bg-pink-500 w-full h-screen mx-auto flex flex-col items-center font-glamgirl">
      <PomodoroTabs />
      {quote.quote && (
        <div className={`mt-2 pb-2 rounded-4xl w-full overflow-hidden transition-opacity duration-500 ${fade ? 'opacity-0' : 'opacity-100'}`}>
          <p className="text-2xl italic text-white whitespace-nowrap text-center">
            "{quote.quote}" — <span className="font-bold">{quote.name}</span>
          </p>
        </div>
      )}
    </div>
  );
}

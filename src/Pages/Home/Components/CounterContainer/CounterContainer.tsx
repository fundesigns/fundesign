import { useEffect, useState } from "react";
import styles from "./CounterContainer.module.css";

type Props = {
  limit: number;
  text1: string;
  symbol: string;
  speed: number;
  start?: number;
};

export const CounterContainer = () => {
  return (
    <div className={styles.CounterContainer}>
      <CounterComponent
        limit={30}
        text1="projects surfed."
        symbol="+"
        speed={100}
        start={0}
      />{" "}
      <CounterComponent
        limit={100}
        text1="customer satisfaction."
        symbol="%"
        speed={100}
        start={50}
      />{" "}
      <CounterComponent
        limit={5}
        text1="international clients."
        symbol="+"
        speed={100}
        start={0}
      />
    </div>
  );
};

const CounterComponent = ({
  limit,
  text1,
  speed,
  symbol,
  start = 0,
}: Props) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((currentCount) => {
        if (currentCount < limit) {
          return currentCount + 1;
        } else {
          clearInterval(interval);
          return currentCount;
        }
      });
    }, speed);

    return () => clearInterval(interval);
  }, [limit, speed, start]);

   const formatCount = (count: number) => {
     return count < 10 ? `0${count}` : count;
   };

  return (
    <div className={styles.CounterComponent}>
      <h1>
        {formatCount(count)}
        {symbol}
      </h1>

      <p>{text1}</p>
    </div>
  );
};

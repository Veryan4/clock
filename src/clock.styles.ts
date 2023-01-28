import { css } from "lit";

export const styles = css`
  .clock-dial {
    z-index: 1;
    position: relative;
    top: -100%;
    left: 50%;
    transform: translateX(-50%);
    width: calc(98% - 6px);
    height: calc(98% - 6px);
  }
  .clock-wrap {
    aspect-ratio: 1 / 1;
    height: fit-content;
  }
  .clock {
    width: 100%;
    height: 100%;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    border: 6px solid var(--rim-color);
    border-radius: 50%;
    transition: all ease 0.2s;
    z-index: 2;
  }
  .dot {
    background-color: var(--dot-color);
    border: 6px solid var(--rim-color);
    border-radius: 50%;
    width: calc(7% - 6px);
    aspect-ratio: 1 / 1;
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 4;
  }
  .hour,
  .min,
  .sec {
    position: absolute;
    transform-origin: 50% 100%;
    transition: all ease 0.2s;
  }
  .hour {
    background-color: var(--clock-color);
    height: 25%;
    width: 5%;
    border-radius: 18px;
    top: 25%;
    left: 47.5%;
    z-index: 2;
  }
  .min {
    background-color: var(--clock-color);
    height: 35%;
    width: 3%;
    border-radius: 12px;
    top:15%;
    left:48.5%;
    z-index: 2;
  }
  .sec {
    background-color: var(--seconds-color);
    height: 45%;
    width: 1%;
    border-radius: 6px;
    top: 5%;
    left:49.5%;
    z-index: 3;
  }
`;

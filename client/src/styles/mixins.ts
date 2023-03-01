import { css } from "styled-components";

export const mixins = {
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  flexColumn: css`
    display: flex;
    flex-direction: column;
  `,

  flexAlignCenter: css`
    display: flex;
    align-items: center;
  `,

  flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
};

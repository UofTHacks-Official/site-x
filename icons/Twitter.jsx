import { styled, css } from "~stitches";

const Wrapper = styled("div", css({
  height: "30px",
  width: "30px",
}));

const Icon = styled("svg", css({
  width: "100%",
  height: "100%",
  cursor: "pointer",
  "& path": {
    transition: "0.3s ease-out all",
  },
  "&:hover path": {
    transition: "0.3s ease-out all",
    fill: "#22aaff",
  }
}));

export const Twitter = () => {
  return(
    <Wrapper>
      <Icon width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M29.0625 6.41603C28.0075 6.87444 26.8912 7.17645 25.749 7.31251C26.9494 6.60961 27.8521 5.49292 28.2879 4.17188C27.153 4.83551 25.9134 5.30115 24.6223 5.54884C24.0786 4.97903 23.4247 4.52574 22.7004 4.2165C21.976 3.90727 21.1964 3.74855 20.4088 3.75001C17.2201 3.75001 14.6396 6.29298 14.6396 9.42774C14.6374 9.86378 14.6874 10.2985 14.7885 10.7227C12.502 10.6155 10.263 10.0322 8.21483 9.01012C6.16666 7.98805 4.35439 6.54971 2.89395 4.78712C2.38159 5.65086 2.11062 6.63636 2.10938 7.64063C2.10938 9.60938 3.13652 11.3496 4.6875 12.3692C3.76859 12.3473 2.86851 12.1041 2.06367 11.6602V11.7305C2.06367 14.4844 4.05586 16.7754 6.69258 17.2969C6.19675 17.4291 5.6858 17.496 5.17266 17.4961C4.80854 17.4967 4.44526 17.4614 4.08809 17.3906C4.82109 19.6465 6.95449 21.2871 9.48164 21.334C7.42815 22.9166 4.907 23.7719 2.31445 23.7656C1.85427 23.765 1.39451 23.7376 0.9375 23.6836C3.57491 25.3677 6.64069 26.2585 9.76992 26.25C20.3965 26.25 26.202 17.5957 26.202 10.0899C26.202 9.84376 26.1955 9.59767 26.1838 9.35743C27.3106 8.5559 28.2854 7.55984 29.0625 6.41603Z" fill="#F9F9F9"/>
      </Icon>
    </Wrapper>
  )
}
import styled from "@emotion/styled";

export const Container = styled.div`
  background-color: #d3f3f3;
  color: #212121;
  line-height: 1.5;
  min-height: 50vh;

  .dotted {
    padding: 2.25em 1.6875em;
    background-image: -webkit-repeating-radial-gradient(
      center center,
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0.2) 1px,
      transparent 1px,
      transparent 100%
    );
    background-image: -moz-repeating-radial-gradient(
      center center,
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0.2) 1px,
      transparent 1px,
      transparent 100%
    );
    background-image: -ms-repeating-radial-gradient(
      center center,
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0.2) 1px,
      transparent 1px,
      transparent 100%
    );
    background-image: repeating-radial-gradient(
      center center,
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0.2) 1px,
      transparent 1px,
      transparent 100%
    );
    -webkit-background-size: 30px 30px;
    -moz-background-size: 30px 30px;
    background-size: 30px 30px;

    width: 100%;
    height: 50px;
  }
`;








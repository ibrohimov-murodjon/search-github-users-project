import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import styled from "styled-components";
import Stack from "@mui/material/Stack";

export default function SkeletonLoader() {
  return (
    <Stack className="section">
      <Wrapper className="section-center">
        <Skeleton
          variant="rectangular"
          width={"100%"}
          height={80}
          animation="wave"
        />
        <Skeleton
          variant="rectangular"
          width={"100%"}
          height={80}
          animation="wave"
        />
        <Skeleton
          variant="rectangular"
          width={"100%"}
          height={80}
          animation="wave"
        />
        <Skeleton
          variant="rectangular"
          width={"100%"}
          height={80}
          animation="wave"
        />
      </Wrapper>{" "}
      <br />
      <Wrapper2 className="section-center">
        <Skeleton
          variant="rectangular"
          className="skeleton_card"
          animation="wave"
        />
        <Skeleton
          variant="rectangular"
          className="skeleton_card"
          animation="wave"
        />
      </Wrapper2>
      <Wrapper3 className="section-center">
        <Skeleton
          variant="rectangular"
          className="skeleton_card"
          animation="wave"
        />
        <Skeleton
          variant="rectangular"
          className="skeleton_card"
          animation="wave"
        />
        <Skeleton
          variant="rectangular"
          className="skeleton_card"
          animation="wave"
        />
        <Skeleton
          variant="rectangular"
          className="skeleton_card"
          animation="wave"
        />
      </Wrapper3>
    </Stack>
  );
}

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem 2rem;
  @media (min-width: 640px) {
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  }
`;

const Wrapper2 = styled.div`
  padding-top: 2rem;
  display: grid;
  gap: 3rem 2rem;
  position: relative;
  .skeleton_card {
    width: "100%";
    height: 250px;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const Wrapper3 = styled.div`
  padding-top: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 3rem 2rem;
  .skeleton_card {
    width: "100%";
    height: 250px;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;

import { FC, PropsWithChildren } from "react";
import { Swiper } from "swiper/react";
import { Mousewheel, EffectCreative } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import styles from "./styles.module.sass";

const Carousel: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Swiper
      //@ts-ignore
      effect={"creative"}
      className={styles.carousel}
      mousewheel={true}
      modules={[Mousewheel, EffectCreative]}
      direction="vertical"
      speed={600}
      creativeEffect={{
        prev: {
          shadow: false,
          translate: [0, "0%", -1],
        },
        next: {
          translate: [0, "100%", 0],
        },
      }}
    >
      {children}
    </Swiper>
  );
};

export default Carousel;

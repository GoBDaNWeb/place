import { motion } from "framer-motion";

import useChangeColor from "shared/hooks/useChangeColor";

import styles from "./styles.module.sass";

const svgVariants = {
  visible: {
    transition: {
      delayChildren: 0,
      staggerChildren: 0.5,
    },
  },
};

const pathVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

const Logo = () => {
  const { textColor } = useChangeColor();

  return (
    <motion.svg
      width="664"
      height="180"
      viewBox="0 0 664 180"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      variants={svgVariants}
      initial="hidden"
      animate="visible"
      className={styles.svg}
    >
      <motion.path
        d="M66.5785 66.5977C65.2041 70.0285 63.0643 73.0283 60.1515 75.5998C57.236 78.17 53.5096 80.2258 48.9698 81.77C44.4273 83.3116 38.9855 84.0863 32.6469 84.0863H30.8469V28.2835H31.6187C38.1291 28.2835 43.7414 29.0166 48.4557 30.4683C53.1673 31.9304 57.0225 33.942 60.0239 36.5135C63.0188 39.085 65.2041 42.0405 66.5785 45.3854C67.9478 48.7276 68.635 52.2873 68.635 56.0554C68.635 59.6554 67.9478 63.1734 66.5785 66.5977ZM82.9014 17.2256C77.6717 12.0839 71.078 7.92793 63.1086 4.75623C55.1392 1.58454 45.8408 0 35.2162 0H0V180H30.8469V113.657C42.1587 113.657 52.0545 111.984 60.5367 108.642C69.0203 105.3 76.0903 100.843 81.7443 95.2692C87.3995 89.7018 91.6413 83.4014 94.4683 76.3693C97.2953 69.3436 98.7101 62.2269 98.7101 55.0281C98.7101 48.173 97.3812 41.4429 94.726 34.8391C92.0669 28.2432 88.1271 22.3711 82.9014 17.2256Z"
        fill={textColor}
        variants={pathVariants}
        className={styles.path}
      />
      <motion.path
        d="M136.042 150.172V0H105.139V180H213.042L205.316 150.172H136.042Z"
        fill={textColor}
        variants={pathVariants}
        className={styles.path}
      />
      <motion.path
        d="M276.027 120.085L294.956 72.5135L313.882 120.085H276.027ZM291.347 0L243.394 120.085H221.787V148.886H231.894L219.471 180H252.188L264.567 148.886H325.341L337.721 180H370.439L298.561 0H291.347Z"
        fill={textColor}
        variants={pathVariants}
        className={styles.path}
      />
      <motion.path
        d="M505.004 7.92862C493.494 2.64117 480.939 0 467.331 0C454.733 0 442.971 2.35183 432.053 7.04781C421.132 11.7489 411.576 18.1683 403.386 26.3072C395.194 34.4512 388.724 43.972 383.984 54.8795C379.24 65.7922 376.868 77.5386 376.868 90.1262C376.868 102.714 379.24 114.464 383.984 125.372C388.724 136.284 395.194 145.764 403.386 153.819C411.576 161.874 421.132 168.254 432.053 172.953C442.971 177.651 454.733 180 467.331 180V150.294C458.928 150.294 451.078 148.701 443.77 145.511C436.463 142.326 430.121 138.043 424.747 132.67C419.369 127.301 415.084 120.965 411.895 113.663C408.702 106.365 407.108 98.5188 407.108 90.1262C407.108 81.9057 408.702 74.1007 411.895 66.7126C415.084 59.3308 419.369 52.9535 424.747 47.5781C430.121 42.2103 436.463 37.9299 443.77 34.7406C451.078 31.5539 458.928 29.9567 467.331 29.9567C476.402 29.9567 484.844 31.8062 492.655 35.4939C500.467 39.188 507.146 44.2256 512.689 50.6004L534.611 29.7055C526.38 20.4767 516.509 13.2161 505.004 7.92862Z"
        fill={textColor}
        variants={pathVariants}
        className={styles.path}
      />
      <motion.path
        d="M655.758 150.172H571.835V101.055H620.342V71.4828H571.835V28.7978H623.163V0H541.039V180H663.459L655.758 150.172Z"
        fill={textColor}
        variants={pathVariants}
        className={styles.path}
      />
    </motion.svg>
  );
};

export default Logo;

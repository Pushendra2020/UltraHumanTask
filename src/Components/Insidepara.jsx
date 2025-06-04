import { motion, useTransform } from 'framer-motion';

const ParaStep = ({ scrollYProgress, range, children, isActive }) => {
  const opacity = useTransform(
    scrollYProgress,
    [range[0], range[0] + 0.01, range[1] - 0.01, range[1]],
    [0, 1, 1, 0]
  );

  const y = useTransform(scrollYProgress, [range[0], range[1]], [50, -50]);

  return (
    <motion.div
      style={{
        opacity: isActive ? opacity : 0,
        y: isActive ? y : 0,
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
      }}
      className="space-y-2"
    >
      {children}
    </motion.div>
  );
};

export const Insidepara = ({ scrollYProgress, isActive }) => (
  <ParaStep scrollYProgress={scrollYProgress} range={[0.0, 0.20]} isActive={isActive}>
    <p className="text-sm lg:text-gray-500 font-bold">PPG sensor</p>
    <p className="text-gray-800 font-semibold">
      The Ultrahuman Ring AIR empowers you to stay on top of your body's vitals such as heart rate, heart rate variability, blood oxygen saturation and more.
    </p>
  </ParaStep>
);

export const Insidepara2 = ({ scrollYProgress, isActive }) => (
  <ParaStep scrollYProgress={scrollYProgress} range={[0.25, 0.5]} isActive={isActive}>
    <p className="text-sm lg:text-gray-500 font-bold">6-axis motion sensor</p>
    <p className="text-gray-800 font-semibold">
      The Ultrahuman Ring AIR empowers you to stay on top of your body's vitals such as heart rate, 
      heart rate variability, blood oxygen saturation and more.
    </p>
  </ParaStep>
);

export const Insidepara3 = ({ scrollYProgress, isActive }) => (
  <ParaStep scrollYProgress={scrollYProgress} range={[0.5, 0.75]} isActive={isActive}>
    <p className="text-sm lg:text-gray-500 font-bold">Hypoallergenic Smooth Inner Shell</p>
    <p className="text-gray-800 font-semibold">
     The Ultrahuman Ring AIR empowers you to stay on top of your body's vitals such as heart rate,
      heart rate variability, blood oxygen saturation and more.
    </p>
  </ParaStep>
);

export const Insidepara4 = ({ scrollYProgress, isActive }) => (
  <ParaStep scrollYProgress={scrollYProgress} range={[0.75, 1.0]} isActive={isActive}>
    <p className="text-sm lg:text-gray-500 font-bold">Strong from the outside</p>
    <p className="text-gray-800 font-semibold">
      The Ultrahuman Ring AIR empowers you to stay on top of your body's vitals such as heart rate, 
      heart rate variability, blood oxygen saturation and more.
    </p>
  </ParaStep>
);
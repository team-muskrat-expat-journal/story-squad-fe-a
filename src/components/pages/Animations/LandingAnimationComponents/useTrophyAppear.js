import { useSpring } from 'react-spring';
import useMedia from '../AnimationMediaHelper/useMedia';

const useTrophyAppear = ref => {
  const phoneScreen = useMedia('(max-width:600px)');
  const tabletScreen = useMedia('(min-width:601px)');
  const computerScreen = useMedia('(min-width:992px)');

  const spring = useSpring({
    config: { mass: 10, tension: 480, friction: 100 },
    from: {
      opacity: 0,
      transform: 'translate3d(0%, 1200%, 0px) scale(1)',
      position: 'absolute',
    },
    to: [
      {
        opacity: 1,
        transform: phoneScreen
          ? 'translate3d(0%, 1200%, 0px) scale(2)'
          : tabletScreen
          ? 'translate3d(0%, 1200%, 0px) scale(3)'
          : 'translate3d(0%, 1200%, 0px) scale(4)',
      },
      {
        opacity: 1,
        transform: phoneScreen
          ? 'translate3d(0%, 500%, 0px) scale(1)'
          : tabletScreen
          ? 'translate3d(0%, 600%, 0px) scale(2)'
          : 'translate3d(0%, 600%, 0px) scale(2.5)',
      },
    ],
    ref: ref,
  });
  return spring;
};

export default useTrophyAppear;

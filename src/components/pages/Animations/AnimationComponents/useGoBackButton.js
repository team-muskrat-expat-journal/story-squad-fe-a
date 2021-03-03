import { useSpring } from 'react-spring';
import useMedia from '../AnimationMediaHelper/useMedia';

const useGoBackButton = ref => {
  const phoneScreen = useMedia('(max-width:600px)');
  const tabletScreen = useMedia('(max-width:991px)');

  const spring = useSpring({
    from: {
      opacity: 1,
      transform: phoneScreen
        ? 'translate3d(-200%, 0%, 0px) scale(1)'
        : tabletScreen
        ? 'translate3d(-260%, 2%, 0px) scale(1)'
        : 'translate3d(-500%, 0%, 0px) scale(1)',
      position: 'absolute',
    },
    to: {
      opacity: 1,
    },
    ref: ref,
  });
  return spring;
};

export default useGoBackButton;

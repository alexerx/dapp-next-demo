import { Box } from '@chakra-ui/react';
import { throttle } from 'lodash';
import { useRouter } from 'next/router';
import { useEffect, useMemo, useState } from 'react';
import { AppNavbar } from './AppNavbar';
import { HomeNavBar } from './HomeNavbar';
import { useSafeColorModeValue } from '../../../../core/hooks/useSafeColorModeValue';

export const Navbar: React.FC = () => {
  const bgColor = useSafeColorModeValue('white', 'gray.800');

  const [scrollTop, setScrollTop] = useState(0);
  const boxShadow = useMemo(() => {
    if (scrollTop > 10) {
      return 'md';
    } else {
      return undefined;
    }
  }, [scrollTop]);

  const { pathname } = useRouter();
  const navbar = useMemo(() => {
    if (pathname === '/') {
      return <HomeNavBar />;
    } else {
      return <AppNavbar />;
    }
  }, [pathname]);

  useEffect(() => {
    window.addEventListener(
      'scroll',
      throttle(() => {
        setScrollTop(document.documentElement.scrollTop ?? 0);
      }, 25)
    );
  }, []);

  return (
    <Box
      position={'sticky'}
      top={0}
      zIndex={1}
      bg={bgColor}
      boxShadow={boxShadow}
    >
      {navbar}
    </Box>
  );
};

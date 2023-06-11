import { Box } from '@chakra-ui/react';
import React from 'react';
import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Navbar from '@/components/Navbar';
import Layout from '@/components/Layout';
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};
export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};
export default function events<NextPageWithLayout>() {
  return (
    <Box
      margin={'0'}
      display={'flex'}
      alignItems={'center'}
      flexDirection={'row'}
      justifyContent={'center'}
    >
      <Layout />
      {/* <Box></Box> */}
    </Box>
  );
}
// events.getLayout = function PageLayout(page: ReactElement) {
//   return (
//     <Box>
//       <Navbar />
//       <Box>{page}</Box>
//       <Layout />
//     </Box>
//   );
// };

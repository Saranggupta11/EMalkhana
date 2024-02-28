// pages/view.js

import { useRouter } from 'next/router';
import ViewPage from '../components/ViewPage';

const View = () => {
  const router = useRouter();
  const { mrEntry } = router.query;

  return <ViewPage mrEntry={mrEntry} />;
};

export default View;

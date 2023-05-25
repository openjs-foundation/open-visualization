import { SliceSimulator } from '@slicemachine/adapter-next/simulator';
import { SliceZone } from '@prismicio/react';

import type { FC } from 'react';
import { components } from '@/slices';

const SliceSimulatorPage: FC = () => (
  <SliceSimulator
    sliceZone={(props) => <SliceZone {...props} components={components} />}
  />
);

export default SliceSimulatorPage;

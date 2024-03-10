import type { FC } from 'react';
import type { AnalysisData } from './data.d';

type JCInfoProps = {
  dashboardAndanalysis: AnalysisData;
  loading: boolean;
};

const JCInfo: FC<JCInfoProps> = () => {

  return (
    <div>王嘉诚的信息！</div>
  );
};
export default JCInfo;

import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaData121220231 } from './Exercise-example-12-12-2023-1/router-data';
import { blockRouterMetaData as CSSCascadesBlockRouterMetaData } from './SelectorsAndCascade/router-data';
import { blockRouterMetaData as blockRouterMetaDataTextFundaments } from './TextFundaments/router-data';
import { blockRouterMetaData as blockRouterMetaDataStandardTags } from './StandardTags/router-data';

export const blockRouterMetaData = [
  blockRouterMetaData121220231,
  blockRouterMetaDataTextFundaments,
  blockRouterMetaDataStandardTags,
  CSSCascadesBlockRouterMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);

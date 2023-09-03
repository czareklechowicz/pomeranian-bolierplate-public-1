import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaDataJsVariables1 } from './Exercise-js-variables-1/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsVariables2 } from './Exercise-js-variables-2/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunction1 } from './Exercise-js-functions/router-data';
import { blockRouterMetaData as blockRouterMetaDataBooleans } from './Booleans/router-data';
import { blockRouterMetaData as blockRouterMetaDataIfSwitch } from './IfSwitch/router-data';
import { blockRouterMetaData as blockRouterMetaDataNumbers } from './Numbers/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsNumbersTraining } from './JsNumbersTraining/router-data';

export const blockRouterMetaData = [
  blockRouterMetaDataJsVariables1,
  blockRouterMetaDataJsVariables2,
  blockRouterMetaDataJsFunction1,
  blockRouterMetaDataBooleans,
  blockRouterMetaDataIfSwitch,
  blockRouterMetaDataNumbers,
  blockRouterMetaDataJsNumbersTraining,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);

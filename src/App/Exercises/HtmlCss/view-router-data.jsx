import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaData121220231 } from './Exercise-example-12-12-2023-1/router-data';
import { blockRouterMetaData as CSSCascadesBlockRouterMetaData } from './SelectorsAndCascade/router-data';
import { blockRouterMetaData as blockRouterMetaDataTextFundaments } from './TextFundaments/router-data';
import { blockRouterMetaData as blockRouterMetaDataStandardTags } from './StandardTags/router-data';
import { blockRouterMetaData as blockRouterMetaDataGoogleFonts } from './GoogleFonts/router-data';
import { blockRouterMetaData as blockRouterMetaDataCssAnimations } from './CssAnimations/router-data';
import { blockRouterMetaData as blockRouterMetaDataCssColors } from './CssColors/router-data';
import { blockRouterMetaData as blockRouterMetaDataImageFiles } from './ImageFiles/router-data';

export const blockRouterMetaData = [
  blockRouterMetaData121220231,
  CSSCascadesBlockRouterMetaData,
  blockRouterMetaDataTextFundaments,
  blockRouterMetaDataStandardTags,
  blockRouterMetaDataGoogleFonts,
  blockRouterMetaDataCssAnimations,
  blockRouterMetaDataCssColors,
  blockRouterMetaDataImageFiles,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);

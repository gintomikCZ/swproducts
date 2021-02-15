import { families } from './products/families.js'

import { ansysProducts, ansysItems } from './products/ansys.js'
import { appContentProducts, appContentItems } from './products/appContent.js'

import { appIMonitoringProducts, appIMonitoringItems } from './products/appIMonitoring.js'
import { assetCentreProducts, assetCentreItems } from './products/assetCentre.js'
import { autoSuiteProducts, autoSuiteItems } from './products/autoSuite.js'
import { batchProducts, batchItems } from './products/batch.js'
import { ccwProducts, ccwItems } from './products/ccw.js'
import { cpgSuiteProducts, cpgSuiteItems } from './products/cpgSuite.js'
import { customHistorianProducts, customHistorianItems } from './products/customHistorian.js'
import { designSuiteToolkitProducts, designSuiteToolkitItems } from './products/designSuiteToolkit.js'
import { emulateProducts, emulateItems } from './products/emulate.js'
import { historianProducts, historianItems } from './products/historian.js'
import { linxGatewayProducts, linxGatewayItems } from './products/linxGateway.js'
import { vuforiaProducts, vuforiaItems } from './products/vuforia.js'
import { analyticsFDProducts, analyticsFDItems } from './products/analyticsFD.js'
import { analyticsProducts, analyticsItems } from './products/analytics.js'
import { ftMESProducts, ftMESItems } from './products/ftMES.js'
import { ftMOMProducts, ftMOMItems } from './products/ftMOM.js'
import { ftViewProducts, ftViewItems } from './products/ftView.js'
import { innovationToolkitProducts, innovationToolkitItems } from './products/innovationToolkit.js'
import { metricsProducts, metricsItems } from './products/metrics.js'
import { networkManagerProducts, networkManagerItems } from './products/networkManager.js'
import { pharmaSuiteProducts, pharmaSuiteItems } from './products/pharmaSuite.js'

import { plantPAxProducts, plantPAxItems } from './products/plantPAx.js'

import { productionCentreProducts, productionCentreItems } from './products/productionCentre.js'

import { ptcProducts, ptcItems } from './products/ptc.js'
import { teamONEProducts, teamONEItems } from './products/teamONE.js'
import { studioProducts, studioItems } from './products/studio.js'

import { thingWorxProducts, thingWorxItems } from './products/thingWorx.js'
import { thinManagerProducts, thinManagerItems } from './products/thinManager.js'
import { transactionManagerProducts, transactionManagerItems } from './products/transactionManager.js'
import { vantagePointProducts, vantagePointItems } from './products/vantagePoint.js'

export default {
  getters: {
    getFamily: state => id => state.families.find(family => family.id === id)
  },
  state: {
    families,
    items: [
      ...ansysItems,
      ...appContentItems,
      ...appIMonitoringItems,
      ...assetCentreItems,
      ...autoSuiteItems,

      ...batchItems,
      ...ccwItems,
      ...cpgSuiteItems,
      ...customHistorianItems,
      ...designSuiteToolkitItems,
      ...emulateItems,
      ...historianItems,
      ...linxGatewayItems,
      ...vuforiaItems,
      ...analyticsFDItems,
      ...analyticsItems,
      ...ftMESItems,
      ...ftMOMItems,
      ...innovationToolkitItems,
      ...metricsItems,
      ...ftViewItems,
      ...networkManagerItems,
      ...pharmaSuiteItems,
      ...plantPAxItems,

      ...productionCentreItems,

      ...ptcItems,
      ...teamONEItems,
      ...studioItems,
      ...thingWorxItems,
      ...thinManagerItems,
      ...vantagePointItems,
      ...transactionManagerItems
    ],
    products: [
      ...ansysProducts,
      ...appContentProducts,
      ...appIMonitoringProducts,
      ...assetCentreProducts,
      ...autoSuiteProducts,

      ...batchProducts,
      ...ccwProducts,
      ...cpgSuiteProducts,
      ...customHistorianProducts,
      ...designSuiteToolkitProducts,
      ...emulateProducts,
      ...historianProducts,
      ...linxGatewayProducts,
      ...vuforiaProducts,
      ...analyticsFDProducts,
      ...analyticsProducts,
      ...ftMESProducts,
      ...ftMOMProducts,
      ...innovationToolkitProducts,
      ...metricsProducts,
      ...ftViewProducts,
      ...networkManagerProducts,
      ...pharmaSuiteProducts,

      ...plantPAxProducts,

      ...productionCentreProducts,

      ...ptcProducts,
      ...teamONEProducts,
      ...studioProducts,
      ...thingWorxProducts,
      ...thinManagerProducts,

      ...vantagePointProducts,
      ...transactionManagerProducts
    ]
  }
}
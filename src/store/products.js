export default {
  getters: {
    getFamily: state => id => state.families.find(family => family.id === id)
  },
  state: {
    families: [
      { id: '1', name: 'Connected Components Workbench' },
      { id: '2', name: 'Studio 5000' },
      { id: '3', name: 'FactoryTalk Analytics' },
      { id: '4', name: 'FactoryTalk Analytics Bundles' },
      { id: '5', name: 'FactoryTalk Analytics for Devices' },
      { id: '6', name: 'FactoryTalk Analytics LogixAI' },
      { id: '7', name: 'FactoryTalk AssetCentre' },
    ],
    products: [
      { id: 1, family: 1,  name: 'Connected Components Workbench Developer Edition' },

      { id: 2, family: 3, name: 'FactoryTalk Analytics DataView Base' },
      { id: 3, family: 3, name: 'FactoryTalk Analytics Edge ML Base' },
      { id: 4, family: 3, name: 'FactoryTalk Analytics Platform Base' },
      { id: 5, family: 3, name: 'FactoryTalk Analytics DataFlow ML Base' },

      { id: 6, family: 4, name: 'FactoryTalk Analytics DataFlowML Design User' },
      { id: 7, family: 4, name: 'FactoryTalk Analytics DataFlowML Pipeline Pack' },
      { id: 8, family: 4, name: 'FactoryTalk Analytics DataView Design User' },
      { id: 9, family: 4, name: 'FactoryTalk Analytics DataView Content Pack' },
      { id: 10, family: 4, name: 'FactoryTalk Analytics Edge ML Runtime Node Pack' },
      { id: 11, family: 4, name: 'FactoryTalk Analytics Edge ML Input Channels Pack' },
      { id: 12, family: 4, name: 'FactoryTalk Analytics DataView View User' },

      { id: 13, family: 5, name: 'FactoryTalk Analytics for Devices' },

      { id: 14, family: 6, name: 'FactoryTalk Analytics LogixAI Standard' },

      { id: 15, family: 7, name: 'FactoryTalk AssetCentre Standard' },
      { id: 16, family: 7, name: 'FactoryTalk AssetCentre Base' },



    ],
    items: [
      { id: '9328C-CCWT21', product: 1, license: 'C1' },
      { id: '9328C-CCWT22', product: 1, license: 'C2' },
      { id: '9328M-CCWT20', product: 1, license: 'M0' },
      { id: '9328M-CCWT21', product: 1, license: 'M1' },
      { id: '9328M-CCWT22', product: 1, license: 'M2' },
      { id: '95055C-DVIEWT11', product: 2, license: 'C1' },
      { id: '95055C-DVIEWT12', product: 2, license: 'C2' },
      { id: '95055C-EDGET11', product: 3, license: 'C1' },
      { id: '95055C-EDGET12', product: 3, license: 'C2' },
      { id: '95055C-PLTFMT11', product: 4, license: 'C1' },
      { id: '95055C-PLTFMT12', product: 4, license: 'C2' },
      { id: '95055C-DFMLT11', product: 5, license: 'C1' },
      { id: '95055C-DFMLT12', product: 5, license: 'C2' },
      { id: '95055C-DFMLT21', product: 6, license: 'C0' },
      { id: '95055C-DFMLUT11', product: 7, license: 'C0' },
      { id: '95055C-DVIEWUT21', product: 8, license: 'C0' },
      { id: '95055C-DVIEWUT31', product: 9, license: 'C0' },
      { id: '95055C-EDGERT11', product: 10, license: 'C1' },
      { id: '95055C-EDGERT12', product: 10, license: 'C2' },
      { id: '95055C-EDGEUT11', product: 11, license: 'C0' },
      { id: '95055C-PLTFMT21', product: 12, license: 'C1' },
      { id: '95055C-PLTFMT22', product: 12, license: 'C2' },
      { id: '6200PC-FTA4DT11M', product: 13, license: 'C1' },
      { id: '6200PC-FTA4DT12M', product: 13, license: 'C2' },
      { id: '1756M-FTALGXAIT11M', product: 14, license: 'M1' },
      { id: '1756M-FTALGXAIT12M', product: 14, license: 'M2' },
      { id: '9515C-FTACT11', product: 15, license: 'C1' },
      { id: '9515C-FTACT12', product: 15, license: 'C2' },
      { id: '9515M-FTACT10', product: 15, license: 'M0' },
      { id: '9515M-FTACT11', product: 15, license: 'M1' },
      { id: '9515M-FTACT12', product: 15, license: 'M2' },
      { id: '9515C-FTACT21', product: 16, license: 'C1' },
      { id: '9515C-FTACT22', product: 16, license: 'C2' },
      { id: '9515M-FTACT20', product: 16, license: 'M0' },
      { id: '9515M-FTACT21', product: 16, license: 'M1' },
      { id: '9515M-FTACT22', product: 16, license: 'M2' },






    ]
  }
}
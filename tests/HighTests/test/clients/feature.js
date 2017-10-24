const {getClient} = require('../common.webdriverio.js');
const {selector} = require('../globals.webdriverio.js');
const PrestashopClient = require('./prestashop_client');

global.featureName = 'feature' + new Date().getTime();

class Feature extends PrestashopClient {

  goToFeatureList() {
    return this.client
      .waitForExist(selector.BO.CatalogPage.menu_button, 90000)
      .moveToObject(selector.BO.CatalogPage.menu_button)
      .waitForExist(selector.BO.CatalogPage.AttributeSubmenu.submenu, 90000)
      .click(selector.BO.CatalogPage.AttributeSubmenu.submenu)
      .waitForExist(selector.BO.CatalogPage.FeatureSubmenu.tabmenu, 90000)
      .click(selector.BO.CatalogPage.FeatureSubmenu.tabmenu);
  }

  addNewFeature() {
    return this.client
      .waitForExist(selector.BO.CatalogPage.FeatureSubmenu.add_new_feature, 90000)
      .click(selector.BO.CatalogPage.FeatureSubmenu.add_new_feature);
  }

  addNewFeatureName() {
    return this.client
      .waitForExist(selector.BO.CatalogPage.FeatureSubmenu.name_input, 90000)
      .setValue(selector.BO.CatalogPage.FeatureSubmenu.name_input, global.featureName);
  }

  saveNewFeature(){
    return this.client
      .waitForExist(selector.BO.CatalogPage.FeatureSubmenu.save_button, 90000)
      .click(selector.BO.CatalogPage.FeatureSubmenu.save_button);
  }


  searchFeature() {
    return this.client
      .waitForExist(selector.BO.CatalogPage.FeatureSubmenu.search_input, 90000)
      .setValue(selector.BO.CatalogPage.FeatureSubmenu.search_input, global.featureName)
      .waitForExist(selector.BO.CatalogPage.FeatureSubmenu.search_button, 90000)
      .click(selector.BO.CatalogPage.FeatureSubmenu.search_button)
  }

 selectFeature() {
    return this.client
      .waitForExist(selector.BO.CatalogPage.FeatureSubmenu.selected_feature, 90000)
      .click(selector.BO.CatalogPage.FeatureSubmenu.selected_feature)
  }

  addValueToFeature() {
    return this.client
      .waitForExist(selector.BO.CatalogPage.FeatureSubmenu.add_value_button, 90000)
      .click(selector.BO.CatalogPage.FeatureSubmenu.add_value_button)
      .waitForExist(selector.BO.CatalogPage.FeatureSubmenu.value_input, 90000)
      .setValue(selector.BO.CatalogPage.FeatureSubmenu.value_input,'featurevalue')
      .waitForExist(selector.BO.CatalogPage.FeatureSubmenu.save_value_button, 90000)
      .click(selector.BO.CatalogPage.FeatureSubmenu.save_value_button);
  }

  searchForProduct(type) {
    return this.client
      .waitForExist(selector.FO.SearchProductPage.product_search_input, 90000)
      .setValue(selector.FO.SearchProductPage.product_search_input,product_id)
      .click(selector.FO.SearchProductPage.product_search_button)
      .click(selector.FO.SearchProductPage.product_result_name)
    if (type === 'create') {
      return this.client
        .waitForExist(selector.FO.SearchProductPage.feature_name, 90000)
        .then(() => this.client.getText(selector.FO.SearchProductPage.feature_name))
        .then((text) => expect(text).to.be.equal(global.featureName));
    }
  }

  checkForProductAttributFO(type) {
    return this.client
    if (type === 'create') {
      return this.client
        .then(() => this.client.getText(selector.FO.SearchProductPage.feature_value))
        .then((text) => expect(text).to.be.equal('featurevalue'))
    }
  }

}

module.exports = Feature;

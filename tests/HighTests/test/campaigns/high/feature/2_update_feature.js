scenario('Update feature', client => {
  test('should open the browser', () => client.open());
  test('should sign in BO', () => client.signinBO());
  test('should go to feature list', () => client.goToFeatureList());
  test('should search for the created feature', () => client.searchFeature());
  test('should update feature name', () => client.updateFeaturename());
  test('should check feature update success panel', () => client.SuccessPanel('Mise à jour réussie.'));
  test('should update feature value name', () => client.updateFeatureValuename());
  test('should check feature value update success panel', () => client.SuccessPanel('Mise à jour réussie.'));
  test('should sign out BO', () => client.signoutBO());
}, 'feature', true);

scenario('The Check of the Product feature in Front Office', client => {
  test('should open the browser', () => client.open());
  test('should sign in FO', () => client.signinFO());
  test('should search for the product', () => client.searchForProduct());
  test('should Check updated feature in Front Office', () => client.checkForProductfeatureUpdateFO());
  test('should sign in FO', () => client.signoutFO());
}, 'feature', true);

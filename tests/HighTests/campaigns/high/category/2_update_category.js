scenario('Update category', client => {
    test('should open the browser', () => client.open());
    test('should sign in BO', () => client.loginBO());
    test('should go to category', () => client.goToCategoryList());
    test('should search for the category', () => client.searchCategoryBO());
    test('should update category', () => client.updateCategory());
    test('should check category success panel', () => client.addCategorySuccessPanel('Mise à jour réussie.','the category is not updated!'));
},'category',true);

scenario('Check updated category in BO', client => {
    test('should open the browser', () => client.open());
    test('should sign in BO', () => client.loginBO());
    test('should go to category ', () => client.goToCategoryBO());
    test('should search category ', () => client.searchCategoryBO());
    test('should check category image', () => client.checkCategoryImage());
    test('should check category image thumb', () => client.checkCategoryImageThumb());
    test('should check category title', () => client.checkCategoryTitle());
    test('should check category meta description', () => client.checkCategoryMetaDescription());
    //   test('check category keywords', () => client.checkCategorykeyswordsText());
    test('should check category simplify url', () => client.checkCategorySimplifyURL());
},'category',true);

scenario('Check updated category in FO', client => {
    test('should open the browser', () => client.open());
    test('should sign in FO', () => client.loginFO());
    test('should open product list', () => client.openProductList());
    test('should check category existence', () => client.checkcategoryexistenceFO());
},'category',true);

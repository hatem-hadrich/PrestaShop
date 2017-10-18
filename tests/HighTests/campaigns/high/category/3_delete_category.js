scenario('Delete category', client => {
    test('should open the browser', () => client.open());
    test('should sign in BO', () => client.loginBO());
    test('should go to category', () => client.goToCategoryList());
    test('should search for the category', () => client.searchCategoryBO());
    test('should update category', () => client.deleteCategory());
    test('should update category success panel', () => client.addCategorySuccessPanel('Suppression réussie.','the category is not deleted !'));
},'category',true);

scenario('Create category', client => {
    test('should open the browser', () => client.open());
    test('should sign in BO', () => client.loginBO());
    test('should go to category', () => client.goToCategoryList());
    test('should create category', () => client.createCategory());
    test('should add category name', () => client.addCategoryName());
    test('should add category image', () => client.addCategoryImage());
    test('should add category thumb', () => client.addCategoryThumb());
    test('should category title', () => client.addCategoryTitle());
    test('should add category meta desciption', () => client.addCategoryMetaDescription());
    test('should add category meta keys words', () => client.addCategoryMetakeyswords());
    test('should add category simplify url', () => client.addCategorySimplifyUrl());
    test('should add category save', () => client.addCategorySave());
    test('should add category success panel', () => client.addCategorySuccessPanel('Création réussie.','the category is not created !'));
},'category',true);

scenario('Delete category with action group', client => {
    test('should open the browser', () => client.open());
    test('should sign in BO', () => client.loginBO());
    test('should go to category', () => client.goToCategoryList());
    test('should search for the category', () => client.searchCategoryBO());
    test('should update category', () => client.deleteCategoryWithActiongroup());
    test('should check delete category success panel', () => client.addCategorySuccessPanel('Sélection supprimée avec succès','the category is not deleted !'));
},'category',true);

import { test} from '../fixtures/hooks';
test('End to End2', async ({ homepage, cartPage, checkoutPage, productsPage, orderConfirmationPage, reviewPage}) => {


  //HomePage
  await homepage.open();
  await homepage.fillValidCredentials();
  await homepage.clickLogin();
  //ProductsPage
  await productsPage.addToCart();
  await productsPage.verifyProductAdded();
  await productsPage.clickCart();

  //CartPage
  await cartPage.validateItemInCart();
  await cartPage.clickCheckout();


  //CheckoutPage
  await checkoutPage.enterPersonalDetails();
  await checkoutPage.clickContinue();

  //ReviewPage
 await reviewPage.clickFinish();

  //OrderConfirmationPage
 await orderConfirmationPage.confirmMessage();
  await orderConfirmationPage.clickBackToProducts();

});
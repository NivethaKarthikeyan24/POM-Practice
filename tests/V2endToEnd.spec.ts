import { test} from '@playwright/test';
import HomePage from '../pages/HomePage';
import ProductsPage from '../pages/ProductsPage';
import CartPage from '../pages/CartPage';
import CheckoutPage from '../pages/CheckoutPage';
import ReviewPage from '../pages/ReviewPage';
import OrderConfirmationPage from '../pages/OrderConfirmationPage';
let homepage: HomePage;
let productsPage: ProductsPage;
let cartPage: CartPage;
let checkoutPage: CheckoutPage;
let reviewPage: ReviewPage;
let orderConfirmationPage: OrderConfirmationPage;

test.beforeEach(async ({ page }) => {
   homepage=new HomePage(page);
 productsPage=new ProductsPage(page);
 cartPage=new CartPage(page);
 checkoutPage=new CheckoutPage(page);
 reviewPage=new ReviewPage(page);
 orderConfirmationPage=new OrderConfirmationPage(page);
});

test('End to End2', async ({ page }) => {


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
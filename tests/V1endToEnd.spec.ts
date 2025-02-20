import { test} from '@playwright/test';
import HomePage from '../pages/HomePage';
import ProductsPage from '../pages/ProductsPage';
import CartPage from '../pages/CartPage';
import CheckoutPage from '../pages/CheckoutPage';
import ReviewPage from '../pages/ReviewPage';
import OrderConfirmationPage from '../pages/OrderConfirmationPage';


test('End to End', async ({ page }) => {

  const homepage=new HomePage(page);
const productsPage=new ProductsPage(page);
const cartPage=new CartPage(page);
const checkoutPage=new CheckoutPage(page);
const reviewPage=new ReviewPage(page);
const orderConfirmationPage=new OrderConfirmationPage(page);

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
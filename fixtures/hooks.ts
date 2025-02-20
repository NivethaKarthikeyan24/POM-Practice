import {test as baseTest} from '@playwright/test';
import HomePage from '../pages/HomePage';
import ProductsPage from '../pages/ProductsPage';
import CartPage from '../pages/CartPage';
import CheckoutPage from '../pages/CheckoutPage';
import ReviewPage from '../pages/ReviewPage';
import OrderConfirmationPage from '../pages/OrderConfirmationPage';

interface PageFixtures {
    homepage: HomePage;
    productsPage: ProductsPage;
    cartPage: CartPage;
    checkoutPage: CheckoutPage;
    reviewPage: ReviewPage;
    orderConfirmationPage: OrderConfirmationPage;
}

export const test = baseTest.extend<PageFixtures>({

    homepage: async ({page}, use) => {
       await use(new HomePage(page));
    },
    productsPage: async ({page}, use) => {
        await use(new ProductsPage(page));
    },
    cartPage: async ({page}, use) => {
        await use(new CartPage(page));
    },
    checkoutPage: async ({page}, use) => {
        await use(new CheckoutPage(page));
    },
    reviewPage: async ({page}, use) => {
        await use(new ReviewPage(page));
    },
    orderConfirmationPage: async ({page}, use) => {
        await use(new OrderConfirmationPage(page));
    },
    });

    export {expect} from '@playwright/test';

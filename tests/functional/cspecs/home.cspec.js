/* eslint-disable no-undef */
import HomePage from "../pages/HomePage";

const homePage = new HomePage();
// A fixture must be created for each group of tests.
fixture(`Index page`)
  // Load the URL your development server runs on.
  .page("http://localhost:8080");

// Create a new test(description, function(testController): <Promise>)
test('Home page title contains "Hello World!"', async (testController) => {
  // Select the paragraph element under the body.
  // Must use promises (async / await  here) for communication with the browser.
  const titleSelector = await homePage.title;

  // Assert that the inner text of the paragraph is "Hello World!"
  await testController
    .expect(titleSelector.innerText)
    .eql(homePage.testData.title);
});

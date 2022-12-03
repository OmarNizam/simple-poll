/* eslint-disable no-undef */
import HomePage from "../pages/HomePage";

const homePage = new HomePage();
// A fixture must be created for each group of tests.
fixture(`Home page:`)
  // Load the URL your development server runs on.
  .page(homePage.HomePageUrl);

// Create a new test(description, function(testController): <Promise>)
test('Home page title contains "Create Simple Poll!"', async (t) => {
  // Select the paragraph element under the body.
  // Must use promises (async / await  here) for communication with the browser.
  const titleSelector = homePage.title;

  await t.expect(titleSelector.innerText).eql(homePage.testData.title);
});

// A fixture must be created for each group of tests.
fixture(`1- Poll Form Comonent`)
  // Load the URL your development server runs on.
  .page(homePage.HomePageUrl);

test("Poll Form component contain question input lable", async (t) => {
  const questionInputLabelSelector = homePage.questionInputLabel;

  await t
    .expect(questionInputLabelSelector.innerText)
    .eql(homePage.testData.questionInputLabelText);
});

test("Should input question text and expect to see it in Poll Vote component ", async (t) => {
  const questionInputSelector = homePage.questionInput;
  const questionTextSelector = homePage.questionText;

  await t.typeText(
    questionInputSelector,
    "What is your favorite coding language?"
  );

  await t
    .expect(questionTextSelector.innerText)
    .eql(homePage.testData.questionText);
});

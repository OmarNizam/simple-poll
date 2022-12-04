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

test("Should input question text with max 80 characters expect to see error validation text", async (t) => {
  const questionInputSelector = homePage.questionInput;
  const questionInputValidationSelector = homePage.questionInputValidation;

  await t.typeText(
    questionInputSelector,
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque repellat dolorem labore, corporis doloremque nesciunt quisquam porro, saepe cupiditate adipisci repudiandae? Alias aut eius nemo doloremque praesentium at ad harum nihil dolorem, odit excepturi velit mollitia ut voluptates sunt cum veniam magni. Officiis incidunt consectetur voluptates ad hic vel aliquam animi omnis laboriosam? Pariatur magnam corporis velit enim quo tenetur suscipit sit libero sint illum nulla molestiae harum soluta quisquam voluptatum corrupti, cupiditate earum, repellat aut? Placeat magnam deleniti odio nisi reiciendis tempora aliquam minima hic perspiciatis adipisci? Labore, ex."
  );

  await t
    .expect(questionInputValidationSelector.innerText)
    .eql(homePage.testData.questionInputValidationErrText);
});

test("Should input question text and edit the default options option 1 and option 2", async (t) => {
  const questionInputSelector = homePage.questionInput;
  const questionTextSelector = homePage.questionText;
  const optionsInputSelector = homePage.optionsInput;

  // test question and option 1
  await t
    .typeText(questionInputSelector, "What is your favorite coding language?")
    .click(optionsInputSelector.nth(0))
    .pressKey(
      "backspace backspace backspace backspace backspace backspace backspace backspace"
    )
    .typeText(optionsInputSelector.nth(0), "Java Script");
  // test option 2
  await t
    .click(optionsInputSelector.nth(1))
    .pressKey(
      "backspace backspace backspace backspace backspace backspace backspace backspace"
    )
    .typeText(optionsInputSelector.nth(1), "HTML");

  await t
    .expect(questionTextSelector.innerText)
    .eql(homePage.testData.questionText)

    .expect(questionTextSelector.innerText)
    .eql(homePage.testData.questionText);
});

test("Should input option text with max 80 characters expect to see error validation text", async (t) => {
  const option2InputValidationSelector = homePage.option2InputValidation;
  const optionsInputSelector = homePage.optionsInput;

  await t
    .click(optionsInputSelector.nth(1))
    .pressKey(
      "backspace backspace backspace backspace backspace backspace backspace backspace"
    )
    .typeText(
      optionsInputSelector.nth(1),
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque repellat dolorem labore, corporis doloremque nesciunt quisquam porro, saepe cupiditate adipisci repudiandae? Alias aut eius nemo doloremque praesentium at ad harum nihil dolorem, odit excepturi velit mollitia ut voluptates sunt cum veniam magni. Officiis incidunt consectetur voluptates ad hic vel aliquam animi omnis laboriosam? Pariatur magnam corporis velit enim quo tenetur suscipit sit libero sint illum nulla molestiae harum soluta quisquam voluptatum corrupti, cupiditate earum, repellat aut? Placeat magnam deleniti odio nisi reiciendis tempora aliquam minima hic perspiciatis adipisci? Labore, ex."
    );

  await t
    .expect(option2InputValidationSelector.innerText)
    .eql(homePage.testData.option2InputValidationErrText);
});

// A fixture must be created for each group of tests.
fixture(`test with out skip`)
  // Load the URL your development server runs on.
  .page(homePage.HomePageUrl);

test("Should click on add option button and fill in the third option and expect to see the option in VoteForm component", async (t) => {
  const options3InputSelector = homePage.options3Input;
  const addButtonOption2Selector = homePage.addButtonOption2;
  const option3LabelSelector = homePage.option3Label;

  await t
    .click(addButtonOption2Selector)
    .click(options3InputSelector)
    .typeText(options3InputSelector, "SASS");

  await t
    .expect(option3LabelSelector.innerText)
    .eql(homePage.testData.option3LabelText);
});

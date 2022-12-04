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
fixture(`1- Poll Form Comonent interacting with PollVote component:`)
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

test("Should click on add 2 options and delete one of them and expect result in VoteForm component", async (t) => {
  const options3InputSelector = homePage.options3Input;
  const addButtonOption2Selector = homePage.addButtonOption2;
  const option3LabelSelector = homePage.option3Label;
  const addButtonOption3Selector = homePage.addButtonOption3;
  const options4InputSelector = homePage.options4Input;
  const option4LabelSelector = homePage.option4Label;
  const deleteButtonOption3Selector = homePage.deleteButtonOption3;

  await t
    .click(addButtonOption2Selector)
    .click(options3InputSelector)
    .typeText(options3InputSelector, "SASS")
    .click(addButtonOption3Selector)
    .typeText(options4InputSelector, "HTML");

  await t
    .expect(option3LabelSelector.innerText)
    .eql(homePage.testData.option3LabelText)
    .expect(option4LabelSelector.innerText)
    .eql(homePage.testData.option4LabelText);

  await t
    .click(deleteButtonOption3Selector)
    .expect(option3LabelSelector.innerText)
    .notEql(homePage.testData.option3LabelText);
});

test("Should be able to add options max 10", async (t) => {
  const addButtonOption2Selector = homePage.addButtonOption2;
  const addButtonOption3Selector = homePage.addButtonOption3;
  const addButtonOption4Selector = homePage.addButtonOption4;
  const addButtonOption5Selector = homePage.addButtonOption5;
  const addButtonOption6Selector = homePage.addButtonOption6;
  const addButtonOption7Selector = homePage.addButtonOption7;
  const addButtonOption8Selector = homePage.addButtonOption8;
  const addButtonOption9Selector = homePage.addButtonOption9;
  const addButtonOption10Selector = homePage.addButtonOption10;
  const options10InputSelector = homePage.options10Input;

  await t
    .click(addButtonOption2Selector)
    .click(addButtonOption3Selector)
    .click(addButtonOption4Selector)
    .click(addButtonOption5Selector)
    .click(addButtonOption6Selector)
    .click(addButtonOption7Selector)
    .click(addButtonOption8Selector)
    .click(addButtonOption9Selector)
    .click(addButtonOption10Selector);

  await t
    .expect(options10InputSelector.child(2).exists)
    .ok()
    .expect(addButtonOption10Selector.getStyleProperty("opacity"))
    .eql("0.65")
    .expect(addButtonOption10Selector.hasAttribute("disabled"))
    .ok();
});

test("Should add optioons then click on reset button expect the defalut values come back", async (t) => {
  const addButtonOption2Selector = homePage.addButtonOption2;
  const addButtonOption3Selector = homePage.addButtonOption3;
  const addButtonOption4Selector = homePage.addButtonOption4;
  const addButtonOption5Selector = homePage.addButtonOption5;
  const addButtonOption6Selector = homePage.addButtonOption6;
  const addButtonOption7Selector = homePage.addButtonOption7;
  const addButtonOption8Selector = homePage.addButtonOption8;
  const addButtonOption9Selector = homePage.addButtonOption9;
  const options10InputSelector = homePage.options10Input;
  const option10LabelSelector = homePage.option10Label;
  const options1InputSelector = homePage.options1Input;
  const option1LabelSelector = homePage.option1Label;
  const options2InputSelector = homePage.options2Input;
  const option2LabelSelector = homePage.option2Label;
  const resetButtonSelector = homePage.resetButton;

  await t
    .click(options1InputSelector)
    .pressKey(
      "backspace backspace backspace backspace backspace backspace backspace backspace"
    )
    .typeText(options1InputSelector, "Java Script")
    .click(addButtonOption2Selector)
    .click(options2InputSelector)
    .pressKey(
      "backspace backspace backspace backspace backspace backspace backspace backspace"
    )
    .typeText(options2InputSelector, "HTML")
    .click(addButtonOption3Selector)
    .click(addButtonOption4Selector)
    .click(addButtonOption5Selector)
    .click(addButtonOption6Selector)
    .click(addButtonOption7Selector)
    .click(addButtonOption8Selector)
    .click(addButtonOption9Selector)
    .click(options10InputSelector)
    .pressKey(
      "backspace backspace backspace backspace backspace backspace backspace backspace"
    )
    .typeText(options10InputSelector, "Last option")
    .expect(option1LabelSelector.innerText)
    .eql(homePage.testData.option1LabelText)
    .expect(option2LabelSelector.innerText)
    .eql(homePage.testData.option2LabelText)
    .expect(option10LabelSelector.innerText)
    .eql(homePage.testData.option10LabelText);

  await t
    .click(resetButtonSelector)
    .expect(option1LabelSelector.innerText)
    .eql(homePage.testData.option1LabelDeafultText)
    .expect(option2LabelSelector.innerText)
    .eql(homePage.testData.option2LabelDeafultText);
});

// A fixture must be created for each group of tests.
fixture(
  `2- All 3 components "PollForm" "PollVote" "PollChart" interacting with each other:`
)
  // Load the URL your development server runs on.
  .page(homePage.HomePageUrl);

test("Should enter question then fill options then choose option then vote", async (t) => {
  console.log(`------ See the voting results on PollChart component ------- `);

  const questionInputSelector = homePage.questionInput;
  const options1InputSelector = homePage.options1Input;
  const option1LabelSelector = homePage.option1Label;
  const options2InputSelector = homePage.options2Input;
  const option2LabelSelector = homePage.option2Label;
  const addButtonOption2Selector = homePage.addButtonOption2;
  const options3InputSelector = homePage.options3Input;
  const option3LabelSelector = homePage.option3Label;
  const voteButtonSelector = homePage.voteButton;

  await t
    .click(questionInputSelector)
    .typeText(questionInputSelector, "What is your favorite coding language?")

    .click(options1InputSelector)
    .pressKey(
      "backspace backspace backspace backspace backspace backspace backspace backspace"
    )
    .typeText(options1InputSelector, "Java Script")
    .click(options2InputSelector)
    .pressKey(
      "backspace backspace backspace backspace backspace backspace backspace backspace"
    )
    .typeText(options2InputSelector, "HTML")

    .click(option2LabelSelector)
    .click(voteButtonSelector)
    .click(option1LabelSelector)
    .click(voteButtonSelector)
    .click(option2LabelSelector)
    .click(voteButtonSelector)
    .click(addButtonOption2Selector)
    .click(options3InputSelector)
    .typeText(options3InputSelector, "SASS")
    .click(option3LabelSelector)
    .click(voteButtonSelector)
    .click(option2LabelSelector)
    .click(voteButtonSelector)
    .wait(3000);
});

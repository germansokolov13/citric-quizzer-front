export const lorem = `Lorem ipsum dolor sit amet, *consectetur* adipiscing elit.

+ Sed non risus.
+ Sed non risus.
+ Sed non risus.
+ Sed non risus.

Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat. Duis semper. Duis arcu massa, scelerisque vitae, consequat in, pretium a, enim. Pellentesque congue. Ut in risus volutpat libero pharetra tempor. Cras vestibulum bibendum augue. Praesent egestas leo in pede. Praesent blandit odio eu enim. Pellentesque sed dui ut augue blandit sodales. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam nibh. Mauris ac mauris sed pede pellentesque fermentum. Maecenas adipiscing ante non diam sodales hendrerit.`;

export const questionStub = {
  id: 42,
  questionNumber: 15,
  content: 'What is the *capital* of France?',
  isMultipleChoice: true,
  isFreeText: false,
  answers: [
    { content: 'Paris' },
    { content: '*London*' },
    { content: lorem },
    { content: 'Madrid'},
  ],
};

export const questionStubWithAnswers = {
  id: 42,
  questionNumber: 15,
  content: 'What is the *capital* of France?',
  isMultipleChoice: true,
  isFreeText: false,
  answers: [
    { content: 'Paris', isCorrect: true, isChosen: false },
    { content: '*London*', isCorrect: false, isChosen: true },
    { content: lorem, isCorrect: false, isChosen: false },
    { content: 'Madrid', isCorrect: false, isChosen: false },
  ],
};


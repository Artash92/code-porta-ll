import React, { useState, useEffect } from 'react';
import Wrapper from '../components/Wrapper';

const questions = {
  en: [
    {
      question: 'What is HTML?',
      answers: [
        { text: 'Markup language', correct: true },
        { text: 'Programming language', correct: false },
        { text: 'Query language', correct: false }
      ]

    },
    {
      question: 'What types of content elements can be used in HTML5?',
      answers: [
        { text: 'Lists, tables, and images', correct: false },
        { text: 'Headings, paragraphs, and links', correct: false },
        { text: 'Block, inline, and inline-block elements', correct: true }
      ]
    },
    {
      question: 'What new elements were added in HTML5?',
      answers: [
        { text: '<div>, <span>, and <table>', correct: false },
        { text: '<article>, <section>, and <nav>', correct: true },
        { text: '<form>, <input>, and <select>', correct: false }
      ]

    },
    {
      question: 'What is the data-* attribute in HTML5?',
      answers: [
        { text: 'Attributes for setting the size of elements', correct: false },
        { text: 'Attributes for setting the text and background color', correct: false },
        { text: 'Attributes for storing custom data', correct: true }
      ]
    },
    {
      question: 'Which tag is used to set the title of a page?',
      answers: [
        { text: '<title>', correct: true },
        { text: '<h1>', correct: false },
        { text: '<header>', correct: false }
      ]

    },
    {
      question: 'What is CSS?',
      answers: [
        { text: 'Markup language', correct: false },
        { text: 'Programming language', correct: false },
        { text: 'Style sheet language', correct: true }
      ]
    },
    {
      question: 'What units of measurement are available in CSS?',
      answers: [
        { text: 'px, em, and rem', correct: true },
        { text: 'cm, mm, and in', correct: false },
        { text: 'pt, pc, and ex', correct: false }
      ]

    },
    {
      question: 'What CSS properties are used for creating animations?',
      answers: [
        { text: 'background-color and border', correct: false },
        { text: 'margin and padding', correct: false },
        { text: 'transition and transform', correct: true }
      ]
    },
    {
      question: 'How to style links that have already been visited by the user?',
      answers: [
        { text: ':active', correct: false },
        { text: ':visited', correct: true },
        { text: ':hover', correct: false }
      ]

    },
    {
      question: 'Which pseudo-classes are used to style elements based on their position on the page?',
      answers: [
        { text: ':first-child and :last-child', correct: false },
        { text: ':not and :lang', correct: false },
        { text: ':nth-child and :nth-of-type', correct: true }
      ]
    },
  ],
  ru: [
    {
      question: 'Что такое HTML?',
      answers: [
        { text: 'Язык разметки', correct: true },
        { text: 'Язык программирования', correct: false },
        { text: 'Язык запросов', correct: false }
      ]
    },
    {
      question: 'Какие типы элементов контента можно использовать в HTML5?',
      answers: [
        { text: 'Списки, таблицы и изображения', correct: false },
        { text: 'Заголовки, абзацы и ссылки', correct: false },
        { text: 'Блочные, строчные и инлайн-блочные элементы', correct: true }
      ]
    },
    {
      question: 'Какие новые элементы были добавлены в HTML5?',
      answers: [
        { text: '<div>, <span> и <table>', correct: false },
        { text: '<article>, <section> и <nav>', correct: true },
        { text: '<form>, <input> и <select>', correct: false }
      ]
    },
    {
      question: 'Что такое атрибут data-* в HTML5?',
      answers: [
        { text: 'Атрибуты для задания размера элементов', correct: false },
        { text: 'Атрибуты для задания цвета текста и фона', correct: false },
        { text: 'Атрибуты для хранения пользовательских данных', correct: true }
      ]
    },
    {
      question: 'Какой тег используется для задания заголовка страницы?',
      answers: [
        { text: '<title>', correct: true },
        { text: '<h1>', correct: false },
        { text: '<header>', correct: false }
      ]
    },
    {
      question: 'Что такое CSS?',
      answers: [
        { text: 'Язык разметки', correct: false },
        { text: 'Язык программирования', correct: false },
        { text: 'Язык стилей', correct: true }
      ]
    },
    {
      question: 'Какие единицы измерения доступны в CSS?',
      answers: [
        { text: 'px, em и rem', correct: true },
        { text: 'cm, mm и in', correct: false },
        { text: 'pt, pc и ex', correct: false }
      ]
    },
    {
      question: 'Какие свойства CSS используются для создания анимации?',
      answers: [
        { text: 'background-color и border', correct: false },
        { text: 'margin и padding', correct: false },
        { text: 'transition и transform', correct: true }
      ]
    },
    {
      question: 'Как задать стиль для ссылок, которые были уже посещены пользователем?',
      answers: [
        { text: ':active', correct: false },
        { text: ':visited', correct: true },
        { text: ':hover', correct: false }
      ]
    },
    {
      question: 'Какие псевдоклассы используются для задания стиля элементам в зависимости от их положения на странице?',
      answers: [
        { text: ':first-child и :last-child', correct: false },
        { text: ':not и :lang', correct: false },
        { text: ':nth-child и :nth-of-type', correct: true }
      ]
    },
  ],
  hy: [
    {
      question: 'Ի՞նչ է HTML-ը:',
      answers: [
        { text: 'Հիպերտեքստի նշագրման լեզու', correct: true },
        { text: 'Ծրագրավորման լեզու', correct: false },
        { text: 'Դիմումների լեզու', correct: false }
      ]
    },
    {
      question: 'Ի՞նչ տեսակի բովանդակության տարրեր կարող են օգտագործվել HTML5-ում',
      answers: [
        { text: 'Ցուցակներ, աղյուսակներ և պատկերներ', correct: false },
        { text: 'Վերագրեր, պարբերություններ և հղումներ', correct: false },
        { text: 'Բլոկային, տողային և տողի մեջ բլոկային տարրերը', correct: true }
      ]
    },
    {
      question: 'Ի՞նչ նոր տարրեր են ավելացվել HTML5-ում:',
      answers: [
        { text: '<div>, <span> և <table>', correct: false },
        { text: '<article>, <section> և <nav>', correct: true },
        { text: '<form>, <input> և <select>', correct: false }
      ]
    },
    {
      question: 'Ի՞նչ է data-* - ը HTML5-ում',
      answers: [
        { text: 'Էլեմենտների չափը սահմանելու ատրիբուտ', correct: false },
        { text: 'Տեքստի և ֆոնի գույները սահմանելու ատրիբուտ', correct: false },
        { text: 'Օգտատիրոջ տվյալները պահելու ատրիբուտ', correct: true }
      ]
    },
    {
      question: 'Ո՞ր թեգն է օգտագործվում էջի վերնագիրը սահմանելու համար',
      answers: [
        { text: '<title>', correct: true },
        { text: '<h1>', correct: false },
        { text: '<header>', correct: false }
      ]
    },
    {
      question: 'Ի՞նչ է CSS-ը:',
      answers: [
        { text: 'Նշագրման լեզու', correct: false },
        { text: 'Ծրագրավորման լեզու', correct: false },
        { text: 'Կասկադային ոճերի թերթներ', correct: true }
      ]
    },
    {
      question: 'Ի՞նչ միավորներ են հասանելի CSS-ում',
      answers: [
        { text: 'px, em և rem', correct: true },
        { text: 'cm, mm և in', correct: false },
        { text: 'pt, pc և ex', correct: false }
      ]
    },
  
    {
      question: 'Ի՞նչ CSS հատկություններ են օգտագործվում անիմացիաներ ստեղծելու համար',
      answers: [
        { text: 'background-color և border', correct: false },
        { text: 'margin և padding', correct: false },
        { text: 'transition և transform', correct: true }
      ]
    },
    {
      question: 'Ինչպե՞ս կարող եմ ոճավորել այն հղումները, որոնք արդեն այցելած են օգտվողի կողմից',
      answers: [
        { text: ':active', correct: false },
        { text: ':visited', correct: true },
        { text: ':hover', correct: false }
      ]
    },
   {
      question: 'Ի՞նչ պսեվդոկլասներ են օգտագործվում տարրերը ձևավորելու համար՝ ելնելով էջի վրա նրանց դիրքից',
      answers: [
        { text: ':first-child և :last-child', correct: false },
        { text: ':not և :lang', correct: false },
        { text: ':nth-child և :nth-of-type', correct: true }
      ]
    },
   
  ]
};


function Quiz() {
  const [language, setLanguage] = useState('en');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleLanguageButtonClick = (language) => {
    setLanguage(language);
    setCurrentQuestion(0);
    setShowScore(false);
    setScore(0);
  };

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions[language].length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  useEffect(() => {
    switch (language) {
      case 'en':
        document.title = 'HTML/CSS Online Test ';
        break;
      case 'ru':
        document.title = ' Тесты на знание HTML, CSS ';
        break;
      case 'hy':
        document.title = 'HTML, CSS Օնլայն Տեստ';
        break;
      default:
        document.title = 'Online Quiz HTML/CSS';
    }
  }, [language]);

  return (
   <Wrapper>
   <div className='flex-container'>
    <div className="quiz-container">
      <div className="language-buttons-container">
        <button className='button1' onClick={() => handleLanguageButtonClick('en')}>English</button>
        <button className='button1' onClick={() => handleLanguageButtonClick('ru')}>Русский</button>
        <button className='button1' onClick={() => handleLanguageButtonClick('hy')}>Հայերեն</button>
      </div>
      {showScore ? (
        <div className="score-section">
          You scored {score} out of {questions[language].length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions[language].length}
            </div>
            <div className="question-text">{questions[language][currentQuestion].question}</div>
          </div>
          <div className="answer-section">
            {questions[language][currentQuestion].answers.map((answer, index) => (
              <button key={index} className="answer-button" onClick={() => handleAnswerButtonClick(answer.correct)}>
                {answer.text}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
    </div>
<div className="quiz-description">
  <p className="quiz-intro">
    Test your knowledge of HTML and CSS with this interactive online quiz.
    Whether you're a beginner exploring the basics or an experienced developer
    looking to brush up on your skills, this quiz has you covered. It features a
    range of questions designed to challenge your understanding of fundamental
    concepts in web development.
  </p>
  <h2 className="quiz-subheading">Key Features:</h2>
  <ul className="quiz-list">
    <li className="quiz-list-item">
      <strong>Multilingual Support:</strong> Choose your preferred language from
      English, Russian, or Armenian.
    </li>
    <li className="quiz-list-item">
      <strong>Diverse Questions:</strong> Explore a variety of topics, including
      HTML elements, attributes, CSS styling, and more.
    </li>
    <li className="quiz-list-item">
      <strong>Immediate Feedback:</strong> Get instant feedback on your answers.
      Each correct response adds to your overall score.
    </li>
    <li className="quiz-list-item">
      <strong>Score Display:</strong> See how well you performed at the end of the
      quiz with a detailed score summary.
    </li>
  </ul>
  <h2 className="quiz-subheading">How to Use:</h2>
  <ol className="quiz-list">
    <li className="quiz-list-item">
      <strong>Language Selection:</strong> Pick your language of choice using the
      language buttons (English, Русский, Հայերեն).
    </li>
    <li className="quiz-list-item">
      <strong>Answer Questions:</strong> Click on the provided options to answer
      each question.
    </li>
    <li className="quiz-list-item">
      <strong>Instant Feedback:</strong> Receive immediate feedback on your
      choices.
    </li>
    <li className="quiz-list-item">
      <strong>Score Summary:</strong> After completing all questions, view your
      final score.
    </li>
  </ol>
  <h2 className="quiz-subheading">Available Languages:</h2>
  <ul className="quiz-list">
    <li className="quiz-list-item">
      <strong>English:</strong> Ideal for a global audience.
    </li>
    <li className="quiz-list-item">
      <strong>Русский (Russian):</strong> Suited for Russian speakers.
    </li>
    <li className="quiz-list-item">
      <strong>Հայերեն (Armenian):</strong> Choose Armenian for a localized
      experience.
    </li>
  </ul>
  <p className="quiz-note">
    <strong>Note:</strong> This quiz covers essential HTML and CSS concepts,
    making it a valuable resource for self-assessment and skill enhancement in web
    development.
  </p>
  <p className="quiz-outro">Enjoy the quiz and put your HTML/CSS knowledge to the test!</p>
</div>
    </Wrapper>
  );
}

export default Quiz;
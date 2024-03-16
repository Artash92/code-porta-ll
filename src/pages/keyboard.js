import React, { useState, useEffect } from 'react';
import Wrapper from '../components/Wrapper';

const Keyboard = () => {
  const [value, setValue] = useState('');
  const [language, setLanguage] = useState('en');
  const [isShiftEnabled, setIsShiftEnabled] = useState(false);

  const handleClick = (char) => {
    setValue(value + (isShiftEnabled ? char.toUpperCase() : char));
  };

  const handleDelete = () => {
    setValue(value.slice(0, -1));
  };

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setIsShiftEnabled(false);
  };

  const handleShiftToggle = () => {
    setIsShiftEnabled(!isShiftEnabled);
  };

  useEffect(() => {
    switch (language) {
      case 'en':
        document.title = 'Online Virtual Keyboard | English';
        break;
      case 'ru':
        document.title = 'Виртуальная клавиатура | Русский';
        break;
      case 'am':
        document.title = 'Վիրտուալ ստեղնաշար | Հայերեն';
        break;
      default:
        document.title = 'Online Virtual Keyboard | Виртуальная клавиатура';
    }
  }, [language]);

  let characterButtons = null;
  let uppercaseCharButtons = null;

  switch (language) {
    case 'en':
      const characters = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];

      characterButtons = (
        <div>
          {characters.map((char, index) => (
            <button key={index} className={isShiftEnabled ? 'shift-enabled' : ''} onClick={() => handleClick(char)}>
              {char}
            </button>
          ))}
        </div>
      );
      const uppercaseLetters = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'];

      uppercaseCharButtons = (
        <div>
          {uppercaseLetters.map((letter, index) => (
            <button key={index} className={isShiftEnabled ? '' : 'shift-enabled'} onClick={() => handleClick(letter)}>
              {letter}
            </button>
          ))}
        </div>
      );
      break;
    case 'am':
      const charArr = ['ա', 'բ', 'գ', 'դ', 'ե', 'զ', 'է', 'ը', 'թ', 'ժ', 'ի', 'լ', 'խ', 'ծ', 'կ', 'հ', 'ձ', 'ղ', 'ճ', 'մ', 'յ', 'ն', 'շ', 'ո', 'չ', 'պ', 'ջ', 'ռ', 'ս', 'վ', 'տ', 'ր', 'ց', 'ւ', 'փ', 'ք', 'և', 'օ', 'ֆ'];

      characterButtons = (
        <div>
          {charArr.map((char, index) => (
            <button key={index} className={isShiftEnabled ? 'shift-enabled' : ''} onClick={() => handleClick(char)}>
              {char}
            </button>
          ))}
        </div>
      );

      const uppercaseArmenianAlphabet = ['Ա', 'Բ', 'Գ', 'Դ', 'Ե', 'Զ', 'Է', 'Ը', 'Թ', 'Ժ', 'Ի', 'Լ', 'Խ', 'Ծ', 'Կ', 'Հ', 'Ձ', 'Ղ', 'Ճ', 'Մ', 'Յ', 'Ն', 'Շ', 'Ո', 'Չ', 'Պ', 'Ջ', 'Ռ', 'Ս', 'Վ', 'Տ', 'Ր', 'Ց', 'ՈՒ', 'Փ', 'Ք', 'ԵՎ', 'Օ', 'Ֆ'];

      uppercaseCharButtons = (
        <div>
          {uppercaseArmenianAlphabet.map((letter, index) => (
            <button key={index} className={isShiftEnabled ? '' : 'shift-enabled'} onClick={() => handleClick(letter)}>
              {letter}
            </button>
          ))}
        </div>
      );

      break;
    case 'ru':
      const RussianCharacters = ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я'];

      characterButtons = (
        <div>
          {RussianCharacters.map((char, index) => (
            <button key={index} className={isShiftEnabled ? 'shift-enabled' : ''} onClick={() => handleClick(char)}>
              {char}
            </button>
          ))}
        </div>
      );
      const uppercaseRussianAlphabet = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я'];

      uppercaseCharButtons = (
        <div>
          {uppercaseRussianAlphabet.map((letter, index) => (
            <button key={index} className={isShiftEnabled ? '' : 'shift-enabled'} onClick={() => handleClick(letter)}>
              {letter}
            </button>
          ))}
        </div>
      );
      break;
    default:
      break;
}

  return (
    <Wrapper>
      <div className="keyboard">
        <div className="output">
          <div>{isShiftEnabled ? value.toUpperCase() : value}</div>
        </div>
        <div className="options">
          <div className="language-buttons">
            <button className="language-button en" onClick={() => handleLanguageChange('en')}>
              ENG
            </button>
            <button className="language-button am" onClick={() => handleLanguageChange('am')}>
              ՀԱՅ
            </button>
            <button className="language-button ru" onClick={() => handleLanguageChange('ru')}>
              РУС
            </button>
          </div>
        </div>
        <div className="buttons">{isShiftEnabled ? uppercaseCharButtons : characterButtons}</div>

        <div className="btns">
          <button className={`shift-button ${isShiftEnabled ? 'shift-enabled' : ''}`} onClick={handleShiftToggle}>
            Shift
          </button>
          <button className="probel-button" onClick={() => handleClick(' ')}>
            space
          </button>
          <button className="delete-button" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
      <div className="keyboard-container">
      <h1 className='h11'>Enhance your typing experience with our Online Virtual Keyboard</h1>
      <p className="description">
        Featuring multilingual support. Choose between <strong>English (ENG)</strong>, <strong>Armenian (ՀԱՅ)</strong>, and <strong>Russian (РУС)</strong> languages seamlessly.
      </p>
      <p className="description">
        The keyboard dynamically adjusts to the selected language, providing both lowercase and uppercase character options.
      </p>

      <div className="display-area">
        <p>The display area shows your typed text, with the option to switch to uppercase using the Shift button.</p>
      </div>

      <div className="controls">
        <p>Stay in control with easy-to-use language selection buttons and additional controls for Shift, Space, and Delete.</p>
      </div>

      <div className="features">
        <h2>This versatile virtual keyboard is designed for:</h2>
        <ul>
          <li>Intuitive typing</li>
          <li>Efficient typing experience across different languages</li>
        </ul>
      </div>
    </div>
    </Wrapper>
  );
};

export default Keyboard;

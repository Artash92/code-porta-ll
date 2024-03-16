import React, { useState, useEffect } from 'react';
import DOMPurify from 'dompurify';  
import { parse } from 'acorn';     

const CodeEditor = () => {
  const [logs, setLogs] = useState([]);
  const [code, setCode] = useState(`
    // Replace this text with your own text
    // between the quotation marks.

    const welcome = "Welcome";
    const site = "CodePortal.org";

    // Now run your code to see
    // a personalized message.

    console.log(
      \`\${welcome} to \${site}!\`
    );
  `);

  useEffect(() => {
    document.title = "JavaScript Online Code Editor | Онлайн редактор кода JavaScript | Օնլայն կոդի խմբագրիչ JavaScript";
  }, []);

  const runCode = () => {
    try {
      const originalLog = console.log;
      let result = '';

      console.log = (message) => {
        try {
          const sanitizedMessage = sanitizeMessage(message);
          result += sanitizedMessage.toString() + '\n';
        } catch (error) {
          console.error(error);
          setLogs((prevLogs) => [...prevLogs, "Error"]);
          setLogs((prevLogs) => [...prevLogs, "Undefined"]);
        }
      };

      const sanitizedCode = sanitizeCode(code);

      // Проверка на вызовы опасных функций в коде
      if (containsUnsafeFunctions(sanitizedCode)) {
        throw new Error("Forbidden function calls detected!");
      }

      // Замените eval на использование Function API с новым контекстом выполнения
      const runner = new Function('with (window) { ' + sanitizedCode + ' }');
      runner();

      console.log = originalLog; // восстановление оригинальной функции console.log

      setLogs((prevLogs) => [...prevLogs, <pre key={prevLogs.length}>{result}</pre>]);
    } catch (error) {
      console.error(error);
      setLogs((prevLogs) => [...prevLogs, <pre key={prevLogs.length}>{error.toString()}</pre>]);
    }
  };

  const sanitizeMessage = (message) => {
    // Используйте DOMPurify для очистки сообщений от HTML-тегов
    const cleanMessageWithoutHTML = DOMPurify.sanitize(message);
  
    return cleanMessageWithoutHTML;
  };
  
  
  const sanitizeCode = (code) => {
    // Используйте parse из acorn для анализа кода
    const ast = parse(code, { ecmaVersion: 2020 });
  
    // Реализуйте фильтрацию небезопасных узлов AST.
  
    // Простой пример, который заменяет eval и Function на безопасные альтернативы:
    const safeCode = code
      .replace(/eval\s*\(/g, 'console.log(')
      .replace(/new Function/g, 'console.log');
  
    return safeCode;
  };
  
  const containsUnsafeFunctions = (code) => {
    // Проверка наличия вызовов опасных функций в коде
    const unsafeFunctions = /(alert\s*\(|prompt\s*\(|confirm\s*\()/g;
    return unsafeFunctions.test(code) && !code.includes('// allow-unsafe');
  };

  const restrictedCode = code
    .replace(/alert\s*\(/g, 'console.log(')  // Заменить alert на console.log
    .replace(/prompt\s*\(/g, 'console.log(')  // Заменить prompt на console.log
    .replace(/confirm\s*\(/g, 'console.log(');  // Заменить confirm на console.log

  return (
    <div className="main-editor">
      <div className=" ">
      </div>
      <div className="code-editor-container">
        <div className="code-input">
          <button className="run-button" onClick={runCode}>Run Code</button>
          <textarea value={code} onChange={(e) => setCode(e.target.value)} rows={10} />
        </div>
        <div className="code-output">
          {logs.map((log, index) => (
            <p key={index}>{log}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;

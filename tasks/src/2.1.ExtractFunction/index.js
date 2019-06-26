import React from 'react';
import ReactDom from 'react-dom';
import './styles.css';

/**
     Выдели метод отрисовки лота (renderLot), метод отрисовки поста (renderPost) и используй их.
 */

function renderLot(content) {
  return (<div className="lot">
    <div className="lotName">Форма для выпекания</div>
    <div className="lotDescription">Идеальна для приготовления десертов!</div>
  </div>)
}

function renderPost() {
  const postAuthors = ['Парень не промах', 'Милая девушка'];
  const postTimes = ['2 часа назад', '3 часа назад'];
  const postMessages = ['Попробую с удовольствием ;)', 'Можно использовать для выпекания чизкейков :)'];

  let markup = [];

  for (let i = 0; i < postAuthors.length; i++) {
    markup.push(
      <div key="" className="post">
        <div className="postHeader">
          <span className="postAuthor">{postAuthors[i]}</span>
          <br />
          <span className="postTime">{postTimes[i]}</span>
        </div>
        <div className="postMessage">{postMessages[i]}</div>
      </div>)
  }
  return markup;
}

ReactDom.render(
  <div className="page">
    {renderLot()}
    <div className="posts">
      {renderPost()}
    </div>
  </div>,
  document.getElementById('app')
);

/**
     Подсказки:
     - Чтобы вставить какое-то значение из JavaScript в верстку используй фигурные скобки:
       <div className={'star' + ' ' + 'person'}>{surname + ' ' + name}</div>
     - Воспринимай тэг верстки как литерал, описывающий значение некоторого типа данных.
         - Это значение можно положить в переменную или вернуть:
           const label = <span>Надпись</span>;
         - Из эстетических соображений возвращаемый тэг часто оборачивается в круглые скобки:
           return (
             <span>Надпись</span>
           );
     - Используй автоформатирование кода. Например, в Visual Studio Code оно вызывается сочетанием Control+Shift+F
 */

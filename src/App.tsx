import React from "react";
import "./App.css";
import Buttons from "./components/Buttons/Buttons";
import TopButtons from "./components/Buttons/TopButtons";
import FloatKey from "./components/FloatKey";
import Modal from "./components/Modal/Modal";
import ModalImage from "./components/Modal/ModalImage";
import ModalNewSize from "./components/Modal/ModalNewSize";
import ModalRotate from "./components/Modal/ModalRotate";
import ModalSave from "./components/Modal/ModalSave";
import ModalSave2 from "./components/Modal/ModalSave2";
import Board from './components/Board/Board';

function App() {

  return (
    <div className="App">
      <header>
        <h3 id="title">編集モード</h3>
        <TopButtons />
        <Buttons />

      </header>

      <div id="dvique" className="dvique">
        <Board />
      </div>

      <div id="bottom_button">
        <input type="button" id="tb_undo" value="戻" className="button" />
        <input type="button" id="tb_redo" value="進" className="button" />
        <input
          type="button"
          id="tb_reset"
          value="選択消去"
          className="button"
        />
        <input
          type="button"
          id="tb_delete"
          value="問題・解答消去"
          className="button"
        />
        <br />
        <br />
        <br />
        <span id="footer1">
          Penpa-editor Ver.2.25{" "}
          <a href="https://github.com/opt-pan/penpa-edit">opt-pan</a>
        </span>
        <span id="footer2">
          要望は
          <a href="https://github.com/opt-pan/penpa-edit/issues">こちら</a>
        </span>
      </div>

      <FloatKey />
      <Modal />
      <ModalNewSize />
      <ModalImage />
      <ModalRotate />
      <ModalSave />
      <ModalSave2 />
    </div>
  );
}

export default App;

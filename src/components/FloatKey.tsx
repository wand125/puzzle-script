const FloatKey: React.FC<{}> = () => {
  return (
    <div id="float-key">
      <div className="drag-and-drop" id="float-key-header">
        <h4 id="float-key-header-lb">panel</h4>
      </div>
      <div id="float-key-body">
        <div id="float-key-menu">
          <ul className="panel_menu">
            <li>
              <span id="panel_1">
                <label
                  htmlFor="panel_1"
                  id="panel_1_lbmenu"
                  className="label_menu"
                >
                  {" "}
                  1{" "}
                </label>
              </span>
            </li>
            <li>
              <span id="panel_A">
                <label
                  htmlFor="panel_A"
                  id="panel_A_lbmenu"
                  className="label_menu"
                >
                  A
                </label>
              </span>
            </li>
            <li>
              <span id="panel_a">
                <label
                  htmlFor="panel_a"
                  id="panel_a_lbmenu"
                  className="label_menu"
                >
                  a
                </label>
              </span>
            </li>
            <li>
              <span id="panel_Text">
                <label
                  htmlFor="panel_Text"
                  id="panel_Text_lbmenu"
                  className="label_menu"
                >
                  Text
                </label>
              </span>
            </li>
            <li>
              <span id="panel_select">
                <label
                  htmlFor="panel_select"
                  id="panel_select_lbmenu"
                  className="label_select"
                >
                  ▶
                </label>
              </span>
            </li>
          </ul>
        </div>
        <div id="float-key-select" style={{ display: "none" }}>
          <ul className="panel_menu_select">
            <li>
              <div id="panel_ja_K">
                <label
                  htmlFor="panel_ja_K"
                  id="panel_ja_K_lbmenu"
                  className="label_menu"
                >
                  ア
                </label>
              </div>
            </li>
            <br />
            <li>
              <div id="panel_ja_H">
                <label
                  htmlFor="panel_ja_H"
                  id="panel_ja_H_lbmenu"
                  className="label_menu"
                >
                  あ
                </label>
              </div>
            </li>
            <br />
            <li>
              <div id="panel_!">
                <label
                  htmlFor="panel_!"
                  id="panel_!_lbmenu"
                  className="label_menu"
                >
                  !
                </label>
              </div>
            </li>
            <br />
            <li>
              <div id="panel_Kan">
                <label
                  htmlFor="panel_Kan"
                  id="panel_Kan_lbmenu"
                  className="label_menu"
                >
                  漢
                </label>
              </div>
            </li>
            <br />
            <li>
              <div id="panel_Rome">
                <label
                  htmlFor="panel_Rome"
                  id="panel_Rome_lbmenu"
                  className="label_menu"
                >
                  Ⅰ
                </label>
              </div>
            </li>
            <br />
            <li>
              <div id="panel_Greek">
                <label
                  htmlFor="panel_Greek"
                  id="panel_Greek_lbmenu"
                  className="label_menu"
                >
                  α
                </label>
              </div>
            </li>
            <br />
            <li>
              <div id="panel_europe">
                <label
                  htmlFor="panel_europe"
                  id="panel_europe_lbmenu"
                  className="label_menu"
                >
                  À
                </label>
              </div>
            </li>
            <br />
            <li>
              <div id="panel_Cyrillic">
                <label
                  htmlFor="panel_Cyrillic"
                  id="panel_Cyrillic_lbmenu"
                  className="label_menu"
                >
                  Ж
                </label>
              </div>
            </li>
            <br />
            <li>
              <div id="panel_Chess">
                <label
                  htmlFor="panel_Chess"
                  id="panel_Chess_lbmenu"
                  className="label_menu"
                >
                  ♛
                </label>
              </div>
            </li>
            <br />
            <li>
              <div id="panel_card">
                <label
                  htmlFor="panel_card"
                  id="panel_card_lbmenu"
                  className="label_menu"
                >
                  ♠
                </label>
              </div>
            </li>
          </ul>
        </div>
        <div id="float-key-board">
          <canvas id="float-canvas" className="float-canvas"></canvas>
        </div>
        <div id="float-key-text">
          <textarea
            rows={1}
            cols={20}
            maxLength={100}
            id="inputtext"
          ></textarea>
          <input type="button" id="closeBtn_input1" value="挿入" />
          <input type="button" id="closeBtn_input2" value="クリア" />
        </div>
      </div>
    </div>
  );
};
export default FloatKey;
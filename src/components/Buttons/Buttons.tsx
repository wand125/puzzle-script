import ModeCombi from "../Mode/ModeCombi";
import ModeLine from "../Mode/ModeLine";
import ModeLineE from "../Mode/ModeLineE";
import ModeMove from "../Mode/ModeMove";
import ModeNumber from "../Mode/ModeNumber";
import ModeSpecial from "../Mode/ModeSpecial";
import ModeSymbol from "../Mode/ModeSymbol";

const Buttons: React.FC<{}> = () => {
  return (
    <div id="buttons">
      <div id="edit_button" className="mode_button">
        <label className="label_mode" id="edit_txt">
          　編集：
        </label>
        <input type="radio" name="mode_qa" id="pu_q" value={1} checked={true} />
        <label htmlFor="pu_q" className="label" id="pu_q_label">
          問題
        </label>
        <input type="radio" name="mode_qa" id="pu_a" value={2} />
        <label htmlFor="pu_a" className="label" id="pu_a_label">
          解答
        </label>
        <span id="panel_button0" className="label">
          パネル：
        </span>
        <span id="panel_button" className="label">
          OFF
        </span>
        <span id="edge_button0" className="label">
          辺入力：
        </span>
        <span id="edge_button" className="label">
          OFF
        </span>
      </div>
      <div id="mode_button" className="mode_button">
        <label className="label_mode" id="mode_txt">
          モード：
        </label>
        <input type="radio" name="mode" id="mo_surface" checked={true} />
        <label htmlFor="mo_surface" className="label" id="mo_surface_lb">
          黒マス
        </label>
        <input type="radio" name="mode" id="mo_line" />
        <label htmlFor="mo_line" className="label" id="mo_line_lb">
          線
        </label>
        <input type="radio" name="mode" id="mo_lineE" />
        <label htmlFor="mo_lineE" className="label" id="mo_lineE_lb">
          辺
        </label>
        <input type="radio" name="mode" id="mo_wall" />
        <label htmlFor="mo_wall" className="label" id="mo_wall_lb">
          壁
        </label>
        <input type="radio" name="mode" id="mo_board" />
        <label htmlFor="mo_board" className="label_option" id="mo_board_lb">
          マス
        </label>
        <input type="radio" name="mode" id="mo_move" />
        <label htmlFor="mo_move" className="label_option" id="mo_move_lb">
          移動
        </label>
        <br />
        <label className="label_mode" id="mode_txt_space">
          　　　　
        </label>
        <input type="radio" name="mode" id="mo_number" />
        <label htmlFor="mo_number" className="label" id="mo_number_lb">
          数字
        </label>
        <input type="radio" name="mode" id="mo_symbol" />
        <label htmlFor="mo_symbol" className="label" id="mo_symbol_lb">
          記号
        </label>
        <input type="radio" name="mode" id="mo_special" />
        <label htmlFor="mo_special" className="label" id="mo_special_lb">
          特殊
        </label>
        <input type="radio" name="mode" id="mo_cage" />
        <label htmlFor="mo_cage" className="label" id="mo_cage_lb">
          枠
        </label>
        <input type="radio" name="mode" id="mo_combi" />
        <label htmlFor="mo_combi" className="label_option" id="mo_combi_lb">
          複合
        </label>

        <br />
      </div>
      {/* <hr size={1} noshade /> */}
      <hr />
      <div id="submode_button" className="submode_button">
        <span id="div_sub">
          <label className="label_mode" id="sub_txt">
            　サブ：
          </label>
        </span>

        <ModeLine />
        <ModeLineE />
        <ModeNumber />
        <ModeSymbol />
        <ModeSpecial />
        <ModeMove />
        <ModeCombi />
      </div>
      <div id="stylemode_button" className="stylemode_button">
        <span id="div_all">
          <label className="label_mode" id="style_txt">
            スタイル
          </label>
        </span>
        <span id="style_surface" style={{ display: "inline-block" }}>
          <input
            type="radio"
            name="style_surface"
            value="1"
            id="st_surface1"
            checked={true}
          />
          <label htmlFor="st_surface1" className="labelL" id="st_surface1_lb">
            濃灰
          </label>
          <input type="radio" name="style_surface" value="3" id="st_surface3" />
          <label htmlFor="st_surface3" className="labelL" id="st_surface3_lb">
            薄灰
          </label>
          <input type="radio" name="style_surface" value="4" id="st_surface4" />
          <label htmlFor="st_surface4" className="labelL" id="st_surface4_lb">
            黒
          </label>
          <input type="radio" name="style_surface" value="9" id="st_surface9" />
          <label htmlFor="st_surface9" className="labelL" id="st_surface9_lb">
            青
          </label>
          <input type="radio" name="style_surface" value="2" id="st_surface2" />
          <label htmlFor="st_surface2" className="labelL" id="st_surface2_lb">
            緑
          </label>
          <input type="radio" name="style_surface" value="5" id="st_surface5" />
          <label htmlFor="st_surface5" className="labelL" id="st_surface5_lb">
            水
          </label>
          <input type="radio" name="style_surface" value="6" id="st_surface6" />
          <label htmlFor="st_surface6" className="labelL" id="st_surface6_lb">
            赤
          </label>
          <input type="radio" name="style_surface" value="7" id="st_surface7" />
          <label htmlFor="st_surface7" className="labelL" id="st_surface7_lb">
            黄
          </label>
          <input type="radio" name="style_surface" value="8" id="st_surface8" />
          <label htmlFor="st_surface8" className="labelL" id="st_surface8_lb">
            隠灰
          </label>
        </span>

        <span id="style_line" style={{ display: "none" }}>
          <input
            type="radio"
            name="style_line"
            value="3"
            id="st_line3"
            checked={true}
          />
          <label htmlFor="st_line3" className="labelL" id="st_line3_lb">
            緑
          </label>
          <input type="radio" name="style_line" value="80" id="st_line80" />
          <label htmlFor="st_line80" className="labelL" id="st_line80_lb">
            細
          </label>
          <input type="radio" name="style_line" value="2" id="st_line2" />
          <label htmlFor="st_line2" className="labelL" id="st_line2_lb">
            太
          </label>
          <input type="radio" name="style_line" value="12" id="st_line12" />
          <label htmlFor="st_line12" className="labelL" id="st_line12_lb">
            点
          </label>
          <input type="radio" name="style_line" value="13" id="st_line13" />
          <label htmlFor="st_line13" className="labelL" id="st_line13_lb">
            太点
          </label>
          <input type="radio" name="style_line" value="5" id="st_line5" />
          <label htmlFor="st_line5" className="labelL" id="st_line5_lb">
            灰
          </label>
          <input type="radio" name="style_line" value="40" id="st_line40" />
          <label htmlFor="st_line40" className="labelL" id="st_line40_lb">
            短
          </label>
          <input type="radio" name="style_line" value="30" id="st_line30" />
          <label htmlFor="st_line30" className="labelL" id="st_line30_lb">
            二重
          </label>
        </span>

        <span id="style_lineE" style={{ display: "none" }}>
          <input
            type="radio"
            name="style_lineE"
            value="3"
            id="st_lineE3"
            checked={true}
          />
          <label htmlFor="st_lineE3" className="labelL" id="st_lineE3_lb">
            緑
          </label>
          <input type="radio" name="style_lineE" value="80" id="st_lineE80" />
          <label htmlFor="st_lineE80" className="labelL" id="st_lineE80_lb">
            細
          </label>
          <input type="radio" name="style_lineE" value="2" id="st_lineE2" />
          <label htmlFor="st_lineE2" className="labelL" id="st_lineE2_lb">
            太
          </label>
          <input type="radio" name="style_lineE" value="12" id="st_lineE12" />
          <label htmlFor="st_lineE12" className="labelL" id="st_lineE12_lb">
            点
          </label>
          <input type="radio" name="style_lineE" value="13" id="st_lineE13" />
          <label htmlFor="st_lineE13" className="labelL" id="st_lineE13_lb">
            太点
          </label>
          <input type="radio" name="style_lineE" value="5" id="st_lineE5" />
          <label htmlFor="st_lineE5" className="labelL" id="st_lineE5_lb">
            灰
          </label>
          <input type="radio" name="style_lineE" value="8" id="st_lineE8" />
          <label htmlFor="st_lineE8" className="labelL" id="st_lineE8_lb">
            細灰
          </label>
          <input type="radio" name="style_lineE" value="30" id="st_lineE30" />
          <label htmlFor="st_lineE30" className="labelL" id="st_lineE30_lb">
            二重
          </label>
        </span>

        <span id="style_wall" style={{ display: "none" }}>
          <input
            type="radio"
            name="style_wall"
            value="3"
            id="st_wall3"
            checked={true}
          />
          <label htmlFor="st_wall3" className="labelL" id="st_wall3_lb">
            緑
          </label>
          <input type="radio" name="style_wall" value="1" id="st_wall1" />
          <label htmlFor="st_wall1" className="labelL" id="st_wall1_lb">
            細
          </label>
          <input type="radio" name="style_wall" value="2" id="st_wall2" />
          <label htmlFor="st_wall2" className="labelL" id="st_wall2_lb">
            太
          </label>
          <input type="radio" name="style_wall" value="12" id="st_wall12" />
          <label htmlFor="st_wall12" className="labelL" id="st_wall12_lb">
            点
          </label>
          <input type="radio" name="style_wall" value="17" id="st_wall17" />
          <label htmlFor="st_wall17" className="labelL" id="st_wall17_lb">
            太点
          </label>
          <input type="radio" name="style_wall" value="14" id="st_wall14" />
          <label htmlFor="st_wall14" className="labelL" id="st_wall14_lb">
            灰点
          </label>
          <input type="radio" name="style_wall" value="5" id="st_wall5" />
          <label htmlFor="st_wall5" className="labelL" id="st_wall5_lb">
            灰
          </label>
          <input type="radio" name="style_wall" value="30" id="st_wall30" />
          <label htmlFor="st_wall30" className="labelL" id="st_wall30_lb">
            二重
          </label>
        </span>

        <span id="style_number" style={{ display: "none" }}>
          <input
            type="radio"
            name="style_number"
            value="1"
            id="st_number1"
            checked={true}
          />
          <label htmlFor="st_number1" className="labelL" id="st_number1_lb">
            黒
          </label>
          <input type="radio" name="style_number" value="2" id="st_number2" />
          <label htmlFor="st_number2" className="labelL" id="st_number2_lb">
            緑
          </label>
          <input type="radio" name="style_number" value="8" id="st_number8" />
          <label htmlFor="st_number8" className="labelL" id="st_number8_lb">
            青
          </label>
          <input type="radio" name="style_number" value="3" id="st_number3" />
          <label htmlFor="st_number3" className="labelL" id="st_number3_lb">
            灰
          </label>
          <input type="radio" name="style_number" value="4" id="st_number4" />
          <label htmlFor="st_number4" className="labelL" id="st_number4_lb">
            白
          </label>
          <input type="radio" name="style_number" value="0" id="st_number0" />
          <label htmlFor="st_number0" className="labelL" id="st_number0_lb">
            白抜
          </label>
          <input type="radio" name="style_number" value="6" id="st_number6" />
          <label htmlFor="st_number6" className="labelL" id="st_number6_lb">
            白丸
          </label>
          <input type="radio" name="style_number" value="7" id="st_number7" />
          <label htmlFor="st_number7" className="labelL" id="st_number7_lb">
            黒丸
          </label>
          <input type="radio" name="style_number" value="5" id="st_number5" />
          <label htmlFor="st_number5" className="label" id="st_number5_lb">
            白背景
          </label>
        </span>

        <span id="style_symbol" style={{ display: "none" }}>
          <input type="radio" name="style_symbol" value="1" id="st_symbol1" />
          <label htmlFor="st_symbol1" className="label" id="st_symbol1_lb">
            線-奥
          </label>
          <input
            type="radio"
            name="style_symbol"
            value="2"
            id="st_symbol2"
            checked={true}
          />
          <label htmlFor="st_symbol2" className="label" id="st_symbol2_lb">
            線-前
          </label>
          <span className="symbolmode_display">
            <span id="panel_buttons0" className="label">
              選択中：
            </span>
            <b>
              <span id="symmode_content" className="symmode_content">
                circle_L
              </span>
            </b>
          </span>
        </span>

        <span id="style_combi" style={{ display: "none" }}>
          <span className="combimode_display">
            <span id="panel_buttonc0" className="label">
              選択中：
            </span>
            <b>
              <span id="combimode_content" className="combimode_content">
                blpo
              </span>
            </b>
          </span>
        </span>

        <span id="style_cage" style={{ display: "none" }}>
          <input
            type="radio"
            name="style_cage"
            value="10"
            id="st_cage10"
            checked={true}
          />
          <label htmlFor="st_cage10" className="label" id="st_cage10_lb">
            点線
          </label>
          <input type="radio" name="style_cage" value="7" id="st_cage7" />
          <label htmlFor="st_cage7" className="label" id="st_cage7_lb">
            灰線
          </label>
          <input type="radio" name="style_cage" value="15" id="st_cage15" />
          <label htmlFor="st_cage15" className="label" id="st_cage15_lb">
            灰点
          </label>
          <input type="radio" name="style_cage" value="16" id="st_cage16" />
          <label htmlFor="st_cage16" className="label" id="st_cage16_lb">
            実線
          </label>
        </span>
      </div>
    </div>
  );
};
export default Buttons;

const ModeSymbol: React.FC<{}> = () => {
  return (
    <span id="mode_symbol" className="mode_symbol" style={{ display: "none" }}>
      <ul className="nav">
        <li>
          <span id="ms1">図形</span>
          <ul id="mode_symbolul1">
            <li>
              <span id="ms1_circle">円</span>
              <ul>
                <li>
                  <span id="ms_circle_L">大</span>
                </li>
                <li>
                  <span id="ms_circle_M">中</span>
                </li>
                <li>
                  <span id="ms_circle_S">小</span>
                </li>
                <li>
                  <span id="ms_circle_SS">極小</span>
                </li>
              </ul>
            </li>
            <li>
              <span id="ms1_square">正方形</span>
              <ul>
                <li>
                  <span id="ms_square_LL">特大</span>
                </li>
                <li>
                  <span id="ms_square_L">大</span>
                </li>
                <li>
                  <span id="ms_square_M">中</span>
                </li>
                <li>
                  <span id="ms_square_S">小</span>
                </li>
                <li>
                  <span id="ms_square_SS">極小</span>
                </li>
              </ul>
            </li>
            <li>
              <span id="ms1_triup">上三角</span>
              <ul>
                <li>
                  <span id="ms_triup_L">大</span>
                </li>
                <li>
                  <span id="ms_triup_M">中</span>
                </li>
                <li>
                  <span id="ms_triup_SS">極小</span>
                </li>
              </ul>
            </li>
            <li>
              <span id="ms1_tridown">下三角</span>
              <ul>
                <li>
                  <span id="ms_tridown_L">大</span>
                </li>
                <li>
                  <span id="ms_tridown_M">中</span>
                </li>
                <li>
                  <span id="ms_tridown_SS">極小</span>
                </li>
              </ul>
            </li>
            <li id="msli_triright">
              <span id="ms1_triright">右三角</span>
              <ul>
                <li>
                  <span id="ms_triright_L">大</span>
                </li>
                <li>
                  <span id="ms_triright_M">中</span>
                </li>
                <li>
                  <span id="ms_triright_SS">極小</span>
                </li>
              </ul>
            </li>
            <li id="msli_trileft">
              <span id="ms1_trileft">左三角</span>
              <ul>
                <li>
                  <span id="ms_trileft_L">大</span>
                </li>
                <li>
                  <span id="ms_trileft_M">中</span>
                </li>
                <li>
                  <span id="ms_trileft_SS">極小</span>
                </li>
              </ul>
            </li>
            <li>
              <span id="ms1_diamond">ダイヤ</span>
              <ul>
                <li>
                  <span id="ms_diamond_L">大</span>
                </li>
                <li>
                  <span id="ms_diamond_M">中</span>
                </li>
                <li>
                  <span id="ms_diamond_SS">極小</span>
                </li>
              </ul>
            </li>
            <li>
              <span id="ms1_ox">○△□×</span>
              <ul>
                <li>
                  <span id="ms_ox_B">黒</span>
                </li>
                <li>
                  <span id="ms_ox_E">緑</span>
                </li>
                <li>
                  <span id="ms_ox_G">灰</span>
                </li>
              </ul>
            </li>
            <li>
              <span id="ms_cross">十字</span>
            </li>
            <li>
              <span id="ms_line">線</span>
            </li>
            <li>
              <span id="ms_tri">直角三角形</span>
            </li>
          </ul>
        </li>
        <li>
          <span id="ms2">数字</span>
          <ul id="mode_symbolul2">
            <li>
              <span id="ms3_math">無限・計算</span>
              <ul>
                <li>
                  <span id="ms_math">黒</span>
                </li>
                <li>
                  <span id="ms_math_G">緑</span>
                </li>
              </ul>
            </li>
            <li>
              <span id="ms_inequality">不等号</span>
            </li>
            <li>
              <span id="ms_degital">デジタル数字</span>
            </li>
            <li>
              <span id="ms_degital_f">デジタル(枠)</span>
            </li>
            <li>
              <span id="ms_dice">サイコロ</span>
            </li>
            <li>
              <span id="ms_pills">Pills</span>
            </li>
          </ul>
        </li>
        <li>
          <span id="ms3">矢印</span>
          <ul id="mode_symbolul3">
            <li>
              <span id="ms3_arrow_B">太</span>
              <ul>
                <li>
                  <span id="ms_arrow_B_B">黒</span>
                </li>
                <li>
                  <span id="ms_arrow_B_G">灰</span>
                </li>
                <li>
                  <span id="ms_arrow_B_W">白</span>
                </li>
              </ul>
            </li>
            <li>
              <span id="ms3_arrow_N">細</span>
              <ul>
                <li>
                  <span id="ms_arrow_N_B">黒</span>
                </li>
                <li>
                  <span id="ms_arrow_N_G">灰</span>
                </li>
                <li>
                  <span id="ms_arrow_N_W">白</span>
                </li>
              </ul>
            </li>
            <li>
              <span id="ms3_arrow_tri">三角形</span>
              <ul>
                <li>
                  <span id="ms_arrow_tri_B">黒</span>
                </li>
                <li>
                  <span id="ms_arrow_tri_G">灰</span>
                </li>
                <li>
                  <span id="ms_arrow_tri_W">白</span>
                </li>
              </ul>
            </li>
            <li id="ms0_arrow_fouredge">
              <span id="ms3_arrow_fouredge">四辺</span>
              <ul>
                <li>
                  <span id="ms_arrow_fouredge_B">黒</span>
                </li>
                <li>
                  <span id="ms_arrow_fouredge_G">灰</span>
                </li>
                <li>
                  <span id="ms_arrow_fouredge_E">緑</span>
                </li>
              </ul>
            </li>
            <li>
              <span id="ms3_arrow_GP">GP</span>
              <ul>
                <li>
                  <span id="ms_arrow_GP">通常</span>
                </li>
                <li>
                  <span id="ms_arrow_GP_C">丸付き</span>
                </li>
              </ul>
            </li>
            <li>
              <span id="ms_arrow_Short">短太</span>
            </li>
            <li>
              <span id="ms_arrow_S">小</span>
            </li>
            <li>
              <span id="ms_arrow_cross">十字</span>
            </li>
            <li>
              <span id="ms_arrow_eight">八方</span>
            </li>
            <li>
              <span id="ms_arrow_fourtip">四端</span>
            </li>
          </ul>
        </li>
        <li>
          <span id="ms4">固有1</span>
          <ul id="mode_symbolul4">
            <li>
              <span id="ms4_battleship">バトルシップ</span>
              <ul>
                <li>
                  <span id="ms_battleship_B">黒</span>
                </li>
                <li>
                  <span id="ms_battleship_G">灰</span>
                </li>
                <li>
                  <span id="ms_battleship_W">白</span>
                </li>
                <li>
                  <span id="ms_battleship_B+">追加黒</span>
                </li>
                <li>
                  <span id="ms_battleship_G+">追加灰</span>
                </li>
                <li>
                  <span id="ms_battleship_W+">追加白</span>
                </li>
              </ul>
            </li>
            <li>
              <span id="ms_kakuro">カックロ</span>
            </li>
            <li>
              <span id="ms_tents">テント・魚</span>
            </li>
            <li>
              <span id="ms_star">スター</span>
            </li>
            <li>
              <span id="ms_compass">コンパス</span>
            </li>
            <li>
              <span id="ms_sudokuetc">数独特殊記号</span>
            </li>
            <li>
              <span id="ms_polyomino">ポリオミノ</span>
            </li>
          </ul>
        </li>
        <li>
          <span id="ms5">固有2</span>
          <ul id="mode_symbolul5">
            <li>
              <span id="ms_angleloop">鋭直鈍ループ</span>
            </li>
            <li>
              <span id="ms_firefly">ホタルビーム</span>
            </li>
            <li>
              <span id="ms_sun_moon">月か太陽</span>
            </li>
            <li>
              <span id="ms_pencils">ペンシルズ</span>
            </li>
            <li>
              <span id="ms_slovak">Slovak sums</span>
            </li>
            <li>
              <span id="ms_arc">円弧</span>
            </li>
            <li>
              <span id="ms_darts">Darts</span>
            </li>
            <li>
              <span id="ms_spans">Spans</span>
            </li>
            <li>
              <span id="ms_neighbors">Neighbors</span>
            </li>
            <li>
              <span id="ms_Ondo-K">Ondo-K</span>
            </li>
          </ul>
        </li>
      </ul>
    </span>
  );
};

export default ModeSymbol;

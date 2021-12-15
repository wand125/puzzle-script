const ModeCombi: React.FC<{}> = () => {
  return (
    <span id="mode_combi" style={{ display: "none" }}>
      <ul className="nav">
        <li>
          <span id="subc1">塗り</span>
          <ul>
            <li>
              <span id="combisub_blpo">黒・点</span>
            </li>
            <li>
              <span id="combisub_blwh">白丸黒丸</span>
            </li>
            <li id="combili_shaka">
              <span id="combisub_shaka">シャカシャカ</span>
            </li>
          </ul>
        </li>
        <li>
          <span id="subc2">ループ</span>
          <ul>
            <li>
              <span id="combisub_linex">線・×</span>
            </li>
            <li>
              <span id="combisub_lineox">線・OX</span>
            </li>
            <li>
              <span id="combisub_edgexoi">辺・x・内外</span>
            </li>
            <li>
              <span id="combisub_yajilin">ヤジリン</span>
            </li>
            <li>
              <span id="combisub_hashi">橋をかけろ</span>
            </li>
          </ul>
        </li>
        <li>
          <span id="subc3">領域</span>
          <ul>
            <li>
              <span id="combisub_edgesub">辺・補助線</span>
            </li>
          </ul>
        </li>
        <li>
          <span id="subc4">物体</span>
          <ul>
            <li id="combili_battleship">
              <span id="combisub_battleship">バトルシップ</span>
            </li>
            <li>
              <span id="combisub_star">スターバトル</span>
            </li>
            <li>
              <span id="combisub_tents">テント</span>
            </li>
            <li>
              <span id="combisub_magnets">マグネット</span>
            </li>
            <li id="combili_arrowS">
              <span id="combisub_arrowS">矢印フリック</span>
            </li>
          </ul>
        </li>
        <li>
          <span id="subc5">数字埋</span>
          <ul>
            <li>
              <span id="combisub_numfl">数字フリック</span>
            </li>
            <li>
              <span id="combisub_alfl">英字フリック</span>
            </li>
          </ul>
        </li>
      </ul>
      <input
        type="radio"
        name="mode_combi"
        value="battleship"
        id="sub_combibattleship"
        checked={true}
      />
      <label
        htmlFor="sub_combibattleship"
        className="label"
        id="sub_combibattleship_lb"
      >
        船
      </label>
    </span>
  );
};

export default ModeCombi;

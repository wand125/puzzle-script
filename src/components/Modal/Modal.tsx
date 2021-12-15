const Modal: React.FC<{}> = () => {
  const changetype = () => {};
  return (
    <div id="modal" className="modal">
      <div id="modal-content">
        <div id="modal-header">
          <h3 id="modal_lb">　新規作成</h3>
        </div>
        <span id="modal-grid">
          <h4 id="div_all">
            <label className="label_nb" id="nb_type_lb">
              盤面：
            </label>
          </h4>
          <select id="gridtype" onChange={() => changetype()}>
            <option value="square" id="nb_type1_lb" selected={true}>
              正方形
            </option>
            <option value="hex" id="nb_type2_lb">
              正六角形
            </option>
            <option value="tri" id="nb_type3_lb">
              正三角形
            </option>
            <option value="pyramid" id="nb_type4_lb">
              ピラミッド
            </option>
            <option value="iso" id="nb_type5_lb">
              立方体
            </option>

            <option value="truncated_square">Truncated square</option>
            <option value="tetrakis_square">Tetrakis square</option>
            <option value="snub_square">Snub square</option>
            <option value="cairo_pentagonal">Cairo pentagonal</option>
          </select>
        </span>
        <br />
        <h4 id="div_all">
          <label className="label_nb" id="nb_size_lb">
            サイズ：
          </label>
        </h4>
        <span>
          <span id="div_all">
            <label className="label_nb" id="name_size1">
              ヨコ：
            </label>
          </span>
          <input
            type="number"
            pattern="\d*"
            name="nb_size1"
            id="nb_size1"
            value="10"
            min="1"
            max="50"
            step="1"
          />
          <span id="div_all">
            <label className="label_nb" id="name_size2">
              タテ：
            </label>
          </span>
          <input
            type="number"
            pattern="\d*"
            name="nb_size2"
            id="nb_size2"
            value="10"
            min="1"
            max="50"
            step="1"
          />
        </span>
        <br />
        <h4 id="div_all">
          <label className="label_nb" id="nb_space_lb">
            余白：
          </label>
        </h4>
        {/*「マス」モードで設定*/}
        <span id="modal-spaceud" style={{ display: "inline" }}>
          <span id="div_all">
            <label className="label_nb" id="name_space1">
              上：
            </label>
          </span>
          <input
            type="number"
            pattern="\d*"
            name="nb_space1"
            id="nb_space1"
            value="0"
            min="0"
            max="10"
            step="1"
          />
          <span id="div_all">
            <label className="label_nb" id="name_space2">
              下：
            </label>
          </span>
          <input
            type="number"
            pattern="\d*"
            name="nb_space2"
            id="nb_space2"
            value="0"
            min="0"
            max="10"
            step="1"
          />
        </span>
        <br />
        <h4 id="div_all">
          <label className="label_nb">　　　</label>
        </h4>
        <span id="modal-spacelr" style={{ display: "inline" }}>
          <span id="div_all">
            <label className="label_nb" id="name_space3">
              左：
            </label>
          </span>
          <input
            type="number"
            pattern="\d*"
            name="nb_space3"
            id="nb_space3"
            value="0"
            min="0"
            max="10"
            step="1"
          />
          <span id="div_all">
            <label className="label_nb" id="name_space4">
              右：
            </label>
          </span>
          <input
            type="number"
            pattern="\d*"
            name="nb_space4"
            id="nb_space4"
            value="0"
            min="0"
            max="10"
            step="1"
          />
        </span>
        <br />
        {/* <hr size={1} noshade />*/}
        <hr />
        <h6>
          <label id="nb_note">"枠変更"では以下の値のみ更新されます</label>
        </h6>
        <br />
        <h4 id="div_all">
          <label className="label_nb" id="nb_sizep_lb">
            表示サイズ：
          </label>
        </h4>
        <span id="">
          <input
            type="number"
            pattern="\d*"
            name="nb_size3"
            id="nb_size3"
            value="38"
            min="10"
            max="60"
            step="2"
          />
        </span>

        <br />
        <h4 id="div_all">
          <label className="label_nb" id="nb_grid_lb">
            グリッド：
          </label>
        </h4>
        <input
          type="radio"
          name="nb_grid"
          value="1"
          id="nb_grid1"
          checked={true}
        />
        <label htmlFor="nb_grid1" className="label" id="nb_grid1_lb">
          実線
        </label>
        <input type="radio" name="nb_grid" value="2" id="nb_grid2" />
        <label htmlFor="nb_grid2" className="label" id="nb_grid2_lb">
          点線
        </label>
        <input type="radio" name="nb_grid" value="3" id="nb_grid3" />
        <label htmlFor="nb_grid3" className="label" id="nb_grid3_lb">
          なし
        </label>
        <br />
        <h4 id="div_all">
          <label className="label_nb" id="nb_lat_lb">
            　格子点：
          </label>
        </h4>
        <input type="radio" name="nb_lat" value="1" id="nb_lat1" />
        <label htmlFor="nb_lat1" className="label" id="nb_lat1_lb">
          あり
        </label>
        <input
          type="radio"
          name="nb_lat"
          value="2"
          id="nb_lat2"
          checked={true}
        />
        <label htmlFor="nb_lat2" className="label" id="nb_lat2_lb">
          なし
        </label>
        <br />
        <h4 id="div_all">
          <label className="label_nb" id="nb_out_lb">
            　　外枠：
          </label>
        </h4>
        <input
          type="radio"
          name="nb_out"
          value="1"
          id="nb_out1"
          checked={true}
        />
        <label htmlFor="nb_out1" className="label" id="nb_out1_lb">
          あり
        </label>
        <input type="radio" name="nb_out" value="2" id="nb_out2" />
        <label htmlFor="nb_out2" className="label" id="nb_out2_lb">
          なし
        </label>
        <br />
        <br />
        <div className="nb_button">
          <input type="button" id="closeBtn_nb1" value="作成" />
          <input type="button" id="closeBtn_nb2" value="枠変更" />
          <input type="button" id="closeBtn_nb3" value="キャンセル" />
        </div>
      </div>
    </div>
  );
}
export default Modal;

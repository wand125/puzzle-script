const ModalSave2: React.FC<{}> = () => {
  const duplicate = () => {};
  const trans = () => {};
  return (
    <div id="modal-save2" className="modal">
      <div id="modal-save2-content">
        <div id="modal-header">
          <h3 id="save2texttitle">拡張出力</h3>
        </div>
        <div className="nb_button">
          <input type="button" id="solution_open" value="解答判定" />
          <input type="button" id="pp_file_open" value="pp_file" />
        </div>
        <div id="modal-save2-solution">
          <div className="nb_button">
            <h5 id="savetexttitle_lb">判定対象：解答モードの以下</h5>
            {/*<div align="left" id="solutiontext">*/}
            <div id="solutiontext">
              <p id="solutiontext1">黒マス：濃灰・黒・正方形特大2</p>
              <p id="solutiontext2">線：緑・二重　辺：緑・二重　壁：緑</p>
              <p id="solutiontext3">数字：通常・大・中・小の緑</p>
              <p id="solutiontext4">記号：円中1-2、直角三角形1-4、矢印小1-8</p>
              <p id="solutiontext5">無限・計算-黒緑2-3</p>
              <p id="solutiontext6">
                固有1-バトルシップ黒1-6、テント2、スター1-3
              </p>
            </div>
            <input
              type="checkbox"
              name="nb_solution_bl"
              value="solution_bl"
              id="nb_check_solution_bl"
              checked={true}
            />
            <label htmlFor="nb_check_solution_bl" id="nb_check_solution_bl_lb">
              黒マス
            </label>
            <input
              type="checkbox"
              name="nb_solution_line"
              value="solution_line"
              id="nb_check_solution_line"
              checked={true}
            />
            <label
              htmlFor="nb_check_solution_line"
              id="nb_check_solution_line_lb"
            >
              緑線
            </label>
            <input
              type="checkbox"
              name="nb_solution_line"
              value="solution_lineE"
              id="nb_check_solution_lineE"
              checked={true}
            />
            <label
              htmlFor="nb_check_solution_lineE"
              id="nb_check_solution_lineE_lb"
            >
              緑辺
            </label>
            <input
              type="checkbox"
              name="nb_solution_wall"
              value="solution_wall"
              id="nb_check_solution_wall"
              checked={true}
            />
            <label
              htmlFor="nb_check_solution_wall"
              id="nb_check_solution_wall_lb"
            >
              緑壁
            </label>
            <br />
            <input
              type="checkbox"
              name="nb_solution_num"
              value="solution_num"
              id="nb_check_solution_num"
              checked={true}
            />
            <label
              htmlFor="nb_check_solution_num"
              id="nb_check_solution_num_lb"
            >
              緑数字
            </label>
            <input
              type="checkbox"
              name="nb_solution_sym"
              value="solution_sym"
              id="nb_check_solution_sym"
              checked={true}
            />
            <label
              htmlFor="nb_check_solution_sym"
              id="nb_check_solution_sym_lb"
            >
              記号
            </label>
            <br />
            <input
              type="button"
              id="closeBtn_save5"
              value="解答判定付き出題用アドレスを出力"
            />
          </div>
        </div>
        <div id="modal-save2-pp" style={{ display: "none" }}>
          <h3 id="save4texttitle">pp_file</h3>
          <h5 id="save5texttitle">ヘッダー</h5>
          <textarea rows={1} cols={50} id="savetextarea_pp"></textarea>
          <div className="nb_button">
            <input type="button" id="pp_file" value="pp_fileを出力" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalSave2;

const ModalImage: React.FC<{}> = () => {
  const saveimage_window = (): void => {};
  return (
    <div id="modal-image" className="modal">
      <div id="modal-image-content">
        <div id="modal-header">
          <h3 id="saveimagetitle">画像保存</h3>
        </div>

        <div id="modal-image-body">
          <h4 id="div_all">
            <label className="label_imagespace" id="nb_margin_lb">
              　余白：
            </label>
          </h4>
          <input
            type="radio"
            name="nb_margin"
            value="1"
            id="nb_margin1"
            checked={true}
          />
          <label htmlFor="nb_margin1" className="label" id="nb_margin1_lb">
            あり
          </label>
          <input type="radio" name="nb_margin" value="2" id="nb_margin2" />
          <label htmlFor="nb_margin2" className="label" id="nb_margin2_lb">
            なし
          </label>
          <br />
          <h4 id="div_all">
            <label className="label_imagespace" id="nb_quality_lb">
              　画質：
            </label>
          </h4>
          <input
            type="radio"
            name="nb_quality"
            value="1"
            id="nb_quality1"
            checked={true}
          />
          <label htmlFor="nb_quality1" className="label" id="nb_quality1_lb">
            高
          </label>
          <input type="radio" name="nb_quality" value="2" id="nb_quality2" />
          <label htmlFor="nb_quality2" className="label" id="nb_quality2_lb">
            低
          </label>
          <br />
          <br />
          <span id="saveimagename_lb">ファイル名：</span>
          <input type="text" value="Image.png" id="saveimagename" />
        </div>
        <br />
        <div className="nb_button">
          <input
            type="button"
            id="closeBtn_image1"
            value="別ウィンドウ"
            onClick={() => saveimage_window()}
          />
          <input type="button" id="closeBtn_image2" value="ダウンロード" />
          <input type="button" id="closeBtn_image3" value="キャンセル" />
        </div>
      </div>
    </div>
  );
};

export default ModalImage;

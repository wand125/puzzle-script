const TopButtons: React.FC<{}> = () => {
  const duplicate = () => {};
  const trans = () => {};
  return (
    <div id="top_button">
      <input
        type="button"
        id="newboard"
        value="新規 / 枠変更"
        className="button"
      />
      <input
        type="button"
        id="rotation"
        value="回転 / 移動"
        className="button"
      />
      <input
        type="button"
        id="newsize"
        value="サイズ変更"
        className="button"
        style={{ display: "none" }}
      />
      <input type="button" id="saveimage" value="画像保存" className="button" />
      <input type="button" id="savetext" value="アドレス" className="button" />
      <a id="download_link"></a>
      <input
        type="button"
        id="duplicate"
        value="複製"
        className="button"
        onClick={() => duplicate()}
      />
      <input
        type="button"
        id="english"
        value="English"
        className="button"
        onClick={() => trans()}
      />
    </div>
  );
};

export default TopButtons;

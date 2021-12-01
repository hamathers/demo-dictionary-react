import React from "react";
import "./Definitions.css";

const Definitions = ({ meanings, word, LightTheme, category }) => {
  return (
    <div className="meanings">
      {/* audio---------------------------- */}
      {meanings[0] && word && category === "en" && (
        <audio
          style={{ backgroundColor: "#fff", borderRadius: 10 }}
          src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
          controls
        >
          Trình duyệt của bạn không hỗ trợ nghe.
        </audio>
      )}
      {/* audio---------------------------- */}

      {word === "" ? (
        <span className="subTitle">
          Bắt đầu tra từ bằng cách gõ vào ô tìm kiếm
        </span>
      ) : category === "en" ? (
        meanings.map((mean) =>
          mean.meanings.map((item) =>
            item.definitions.map((def) => (
              <div
                className="singleMean"
                style={{
                  backgroundColor: LightTheme ? "#3b5360" : "white",
                  color: LightTheme ? "white" : "black",
                }}
              >
                <b>{def.definition}</b>
                <hr style={{ backgroundColor: "black", width: "100%" }} />
                {def.example && (
                  <span>
                    <b>Example :</b> {def.example}
                  </span>
                )}
                {def.synonyms && (
                  <span>
                    <b>Synonyms :</b> {def.synonyms.map((s) => `${s}, `)}
                  </span>
                )}
              </div>
            ))
          )
        )
      ) : (
        meanings.map((mean) => (
          <div
            className="singleMean"
            style={{
              backgroundColor: LightTheme ? "#3b5360" : "white",
              color: LightTheme ? "white" : "black",
            }}
          >
            <span>
              <b>Nghĩa tiếng Anh :</b> {mean.fields.en.replaceAll(/<em>|[</em>]/g, '')}
            </span>
            <span>
              <b>Nghĩa tiếng Việt :</b> {mean.fields.vi.replaceAll(/<em>|[</em>]/g, '')}
            </span>
          </div>
        ))
      )}
    </div>
  );
};

export default Definitions;

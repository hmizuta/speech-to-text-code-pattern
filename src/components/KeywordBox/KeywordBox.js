import React from 'react';
import PropTypes from 'prop-types';


const searchKeywordInText = (text, keywordInfo) => {
  let results = [];
  let allKeywords = [];
  keywordInfo.forEach(sectionKeywords => {
    allKeywords = [...allKeywords, ...Object.keys(sectionKeywords)];
  });
  
  const textlen = text.length;
  allKeywords.map(keyword => {
    let lastIndex = 0;
    while (lastIndex < textlen) {
      const pos = text.indexOf(keyword, lastIndex);
      if (pos < 0) {
        lastIndex = textlen;
      } else {
        lastIndex = pos + keyword.length;
        const st = pos - 5 > -1 ? pos - 5 : 0;
        const ed = lastIndex + 5 < textlen ? lastIndex + 5 : textlen;
        const subtext = text.slice(st, ed);
        let oneresult = {
          'pos' : pos,
          'keyword' : keyword,
          'subtext' : subtext
        };
        results.push(oneresult);
      }
    }
  });

  return results;
}


export const KeywordBox = ({ keywordInfo, transcriptArray }) => {
  return (
    <div className="keyword-box">
      {transcriptArray.map((transcriptItem, overallIndex) => {
        const { speaker, text } = transcriptItem;
        const searchResults = searchKeywordInText(text, keywordInfo);


        return (
          <div key={`keyword-${overallIndex}`}>
            {speaker !== null && (
              <span className={`keywordbox-speaker-label--${speaker}`}>
                {`Speaker ${speaker}: `}
              </span>
            )}

            {searchResults.sort((a,b)=> {return a.pos - b.pos;})
            .map((element, elementIndex) => {
              if (!element) {
                return null;
              } else {
                return (
                  <p>
                    <span
                      key={`searchresult-${overallIndex}-${elementIndex}`}
                    >
                      Position:{`${element.pos}`}, 
                      Keyword: {`${element.keyword}`},
                      Subtext:{`${element.subtext}`}
                    </span>
                  </p>
                );
              }
            })}
          </div>
        );
      })}
    </div>
  );
};

KeywordBox.propTypes = {
  keywordInfo: PropTypes.arrayOf(PropTypes.object),
  transcriptArray: PropTypes.arrayOf(PropTypes.object),
};

KeywordBox.defaultProps = {
  keywordInfo: [],
  transcriptArray: [],
};

export default KeywordBox;

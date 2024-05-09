import './App.css';
import { useState } from 'react';
import rs from 'text-readability';

function App() {
   const [text, setText] = useState('');
   const [readingEase, setReadingEase] = useState(0);
   const [gradeLevel, setGradeLevel] = useState(0);
   const [colemanLiau, setColemanLiau] = useState(0);
   const [ari, setAri] = useState(0);
   const [daleChall, setDaleChall] = useState(0);
   const [difficultWords, setDifficultWords] = useState(0);
   const [linsearWrite, setLinsearWrite] = useState(0);
   const [gunningFog, setGunningFog] = useState(0);
   const [textStandard, setTextStandard] = useState('');

   const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setText(event.target.value);
   };

   const calculateReadability = () => {
      const easeScore = rs.fleschReadingEase(text);
      const gradeScore = rs.fleschKincaidGrade(text);
      const colemanLiauScore = rs.colemanLiauIndex(text);
      const ariScore = rs.automatedReadabilityIndex(text);
      const daleChallScore = rs.daleChallReadabilityScore(text);
      const difficultWordsCount = rs.difficultWords(text);
      const linsearWriteScore = rs.linsearWriteFormula(text);
      const gunningFogScore = rs.gunningFog(text);
      const textStandardScore = rs.textStandard(text);

      setReadingEase(easeScore);
      setGradeLevel(gradeScore);
      setColemanLiau(colemanLiauScore);
      setAri(ariScore);
      setDaleChall(daleChallScore);
      setDifficultWords(difficultWordsCount);
      setLinsearWrite(linsearWriteScore);
      setGunningFog(gunningFogScore);
      setTextStandard(textStandardScore);
   };

   return (
      <>
         <h1>Text<span>Tamer</span></h1>
         <textarea
            id="textInput"
            value={text}
            onChange={handleTextChange}
            placeholder="Type or paste your text here for analysis..."
            rows={parseInt("10")}
            cols={parseInt("50")}
            />
         <br />
         <button onClick={calculateReadability}>Calculate Results</button>
         {readingEase !== null && gradeLevel !== null && (
            <div className="results">
               <h3>Analysis</h3>
               <div className="result-grid">
               <div>
                  <strong>Text Standard:</strong> <br />
                  <em>Provides an overall assessment of the text's readability using various measures.</em>
               </div>
               <div>{textStandard}</div>
                  <div>
                     <strong>Flesch Reading Ease:</strong> <br />
                     <em>Measures how easy the text is to read. Higher scores mean easier reading. Scores range from 0 to 100.</em>
                  </div>
                  <div>{readingEase}</div>
                  <div>
                     <strong>Flesch-Kincaid Grade Level:</strong> <br />
                     <em>Indicates the U.S. school grade level needed to understand the text.</em>
                  </div>
                  <div>{gradeLevel}</div>
                  <div>
                     <strong>Coleman-Liau Index:</strong> <br />
                     <em>Estimates the U.S. school grade level based on the number of letters and sentences.</em>
                  </div>
                  <div>{colemanLiau}</div>
                  <div>
                     <strong>Automated Readability Index (ARI):</strong> <br />
                     <em>Determines the U.S. grade level required to comprehend the text, based on characters per word.</em>
                  </div>
                  <div>{ari}</div>
                  <div>
                     <strong>Dale-Chall Readability Score:</strong> <br />
                     <em>Considers familiar words to determine the grade level needed for comprehension.</em>
                  </div>
                  <div>{daleChall}</div>
                  <div>
                     <strong>Difficult Words:</strong> <br />
                     <em>Number of words considered difficult to understand.</em>
                  </div>
                  <div>{difficultWords}</div>
                  <div>
                     <strong>Linsear Write Formula:</strong> <br />
                     <em>Computes the U.S. grade level needed for understanding based on sentence length and complex words.</em>
                  </div>
                  <div>{linsearWrite}</div>
                  <div>
                     <strong>Gunning Fog Index:</strong> <br />
                     <em>Calculates the years of formal education needed to understand the text.</em>
                  </div>
                  <div>{gunningFog}</div>
               </div>
            </div>
         )}
      </>
   );
}

export default App;
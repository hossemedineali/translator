


import { useEffect, useState } from "react";
import translate from "translate";
//import { Locale } from "free-translate/dist/types/locales";



const Translator= ({
  word ,
  fromLanguage,
  toLanguage,
}) => {
  const [translatedWord, setTranslatedWord] = useState("");

  console.log("translater run")
  useEffect(() => {
    setTranslatedWord('')
    if(word=='there is no word now xd xd xd' ){
      return
    }
    const translateWord = async () => {
      const translated = await translate(word, { from: fromLanguage, to: toLanguage, engine: 'google' });
      setTranslatedWord(translated);
    };

    translateWord();
  }, [word,fromLanguage,toLanguage]);

  return (
    <div>
      {word.length>0&&<p className="text-slate-400 text-2xl font-semibold">{translatedWord}</p>}
    </div>
  );
};

export default Translator;

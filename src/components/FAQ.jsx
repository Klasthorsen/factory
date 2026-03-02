import { useState } from 'react';
import './FAQ.css';

const faqData = [
  {
    question: 'Behöver jag någon tidigare erfarenhet för att gå programmet?',
    answer: 'Nej, det förutsätts inte utan utbildningen börjar med grundläggande kunskaper. Däremot är tidigare erfarenheter fördelaktigt för att genomföra utbildningen.'
  },
  {
    question: 'Hur fungerar CSN och studiestöd?',
    answer: 'Våra utbildningar är CSN-berättigade vilket innebär att du kan ansöka om studiemedel. Du ansöker direkt via CSN:s hemsida när du blivit antagen till utbildningen.'
  },
  {
    question: 'Hur fungerar högskolebehörigheten?',
    answer: 'Genom att slutföra våra YH-utbildningar får du en kvalificerad yrkesexamen. Vissa utbildningar kan även ge behörighet till högskolestudier.'
  },
  {
    question: 'Kan jag bli lärling?',
    answer: 'Ja, många av våra utbildningar innehåller LIA-perioder (Lärande i Arbete) där du praktiserar på riktiga arbetsplatser.'
  },
  {
    question: 'Hur ansöker jag?',
    answer: 'Du ansöker enkelt via vår hemsida. Välj den utbildning du är intresserad av och klicka på "Ansök nu". Du behöver bifoga CV och personligt brev.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="faq-section">
      <div className="faq-container">
        <h2>Vanliga frågor</h2>
        <div className="faq-list">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className={`faq-item ${openIndex === index ? 'open' : ''}`}
            >
              <button 
                className="faq-question"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <span>{item.question}</span>
                <span className="faq-icon">{openIndex === index ? '×' : '+'}</span>
              </button>
              {openIndex === index && (
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

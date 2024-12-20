import { useState, useEffect } from "react";
import { Header } from "../../../widgets/header";
import { Navigation } from "../../../features/navigation";

export const InfoPage = () => {
    const infoMessage = [
      "Я в детстве так мечтал стать космонавтом, но в результате стал — Космосом"
    ];
  
    const [displayedMessages, setDisplayedMessages] = useState<string[]>([]);
    const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
    const [currentCharIndex, setCurrentCharIndex] = useState(0);
  
    useEffect(() => {
      if (currentMessageIndex >= infoMessage.length) return; // Все сообщения отображены
  
      const interval = setInterval(() => {
        const currentMessage = infoMessage[currentMessageIndex];
        const nextCharIndex = currentCharIndex + 1;
  
        if (nextCharIndex <= currentMessage.length) {
          setCurrentCharIndex(nextCharIndex);
          setDisplayedMessages((prevMessages) => {
            const updatedMessages = [...prevMessages];
            updatedMessages[currentMessageIndex] = 
              (updatedMessages[currentMessageIndex] || "") + currentMessage[nextCharIndex - 1];
            return updatedMessages;
          });
        } else {
          clearInterval(interval);
          setTimeout(() => {
            if (currentMessageIndex + 1 < infoMessage.length) {
              setCurrentMessageIndex(currentMessageIndex + 1);
              setCurrentCharIndex(0);
            }
          }, 2000); // Пауза перед следующим сообщением
        }
      }, 100); // Интервал в 100 миллисекунд для добавления символа
  
      return () => clearInterval(interval);
    }, [currentMessageIndex, currentCharIndex, infoMessage]);
  
    return (
      <div className="flex flex-col items-center text-center justify-between h-svh">
        <Header />
        <ul className="flex items-center flex-col justify-between w-[90%]">
          {displayedMessages.map((message, index) => (
            <li className="text-white text-[25px]" key={index}>
              {message}
            </li>
          ))}
        </ul>
        <Navigation />
      </div>
    );
  };

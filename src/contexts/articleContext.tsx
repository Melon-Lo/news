import { useState, createContext, ReactNode } from "react";

interface ArticleContextProviderProps {
  children: ReactNode;
}

const defaultArticleContext = {
};

const ArticleContext = createContext(defaultArticleContext);

export default function ArticleContextProvider({ children }: ArticleContextProviderProps) {
  const [selectedArticle, setSelectedArticle] = useState({});

  return (
    <ArticleContext.Provider value={{ selectedArticle, setSelectedArticle }}>
      {children}
    </ArticleContext.Provider>
  );
}

export { ArticleContext }
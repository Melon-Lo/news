import { useState, createContext, ReactNode } from "react";

interface ArticleContextProviderProps {
  children: ReactNode;
}

interface Article {
  author: string;
  title: string;
  description: string;
  content: string;
  publishedAt: string;
}

interface ArticleContextType {
  selectedArticle: Article | null;
  setSelectedArticle: (article: Article) => void;
}

const defaultArticleContext = {
  selectedArticle: null,
  setSelectedArticle: () => {},
};

const ArticleContext = createContext<ArticleContextType>(defaultArticleContext);

export default function ArticleContextProvider({ children }: ArticleContextProviderProps) {
  const [selectedArticle, setSelectedArticle] = useState({
    author: '',
    title: '',
    description: '',
    content: '',
    publishedAt: '',
  });

  return (
    <ArticleContext.Provider value={{ selectedArticle, setSelectedArticle }}>
      {children}
    </ArticleContext.Provider>
  );
}

export { ArticleContext }
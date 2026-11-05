import { createContext, useContext } from 'react';
import defaultContent from '../content.json';

const ContentContext = createContext(defaultContent);

export function ContentProvider({ content, children }) {
  return <ContentContext.Provider value={content}>{children}</ContentContext.Provider>;
}

export function useContent() {
  return useContext(ContentContext);
}

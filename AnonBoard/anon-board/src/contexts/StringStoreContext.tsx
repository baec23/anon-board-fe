import { createContext } from 'react';
import { StringStore } from '../services/strings/StringStore';
import { StringStore_en } from '../services/strings/StringStore_en';

export const StringStoreContext = createContext<StringStore>(StringStore_en);

import { isNil } from 'lodash';
import { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

export interface SpaContainerProps {
  rootId: string;
  children: React.ReactNode;
}

let isWindow = false;

const InnerApp = (props) => {
  const { children } = props;
  return <BrowserRouter>{children}</BrowserRouter>;
};

export const SpaContainer: React.FC<SpaContainerProps> = (props) => {
  const { rootId, children } = props;

  try {
    isWindow = !isNil(window);
  } catch {}

  useEffect(() => {
    if (!isWindow) {
      return;
    }

    const rootEle = document?.getElementById?.(rootId);

    console.log('rootEle', rootEle);
    if (rootEle) {
      const root = ReactDOM.createRoot(rootEle);
      root.render(<InnerApp>{children}</InnerApp>);
    }
  }, [rootId]);

  if (!isWindow) {
    return null;
  }

  return <div id={rootId} />;
};

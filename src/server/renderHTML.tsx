import * as React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import HTML from './HTML';

function renderHTML(): string {
  return renderToStaticMarkup(<HTML />);
}

export default renderHTML;
import React from 'react';
import NoResultComponent from './NoResultComponent';
import YesResultComponent from './YesResultComponent';


export default function conditionalRenderOnResults({searchResults}) {
  if (searchResults.hasResults()) {
    return (searchResults.results.map(
      result => <YesResultComponent key={result.id}
                                    result={result}/>
    ));
  }

  return (
    <NoResultComponent/>
  );
}

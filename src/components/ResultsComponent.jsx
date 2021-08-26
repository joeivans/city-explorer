import React from 'react';
import NoResultComponent from './NoResultComponent';
import YesResultComponent from './YesResultComponent';


export default function ResultsComponent(props) {
  return conditionalRenderOnResults(props);
}

function conditionalRenderOnResults(props) {
  if (props.searchResults.hasResults())
    return (props.searchResults.results.map(
      result => <YesResultComponent key={result.id}
                                    result={result}/>
    ));

  return (
    <NoResultComponent/>
  );
}

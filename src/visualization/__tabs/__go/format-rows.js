import formatTerm from './format-term';
import link from './go_link';

const FormatRows = results => ({
  noResults: results.noResults,
  terms: results.terms.map((term) => {
    const termFormat = formatTerm(term.depth, term.term);
    return ({
      genes: {
        className: 'table_cell-overflow',
        content: term.genes,
        style: {
          textAlign: 'left',
        },
      },
      q: {
        content: term.q,
      },
      qt: {
        content: term.qt,
      },
      pValue: {
        content: term.pValue,
      },
      source: {
        content: term.source,
      },
      t: {
        content: term.t,
      },
      term: {
        className: 'table_cell-overflow',
        content: termFormat.content,
        style: termFormat.style,
      },
      termID: {
        className: 'table_cell-overflow',
        content: link(term.termID, term.source),
      },
    });
  }),
  warnings: results.warning,
});

export default FormatRows;

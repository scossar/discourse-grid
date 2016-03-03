(function () {
  Discourse.Markdown.whiteListTag('div', 'class', 'grid-row');
  Discourse.Markdown.whiteListTag('div', 'class', /^\s*(full|centered)\s*(centered|full)?\s*$/);
  Discourse.Markdown.whiteListTag('div', 'class', /^\s*(half|centered)\s*(centered|half)?\s*$/);
  Discourse.Markdown.whiteListTag('div', 'class', /^\s*(one-third|centered)\s*(centered|one-third)?\s*$/);
  Discourse.Markdown.whiteListTag('div', 'class', /^\s*(two-thirds|centered)\s*(centered|two-thirds)?\s*$/);
  Discourse.Markdown.whiteListTag('div', 'class', /^\s*(one-quarter|centered)\s*(centered|one-quarter)?\s*$/);
  Discourse.Markdown.whiteListTag('div', 'class', /^\s*(three-quarters|centered)\s*(three-quarters|half)?\s*$/);

  Discourse.Markdown.whiteListTag('figure', 'class', 'grid-row');
  Discourse.Markdown.whiteListTag('figure', 'class', /^\s*(full|centered)\s*(centered|full)?\s*$/);
  Discourse.Markdown.whiteListTag('figure', 'class', /^\s*(half|centered)\s*(centered|half)?\s*$/);
  Discourse.Markdown.whiteListTag('figure', 'class', /^\s*(one-third|centered)\s*(centered|one-third)?\s*$/);
  Discourse.Markdown.whiteListTag('figure', 'class', /^\s*(two-thirds|centered)\s*(centered|two-thirds)?\s*$/);
  Discourse.Markdown.whiteListTag('figure', 'class', /^\s*(one-quarter|centered)\s*(centered|one-quarter)?\s*$/);
  Discourse.Markdown.whiteListTag('figure', 'class', /^\s*(three-quarters|centered)\s*(three-quarters|half)?\s*$/);
})();
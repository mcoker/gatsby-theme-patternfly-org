const handlebars = require('handlebars');
const test = `
{{#> about-modal-box about-modal-box--attribute='aria-labelledby="about-modal-title"'}}
  {{#> about-modal-box-brand}}
    {{#> about-modal-box-brand-image about-modal-box-brand-image--attribute='src="/assets/images/pf_mini_logo_white.svg" alt="PatternFly brand logo"'}}
    {{/about-modal-box-brand-image}}
  {{/about-modal-box-brand}}
  {{#> about-modal-box-close}}
    {{#> button button--attribute='aria-label="Close dialog"' button--modifier="pf-m-plain"}}
      <i class="fas fa-times" aria-hidden="true"></i>
    {{/button}}
  {{/about-modal-box-close}}
  {{#> about-modal-box-header}}
    {{#> title titleType="h1" title--modifier="pf-m-4xl" title--attribute='id="about-modal-title"'}}
      Product name
    {{/title}}
  {{/about-modal-box-header}}
  {{#> about-modal-box-hero}}
  {{/about-modal-box-hero}}
  {{#> about-modal-box-content}}
    {{#> about-modal-box-body}}
      content
    {{/about-modal-box-body}}
    {{#> about-modal-box-strapline}}
      Trademark and copyright information here
    {{/about-modal-box-strapline}}
  {{/about-modal-box-content}}
{{/about-modal-box}}
`

handlebars.registerPartial('about-modal-box', () => `<div class="pf-c-about-modal-box{{#if about-modal-box--modifier}} {{about-modal-box--modifier}}{{/if}}"
role="dialog" 
aria-modal="true"
{{#if about-modal-box--attribute}}
  {{{about-modal-box--attribute}}}
{{/if}}>
{{> @partial-block}}
</div>`)
const res = handlebars.compile(test)();
console.log(res)
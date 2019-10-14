import React from 'react';
import AutoLinkHeader from '../components/autoLinkHeader';
import Example from '../components/example';
import './commonComponents.css';

// These components replace how all elements of markdown are rendered
// TODO: more or less copy all of https://github.com/patternfly/patternfly-next/blob/master/src/patternfly/components/Content/content.scss
export const commonComponents = {
  inlineCode: Example,
  pre: React.Fragment,
  p: (props) => <p className="pf-c-content" {...props} />,
  a: (props) => <a className="pf-c-content" {...props} />,
  abbr: (props) => <abbr className="pf-c-content" {...props} />,
  address: (props) => <address className="pf-c-content" {...props} />,
  area: (props) => <area className="pf-c-content" {...props} />,
  article: (props) => <article className="pf-c-content" {...props} />,
  aside: (props) => <aside className="pf-c-content" {...props} />,
  audio: (props) => <audio className="pf-c-content" {...props} />,
  b: (props) => <b className="pf-c-content" {...props} />,
  base: (props) => <base className="pf-c-content" {...props} />,
  bdi: (props) => <bdi className="pf-c-content" {...props} />,
  bdo: (props) => <bdo className="pf-c-content" {...props} />,
  blockquote: (props) => <blockquote className="pf-c-content" {...props} />,
  body: (props) => <body className="pf-c-content" {...props} />,
  br: (props) => <br className="pf-c-content" {...props} />,
  button: (props) => <button className="pf-c-content" {...props} />,
  canvas: (props) => <canvas className="pf-c-content" {...props} />,
  caption: (props) => <caption className="pf-c-content" {...props} />,
  cite: (props) => <cite className="pf-c-content" {...props} />,
  col: (props) => <col className="pf-c-content" {...props} />,
  colgroup: (props) => <colgroup className="pf-c-content" {...props} />,
  data: (props) => <data className="pf-c-content" {...props} />,
  datalist: (props) => <datalist className="pf-c-content" {...props} />,
  dd: (props) => <dd className="pf-c-content" {...props} />,
  del: (props) => <del className="pf-c-content" {...props} />,
  details: (props) => <details className="pf-c-content" {...props} />,
  dfn: (props) => <dfn className="pf-c-content" {...props} />,
  dialog: (props) => <dialog className="pf-c-content" {...props} />,
  div: (props) => <div className="pf-c-content" {...props} />,
  dl: (props) => <dl className="pf-c-content" {...props} />,
  dt: (props) => <dt className="pf-c-content" {...props} />,
  em: (props) => <em className="pf-c-content" {...props} />,
  embed: (props) => <embed className="pf-c-content" {...props} />,
  fieldset: (props) => <fieldset className="pf-c-content" {...props} />,
  figcaption: (props) => <figcaption className="pf-c-content" {...props} />,
  figure: (props) => <figure className="pf-c-content" {...props} />,
  footer: (props) => <footer className="pf-c-content" {...props} />,
  form: (props) => <form className="pf-c-content" {...props} />,
  head: (props) => <head className="pf-c-content" {...props} />,
  header: (props) => <header className="pf-c-content" {...props} />,
  hr: (props) => <hr className="pf-c-content" {...props} />,
  html: (props) => <html className="pf-c-content" {...props} />,
  i: (props) => <i className="pf-c-content" {...props} />,
  iframe: (props) => <iframe className="pf-c-content" {...props} />,
  img: (props) => <img className="pf-c-content" {...props} />,
  input: (props) => <input className="pf-c-content" {...props} />,
  ins: (props) => <ins className="pf-c-content" {...props} />,
  kbd: (props) => <kbd className="pf-c-content" {...props} />,
  label: (props) => <label className="pf-c-content" {...props} />,
  legend: (props) => <legend className="pf-c-content" {...props} />,
  li: (props) => <li className="pf-c-content" {...props} />,
  link: (props) => <link className="pf-c-content" {...props} />,
  main: (props) => <main className="pf-c-content" {...props} />,
  map: (props) => <map className="pf-c-content" {...props} />,
  mark: (props) => <mark className="pf-c-content" {...props} />,
  menu: (props) => <menu className="pf-c-content" {...props} />,
  menuitem: (props) => <menuitem className="pf-c-content" {...props} />,
  meta: (props) => <meta className="pf-c-content" {...props} />,
  meter: (props) => <meter className="pf-c-content" {...props} />,
  nav: (props) => <nav className="pf-c-content" {...props} />,
  noscript: (props) => <noscript className="pf-c-content" {...props} />,
  object: (props) => <object className="pf-c-content" {...props} />,
  ol: (props) => <ol className="pf-c-content" {...props} />,
  optgroup: (props) => <optgroup className="pf-c-content" {...props} />,
  option: (props) => <option className="pf-c-content" {...props} />,
  output: (props) => <output className="pf-c-content" {...props} />,
  param: (props) => <param className="pf-c-content" {...props} />,
  picture: (props) => <picture className="pf-c-content" {...props} />,
  progress: (props) => <progress className="pf-c-content" {...props} />,
  q: (props) => <q className="pf-c-content" {...props} />,
  rb: (props) => <rb className="pf-c-content" {...props} />,
  rp: (props) => <rp className="pf-c-content" {...props} />,
  rt: (props) => <rt className="pf-c-content" {...props} />,
  rtc: (props) => <rtc className="pf-c-content" {...props} />,
  ruby: (props) => <ruby className="pf-c-content" {...props} />,
  s: (props) => <s className="pf-c-content" {...props} />,
  samp: (props) => <samp className="pf-c-content" {...props} />,
  script: (props) => <script className="pf-c-content" {...props} />,
  section: (props) => <section className="pf-c-content" {...props} />,
  select: (props) => <select className="pf-c-content" {...props} />,
  slot: (props) => <slot className="pf-c-content" {...props} />,
  small: (props) => <small className="pf-c-content" {...props} />,
  source: (props) => <source className="pf-c-content" {...props} />,
  span: (props) => <span className="pf-c-content" {...props} />,
  strong: (props) => <strong className="pf-c-content" {...props} />,
  style: (props) => <style className="pf-c-content" {...props} />,
  sub: (props) => <sub className="pf-c-content" {...props} />,
  summary: (props) => <summary className="pf-c-content" {...props} />,
  sup: (props) => <sup className="pf-c-content" {...props} />,
  svg: (props) => <svg className="pf-c-content" {...props} />,
  table: (props) => <table className="pf-c-content" {...props} />,
  tbody: (props) => <tbody className="pf-c-content" {...props} />,
  td: (props) => <td className="pf-c-content" {...props} />,
  template: (props) => <template className="pf-c-content" {...props} />,
  textarea: (props) => <textarea className="pf-c-content" {...props} />,
  tfoot: (props) => <tfoot className="pf-c-content" {...props} />,
  th: (props) => <th className="pf-c-content" {...props} />,
  thead: (props) => <thead className="pf-c-content" {...props} />,
  time: (props) => <time className="pf-c-content" {...props} />,
  title: (props) => <title className="pf-c-content" {...props} />,
  tr: (props) => <tr className="pf-c-content" {...props} />,
  track: (props) => <track className="pf-c-content" {...props} />,
  u: (props) => <u className="pf-c-content" {...props} />,
  ul: (props) => <ul className="pf-c-content" {...props} />,
  var: (props) => <var className="pf-c-content" {...props} />,
  video: (props) => <video className="pf-c-content" {...props} />,
  wbr: (props) => <wbr className="pf-c-content" {...props} />,
};
for (let i = 1; i <= 6; i++) {
  commonComponents[`h${i}`] = props => <AutoLinkHeader size={`h${i}`} className="ws-title" {...props} />;
}

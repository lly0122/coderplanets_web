/*
 * a theme inspired by Green && unbuntu
 */
import { lighten, darken } from 'polished'

const primaryColor = '#5da579'

const bannerBg = '#bccebb' // '#AEC4AD'
const contentBg = '#D3DFD1'
const contentBoxBg = '#e0e8db' // '#DBE3D6'
const fontColor = primaryColor
const sidebarBg = '#3B4F43'
const markdownFont = '#83a085'

const descText = '#83a085'
const bannerTitle = '#708e7a'
const primaryMate = '#b57a5b'

const Green = {
  logoText: bannerTitle,
  cover: '#B4C9B2',
  coverIndex: '#9e96c3',
  htmlBg: contentBoxBg,
  loading: {
    basic: bannerBg,
    animate: lighten(0.03, bannerBg),
    // basic: '#113B4A',
    // animate: '#02495a',
  },
  error: {
    title: primaryColor,
    desc: darken(0.1, primaryColor),
    bg: lighten(0.02, contentBoxBg),
  },

  font: fontColor,
  link: '#269A95',
  main: '#7DC0C5',
  bodyBg: contentBg,
  selectionBg: '#839496',
  avatarOpacity: 0.8,
  header: {
    fg: primaryColor,
    bg: bannerBg,
    spliter: darken(0.04, bannerBg),
    fixed: contentBg,
    tabActive: bannerTitle,
    tabOthers: descText,
  },
  banner: {
    title: bannerTitle,
    bg: bannerBg,
    desc: descText,
    spliter: bannerBg,
    number: bannerTitle,
    active: primaryMate,
    numberDesc: descText,
    numberDivider: '#aab9ab',
    numberHoverBg: lighten(0.03, bannerBg),
  },
  thread: {
    bg: contentBoxBg,
    filterResultHint: descText,
    articleTitle: '#62867A',
    articleHover: lighten(0.03, contentBoxBg),
    articleStrip: contentBoxBg,
    articleDigest: descText,
    articleTag: '#74a0ab',
    articleLink: descText,
    commentsUserBorder: contentBoxBg,
    extraInfo: primaryMate,
  },
  content: {
    bg: contentBoxBg,
    cardBg: lighten(0.05, contentBoxBg),
    cardBorder: lighten(0.08, contentBoxBg),
    cardBorderHover: lighten(0.1, contentBoxBg),
  },
  footer: {
    text: lighten(0.1, descText),
    hover: descText,
    label: descText,
  },
  sidebar: {
    bg: sidebarBg,
    menuHover: lighten(0.1, sidebarBg),
    pinActive: contentBg,
    menuLink: '#A6BBAF',
    borderColor: lighten(0.05, sidebarBg),
  },
  preview: {
    title: bannerTitle,
    desc: lighten(0.05, descText),
    font: descText,
    bg: contentBg,
    shadow: '-5px 0px 14px 0px rgba(41, 18, 18, 0.19)',
    closerShadow: '-5px 0px 14px 0px rgba(41, 18, 18, 0.19)',
    markdownHelperBg: lighten(0.04, contentBg),
    accountBg: contentBoxBg,
    articleBg: contentBoxBg,
    helper: '#b0bfa8',
    helperHover: descText,
    topLine: primaryColor,
    icon: '#845145',
    divider: '#ced8c6',
  },
  article: {
    link: primaryMate,
    linkHover: lighten(0.05, primaryMate),
    reactionTitle: descText,
    reactionHoverBg: lighten(0.04, contentBg),
  },
  comment: {
    icon: bannerTitle,
    didIcon: primaryMate,
    title: bannerTitle,
    username: bannerTitle,
    number: primaryMate,
    floor: primaryMate,
    reply: bannerTitle,
    replyBg: '#e8efe5',
    placeholder: lighten(0.05, descText),
    filter: descText,
    filterActive: bannerTitle,
    action: descText,
    // mention text displayed in article
    mentionText: bannerTitle,
    mentionTextBg: '#f7f0dc',
    // mention popover background
    mentionBg: contentBoxBg,
    mentionBorder: bannerTitle,
    mentionActiveBg: lighten(0.01, contentBoxBg),
    mentionShadow: '0px 2px 10px 1px rgba(47, 46, 46, 0.3)',
  },
  editor: {
    title: bannerTitle,
    content: descText,
    placeholder: '#a6bba7',
    headerBg: contentBoxBg,
    contentBg: contentBoxBg,
    border: contentBoxBg,
    borderAcitve: primaryColor,
    borderNormal: darken(0.05, contentBoxBg),
    footer: descText,
    footerHover: darken(0.05, descText),
  },
  pagination: {
    itemBg: contentBg,
    itemBorderColor: '#C3D4C3',
    disableText: descText,
    text: primaryColor,
    inactiveNum: primaryColor,
  },
  heatmap: {
    activityLow: '#007D7C',
    activityHight: '#26A9A0',
    empty: '#d3dccc',
    borderHover: primaryColor,
    monthLabel: descText,
    scale_1: '#dbe290',
    scale_2: '#99c06f',
    scale_3: '#609d4c',
    scale_4: '#61793e',
    scale_5: '#37642c',
  },
  markdown: {
    title: darken(0.05, '#DBE0E1'),
    fg: markdownFont,
    titleBottom: '1px solid #154452',
    hrColor: '#154452',
    blockquoteBorder: '0.25em solid #34535C',
    blockquoteFg: darken(0.09, markdownFont),
    strongFg: lighten(0.2, markdownFont),
    strongBg: '#34535C',
    link: '#2382C4',
    tableBg: lighten(0.01, contentBoxBg),
    tableBg2n: lighten(0.05, contentBoxBg),
    tableborder: `1px solid ${lighten(0.07, contentBoxBg)}`,
    taskDone: '#528416',
    taskPeding: lighten(0.1, contentBoxBg),
  },
  code: {
    bg: lighten(0.03, contentBoxBg),
  },
  shell: {
    link: lighten(0.2, contentBg),
    searchInput: lighten(0.1, contentBg),
    searchIcon: lighten(0.1, contentBg),
    barBg: darken(0.01, contentBg),
    border: lighten(0.05, contentBg),
    title: lighten(0.4, contentBg),
    desc: lighten(0.2, contentBg),
    activeBg: lighten(0.05, contentBg),
  },
  button: {
    primary: primaryColor,
    fg: lighten(0.4, primaryColor),
    hoverBg: lighten(0.1, primaryColor),
    activeBg: darken(0.01, primaryColor),
    clicked: primaryColor,
  },
  navigator: {
    activeBottom: primaryColor,
    borderRight: darken(0.05, bannerBg),
    hoverBg: lighten(0.05, bannerBg),
  },
  popover: {
    bg: contentBoxBg,
    borderColor: primaryColor,
    boxShadoe: '0 1px 4px rgba(0, 0, 0, 0.15)',
  },
  tags: {
    dotOpacity: 0.7,
    text: '#74a0ab',
  },
  tabs: {
    headerActive: '#628672',
    header: '#83A086',
    contentBg: lighten(0.03, contentBoxBg),
    headerBg: lighten(0.02, contentBoxBg),
    headerActiveTop: primaryColor,
    border: darken(0.05, contentBoxBg),
  },
  modal: {
    bg: bannerBg,
    border: primaryColor,
    innerSelectBg: '#333040',
  },
  form: {
    inputBg: lighten(0.03, contentBoxBg),
    text: descText,
    label: bannerTitle,
    border: descText,
  },
  a: {
    hover: primaryColor,
    active: darken(0.1, primaryColor),
  },
}

export default Green
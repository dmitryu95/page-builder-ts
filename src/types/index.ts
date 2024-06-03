export interface TextImgContent {
  title: string;
  backgroundColorTitle: string;
  text: string;
  backgroundColorText: string;
  img: string;
  backgroundColorImg: string;
  reverse: boolean;
}

export interface TextContent {
  title: string;
  titleTextAlign: string;
  titleFontSize: string;
  titleFontStyle: string;
  titleColor: string;
  titleBackgroundColor: string;
  text: string;
  textAreaTextAlign: string;
  textFontSize: string;
  textFontStyle: string;
  textColor: string;
  textBackgroundColor: string;
}

export interface ImgContent {
  img: string;
  backgroundColor: string;
}

export interface Block {
  idBlock: string | number | undefined,
  type: string | undefined,
  content: any
}

export interface Page {
  idPage: string | number,
  namePage: string,
  blocks: (Block & { content: TextImgContent | TextContent | ImgContent})[]
}

export interface State {
  pages: Page[]
}